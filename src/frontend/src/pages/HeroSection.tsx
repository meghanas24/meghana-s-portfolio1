import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TYPING_WORDS = [
  "Data Analytics",
  "AI Systems",
  "Business Intelligence",
  "Tech Solutions",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  const [typedWord, setTypedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing animation
  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = charIndex + 1;
        setTypedWord(word.slice(0, next));
        if (next === word.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex(next);
        }
      } else {
        const next = charIndex - 1;
        setTypedWord(word.slice(0, next));
        if (next === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
          setCharIndex(0);
        } else {
          setCharIndex(next);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      hue: Math.random() > 0.5 ? 296 : 220,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.7 0.2 ${p.hue} / ${p.alpha})`;
        ctx.fill();
      }
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `oklch(0.68 0.2 296 / ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-meghana.dim_1400x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        aria-label="Animated particle background"
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in oklch, var(--primary) 6%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles size={14} className="neon-text" />
          <span className="text-sm font-medium text-muted-foreground">
            Open to Internships · Data & AI Roles
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6">
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="neon-text">Meghana</span>
          <br />
          <span className="neon-text">Suvarna</span>
          <span className="ml-3 text-5xl md:text-7xl">👋</span>
        </h1>

        {/* Subtitle with typing effect */}
        <p className="text-lg md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          CSBS student building{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--chart-3, oklch(0.72 0.18 200))" }}
          >
            {typedWord}
            <span className="animate-pulse">|</span>
          </span>
        </p>

        <p className="text-base md:text-lg font-medium mb-10 tracking-wide text-muted-foreground">
          "Turning data into decisions."
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          data-ocid="hero.cta_group"
        >
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            data-ocid="hero.view_projects_button"
            className="btn-neon-primary px-8 py-3.5 rounded-xl text-base font-semibold inline-flex items-center gap-2"
          >
            View Projects 🚀
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            data-ocid="hero.contact_button"
            className="btn-neon-outline px-8 py-3.5 rounded-xl text-base font-semibold inline-flex items-center gap-2"
          >
            Contact Me ✉️
          </button>
          <button
            type="button"
            data-ocid="hero.resume_button"
            className="px-8 py-3.5 rounded-xl text-base font-semibold glass glass-hover inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            onClick={() =>
              window.open(
                "mailto:meghanna2005@gmail.com?subject=Resume%20Request",
                "_blank",
              )
            }
          >
            Download Resume ↓
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          data-ocid="hero.scroll_down_button"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mx-auto animate-float"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll Down
          </span>
          <ArrowDown size={18} />
        </button>
      </div>
    </section>
  );
}
