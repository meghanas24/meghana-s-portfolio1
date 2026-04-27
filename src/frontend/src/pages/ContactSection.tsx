import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import type { RefObject } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INPUT_STYLE: React.CSSProperties = {
  background: "oklch(var(--foreground) / 0.05)",
  border: "1px solid oklch(var(--foreground) / 0.1)",
};

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={ref as RefObject<HTMLElement>}
      data-ocid="contact.section"
      className={`py-28 relative section-hidden ${isVisible ? "section-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full text-[var(--chart-3)] bg-[color-mix(in_oklch,var(--chart-3)_10%,transparent)] border border-[color-mix(in_oklch,var(--chart-3)_20%,transparent)]">
            Contact
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Let&apos;s Build Something{" "}
            <span className="neon-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to internships, collaborations, and interesting conversations
            about data &amp; AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-semibold text-lg text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:meghanna2005@gmail.com"
                  data-ocid="contact.email_link"
                  className="flex items-center gap-4 p-4 rounded-xl glass glass-hover group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10 border border-primary/30">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:neon-text truncate transition-smooth">
                      meghanna2005@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.linkedin_link"
                  className="flex items-center gap-4 p-4 rounded-xl glass glass-hover group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent/10 border border-accent/30">
                    <Linkedin size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      LinkedIn
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:neon-text transition-smooth">
                      linkedin.com/in/meghanasuvarna
                    </p>
                  </div>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.github_link"
                  className="flex items-center gap-4 p-4 rounded-xl glass glass-hover group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "color-mix(in oklch, var(--chart-3) 10%, transparent)",
                      border:
                        "1px solid color-mix(in oklch, var(--chart-3) 30%, transparent)",
                    }}
                  >
                    <Github size={16} style={{ color: "var(--chart-3)" }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      GitHub
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:neon-text transition-smooth">
                      github.com/meghanasuvarna
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl glass">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-secondary border border-border">
                    <MapPin size={16} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      India 🇮🇳
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="glass-card rounded-2xl p-8">
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 btn-neon-outline px-6 py-2.5 rounded-lg text-sm"
                  data-ocid="contact.send_again_button"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.form"
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  Send a Message
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-muted-foreground mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      data-ocid="contact.name_input"
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:ring-1 focus:ring-primary/50"
                      style={INPUT_STYLE}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-muted-foreground mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      data-ocid="contact.email_input"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:ring-1 focus:ring-primary/50"
                      style={INPUT_STYLE}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-muted-foreground mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    data-ocid="contact.subject_input"
                    placeholder="Internship inquiry, collaboration..."
                    className="w-full px-4 py-2.5 rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:ring-1 focus:ring-primary/50"
                    style={INPUT_STYLE}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-muted-foreground mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    data-ocid="contact.message_textarea"
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-4 py-2.5 rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none transition-smooth focus:ring-1 focus:ring-primary/50"
                    style={INPUT_STYLE}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  data-ocid="contact.submit_button"
                  className="w-full btn-neon-primary px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <span data-ocid="contact.loading_state">Sending...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
