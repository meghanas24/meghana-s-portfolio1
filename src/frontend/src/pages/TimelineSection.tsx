import { Award, GraduationCap } from "lucide-react";
import type { RefObject } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TIMELINE = [
  {
    id: "canara-college",
    type: "education",
    year: "2023 – Present",
    title: "B.E. Computer Science & Business Systems",
    institution: "Canara Engineering College",
    detail: "CGPA: 8.75 / 10 · 3rd Year",
    cssVar: "var(--primary)",
  },
  {
    id: "tata-forage",
    type: "certification",
    year: "2024",
    title: "Tata Forage GenAI Data Analytics Simulation",
    institution: "Tata Group via Forage",
    detail: "Hands-on simulation with Gen AI tools for data analytics tasks",
    cssVar: "var(--accent)",
  },
  {
    id: "power-bi",
    type: "certification",
    year: "2024",
    title: "Microsoft Power BI — Beginner",
    institution: "Microsoft",
    detail: "Core Power BI skills: data modeling, DAX, report design",
    cssVar: "var(--chart-3)",
  },
  {
    id: "wadhwani",
    type: "certification",
    year: "2023",
    title: "Wadhwani Foundation — Ignite India Program",
    institution: "Wadhwani Foundation",
    detail: "Entrepreneurship, leadership, and startup thinking",
    cssVar: "var(--primary)",
  },
  {
    id: "canva-ai",
    type: "certification",
    year: "2023",
    title: "Canva AI Certification",
    institution: "Canva",
    detail: "AI-powered design tools and visual communication",
    cssVar: "var(--accent)",
  },
  {
    id: "st-agnes",
    type: "education",
    year: "2021 – 2023",
    title: "Pre-University (PCMB)",
    institution: "St. Agnes PU College",
    detail: "Percentage: 90.16%",
    cssVar: "var(--chart-3)",
  },
];

export default function TimelineSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="timeline"
      ref={ref as RefObject<HTMLElement>}
      data-ocid="timeline.section"
      className={`py-28 relative section-hidden ${isVisible ? "section-visible" : ""} bg-card/30`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full text-primary bg-primary/10 border border-primary/20">
            Education &amp; Certifications
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            My Learning <span className="neon-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative" data-ocid="timeline.list">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--primary), var(--accent), transparent)",
              opacity: 0.5,
            }}
          />

          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <div
                key={item.id}
                data-ocid={`timeline.item.${i + 1}`}
                className={`relative flex gap-6 items-start transition-smooth ${
                  isVisible ? "section-visible" : "section-hidden"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Node */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: `color-mix(in oklch, ${item.cssVar} 12%, transparent)`,
                    border: `2px solid color-mix(in oklch, ${item.cssVar} 40%, transparent)`,
                    boxShadow: `0 0 12px color-mix(in oklch, ${item.cssVar} 25%, transparent)`,
                  }}
                >
                  {item.type === "education" ? (
                    <GraduationCap size={18} style={{ color: item.cssVar }} />
                  ) : (
                    <Award size={18} style={{ color: item.cssVar }} />
                  )}
                </div>

                {/* Content */}
                <div className="glass-card rounded-xl p-5 flex-1 hover:scale-[1.01] transition-smooth">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="font-semibold text-foreground leading-tight">
                      {item.title}
                    </h3>
                    <span
                      className="text-xs font-bold whitespace-nowrap px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        color: item.cssVar,
                        background: `color-mix(in oklch, ${item.cssVar} 10%, transparent)`,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: item.cssVar }}
                  >
                    {item.institution}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
