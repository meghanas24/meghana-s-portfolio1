import { Brain, Database, TrendingUp, Users } from "lucide-react";
import type { RefObject } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HIGHLIGHTS = [
  {
    icon: Database,
    label: "Data Analytics",
    desc: "SQL, Power BI, Excel — transforming raw data into actionable insights",
    cssVar: "var(--primary)",
  },
  {
    icon: Brain,
    label: "AI & ML",
    desc: "Building intelligent systems with Python, Pandas, and FastAPI",
    cssVar: "var(--accent)",
  },
  {
    icon: TrendingUp,
    label: "Business Intelligence",
    desc: "Streamlit dashboards and Plotly visualizations for real-time BI",
    cssVar: "var(--chart-3)",
  },
  {
    icon: Users,
    label: "Team Collaboration",
    desc: "Strong communication and cross-functional teamwork with Jira & Agile",
    cssVar: "var(--ring)",
  },
];

const STATS = [
  { value: "8.75", label: "CGPA", cssVar: "var(--primary)" },
  { value: "2+", label: "AI Projects", cssVar: "var(--accent)" },
  { value: "5+", label: "Certifications", cssVar: "var(--chart-3)" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref as RefObject<HTMLElement>}
      data-ocid="about.section"
      className={`py-28 relative section-hidden ${isVisible ? "section-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full text-primary bg-primary/10 border border-primary/20">
            About Me
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            A Startup Mindset,{" "}
            <span className="neon-text">Analyst Precision</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — bio text */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 transition-smooth">
              <p className="text-foreground/90 text-lg leading-relaxed mb-4">
                I&apos;m{" "}
                <span className="font-semibold neon-text">Meghana Suvarna</span>
                , a 3rd-year Computer Science &amp; Business Systems student at
                Canara Engineering College with a CGPA of{" "}
                <span className="font-bold" style={{ color: "var(--chart-3)" }}>
                  8.75
                </span>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I bridge the gap between technology and business — designing
                data pipelines, building AI-powered tools, and translating
                complex datasets into clarity. My work blends technical rigor
                with product intuition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about startup innovation, I seek to leverage data
                analytics and AI systems to create measurable impact. Currently
                targeting{" "}
                <span className="text-foreground font-medium">
                  Data Analyst
                </span>
                ,{" "}
                <span className="text-foreground font-medium">
                  Business Analyst
                </span>
                , or{" "}
                <span className="text-foreground font-medium">
                  Product/Tech support
                </span>{" "}
                internships.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center transition-smooth hover:scale-105"
                  data-ocid={`about.stat.${stat.label.toLowerCase().replace(/\s/g, "_")}`}
                >
                  <p
                    className="font-display font-bold text-3xl mb-1"
                    style={{ color: stat.cssVar }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, label, desc, cssVar }, i) => (
              <div
                key={label}
                data-ocid={`about.highlight.${i + 1}`}
                className="glass-card rounded-xl p-5 transition-smooth hover:scale-[1.02] cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: `color-mix(in oklch, ${cssVar} 12%, transparent)`,
                    border: `1px solid color-mix(in oklch, ${cssVar} 30%, transparent)`,
                  }}
                >
                  <Icon size={18} style={{ color: cssVar }} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {label}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
