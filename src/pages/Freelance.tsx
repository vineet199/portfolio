import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FadeIn } from "@/components/FadeIn";
import {
  StatsSection,
  TrustedBySection,
  TechStackSection,
  EngagementSection,
  TestimonialsSection,
  FAQSection,
} from "@/components/sections/FreelanceSections";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Server,
  Search,
  Hammer,
  PackageCheck,
  ChevronDown,
  Folder,
  FolderGit2,
  ExternalLink,
  Calendar,
  FileText,
  Sparkles,
  PlayCircle,
  X,
} from "lucide-react";

/* ─── DATA ─── */

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Applications",
    description:
      "Production-grade React / Next / Vite apps with SSR, accessibility, and performance optimization baked in.",
    tech: ["React", "Next.js", "Vite", "TypeScript"],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Applications",
    description:
      "Cross-platform React Native / Expo apps with native integrations for iOS & Android.",
    tech: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Scalable Backends",
    description:
      "Well-architected APIs, serverless and containerized platforms, and CI/CD pipelines.",
    tech: ["Node.js", "Java", "Kotlin", "AWS", "Docker"],
  },
];

const processSteps = [
  {
    icon: <Search className="w-5 h-5" />,
    step: "01",
    title: "Discovery",
    description:
      "Clarify goals, timeline and success metrics. I ask the right questions so nothing gets lost in translation.",
  },
  {
    icon: <Hammer className="w-5 h-5" />,
    step: "02",
    title: "Build",
    description:
      "Deliver working increments with demos and feedback loops. You see real progress every week.",
  },
  {
    icon: <PackageCheck className="w-5 h-5" />,
    step: "03",
    title: "Handoff",
    description:
      "Documentation, knowledge transfer and ongoing support options. You own everything.",
  },
];

const caseStudies = [
  {
    title: "Corporate Gifts Showcase",
    problem: "A B2B corporate gifting company needed a fast, modern digital catalog to showcase their premium products to enterprise clients.",
    approach: "Designed and built a highly responsive, image-heavy showcase platform using Vite, React, and modern CSS for smooth animations.",
    result: "Delivered a performant, SEO-friendly catalog that reduced client onboarding time and improved product discovery.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    github: null as string | null, // Private repo
    demo: "https://www.kams-gifts.in/",
    demoVideoUrl: "/assets/videos/kams_demo.webp",
  },
  {
    title: "Mango Pre-Order Platform",
    problem: "A premium mango supplier needed a streamlined way to handle pre-orders, payments, and delivery tracking for apartment communities.",
    approach: "Built an end-to-end e-commerce flow with custom UPI payment integration, receipt upload, and real-time order tracking.",
    result: "Automated the entire ordering pipeline, eliminating manual WhatsApp tracking and scaling to handle hundreds of apartment deliveries.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    github: null as string | null, // Private repo
    demo: "https://mango-paradise.vercel.app/",
    demoVideoUrl: "/assets/videos/mango_demo.webp",
  },
  {
    title: "A S Legal Works",
    problem: "A seasoned legal professional with 25+ years of experience needed a trusted digital presence to highlight practice areas and capture client inquiries.",
    approach: "Designed and launched a professional, accessible, and mobile-friendly firm website focused on establishing authority and streamlining contact.",
    result: "Created a centralized hub that clearly communicates expertise across Family, Corporate, and Criminal Law, driving direct consultation requests.",
    tech: ["Web Design", "CMS Integration", "SEO", "Responsive UI"],
    github: null as string | null, // No public repo
    demo: "https://www.aslegalworks.com/",
    demoVideoUrl: "/assets/videos/aslegal_demo.webp",
  },
];

/* ─── COMPONENT ─── */

export default function Freelance() {
  const calendlyUrl = "https://calendly.com/vineetkamath1997";
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Freelance — Vineet Kamath";
    const desc = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (desc) {
      desc.setAttribute(
        "content",
        "Freelance web & app development — web apps, mobile apps, and scalable backends."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content =
        "Freelance web & app development — web apps, mobile apps, and scalable backends.";
      document.head.appendChild(m);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <main className="flex-grow">
        {/* ─── HERO ─── */}
        <section
          id="freelance-hero"
          className="relative min-h-[100svh] flex flex-col justify-center pt-20 overflow-hidden hero-intro"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10" />
          <div
            className="absolute w-[380px] h-[380px] rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10 transition-transform duration-700 ease-out"
            style={{
              left: `${cursor.x}%`,
              top: `${cursor.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground">
                <Sparkles size={14} className="text-primary" />
                Available for freelance engagements
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground max-w-4xl leading-[1.1]">
                Let's build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F4E37] via-[#8B5E3C] to-[#A47148]">
                  something great
                </span>{" "}
                together.
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                I help startups and product teams build production-ready web and
                mobile applications, and scalable backend systems. Short
                engagements, focused outcomes.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/20 transition-all duration-200 w-full sm:w-auto"
                >
                  <Calendar size={18} />
                  Schedule a call
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="/Vineet_Kamath_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground border-2 border-border font-medium rounded-xl hover:border-primary/50 hover:bg-secondary transition-all duration-200 w-full sm:w-auto"
                >
                  <FileText size={18} />
                  View resume
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <button
              onClick={() => scrollToSection("freelance-services")}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll down"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <StatsSection />

        {/* ─── TRUSTED BY ─── */}
        <TrustedBySection />

        {/* ─── SERVICES ─── */}
        <section id="freelance-services" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="flex items-center gap-4 mb-12">
                <div>
                  <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
                    01. Services
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-display font-bold">
                    What I offer
                  </h3>
                </div>
                <div className="h-px bg-border flex-grow ml-8 hidden md:block" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <FadeIn key={service.title} delay={idx * 150} className="flex">
                  <div className="group relative bg-card border rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-primary/50 transition-all duration-500 w-full h-full shadow-sm hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -inset-x-4 -top-24 -bottom-4 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="p-3 bg-secondary rounded-xl text-primary mb-6 w-fit transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                        {service.icon}
                      </div>
                      <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="relative z-10 mt-auto">
                      <ul className="flex flex-wrap gap-2 text-sm font-mono text-muted-foreground/80">
                        {service.tech.map((t) => (
                          <li
                            key={t}
                            className="bg-background border px-2 py-0.5 rounded transition-colors duration-300 group-hover:bg-secondary/70"
                          >
                            {t}
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



        {/* ─── PROCESS ─── */}
        <section id="freelance-process" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
                  02. Process
                </h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold">
                  How I work
                </h3>
              </div>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              <div className="space-y-12">
                {processSteps.map((step, idx) => (
                  <FadeIn key={step.step} delay={idx * 150}>
                    <div className="relative pl-0 md:pl-16 group">
                      <div className="hidden md:flex absolute left-0 top-1 h-12 w-12 rounded-full border-2 border-primary bg-background items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 z-10">
                        <span className="text-primary group-hover:text-primary-foreground font-mono text-sm font-bold transition-colors duration-300">
                          {step.step}
                        </span>
                      </div>
                      <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            {step.icon}
                          </div>
                          <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TECH STACK ─── */}
        <TechStackSection />

        {/* ─── ENGAGEMENT TYPES ─── */}
        <EngagementSection />

        {/* ─── CASE STUDIES ─── */}
        <section id="freelance-featured" className="py-24 md:py-32 bg-secondary/30 border-y">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="flex items-center gap-4 mb-12">
                <div>
                  <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">
                    05. Case Studies
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-display font-bold">
                    Real results, real projects
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Problem → Approach → Result for each engagement.
                  </p>
                </div>
                <div className="h-px bg-border flex-grow ml-8 hidden md:block" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((project, idx) => (
                <FadeIn key={project.title} delay={idx * 150} className="flex">
                  <div className="group relative bg-card border rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-primary/50 transition-all duration-500 w-full h-full shadow-sm hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute -inset-x-4 -top-24 -bottom-4 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Approach A: Hover Thumbnail */}
                    {project.demoVideoUrl && (
                      <img src={project.demoVideoUrl} alt="Demo" className="absolute inset-x-0 top-0 h-48 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }} />
                    )}

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-secondary rounded-xl text-primary transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                          <Folder size={24} />
                        </div>
                        <div className="flex gap-3">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`GitHub for ${project.title}`}>
                              <FolderGit2 size={20} />
                            </a>
                          )}
                          {project.demoVideoUrl && (
                            <button onClick={() => setSelectedVideo(project.demoVideoUrl as string)} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`Play Demo of ${project.title}`}>
                              <PlayCircle size={20} />
                            </button>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`Demo of ${project.title}`}>
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>

                      <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>

                      <div className="space-y-3 mb-6">
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Problem</span>
                          <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Approach</span>
                          <p className="text-sm text-muted-foreground mt-1">{project.approach}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Result</span>
                          <p className="text-sm text-foreground font-medium mt-1">{project.result}</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <ul className="flex flex-wrap gap-2 text-sm font-mono text-muted-foreground/80">
                        {project.tech.map((t) => (
                          <li key={t} className="bg-background border px-2 py-0.5 rounded transition-colors duration-300 group-hover:bg-secondary/70">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* Main Site Link Card */}
              <FadeIn delay={150 * 3} className="flex">
                <a href="/" className="group relative bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col justify-center items-center text-center overflow-hidden hover:border-primary/50 transition-all duration-500 w-full h-full shadow-sm hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="mx-auto p-4 bg-background border border-primary/30 rounded-full text-primary mb-6 w-fit transition-transform duration-500 group-hover:scale-110">
                      <ArrowRight size={32} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      View Full Portfolio
                    </h4>
                    <p className="text-muted-foreground">
                      Looking for my complete work history, open-source contributions, and more detailed projects?
                    </p>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <TestimonialsSection />

        {/* ─── FAQ ─── */}
        <FAQSection />

        {/* ─── CTA ─── */}
        <section id="freelance-contact" className="py-24 md:py-32 bg-secondary/30 border-y">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
                  08. Let's Talk
                </h2>
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  Ready to work together?
                </h3>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
                  Book a short intro call to discuss scope and next steps. No
                  commitment — just a conversation to see if we're a good fit.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/20 transition-all duration-200 w-full sm:w-auto text-lg"
                  >
                    <Calendar size={20} />
                    Schedule on Calendly
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <a
                    href="mailto:vineetkamath1997@gmail.com"
                    className="flex items-center justify-center gap-2 px-10 py-4 bg-background text-foreground border-2 border-border font-medium rounded-xl hover:border-primary/50 hover:bg-secondary transition-all duration-200 w-full sm:w-auto text-lg"
                  >
                    Or send an email
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border bg-card"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/50 hover:bg-background/80 rounded-full text-foreground transition-colors"
              >
                <X size={20} />
              </button>
              <img src={selectedVideo} alt="Demo Video" className="w-full h-auto max-h-[85vh] object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}