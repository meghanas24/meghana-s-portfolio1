import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { threshold: 0.4 },
    );
    for (const { href } of NAV_LINKS) {
      const el = document.getElementById(href.replace("#", ""));
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-smooth"
        style={{
          background: scrolled
            ? "oklch(0.1 0.008 280 / 0.85)"
            : "oklch(0.09 0.005 280 / 0)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: scrolled
            ? "1px solid oklch(1 0 0 / 0.08)"
            : "1px solid transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            data-ocid="nav.brand"
            className="font-display font-bold text-xl neon-text transition-smooth hover:scale-105"
          >
            MS
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  type="button"
                  data-ocid={`nav.${label.toLowerCase()}.link`}
                  onClick={() => scrollToSection(href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-smooth ${
                    active === href.replace("#", "")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === href.replace("#", "") && (
                    <span
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.68 0.22 296 / 0.15), oklch(0.7 0.2 220 / 0.15))",
                        border: "1px solid oklch(0.68 0.22 296 / 0.3)",
                      }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            data-ocid="nav.contact_button"
            className="hidden md:inline-flex items-center gap-2 btn-neon-primary px-5 py-2 rounded-lg text-sm"
          >
            Contact Me
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            data-ocid="nav.mobile_menu_toggle"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg glass text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-smooth ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "oklch(0.09 0.005 280 / 0.6)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setMobileOpen(false)}
          onKeyUp={(e) => {
            if (e.key === "Escape") setMobileOpen(false);
          }}
          role="button"
          tabIndex={-1}
          aria-label="Close menu"
        />
        <div
          data-ocid="nav.mobile_drawer"
          className="absolute right-0 top-0 bottom-0 w-72 flex flex-col pt-20 px-6 pb-8 gap-2"
          style={{
            background: "oklch(0.12 0.01 280 / 0.95)",
            backdropFilter: "blur(24px)",
            borderLeft: "1px solid oklch(1 0 0 / 0.08)",
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              type="button"
              data-ocid={`nav.mobile.${label.toLowerCase()}.link`}
              onClick={() => {
                scrollToSection(href);
                setMobileOpen(false);
              }}
              className={`text-left px-4 py-3 rounded-lg font-medium transition-smooth ${
                active === href.replace("#", "")
                  ? "neon-text bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {label}
            </button>
          ))}
          <div
            className="mt-4 pt-4"
            style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
          >
            <a
              href="mailto:meghanna2005@gmail.com"
              data-ocid="nav.mobile.contact_button"
              className="block text-center btn-neon-primary px-5 py-3 rounded-lg text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
