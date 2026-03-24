import { FadeIn } from "@/components/FadeIn";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperiences = [
  {
    title: "Senior Member of Technical Staff",
    organization: "Oracle Corporation — Oracle Cloud Infrastructure (OCI)",
    date: "May 2025 – Present",
    bullets: [
      "Defined and drove org-wide end-to-end testing standards for all OCI Console plugins — now the mandated baseline across 50+ OCI service teams.",
      "Designed and deployed an AI agent that parses UI spec docs and auto-generates production-ready components using Oracle's Redwood/MAUI design system — reducing build time by ~60–70%.",
      "Built a white-label cloud configurator for OCI Alloy, enabling 10+ initial deployments architected to scale across 50+ partner cloud environments.",
      "Engineered scalable UI features using Preact, improving Time to Interactive by 1.6s and achieving 38% faster load times across 15+ OCI services serving 100K+ enterprise users.",
    ],
  },
  {
    title: "Software Engineer III",
    organization: "Cisco Systems — Spaces Division",
    date: "July 2019 – May 2025",
    bullets: [
      'Designed and developed "Smart Workspaces", a location analytics solution (React, Java) that became the flagship product — driving a ~50% increase in revenue.',
      "Built backend APIs (Kotlin) and frontend interfaces (Redux) to extract spatial heatmap data from Cassandra and Amazon Neptune — contributing to $1B in subscription sales growth.",
      "Led a team delivering a next-gen cloud-based (AWS) business analytics platform, scaling it to ~8,500 companies worldwide.",
      "Shipped a recommendation system in Java/Kotlin that increased department revenue by USD 2.5 million.",
    ],
  },
];

const education = [
  {
    title: "Project Intern",
    organization: "Bennett Coleman & Co. Ltd.",
    date: "Jan 2019 – Jun 2019",
    bullets: [
      "Designed and developed an employee resource chat bot application in visual studio.",
      "Various tools such as QNAmaker and LUIS were also used in the development phase to implement NLP and deep learning features.",
    ],
  },
  {
    title: "B.Tech, Electronics and Communications Engineering",
    organization: "PES University, Bangalore",
    date: "Aug 2015 – July 2019",
    bullets: [
      "Academic Distinction — Top 10% of graduating class, GPA 8.15/10.",
      "Coursework: Data Structures, Algorithms, Computer Networks, Software Engineering.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-secondary/30 border-y"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              04. Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Experience
            </h3>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-border ml-4 md:ml-6 space-y-12">
          {workExperiences.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center group-hover:scale-125 group-hover:bg-primary transition-all duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-background" />
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Briefcase
                      size={18}
                      className="text-muted-foreground shrink-0"
                    />
                    {item.title}
                  </h4>
                  <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0 shrink-0 ml-4">
                    {item.date}
                  </span>
                </div>

                <h5 className="text-base font-semibold text-muted-foreground mb-4">
                  {item.organization}
                </h5>

                <ul className="space-y-2 bg-card p-6 border rounded-xl shadow-sm">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-muted-foreground leading-relaxed text-sm"
                    >
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="text-center mt-24 mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Education & Internships
            </h3>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-border ml-4 md:ml-6 space-y-12">
          {education.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 120}>
              <div className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center group-hover:scale-125 group-hover:bg-primary transition-all duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-background" />
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <GraduationCap
                      size={18}
                      className="text-muted-foreground shrink-0"
                    />
                    {item.title}
                  </h4>
                  <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0 shrink-0 ml-4">
                    {item.date}
                  </span>
                </div>

                <h5 className="text-base font-semibold text-muted-foreground mb-4">
                  {item.organization}
                </h5>

                <ul className="space-y-2 bg-card p-6 border rounded-xl shadow-sm">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-muted-foreground leading-relaxed text-sm"
                    >
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
