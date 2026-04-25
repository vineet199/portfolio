import { FadeIn } from "@/components/FadeIn";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
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
import { useState } from "react";

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
const stackFilters = ["All", "MVP", "AI Product", "Marketplace", "Mobile App", "Backend Scale"] as const;

type StackFilter = typeof stackFilters[number];

const techCategories = [
  {
    title: "AI / ML",
    icon: <Brain className="w-5 h-5 text-primary" />,
    skills: ["LLM APIs", "RAG Pipelines", "Prompt Engineering", "AI Agents", "LangChain"],
    summary: "Used when the product needs assistants, retrieval, automation, or intelligent workflow acceleration.",
    bestFor: ["AI copilots", "RAG search", "Workflow automation"],
    filters: ["AI Product", "Marketplace"] as StackFilter[],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-primary" />,
    skills: ["React", "Next.js", "Preact", "TypeScript", "Redux", "Tailwind"],
    summary: "The interaction layer for polished, accessible, fast-loading product experiences.",
    bestFor: ["MVP UI", "Dashboards", "Marketing + SEO pages"],
    filters: ["MVP", "Marketplace", "Mobile App"] as StackFilter[],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-primary" />,
    skills: ["Node.js", "Java", "Kotlin", "Python", "REST APIs", "Kafka"],
    summary: "The service layer for auth, domain APIs, async work, integrations, and reliable business logic.",
    bestFor: ["APIs", "Integrations", "Event-driven systems"],
    filters: ["MVP", "Marketplace", "Backend Scale"] as StackFilter[],
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-5 h-5 text-primary" />,
    skills: ["AWS", "OCI", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    summary: "The deployment and operations foundation for repeatable releases, observability, and scale.",
    bestFor: ["CI/CD", "Containers", "Production hosting"],
    filters: ["AI Product", "Marketplace", "Backend Scale"] as StackFilter[],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "Cassandra", "Redis", "Neptune"],
    summary: "The persistence layer for product data, caching, search, graph relationships, and analytics.",
    bestFor: ["Transactional data", "Caching", "Search / graph"],
    filters: ["Marketplace", "Backend Scale", "AI Product"] as StackFilter[],
  },
  {
    title: "Quality",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    skills: ["Playwright", "Jest", "E2E Testing", "Postman", "CI Gates"],
    summary: "The confidence layer that keeps delivery stable as the product and team evolve.",
    bestFor: ["Regression safety", "API checks", "Release gates"],
    filters: ["MVP", "Mobile App", "Backend Scale"] as StackFilter[],
  },
];

export function TechStackSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeFilter, setActiveFilter] = useState<StackFilter>("All");

  return (
    <section className="py-24 md:py-32 bg-secondary/30 border-y overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              04. Tech Stack
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">
              Technologies I work with
            </h3>
            <p className="mt-4 text-muted-foreground">
              Spin through the stack galaxy, inspect each layer, then grab a pill and throw it around.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-start">
          <TechOrbitGalaxy
            activeIndex={activeIndex}
            activeFilter={activeFilter}
            onActiveIndexChange={setActiveIndex}
            onActiveFilterChange={setActiveFilter}
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:sticky xl:top-24">
            <FadeIn delay={150}>
              <div className="rounded-2xl border bg-card/80 p-4 shadow-sm backdrop-blur-sm sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Capability cards
                </p>
                <h4 className="mt-1 text-lg font-bold">Compact stack coverage</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Active skills are highlighted here, keeping the builder column focused and collision-free.
                </p>
              </div>
            </FadeIn>
            {techCategories.map((cat, idx) => (
              <TechCategoryCard
                key={cat.title}
                cat={cat}
                delay={idx * 90}
                active={idx === activeIndex}
                recommended={activeFilter !== "All" && cat.filters.includes(activeFilter)}
                onActivate={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechOrbitGalaxy({
  activeIndex,
  activeFilter,
  onActiveIndexChange,
  onActiveFilterChange,
}: {
  activeIndex: number;
  activeFilter: StackFilter;
  onActiveIndexChange: (index: number) => void;
  onActiveFilterChange: (filter: StackFilter) => void;
}) {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const activeCategory = techCategories[activeIndex];

  const selectFilter = (filter: StackFilter) => {
    onActiveFilterChange(filter);
    if (filter === "All") return;
    const firstMatch = techCategories.findIndex((cat) => cat.filters.includes(filter));
    if (firstMatch >= 0) onActiveIndexChange(firstMatch);
  };

  return (
    <FadeIn delay={100} className="h-full">
      <div className="relative h-full overflow-hidden rounded-[2rem] border bg-card/75 p-6 shadow-xl shadow-primary/5 backdrop-blur-sm md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_15%_80%,hsl(var(--primary)/0.10),transparent_26%)]" />

        <div className="relative z-10 mb-6 flex flex-wrap items-center justify-center gap-2">
          {stackFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => selectFilter(filter)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 ${activeFilter === filter
                ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "border-border bg-background/80 text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="relative z-10 grid gap-6">
          <div className="grid gap-5 rounded-[1.75rem] border border-primary/10 bg-background/45 p-5 md:grid-cols-[auto_1fr] md:items-center">
            <div
              className="mx-auto flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-[1.75rem] border border-primary/25 bg-background/90 p-3 text-center shadow-2xl shadow-primary/10 backdrop-blur-md md:h-36 md:w-36"
              style={{ transform: "translateZ(84px)" }}
            >
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 md:h-11 md:w-11">
                {activeCategory.icon}
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary md:text-xs">Active stack</p>
              <h4 className="mt-1 text-base font-bold leading-tight md:text-lg">{activeCategory.title}</h4>
            </div>

            <motion.div
              key={`${activeFilter}-${activeCategory.title}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border bg-background/85 p-5 shadow-lg backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {activeFilter === "All" ? "Stack guidance" : `${activeFilter} stack`}
              </p>
              <h4 className="mt-1 text-xl font-bold">{activeCategory.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activeCategory.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeCategory.bestFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="rounded-2xl border bg-background/70 p-4 shadow-lg backdrop-blur">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-primary">
              Skill categories
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {techCategories.map((cat, idx) => {
                const isActive = idx === activeIndex;
                const isRecommended = activeFilter !== "All" && cat.filters.includes(activeFilter);

                return (
                  <button
                    type="button"
                    key={cat.title}
                    onMouseEnter={() => onActiveIndexChange(idx)}
                    onFocus={() => onActiveIndexChange(idx)}
                    onClick={() => onActiveIndexChange(idx)}
                    className={`flex min-h-14 items-center gap-3 rounded-2xl border px-4 py-3 text-left text-xs font-semibold shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 ${isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-primary/30"
                      : isRecommended
                        ? "border-primary/50 bg-primary/10 text-primary"
                        : "border-border bg-card text-foreground hover:border-primary/50 hover:text-primary"
                      }`}
                  >
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${isActive ? "bg-primary-foreground/15" : "bg-primary/10"}`}>
                      {cat.icon}
                    </span>
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function TechCategoryCard({
  cat,
  delay,
  active = false,
  recommended = false,
  onActivate,
}: {
  cat: typeof techCategories[0];
  delay: number;
  active?: boolean;
  recommended?: boolean;
  onActivate?: () => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <FadeIn delay={delay} className="h-full">
      <div
        tabIndex={0}
        onMouseMove={handleMouseMove}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        className={`group relative h-full overflow-hidden rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/35 ${
          active
            ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
            : recommended
              ? "border-primary/40 bg-primary/5"
              : "border-border bg-card hover:border-primary/30"
        }`}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, var(--primary-muted), transparent 40%)`
            ),
          }}
        />

        <div className="relative z-10 mb-3 flex items-center gap-2.5">
          <div className={`rounded-lg p-2 ${active ? "bg-primary text-primary-foreground" : "bg-primary/10"}`}>
            {cat.icon}
          </div>
          <div>
            <h4 className="text-base font-bold">{cat.title}</h4>
            {active && (
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                Active skills highlighted
              </p>
            )}
          </div>
        </div>
        <p className="relative z-10 mb-3 text-xs leading-relaxed text-muted-foreground">
          {cat.summary}
        </p>
        <div className="relative z-10 flex flex-wrap gap-1.5">
          {cat.skills.map((skill) => (
            <motion.span
              key={skill}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.7}
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              className={`cursor-grab select-none rounded-lg border px-2 py-0.5 text-[11px] font-medium transition-colors active:cursor-grabbing ${
                active
                  ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "border-border/50 bg-secondary text-secondary-foreground hover:border-primary/40"
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </FadeIn>
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
                05. Engagement
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
              07. Testimonials
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
              08. FAQ
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
                    className={`shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-primary" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
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
