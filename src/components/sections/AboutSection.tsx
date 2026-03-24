import { FadeIn } from "@/components/FadeIn";
import { Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const awards = [
  {
    title: "Cisco Stock Award — $10,000",
    desc: "Youngest recipient, awarded for exceptional impact across multiple engineering orgs."
  },
  {
    title: "Cisco \"Connect Everything\" Award",
    desc: "Driving cross-team collaboration that improved workflow efficiency by 15%."
  }
];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;

        const startTime = performance.now();
        const duration = 1200;

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));

          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          }
        };

        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(current);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <p ref={ref} className="text-3xl font-bold text-primary tabular-nums">
      {count}
      {suffix}
    </p>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">01. About Me</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-8">
            <FadeIn delay={100}>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Setting engineering standards that scale — from AI tooling to global cloud platforms.
              </h3>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                <p>
                  I'm a staff-level engineer with 7 years of experience driving technical direction at <strong className="text-foreground">Oracle Cloud Infrastructure</strong> and <strong className="text-foreground">Cisco Systems</strong>. I specialise in building AI-powered developer tooling, large-scale frontend platforms, and cloud infrastructure that teams rely on at enterprise scale.
                </p>
                <p>
                  At Oracle, I've authored canonical testing frameworks adopted across 50+ OCI service teams and designed an AI agent that auto-generates production-ready components — cutting build time by an estimated 60–70%. At Cisco, I architected "Smart Workspaces", a location analytics platform that became the flagship product and drove a ~50% increase in revenue.
                </p>
                <p>
                  I care deeply about engineering quality, developer experience, and shipping things that move the needle — not just the lines of code.
                </p>
              </div>
            </FadeIn>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awards.map((award, idx) => (
                <FadeIn key={award.title} delay={320 + idx * 120}>
                  <div className="flex gap-3 p-4 bg-card border rounded-xl shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                    <Award size={20} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">{award.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{award.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4 lg:col-start-9">
            <FadeIn delay={300}>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop&auto=format" 
                  alt="Developer workspace" 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-card border rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <CountUp value={7} suffix="+" />
                  <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="p-4 bg-card border rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <CountUp value={50} suffix="+" />
                  <p className="text-xs text-muted-foreground mt-1">Teams Impacted</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
