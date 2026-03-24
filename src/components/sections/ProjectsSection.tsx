import { FadeIn } from "@/components/FadeIn";
import { FolderGit2, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Smart Workspaces",
    summary: "Location analytics platform built at Cisco Spaces that became the flagship product. Delivers spatial heatmap data and daily utilisation tracking from Cassandra and Amazon Neptune — contributing to $1B in subscription sales growth.",
    tech: ["React", "Redux", "Java", "Kotlin", "Cassandra", "Amazon Neptune", "AWS"],
    github: "https://github.com",
    demo: null,
    featured: true
  },
  {
    title: "OCI AI Component Generator",
    summary: "An AI agent built at Oracle that parses UI specification documents and auto-generates production-ready, config-driven components using Oracle's Redwood/MAUI design system — reducing component build time by an estimated 60–70%.",
    tech: ["LLM APIs", "AI Agent Design", "Preact", "TypeScript", "OCI Console"],
    github: "https://github.com",
    demo: null,
    featured: true
  },
  {
    title: "OCI Alloy Cloud Configurator",
    summary: "A white-label cloud configurator for OCI Alloy — a foundational piece of Oracle's global sovereign cloud strategy — enabling 10+ initial deployments and architected to scale across 50+ partner cloud environments.",
    tech: ["Preact", "TypeScript", "OCI", "Kubernetes", "Terraform"],
    github: "https://github.com",
    demo: null,
    featured: true
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">03. Selected Work</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold">Featured Projects</h3>
            </div>
            <div className="h-px bg-border flex-grow ml-8 hidden md:block"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={project.title} delay={idx * 150} className="flex">
              <div className="group relative bg-card border rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-primary/50 transition-colors duration-300 w-full h-full shadow-sm hover:shadow-xl hover:-translate-y-1">
                
                <div className="absolute -inset-x-4 -top-24 -bottom-4 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-secondary rounded-xl text-primary">
                      <Folder size={24} />
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FolderGit2 size={20} />
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Live demo of ${project.title}`}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <ul className="flex flex-wrap gap-2 text-sm font-mono text-muted-foreground/80">
                    {project.tech.map((tech) => (
                      <li key={tech} className="bg-background border px-2 py-0.5 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
