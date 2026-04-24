import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import {
  Users,
  Clock,
  TrendingUp,
  Award,
  ChevronDown,
  Brain,
  Layout,
  Server,
  Cloud,
  Database,
  ShieldCheck,
  Zap,
  RefreshCw,
  Rocket,
  Quote,
} from "lucide-react";

/* ─────────────────────────────────────────────
   STATS BANNER
   ───────────────────────────────────────────── */
const stats = [
  { value: "7+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
  { value: "$1B+", label: "Revenue Impact", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "100K+", label: "Users Served", icon: <Users className="w-5 h-5" /> },
  { value: "50+", label: "Teams Scaled", icon: <Award className="w-5 h-5" /> },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 border-b">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 100}>
              <div className="group text-center p-6 rounded-2xl bg-card border hover:border-primary/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TRUSTED BY
   ───────────────────────────────────────────── */
const companies = [
  { name: "Oracle", role: "Senior MTS — OCI Console" },
  { name: "Cisco", role: "Software Engineer III — Spaces" },
];

export function TrustedBySection() {
  return (
    <section className="py-16 md:py-20 bg-secondary/30 border-b">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
              Previously at
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              Trusted by industry leaders
            </h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((company, idx) => (
            <FadeIn key={company.name} delay={idx * 150}>
              <div className="group flex items-center gap-6 p-6 bg-card border rounded-2xl hover:border-primary/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {company.name[0]}
                </div>
                <div>
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {company.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {company.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TECH STACK
   ───────────────────────────────────────────── */
const techCategories = [
  {
    title: "AI / ML",
    icon: <Brain className="w-5 h-5 text-primary" />,
    skills: ["LLM APIs", "RAG Pipelines", "Prompt Engineering", "AI Agents", "LangChain"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-primary" />,
    skills: ["React", "Next.js", "Preact", "TypeScript", "Redux", "Tailwind"],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-primary" />,
    skills: ["Node.js", "Java", "Kotlin", "Python", "REST APIs", "Kafka"],
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-5 h-5 text-primary" />,
    skills: ["AWS", "OCI", "Kubernetes", "Docker", "Terraform", "CI/CD"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "Cassandra", "Redis", "Neptune"],
  },
  {
    title: "Quality",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    skills: ["Playwright", "Jest", "E2E Testing", "Postman", "CI Gates"],
  },
];

export function TechStackSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 border-y">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              03. Tech Stack
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Technologies I work with
            </h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => (
            <FadeIn key={cat.title} delay={idx * 100} className="h-full">
              <div className="bg-card border rounded-2xl p-7 h-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {cat.icon}
                  </div>
                  <h4 className="text-lg font-bold">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-lg border border-border/50 hover:border-primary/40 transition-colors"
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

/* ─────────────────────────────────────────────
   ENGAGEMENT TYPES
   ───────────────────────────────────────────── */
const engagements = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Sprint",
    duration: "2–4 weeks",
    description: "Focused bursts for MVPs, proof-of-concepts, or critical feature builds.",
    features: ["Fixed scope & timeline", "Daily async updates", "Code + docs handoff"],
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Retainer",
    duration: "Ongoing",
    description: "Part-time embedded engineer for continuous product development.",
    features: ["10–20 hrs/week", "Flexible priorities", "Slack/Loom integration"],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Full Build",
    duration: "1–3 months",
    description: "End-to-end product development from architecture to deployment.",
    features: ["Architecture design", "Full-stack delivery", "Launch support"],
  },
];

export function EngagementSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
                04. Engagement
              </h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold">
                How we can work together
              </h3>
            </div>
            <div className="h-px bg-border flex-grow ml-8 hidden md:block" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {engagements.map((eng, idx) => (
            <FadeIn key={eng.title} delay={idx * 150} className="flex">
              <div className="group relative bg-card border rounded-2xl p-8 flex flex-col overflow-hidden hover:border-primary/50 transition-all duration-500 w-full h-full shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="absolute -inset-x-4 -top-24 -bottom-4 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-secondary rounded-xl text-primary transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                      {eng.icon}
                    </div>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {eng.duration}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {eng.title}
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {eng.description}
                  </p>

                  <ul className="space-y-2">
                    {eng.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">▸</span>
                        {f}
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

/* ─────────────────────────────────────────────
   TESTIMONIALS
   ───────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Vineet delivered a complex analytics platform ahead of schedule. His architectural decisions saved us months of refactoring down the line.",
    name: "Engineering Lead",
    role: "Cisco Spaces",
  },
  {
    quote:
      "Exceptional ability to translate ambiguous product requirements into clean, scalable code. A true force multiplier for any team.",
    name: "Senior Director",
    role: "Oracle Cloud Infrastructure",
  },
  {
    quote:
      "The AI component generator Vineet built fundamentally changed how our teams ship UI. It cut build time by over 60%.",
    name: "Staff Engineer",
    role: "OCI Console Platform",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 border-y">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              06. Testimonials
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              What people say
            </h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 150} className="flex">
              <div className="group relative bg-card border rounded-2xl p-8 flex flex-col hover:border-primary/40 hover:shadow-xl transition-all duration-500 w-full hover:-translate-y-1">
                <div className="absolute -inset-x-4 -top-24 -bottom-4 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <Quote
                    size={24}
                    className="text-primary/30 mb-4 group-hover:text-primary/60 transition-colors duration-300"
                  />
                  <p className="text-foreground leading-relaxed mb-6 flex-grow italic">
                    "{t.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
   ───────────────────────────────────────────── */
const faqs = [
  {
    q: "What's your typical rate?",
    a: "I work on project-based or weekly retainer pricing depending on scope. Rates are competitive with senior-to-staff level engineers. Let's discuss on a call — I'm transparent about costs.",
  },
  {
    q: "What's your current availability?",
    a: "I'm currently available for new engagements. I typically take on 1–2 projects at a time to ensure quality and focus.",
  },
  {
    q: "Do you do fixed-price or hourly?",
    a: "Both. For well-defined scopes, fixed-price works great. For ongoing or exploratory work, a weekly/monthly retainer is more flexible for both sides.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Absolutely. I've embedded into teams at Oracle and Cisco and can adapt to your workflows — PRs, standups, Slack, Jira, whatever you use.",
  },
  {
    q: "What timezone do you work in?",
    a: "IST (UTC+5:30), but I have extensive experience working with US and European teams asynchronously. I'm flexible on overlap hours.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, happy to sign NDAs and any standard contractor agreements before we begin.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              07. FAQ
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Common questions
            </h3>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 80}>
              <div className="bg-card border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
