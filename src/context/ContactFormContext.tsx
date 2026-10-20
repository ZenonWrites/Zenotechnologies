import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import ContactDrawer from "../components/ContactDrawer";

interface ContactFormContextValue {
  isOpen: boolean;
  openContactForm: () => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextValue | null>(null);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = useCallback(() => setIsOpen(true), []);
  const closeContactForm = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openContactForm, closeContactForm }),
    [isOpen, openContactForm, closeContactForm]
  );

  return (
    <ContactFormContext.Provider value={value}>
      {children}
      {/* Rendered once here, so every page and button shares the same drawer */}
      <ContactDrawer isOpen={isOpen} onClose={closeContactForm} />
    </ContactFormContext.Provider>
  );
}

export function useContactForm(): ContactFormContextValue {
  const ctx = useContext(ContactFormContext);
  if (!ctx) {
    throw new Error("useContactForm must be used inside <ContactFormProvider>");
  }
  return ctx;
}
