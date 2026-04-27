import { ExternalLink, Github } from "lucide-react";
import type { RefObject } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PROJECTS = [
  {
    id: "skill-o-scope",
    title: "Skill-O-Scope",
    subtitle: "AI Skill Recommendation System",
    description:
      "Built an AI-powered system for skill-based workforce optimization using semantic matching algorithms. Features data cleaning pipelines and a RESTful backend for intelligent skill gap analysis.",
    stack: ["Python", "Pandas", "FastAPI", "HTML/CSS", "JavaScript"],
    tags: ["AI/ML", "Data Analytics"],
    cssVar: "var(--primary)",
    icon: "🧠",
    github: "https://github.com",
    demo: null as string | null,
  },
  {
    id: "carbonsense-ai",
    title: "CarbonSense AI",
    subtitle: "Carbon Emissions Dashboard",
    description:
      "Real-time interactive emissions visualization dashboard with pie charts, bar graphs, and 3D scatter plots. Features CSV upload, dynamic filtering, and an intuitive Streamlit UI for environmental BI.",
    stack: ["Streamlit", "Python", "Plotly", "Pandas", "NumPy"],
    tags: ["Data Visualization", "BI"],
    cssVar: "var(--chart-3)",
    icon: "🌍",
    github: "https://github.com",
    demo: "https://streamlit.io" as string | null,
  },
];

function TagBadge({ tag, cssVar }: { tag: string; cssVar: string }) {
  return (
    <span
      className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={{
        color: cssVar,
        background: `color-mix(in oklch, ${cssVar} 10%, transparent)`,
        border: `1px solid color-mix(in oklch, ${cssVar} 25%, transparent)`,
      }}
    >
      {tag}
    </span>
  );
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={ref as RefObject<HTMLElement>}
      data-ocid="projects.section"
      className={`py-28 relative section-hidden ${isVisible ? "section-visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full text-[var(--chart-3)] bg-[color-mix(in_oklch,var(--chart-3)_10%,transparent)] border border-[color-mix(in_oklch,var(--chart-3)_20%,transparent)]">
            Featured Projects
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Building Solutions That <span className="neon-text">Matter</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hands-on projects at the intersection of data science, AI, and
            business intelligence.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 gap-8" data-ocid="projects.list">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              data-ocid={`projects.item.${i + 1}`}
              className="group glass-card rounded-2xl overflow-hidden transition-smooth hover:scale-[1.01] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card header with gradient */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, oklch(var(--card)), color-mix(in oklch, ${project.cssVar} 15%, transparent))`,
                  borderBottom: `1px solid color-mix(in oklch, ${project.cssVar} 20%, transparent)`,
                }}
              >
                {/* Ambient glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, color-mix(in oklch, ${project.cssVar} 15%, transparent) 0%, transparent 60%)`,
                  }}
                />
                <span className="text-7xl relative z-10 group-hover:scale-110 transition-smooth">
                  {project.icon}
                </span>
                {/* Tech stack pills overlay */}
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded glass font-medium text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} cssVar={project.cssVar} />
                  ))}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1 group-hover:neon-text transition-smooth">
                  {project.title}
                </h3>
                <p
                  className="text-xs font-semibold mb-3"
                  style={{ color: project.cssVar }}
                >
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`projects.item.${i + 1}.github_button`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg glass glass-hover text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`projects.item.${i + 1}.demo_button`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg btn-neon-outline text-sm"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
