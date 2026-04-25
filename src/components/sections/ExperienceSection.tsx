import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";

type ExperienceMetric = {
  label: string;
  value: string;
};

type ExperienceHighlight = {
  title: string;
  description: string;
};

type ExperienceRole = {
  title: string;
  organization: string;
  date: string;
  bullets: string[];
  metrics: ExperienceMetric[];
  highlights: ExperienceHighlight[];
};

const workExperiences: ExperienceRole[] = [
  {
    title: "Senior Member of Technical Staff",
    organization: "Oracle Corporation — Oracle Cloud Infrastructure (OCI)",
    date: "May 2025 – Present",
    bullets: [
      "Defined org-wide end-to-end testing standards for all OCI Console plugins — now mandated across 50+ service teams.",
      "Built an AI agent that parses UI specs and auto-generates Redwood/MAUI components, cutting build time by ~60–70%.",
      "Architected a white-label cloud configurator for OCI Alloy powering 10+ sovereign deployments with partner-ready extensibility.",
      "Optimised Preact-based UI surfaces, improving Time to Interactive by 1.6s and shipping 38% faster loads for 100K+ enterprise users.",
    ],
    metrics: [
      { label: "Teams Enabled", value: "50+" },
      { label: "Build Time Reduction", value: "↓70%" },
      { label: "Services Impacted", value: "15+" },
    ],
    highlights: [
      {
        title: "AI-assisted component factory",
        description:
          "Designed a spec-to-code pipeline combining LLM orchestration with design tokens, generating production-ready Redwood components with guardrails for accessibility and telemetry hooks.",
      },
      {
        title: "Testing baseline codification",
        description:
          "Rolled out a canonical Playwright + visual regression harness with synthetic data packs, unlocking frictionless onboarding for 50+ product teams and reducing flaky test rate by 43%.",
      },
      {
        title: "Alloy configurator platform",
        description:
          "Delivered a modular provisioning experience for Oracle Alloy partners with Terraform-driven blueprints, advanced RBAC, and observability baked in from day one.",
      },
    ],
  },
  {
    title: "Software Engineer III",
    organization: "Cisco Systems — Spaces Division",
    date: "July 2019 – May 2025",
    bullets: [
      'Led the build of "Smart Workspaces", Cisco Spaces’ flagship location analytics suite, driving ~50% revenue increase.',
      "Engineered Cassandra + Amazon Neptune pipelines for spatial heatmaps that unlocked $1B+ in subscription expansion.",
      "Scaled a global analytics platform on AWS serving ~8,500 enterprises with zero downtime launch.",
      "Delivered LTV recommendation models in Java/Kotlin that drove an additional USD 2.5M in ARR.",
    ],
    metrics: [
      { label: "Revenue Influence", value: "$1B+" },
      { label: "Deployments", value: "8.5K+" },
      { label: "Net-new ARR", value: "$2.5M" },
    ],
    highlights: [
      {
        title: "Smart Workspaces platform",
        description:
          "Shipped real-time occupancy insights with React + Redux frontends, Kotlin microservices, and WebSocket streaming, including SOC2-aligned tenant isolation.",
      },
      {
        title: "Spatial data pipelines",
        description:
          "Modelled hybrid graph + time-series datasets, reducing analytics latency from minutes to seconds and enabling anomaly detection on badge + Wi-Fi telemetry.",
      },
      {
        title: "Revenue acceleration tooling",
        description:
          "Partnered with GTM teams to build forecasting dashboards and experiment frameworks, resulting in a 17% lift in upsell conversion within two quarters.",
      },
    ],
  },
];

const education = [
  {
    title: "Project Intern",
    organization: "Bennett Coleman & Co. Ltd.",
    date: "Jan 2019 – Jun 2019",
    bullets: [
      "Designed an employee resource chatbot with Microsoft Bot Framework, QnA Maker, and LUIS intent models.",
      "Piloted deployment across internal HR teams with analytics on query funnels and CSAT uplift.",
    ],
  },
  {
    title: "B.Tech, Electronics and Communications Engineering",
    organization: "PES University, Bangalore",
    date: "Aug 2015 – July 2019",
    bullets: [
      "Academic Distinction — Top 10% of graduating cohort (GPA 8.15/10).",
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

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-3 bottom-3 hidden w-px bg-gradient-to-b from-primary/30 via-border to-transparent md:block" />
          {workExperiences.map((role, idx) => (
            <ExperienceTimelineCard key={role.title} role={role} index={idx} />
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="text-center mt-24 mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Education & Internships
            </h3>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-3xl space-y-8">
          <div className="absolute left-4 top-3 bottom-3 hidden w-px bg-gradient-to-b from-primary/30 via-border to-transparent md:block" />
          {education.map((item, idx) => (
            <EducationTimelineCard key={item.title} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimelineCard({ role, index }: { role: ExperienceRole; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative pb-8 md:pl-12 md:pb-10 last:pb-0 group"
    >
      <div className="absolute left-[7px] top-7 hidden h-5 w-5 rounded-full border border-primary/50 bg-background shadow-sm md:flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
        <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-background" />
      </div>

      <div className="rounded-2xl border bg-card p-5 md:p-6 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground mb-3">
              <Briefcase size={14} className="text-primary" />
              {role.date}
            </div>
            <h4 className="text-xl md:text-2xl font-display font-bold text-foreground">
              {role.title}
            </h4>
            <h5 className="text-sm md:text-base font-semibold text-muted-foreground mt-1">
              {role.organization}
            </h5>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-fit shrink-0 rounded-full border-primary/30 bg-background/80 px-4 text-xs text-muted-foreground hover:text-primary"
              >
                Deep dive
                <ArrowUpRight size={15} />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl rounded-2xl">
              <DialogHeader>
                <DialogTitle>{role.title}</DialogTitle>
                <DialogDescription>{role.organization}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-3">
                {role.highlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-xl border bg-card p-4">
                    <h6 className="text-sm font-semibold text-foreground">{highlight.title}</h6>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {role.metrics.map((metric) => (
            <motion.div
              key={metric.label}
              whileHover={{ y: -2 }}
              className="rounded-xl border border-border/70 bg-secondary/40 px-4 py-3"
            >
              <p className="text-lg font-display font-bold text-primary">{metric.value}</p>
              <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function EducationTimelineCard({
  item,
  index,
}: {
  item: (typeof education)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
      className="relative md:pl-12 group"
    >
      <div className="absolute left-[7px] top-6 hidden h-5 w-5 rounded-full border border-primary/50 bg-background shadow-sm md:flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
        <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-background" />
      </div>

      <div className="rounded-2xl border bg-card p-5 md:p-6 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground mb-3">
          <GraduationCap size={14} className="text-primary" />
          {item.date}
        </div>
        <h4 className="text-xl font-display font-bold text-foreground">
          {item.title}
        </h4>
        <h5 className="text-sm md:text-base font-semibold text-muted-foreground mt-1 mb-4">
          {item.organization}
        </h5>

        <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
