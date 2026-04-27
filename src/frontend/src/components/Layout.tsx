import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import FloatingBlobs from "./FloatingBlobs";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background */}
      <FloatingBlobs />

      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer
        className="relative z-10 border-t"
        style={{
          background: "oklch(0.11 0.008 280 / 0.8)",
          backdropFilter: "blur(20px)",
          borderColor: "oklch(1 0 0 / 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg neon-text mb-1">
              Meghana Suvarna
            </p>
            <p className="text-muted-foreground text-sm">
              CSBS Student · Data Analytics · AI Systems
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.github_link"
              className="p-2.5 glass rounded-lg text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.linkedin_link"
              className="p-2.5 glass rounded-lg text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:meghanna2005@gmail.com"
              data-ocid="footer.email_link"
              className="p-2.5 glass rounded-lg text-muted-foreground hover:text-foreground transition-smooth"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="text-center md:text-right text-muted-foreground text-sm">
            <p>
              © {year}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-text font-medium hover:opacity-80 transition-smooth"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
