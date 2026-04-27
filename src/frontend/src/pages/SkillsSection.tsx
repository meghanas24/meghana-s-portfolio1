import { useState } from "react";
import type { RefObject } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CATEGORIES = [
  {
    id: "programming",
    label: "Programming",
    cssVar: "var(--primary)",
    skills: [
      { name: "Python (NumPy, Pandas)", level: 85 },
      { name: "SQL", level: 80 },
      { name: "C", level: 70 },
    ],
  },
  {
    id: "data",
    label: "Data & BI Tools",
    cssVar: "var(--accent)",
    skills: [
      { name: "Power BI", level: 82 },
      { name: "Excel (Advanced)", level: 78 },
      { name: "Streamlit", level: 75 },
      { name: "Plotly / Matplotlib", level: 80 },
    ],
  },
  {
    id: "tools",
    label: "Developer Tools",
    cssVar: "var(--chart-3)",
    skills: [
      { name: "VS Code / Jupyter", level: 88 },
      { name: "FastAPI", level: 72 },
      { name: "Jira (Agile)", level: 68 },
      { name: "Canva / Oracle", level: 65 },
    ],
  },
];

const TECH_PILLS = [
  "Python",
  "SQL",
  "Power BI",
  "FastAPI",
  "Streamlit",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Plotly",
  "Excel",
  "Jira",
  "Oracle",
];

function SkillBar({
  name,
  level,
  cssVar,
  visible,
}: {
  name: string;
  level: number;
  cssVar: string;
  visible: boolean;
}) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className="text-xs font-bold" style={{ color: cssVar }}>
          {level}%
        </span>
      </div>
      <div className="h-2 rounded-full overflow-hidden bg-foreground/5">
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{
            width: visible ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${cssVar}, color-mix(in oklch, ${cssVar} 70%, var(--accent)))`,
            boxShadow: `0 0 8px color-mix(in oklch, ${cssVar} 40%, transparent)`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("programming");
  const { ref, isVisible } = useScrollAnimation();
  const activeCat =
    CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];

  return (
    <section
      id="skills"
      ref={ref as RefObject<HTMLElement>}
      data-ocid="skills.section"
      className={`py-28 relative section-hidden ${isVisible ? "section-visible" : ""} bg-card/30`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full text-accent bg-accent/10 border border-accent/20">
            Skills &amp; Expertise
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            My Technical <span className="neon-text">Toolkit</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A curated set of tools and technologies I use to build data-driven
            solutions.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-ocid="skills.category_tabs"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              data-ocid={`skills.tab.${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-smooth ${
                activeCategory === cat.id
                  ? "btn-neon-primary"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills bars */}
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8 space-y-5 mb-12">
          {activeCat.skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              cssVar={activeCat.cssVar}
              visible={isVisible}
            />
          ))}
        </div>

        {/* All tech pills */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-4 font-medium">
            Full Technology Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_PILLS.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold rounded-full glass text-muted-foreground hover:text-foreground transition-smooth cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
