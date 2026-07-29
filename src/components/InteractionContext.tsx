// InteractionContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ComponentState {
  isClicked: boolean;
  isHovered: boolean;
}

interface InteractionRegistry {
  [componentId: string]: ComponentState;
}

interface InteractionContextType {
  registry: InteractionRegistry;
  trackEvent: (componentId: string, eventType: keyof ComponentState, value: boolean) => void;
}

const InteractionContext = createContext<InteractionContextType | undefined>(undefined);

export function InteractionProvider({ children }: { children: ReactNode }) {
  const [registry, setRegistry] = useState<InteractionRegistry>({});

  const trackEvent = (componentId: string, eventType: keyof ComponentState, value: boolean) => {
    setRegistry((prev) => {
      const currentState = prev[componentId] || { isClicked: false, isHovered: false };
      return {
        ...prev,
        [componentId]: {
          ...currentState,
          [eventType]: value,
        },
      };
    });
  };

  return (
    <InteractionContext.Provider value={{ registry, trackEvent }}>
      {children}
    </InteractionContext.Provider>
  );
}

export function useTracker(componentId: string) {
  const context = useContext(InteractionContext);
  if (!context) throw new Error('useTracker must be used within an InteractionProvider');

  const { registry, trackEvent } = context;
  const state = registry[componentId] || { isClicked: false, isHovered: false };

  const getTrackingProps = () => ({
    onClick: () => trackEvent(componentId, 'isClicked', !state.isClicked),
    onMouseEnter: () => trackEvent(componentId, 'isHovered', true),
    onMouseLeave: () => trackEvent(componentId, 'isHovered', false),
  });

  return {
    isClicked: state.isClicked,
    isHovered: state.isHovered,
    trackingProps: getTrackingProps(),
  };
}