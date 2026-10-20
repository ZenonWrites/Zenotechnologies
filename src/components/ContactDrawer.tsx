import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { sendContact, type ContactPayload } from "../lib/sendContact";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY_FORM: ContactPayload = {
  name: "",
  phone: "",
  email: "",
  message: "",
  botcheck: "",
};

const FIELDS = [
  { name: "name", label: "(Name)", placeholder: "Sirius Black", type: "text", autoComplete: "name", maxLength: 100, required: false },
  { name: "phone", label: "(Phone)*", placeholder: "+1 312 340 0323", type: "tel", autoComplete: "tel", maxLength: 30, required: true },
  { name: "email", label: "(Email)", placeholder: "siriusblack@mail.com", type: "email", autoComplete: "email", maxLength: 200, required: false },
] as const;

// The underline thickens on focus via box-shadow, so nothing shifts by a pixel.
const fieldClasses =
  "mt-1 w-full border-0 border-b border-black bg-transparent pb-3 text-3xl uppercase tracking-tighter text-black outline-none " +
  "placeholder:text-neutral-500 focus:shadow-[0_1px_0_0_#000] sm:text-4xl lg:text-5xl";

// Same left offset as the reference: the form sits inset from the panel edge on desktop.
const contentPadding = "px-5 sm:px-10 md:pl-[17%] md:pr-10";

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const reduceMotion = useReducedMotion();
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<ContactPayload>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // While open: Escape closes, the page behind stops scrolling, first field gets focus.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    // Compensate for the vanishing scrollbar so the page doesn't jump sideways.
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 350);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, onClose]);

  // After the drawer has slid away, return to a fresh form state.
  // (Half-typed text is kept if someone closes by accident.)
  useEffect(() => {
    if (isOpen) return;
    const t = window.setTimeout(() => {
      setStatus("idle");
      setError("");
    }, 500);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    try {
      await sendContact(form);
      setForm(EMPTY_FORM);
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Your message wasn't sent. Please try again.");
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";
  const duration = reduceMotion ? 0 : 0.45;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div key="contact-drawer" className="fixed inset-0 z-[100]">
          {/* Backdrop — the page stays visible, blurred, on the uncovered side */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            className="absolute right-0 top-0 h-full w-full overflow-y-auto overscroll-contain bg-white text-black md:w-[60%]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between px-5 pt-6 sm:px-10 sm:pt-8">
              <h2
                id="contact-title"
                className="text-lg font-medium uppercase leading-tight sm:text-2xl"
              >
                Start simple –
                <br />
                just write to us
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-2 text-base font-medium uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-lg"
              >
                Close <X size={18} />
              </button>
            </div>

            {status === "success" ? (
              <div role="status" className={`${contentPadding} mt-16 pb-12 sm:mt-24`}>
                <p className="text-4xl uppercase tracking-tighter sm:text-5xl lg:text-6xl">
                  Message sent
                </p>
                <p className="mt-5 max-w-md text-lg text-neutral-600">
                  We'll reach out on the phone number you left, usually within one
                  working day.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-10 rounded-full bg-black px-8 py-4 text-lg font-semibold uppercase text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`${contentPadding} relative mt-10 pb-12 md:mt-12`}
              >
                <div className="space-y-8 sm:space-y-10">
                  {FIELDS.map((field, i) => (
                    <div key={field.name}>
                      <label
                        htmlFor={`cf-${field.name}`}
                        className="block text-sm text-neutral-600 sm:text-base"
                      >
                        {field.label}
                      </label>
                      <input
                        ref={i === 0 ? firstFieldRef : undefined}
                        id={`cf-${field.name}`}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        required={field.required}
                        value={form[field.name]}
                        onChange={handleChange}
                        className={fieldClasses}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="cf-message"
                      className="block text-sm text-neutral-600 sm:text-base"
                    >
                      (Your Message)
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      rows={3}
                      maxLength={2000}
                      placeholder="A brief about your project..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${fieldClasses} resize-none`}
                    />
                  </div>
                </div>

                {/* Honeypot — invisible to people, tempting to bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Leave this empty
                    <input
                      type="text"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.botcheck}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="group mt-10 flex w-max items-center sm:mt-12">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-black px-7 py-4 text-lg font-semibold uppercase text-white transition-colors group-hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black disabled:cursor-wait disabled:opacity-60 sm:px-9 sm:py-5 sm:text-2xl lg:px-11 lg:py-6 lg:text-3xl"
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                  </button>
                  {/* Decorative twin of the button — clicking the circle submits too */}
                  <button
                    type="submit"
                    tabIndex={-1}
                    aria-hidden="true"
                    disabled={isSubmitting}
                    className="ml-1 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-black text-white transition-colors group-hover:bg-neutral-700 disabled:cursor-wait disabled:opacity-60 sm:h-[72px] sm:w-[72px] lg:h-[88px] lg:w-[88px]"
                  >
                    <ArrowLeft size={30} strokeWidth={1.5} />
                  </button>
                </div>

                {status === "error" && (
                  <p role="alert" className="mt-6 max-w-lg text-base text-red-600 sm:text-lg">
                    {error}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
