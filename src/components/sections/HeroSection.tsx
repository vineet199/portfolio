import { ArrowRight, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

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

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="hero" 
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
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground">
            Open to new opportunities
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground max-w-4xl leading-[1.1]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F4E37] via-[#8B5E3C] to-[#A47148]">Vineet</span> — Staff Engineer & AI Builder.
          </h1>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            7+ years shipping AI-powered developer tooling and large-scale cloud platforms at Oracle and Cisco — setting engineering standards that scale across 50+ teams.
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => handleScroll('#projects')}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/20 transition-all duration-200 w-full sm:w-auto"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="flex items-center justify-center px-8 py-4 bg-background text-foreground border-2 border-border font-medium rounded-xl hover:border-primary/50 hover:bg-secondary transition-all duration-200 w-full sm:w-auto"
            >
              Contact Me
            </button>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <button 
          onClick={() => handleScroll('#about')}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}
