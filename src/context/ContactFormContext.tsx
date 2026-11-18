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
  /** Optionally pass a division id (e.g. "interiors") to preselect it in the form. */
  openContactForm: (divisionId?: unknown) => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextValue | null>(null);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [division, setDivision] = useState("");

  const openContactForm = useCallback((divisionId?: unknown) => {
    // onClick={openContactForm} passes a click event; only accept strings.
    setDivision(typeof divisionId === "string" ? divisionId : "");
    setIsOpen(true);
  }, []);
  const closeContactForm = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openContactForm, closeContactForm }),
    [isOpen, openContactForm, closeContactForm]
  );

  return (
    <ContactFormContext.Provider value={value}>
      {children}
      {/* Rendered once here, so every page and button shares the same drawer */}
      <ContactDrawer isOpen={isOpen} onClose={closeContactForm} defaultDivision={division} />
    </ContactFormContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContactForm(): ContactFormContextValue {
  const ctx = useContext(ContactFormContext);
  if (!ctx) {
    throw new Error("useContactForm must be used inside <ContactFormProvider>");
  }
  return ctx;
}
