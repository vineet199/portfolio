import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { useTheme } from "@/hooks/use-theme";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Freelance() {
  const calendlyUrl = "https://calendly.com/your-calendar";

  const tabs = [
    { name: "Overview", id: "freelance-hero" },
    { name: "Services", id: "freelance-services" },
    { name: "Process", id: "freelance-process" },
    { name: "Projects", id: "freelance-featured" },
    { name: "Contact", id: "freelance-contact" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.title = "Freelance — Vineet Kamath";
    const desc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
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
    const handleScroll = () => {
      const sections = tabs
        .map((t) => document.getElementById(t.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPos = window.scrollY + 140;
      let current = tabs[0].name;

      for (const section of sections) {
        if (scrollPos >= section.offsetTop) {
          const tab = tabs.find((t) => t.id === section.id);
          if (tab) current = tab.name;
        }
      }

      setActiveTab(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30 selection:text-foreground">
      <header className="bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
          <a
            href="/"
            className="text-2xl font-display font-bold tracking-tighter text-foreground group"
          >
            <span className="text-primary transition-colors">V</span>
            <span className="group-hover:text-primary transition-colors">K.</span>
          </a>
          <nav className="hidden md:flex items-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => {
                  setActiveTab(tab.name);
                  scrollToSection(tab.id);
                }}
                className={`relative text-sm font-medium px-3 py-1 transition-colors ${
                  activeTab === tab.name
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-300 ease-out ${
                    activeTab === tab.name ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-background border-b shadow-lg py-4 px-6 md:hidden">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={"#" + tab.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setActiveTab(tab.name);
                    scrollToSection(tab.id);
                  }}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground py-2 border-b border-border/50 last:border-0"
                >
                  {tab.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow">
        <section id="freelance-hero" className="relative min-h-[60vh] flex flex-col justify-center pt-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12 w-full text-center">
            <FadeIn delay={100}>
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground">
                Available for freelance engagements
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground leading-tight">
                Freelance engineering — Web & App development
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I help startups and product teams build production-ready web and mobile applications, and scalable backend systems. Short engagements, focused outcomes.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 shadow transition"
                >
                  Schedule a call
                </a>

                <a
                  href="/Vineet_Kamath_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground border-2 border-border font-medium rounded-xl hover:border-primary/50 transition"
                >
                  View resume
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="freelance-services" className="pt-20 pb-12">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-semibold mb-6">What I offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary rounded-xl border border-border">
                <h3 className="font-medium text-lg mb-2">Web Applications</h3>
                <p className="text-sm text-muted-foreground">Production-grade React/Next/Vite apps, SSR/CSR, accessibility and performance optimization.</p>
              </div>

              <div className="p-6 bg-secondary rounded-xl border border-border">
                <h3 className="font-medium text-lg mb-2">Mobile Applications</h3>
                <p className="text-sm text-muted-foreground">Cross-platform React Native / Expo apps and native integrations for iOS & Android.</p>
              </div>

              <div className="p-6 bg-secondary rounded-xl border border-border">
                <h3 className="font-medium text-lg mb-2">Scalable Backends</h3>
                <p className="text-sm text-muted-foreground">Well-architected APIs, serverless and containerized platforms, and CI/CD pipelines.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="freelance-process" className="pt-12 pb-12">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-semibold mb-6">How I work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary rounded-xl border border-border text-center">
                <h4 className="font-semibold mb-2">1. Discovery</h4>
                <p className="text-sm text-muted-foreground">Clarify goals, timeline and success metrics.</p>
              </div>
              <div className="p-6 bg-secondary rounded-xl border border-border text-center">
                <h4 className="font-semibold mb-2">2. Build</h4>
                <p className="text-sm text-muted-foreground">Deliver working increments, with demos and feedback loops.</p>
              </div>
              <div className="p-6 bg-secondary rounded-xl border border-border text-center">
                <h4 className="font-semibold mb-2">3. Handoff</h4>
                <p className="text-sm text-muted-foreground">Documentation, knowledge transfer and support options.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="freelance-featured" className="pt-12 pb-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-semibold mb-6">Selected projects</h2>
            <p className="text-sm text-muted-foreground mb-6">A shortlist of work relevant to freelancing engagements.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary rounded-xl border border-border">
                <h3 className="font-medium mb-1">SaaS platform</h3>
                <p className="text-sm text-muted-foreground">Led development of a multi-tenant SaaS used by enterprise customers.</p>
              </div>
              <div className="p-6 bg-secondary rounded-xl border border-border">
                <h3 className="font-medium mb-1">Consumer mobile app</h3>
                <p className="text-sm text-muted-foreground">Built a cross-platform mobile app with offline sync and native integrations.</p>
              </div>
              <div className="p-6 bg-secondary rounded-xl border border-border">
                <h3 className="font-medium mb-1">Performance & scalability</h3>
                <p className="text-sm text-muted-foreground">Improved app performance and scaled backend systems to handle growth.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="freelance-contact" className="pt-12 pb-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to work together?</h2>
            <p className="text-sm text-muted-foreground mb-6">Book a short intro call to discuss scope and next steps.</p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition"
            >
              Schedule on Calendly
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}