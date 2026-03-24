import { FadeIn } from "@/components/FadeIn";
import { Brain, Layout, Server, Database } from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML",
    icon: <Brain className="w-6 h-6 text-primary mb-4" />,
    description: "Building LLM-powered tools, RAG pipelines, and AI agents for developer workflows.",
    skills: ["LLM APIs (OpenAI, Claude)", "RAG Pipelines", "Prompt Engineering", "AI Agent Design", "LangChain"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-primary mb-4" />,
    description: "Crafting performant, accessible interfaces that scale to millions of users.",
    skills: ["React", "Preact", "TypeScript", "Next.js", "Redux", "Angular", "Playwright", "Jest"]
  },
  {
    title: "Backend & Cloud",
    icon: <Server className="w-6 h-6 text-primary mb-4" />,
    description: "Designing microservices and cloud infrastructure for enterprise-scale platforms.",
    skills: ["Node.js", "Java", "Kotlin", "Python", "AWS", "OCI", "Kubernetes", "Docker", "Kafka", "Terraform", "Argo CD"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-primary mb-4" />,
    description: "Working with distributed and relational databases at production scale.",
    skills: ["PostgreSQL", "Cassandra", "Amazon Neptune", "MongoDB", "Redis"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 border-y">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">02. My Toolkit</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">Technologies I work with</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <FadeIn key={category.title} delay={idx * 120} className="h-full">
              <div className="bg-card border rounded-2xl p-7 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                {category.icon}
                <h4 className="text-lg font-bold mb-2">{category.title}</h4>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{category.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-lg border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
