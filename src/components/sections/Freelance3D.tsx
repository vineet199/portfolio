import { FadeIn } from "@/components/FadeIn";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Cloud,
  Database,
  Layout,
  PlayCircle,
  Server,
  Smartphone,
} from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";

type CursorPoint = {
  x: number;
  y: number;
};

type ProcessStep = {
  icon: ReactNode;
  step: string;
  title: string;
  description: string;
  deliverables?: string[];
};

type ArchitectureNode = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  x: number;
  y: number;
  depth: number;
  icon: ReactNode;
  deliverables: string[];
};

const heroSystemLabels = ["React UI", "Mobile", "API", "Cloud", "DB", "AI"];

const heroHotspots = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Polished React interfaces with accessibility, motion, SEO, and analytics built in.",
    x: 30,
    y: 40,
    width: 42,
    height: 34,
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Cross-platform experiences that feel responsive, native, and release-ready.",
    x: 70,
    y: 42,
    width: 18,
    height: 42,
  },
  {
    id: "api",
    label: "API Core",
    description: "Typed backend services, auth, integrations, jobs, and scalable data flows.",
    x: 51,
    y: 70,
    width: 22,
    height: 21,
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Deployment pipelines, observability, scalable hosting, and production infrastructure.",
    x: 78,
    y: 22,
    width: 27,
    height: 19,
  },
  {
    id: "data",
    label: "Data",
    description: "Schema design, caching, search-ready models, and reliable product data flows.",
    x: 75,
    y: 72,
    width: 23,
    height: 18,
  },
  {
    id: "ai",
    label: "AI",
    description: "LLM workflows, retrieval, agents, and automation for intelligent product features.",
    x: 24,
    y: 72,
    width: 20,
    height: 18,
  },
];

const architectureNodes: ArchitectureNode[] = [
  {
    id: "web",
    label: "Web App",
    shortLabel: "Web",
    description:
      "Responsive React and Vite frontends with accessibility, SEO, analytics, and conversion-focused UI.",
    x: 19,
    y: 28,
    depth: 42,
    icon: <Layout className="h-4 w-4" />,
    deliverables: ["Accessible UI", "SEO structure", "Analytics-ready events"],
  },
  {
    id: "mobile",
    label: "Mobile App",
    shortLabel: "Mobile",
    description:
      "Cross-platform app experiences with native integrations, clean state management, and release-ready flows.",
    x: 20,
    y: 70,
    depth: 35,
    icon: <Smartphone className="h-4 w-4" />,
    deliverables: ["Cross-platform flows", "Native integrations", "Release support"],
  },
  {
    id: "api",
    label: "API Layer",
    shortLabel: "API",
    description:
      "Typed service contracts, authentication, domain APIs, background jobs, and reliable integration surfaces.",
    x: 50,
    y: 50,
    depth: 70,
    icon: <Server className="h-4 w-4" />,
    deliverables: ["Auth + permissions", "Typed contracts", "Background jobs"],
  },
  {
    id: "ai",
    label: "AI Layer",
    shortLabel: "AI",
    description:
      "LLM APIs, RAG workflows, agents, and automation layers that turn product ideas into useful workflows.",
    x: 50,
    y: 14,
    depth: 54,
    icon: <Brain className="h-4 w-4" />,
    deliverables: ["LLM orchestration", "RAG workflows", "Agent automation"],
  },
  {
    id: "cloud",
    label: "Cloud Deploy",
    shortLabel: "Cloud",
    description:
      "Production hosting, observability, CI/CD, containers, serverless functions, and scalable infrastructure.",
    x: 80,
    y: 30,
    depth: 48,
    icon: <Cloud className="h-4 w-4" />,
    deliverables: ["CI/CD", "Observability", "Scalable hosting"],
  },
  {
    id: "data",
    label: "Data Store",
    shortLabel: "Data",
    description:
      "PostgreSQL, Redis, document stores, search indexes, and data models designed for maintainable growth.",
    x: 79,
    y: 72,
    depth: 38,
    icon: <Database className="h-4 w-4" />,
    deliverables: ["Data modeling", "Caching", "Search-ready schemas"],
  },
];

const architectureConnections: Array<[string, string]> = [
  ["web", "api"],
  ["mobile", "api"],
  ["ai", "api"],
  ["api", "cloud"],
  ["api", "data"],
  ["cloud", "data"],
];

export function HeroBuildScene({
  cursor,
  assembling = false,
}: {
  cursor: CursorPoint;
  assembling?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorRef = useRef(cursor);
  const assemblingRef = useRef(assembling);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const activeHotspot = heroHotspots.find((hotspot) => hotspot.id === activeHotspotId);

  useEffect(() => {
    cursorRef.current = cursor;
  }, [cursor]);

  useEffect(() => {
    assemblingRef.current = assembling;
  }, [assembling]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || shouldReduceMotion) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const palette = {
      primary: "#8B5E3C",
      primaryLight: "#A47148",
      card: "#F7F2EC",
      cardDark: "#2A241F",
      glass: "rgba(255, 248, 240, 0.72)",
      line: "rgba(164, 113, 72, 0.55)",
      edge: "rgba(111, 78, 55, 0.22)",
      shadow: "rgba(111, 78, 55, 0.18)",
    };

    type ScenePoint = { x: number; y: number; z: number };

    let width = 1;
    let height = 1;
    let pixelRatio = 1;
    let animationFrame = 0;
    let assemblyProgress = 0;
    const startedAt = performance.now();

    const project = ({ x, y, z }: ScenePoint, time: number) => {
      const assembledX = x * (1 - assemblyProgress * 0.38);
      const assembledY = y * (1 - assemblyProgress * 0.34);
      const assembledZ = z + assemblyProgress * 58;
      const cursorOffsetX = ((cursorRef.current.x - 50) / 50) * 24;
      const cursorOffsetY = ((cursorRef.current.y - 50) / 50) * 18;
      const wave = Math.sin(time * 0.001 + assembledZ * 0.04) * 5;
      const sceneScale = Math.min(width / 680, height / 520);
      const perspective = 1 + assembledZ / 520;
      return {
        x:
          width / 2 +
          (assembledX + assembledZ * 0.36 + cursorOffsetX * (1 + assembledZ / 260)) *
            sceneScale *
            perspective,
        y:
          height / 2 +
          (assembledY - assembledZ * 0.22 + cursorOffsetY * (1 + assembledZ / 300) + wave) *
            sceneScale *
            perspective,
        scale: sceneScale * perspective,
      };
    };

    const roundedRect = (
      x: number,
      y: number,
      rectWidth: number,
      rectHeight: number,
      radius: number
    ) => {
      context.beginPath();
      context.moveTo(x + radius, y);
      context.arcTo(x + rectWidth, y, x + rectWidth, y + rectHeight, radius);
      context.arcTo(x + rectWidth, y + rectHeight, x, y + rectHeight, radius);
      context.arcTo(x, y + rectHeight, x, y, radius);
      context.arcTo(x, y, x + rectWidth, y, radius);
      context.closePath();
    };

    const drawLayeredRect = (
      point: ScenePoint,
      rectWidth: number,
      rectHeight: number,
      radius: number,
      fill: string,
      time: number,
      depth = 14
    ) => {
      const projected = project(point, time);
      const w = rectWidth * projected.scale;
      const h = rectHeight * projected.scale;
      const x = projected.x - w / 2;
      const y = projected.y - h / 2;
      const offset = depth * projected.scale;

      context.save();
      context.shadowColor = palette.shadow;
      context.shadowBlur = 28 * projected.scale;
      context.shadowOffsetY = 14 * projected.scale;
      roundedRect(x + offset * 0.45, y + offset * 0.45, w, h, radius * projected.scale);
      context.fillStyle = "rgba(111, 78, 55, 0.17)";
      context.fill();
      context.restore();

      roundedRect(x, y, w, h, radius * projected.scale);
      context.fillStyle = fill;
      context.fill();
      context.strokeStyle = palette.edge;
      context.lineWidth = Math.max(1, 1.4 * projected.scale);
      context.stroke();

      return { x, y, w, h, scale: projected.scale };
    };

    const drawBeam = (from: ScenePoint, to: ScenePoint, time: number) => {
      const a = project(from, time);
      const b = project(to, time);
      const gradient = context.createLinearGradient(a.x, a.y, b.x, b.y);
      gradient.addColorStop(0, "rgba(139, 94, 60, 0.06)");
      gradient.addColorStop(0.5, palette.line);
      gradient.addColorStop(1, "rgba(164, 113, 72, 0.06)");
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.strokeStyle = gradient;
      context.lineWidth = Math.max(1, 3 * a.scale);
      context.stroke();
    };

    const drawNode = (point: ScenePoint, radius: number, time: number, active = false) => {
      const p = project(point, time);
      context.save();
      context.shadowColor = active ? "rgba(164, 113, 72, 0.65)" : palette.shadow;
      context.shadowBlur = active ? 24 : 14;
      context.beginPath();
      context.arc(p.x, p.y, radius * p.scale, 0, Math.PI * 2);
      context.fillStyle = active ? palette.primaryLight : palette.primary;
      context.fill();
      context.restore();
    };

    const drawBrowser = (time: number) => {
      const panel = drawLayeredRect({ x: -185, y: -78, z: 26 }, 270, 168, 18, palette.card, time, 16);
      roundedRect(panel.x, panel.y, panel.w, 32 * panel.scale, 18 * panel.scale);
      context.fillStyle = palette.primary;
      context.fill();
      [0, 1, 2].forEach((index) => {
        context.beginPath();
        context.arc(panel.x + (22 + index * 18) * panel.scale, panel.y + 16 * panel.scale, 4.5 * panel.scale, 0, Math.PI * 2);
        context.fillStyle = index === 0 ? "#F87171" : index === 1 ? "#FBBF24" : "#34D399";
        context.fill();
      });
      roundedRect(panel.x + 24 * panel.scale, panel.y + 56 * panel.scale, 78 * panel.scale, 48 * panel.scale, 12 * panel.scale);
      context.fillStyle = palette.primaryLight;
      context.fill();
      roundedRect(panel.x + 118 * panel.scale, panel.y + 60 * panel.scale, 120 * panel.scale, 12 * panel.scale, 8 * panel.scale);
      context.fillStyle = "rgba(139, 94, 60, 0.18)";
      context.fill();
      roundedRect(panel.x + 118 * panel.scale, panel.y + 86 * panel.scale, 92 * panel.scale, 10 * panel.scale, 8 * panel.scale);
      context.fill();
    };

    const drawPhone = (time: number) => {
      const phone = drawLayeredRect({ x: 150, y: -54, z: 64 }, 84, 178, 22, palette.cardDark, time, 18);
      roundedRect(phone.x + 12 * phone.scale, phone.y + 22 * phone.scale, phone.w - 24 * phone.scale, phone.h - 44 * phone.scale, 16 * phone.scale);
      context.fillStyle = palette.glass;
      context.fill();
      roundedRect(phone.x + 27 * phone.scale, phone.y + 142 * phone.scale, 30 * phone.scale, 5 * phone.scale, 5 * phone.scale);
      context.fillStyle = "rgba(255,255,255,0.45)";
      context.fill();
    };

    const drawCube = (time: number) => {
      const p = project({ x: -12, y: 112, z: 92 }, time);
      const size = 66 * p.scale;
      context.save();
      context.translate(p.x, p.y);
      context.rotate(0.18 + Math.sin(time * 0.001) * 0.04);
      context.shadowColor = "rgba(139, 94, 60, 0.28)";
      context.shadowBlur = 28;

      context.beginPath();
      context.moveTo(0, -size * 0.65);
      context.lineTo(size * 0.58, -size * 0.28);
      context.lineTo(0, size * 0.1);
      context.lineTo(-size * 0.58, -size * 0.28);
      context.closePath();
      context.fillStyle = "#B8875F";
      context.fill();

      context.beginPath();
      context.moveTo(-size * 0.58, -size * 0.28);
      context.lineTo(0, size * 0.1);
      context.lineTo(0, size * 0.78);
      context.lineTo(-size * 0.58, size * 0.36);
      context.closePath();
      context.fillStyle = "#8B5E3C";
      context.fill();

      context.beginPath();
      context.moveTo(size * 0.58, -size * 0.28);
      context.lineTo(0, size * 0.1);
      context.lineTo(0, size * 0.78);
      context.lineTo(size * 0.58, size * 0.36);
      context.closePath();
      context.fillStyle = "#A47148";
      context.fill();
      context.restore();
    };

    const drawDatabase = (time: number) => {
      const db = drawLayeredRect({ x: 205, y: 112, z: 38 }, 110, 70, 18, palette.primaryLight, time, 12);
      context.beginPath();
      context.ellipse(db.x + db.w / 2, db.y + 12 * db.scale, db.w * 0.42, 14 * db.scale, 0, 0, Math.PI * 2);
      context.fillStyle = "rgba(255,255,255,0.24)";
      context.fill();
      context.beginPath();
      context.ellipse(db.x + db.w / 2, db.y + db.h - 12 * db.scale, db.w * 0.42, 14 * db.scale, 0, 0, Math.PI);
      context.strokeStyle = "rgba(255,255,255,0.25)";
      context.lineWidth = 2 * db.scale;
      context.stroke();
    };

    const drawAiDiamond = (time: number) => {
      const p = project({ x: -245, y: 112, z: 44 }, time);
      const size = 44 * p.scale;
      context.save();
      context.translate(p.x, p.y);
      context.rotate(Math.PI / 4 + time * 0.0007);
      context.shadowColor = "rgba(164, 113, 72, 0.5)";
      context.shadowBlur = 22;
      roundedRect(-size / 2, -size / 2, size, size, 10 * p.scale);
      context.fillStyle = palette.primaryLight;
      context.fill();
      context.strokeStyle = "rgba(255,255,255,0.3)";
      context.stroke();
      context.restore();
    };

    const drawCloudRing = (time: number) => {
      const p = project({ x: 230, y: -158, z: 58 }, time);
      context.save();
      context.translate(p.x, p.y);
      context.rotate(-0.34 + Math.sin(time * 0.001) * 0.06);
      context.beginPath();
      context.ellipse(0, 0, 54 * p.scale, 22 * p.scale, 0, 0, Math.PI * 2);
      context.strokeStyle = "rgba(164, 113, 72, 0.46)";
      context.lineWidth = 8 * p.scale;
      context.stroke();
      context.restore();
    };

    const anchors: ScenePoint[] = [
      { x: -135, y: -18, z: 45 },
      { x: 150, y: -16, z: 74 },
      { x: -12, y: 112, z: 96 },
      { x: 205, y: 112, z: 44 },
      { x: -245, y: 112, z: 52 },
      { x: 230, y: -158, z: 64 },
    ];

    const connections: Array<[number, number]> = [
      [0, 2],
      [1, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [0, 5],
    ];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(parent.clientWidth, 1);
      height = Math.max(parent.clientHeight, 1);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const time = performance.now() - startedAt;
      assemblyProgress += ((assemblingRef.current ? 1 : 0) - assemblyProgress) * 0.075;
      context.clearRect(0, 0, width, height);

      const background = context.createRadialGradient(
        width * 0.45,
        height * 0.45,
        20,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.55
      );
      background.addColorStop(0, "rgba(164, 113, 72, 0.18)");
      background.addColorStop(1, "rgba(164, 113, 72, 0)");
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      connections.forEach(([from, to]) => drawBeam(anchors[from], anchors[to], time));
      anchors.forEach((anchor, index) => drawNode(anchor, index === 2 ? 7 : 5, time, index === 2));
      drawCloudRing(time);
      drawBrowser(time);
      drawPhone(time);
      drawCube(time);
      drawDatabase(time);
      drawAiDiamond(time);

      animationFrame = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="relative h-[430px] w-full xl:h-[520px]">
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-primary/20 bg-card/75 shadow-2xl shadow-primary/10 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.22),transparent_32%),linear-gradient(135deg,hsl(var(--secondary)/0.9),transparent_52%)]" />
        <canvas
          aria-hidden="true"
          ref={canvasRef}
          className={`relative z-10 h-full w-full ${shouldReduceMotion ? "hidden" : "block"}`}
        />
        {shouldReduceMotion && <StaticHeroSystem />}

        <div className="absolute left-5 top-5 z-20 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
          {assembling ? "Assembling project system" : "Interactive system map"}
        </div>
        {heroHotspots.map((hotspot) => (
          <button
            key={hotspot.id}
            type="button"
            onMouseEnter={() => setActiveHotspotId(hotspot.id)}
            onMouseLeave={() => setActiveHotspotId(null)}
            onFocus={() => setActiveHotspotId(hotspot.id)}
            onBlur={() => setActiveHotspotId(null)}
            onClick={() => setActiveHotspotId(hotspot.id)}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-[1.5rem] bg-transparent text-transparent outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              width: `${hotspot.width}%`,
              height: `${hotspot.height}%`,
            }}
            aria-label={`Inspect ${hotspot.label}`}
          >
            <span className="sr-only">{hotspot.label}</span>
          </button>
        ))}
        {activeHotspot && (
          <motion.div
            key={activeHotspot.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            className="absolute bottom-5 left-5 z-20 max-w-[260px] rounded-2xl border bg-background/85 p-4 shadow-xl backdrop-blur-md"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {activeHotspot.label}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {activeHotspot.description}
            </p>
          </motion.div>
        )}
        <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
          React <ArrowRight className="h-3 w-3 text-primary" /> APIs <ArrowRight className="h-3 w-3 text-primary" /> Cloud
        </div>
      </div>
    </div>
  );
}

function StaticHeroSystem() {
  return (
    <div className="absolute inset-0 z-10 grid place-items-center p-10">
      <div className="relative h-full w-full max-w-[420px] rounded-[2rem] border border-primary/20 bg-background/70 p-8 shadow-xl">
        {heroSystemLabels.map((label, index) => {
          const angle = (index / heroSystemLabels.length) * Math.PI * 2;
          const radiusX = 38;
          const radiusY = 31;
          return (
            <div
              key={label}
              className="absolute rounded-2xl border border-primary/20 bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-lg"
              style={{
                left: `${50 + Math.cos(angle) * radiusX}%`,
                top: `${50 + Math.sin(angle) * radiusY}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {label}
            </div>
          );
        })}
        <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-primary text-primary-foreground shadow-xl">
          Build
        </div>
      </div>
    </div>
  );
}

export function Tilt3DCard({
  children,
  className = "",
  intensity = 8,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [intensity, -intensity]), {
    stiffness: 260,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-intensity, intensity]), {
    stiffness: 260,
    damping: 28,
  });
  const glareBackground = useTransform([mouseX, mouseY], ([latestX, latestY]) => {
    const x = Number(latestX) * 100;
    const y = Number(latestY) * 100;
    return `radial-gradient(circle at ${x}% ${y}%, hsl(var(--primary) / 0.22), transparent 44%)`;
  });

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
    const bounds = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - bounds.left) / bounds.width);
    mouseY.set((clientY - bounds.top) / bounds.height);
  };

  const resetTilt = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={shouldReduceMotion ? undefined : handleMouseMove}
      onMouseLeave={shouldReduceMotion ? undefined : resetTilt}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      style={
        shouldReduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1100,
              transformStyle: "preserve-3d",
            }
      }
      className={`relative transform-gpu will-change-transform ${className}`}
    >
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}
      {children}
    </motion.div>
  );
}

export function ProcessPipelineSection({ steps }: { steps: ProcessStep[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 45%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.55,
  });
  const packetTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    return smoothProgress.on("change", (latest) => setProgress(latest));
  }, [smoothProgress]);

  return (
    <section ref={sectionRef} id="freelance-process" className="pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              02. Process
            </h2>
            <h3 className="text-3xl font-display font-bold md:text-4xl">
              A scroll-driven delivery pipeline
            </h3>
            <p className="mt-4 text-muted-foreground">
              Follow the illuminated rail from discovery to handoff — every step is designed to reduce ambiguity and ship useful software.
            </p>
          </div>
        </FadeIn>

        <div className="relative [perspective:1200px]">
          <div className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-1 overflow-hidden rounded-full bg-border md:block">
            <motion.div
              className="h-full origin-top rounded-full bg-gradient-to-b from-primary via-primary/80 to-primary/30 shadow-[0_0_24px_hsl(var(--primary)/0.35)]"
              style={{ scaleY: shouldReduceMotion ? 1 : smoothProgress }}
            />
            <motion.div
              className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_22px_hsl(var(--primary)/0.65)]"
              style={{ top: shouldReduceMotion ? "100%" : packetTop }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const stepPosition = steps.length <= 1 ? 1 : index / (steps.length - 1);
              const isComplete = progress > stepPosition + 0.24 || (index === steps.length - 1 && progress > 0.92);
              const isActive =
                Math.abs(progress - stepPosition) < 0.28 ||
                (index === 0 && progress < 0.18) ||
                (index === steps.length - 1 && progress > 0.82);

              return (
              <FadeIn key={step.step} delay={index * 140}>
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, rotateX: 14, y: 44 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-0 md:pl-20"
                >
                  <div className="absolute left-0 top-2 z-10 hidden md:block">
                    <div className={`relative grid h-13 w-13 place-items-center rounded-full border-2 shadow-lg transition-all duration-500 ${
                      isActive || isComplete
                        ? "border-primary bg-primary text-primary-foreground shadow-primary/30"
                        : "border-primary bg-background text-primary shadow-primary/10"
                    }`}>
                      <div className="absolute inset-[-7px] rounded-full border border-primary/20 freelance-pulse-ring" />
                      <span className={`font-mono text-sm font-bold ${isActive || isComplete ? "text-primary-foreground" : "text-primary"}`}>
                        {isComplete ? <CheckCircle className="h-5 w-5" /> : step.step}
                      </span>
                    </div>
                  </div>

                  <Tilt3DCard
                    intensity={index === 1 ? 10 : 7}
                    className={`group overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-colors duration-500 hover:border-primary/50 hover:shadow-xl ${isActive ? "border-primary/50 shadow-xl shadow-primary/10" : ""}`}
                  >
                    <div className="absolute -inset-x-8 -top-24 h-44 bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
                      <div
                        className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"
                        style={{ transform: "translateZ(46px)" }}
                      >
                        {step.icon}
                      </div>
                      <div style={{ transform: "translateZ(28px)" }}>
                        <div className="mb-2 flex items-center gap-3">
                          <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary md:hidden">
                            {step.step}
                          </span>
                          <h4 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                            {step.title}
                          </h4>
                        </div>
                        <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                        {step.deliverables && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable) => (
                              <span
                                key={deliverable}
                                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Tilt3DCard>
                </motion.div>
              </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ArchitectureBlueprintSection() {
  const [activeId, setActiveId] = useState("api");
  const shouldReduceMotion = Boolean(useReducedMotion());
  const activeNode = architectureNodes.find((node) => node.id === activeId) ?? architectureNodes[2];

  return (
    <section id="freelance-architecture" className="py-24 md:py-32 bg-secondary/30 border-y overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <FadeIn>
          <div className="mb-12 flex items-center gap-4">
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                03. Architecture
              </h2>
              <h3 className="text-3xl font-display font-bold md:text-4xl">
                Full-stack systems, end to end
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Hover or tap each module to inspect how product surfaces, APIs, AI workflows, cloud deployment, and data layers connect.
              </p>
            </div>
            <div className="ml-8 hidden h-px flex-grow bg-border md:block" />
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border bg-card/70 shadow-xl shadow-primary/5 backdrop-blur-sm lg:min-h-[560px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,hsl(var(--primary)/0.18),transparent_30%),radial-gradient(circle_at_88%_78%,hsl(var(--primary)/0.14),transparent_28%)]" />
            <div className="absolute left-5 top-5 z-20 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
              Isometric delivery map
            </div>

            <div className="absolute inset-x-0 top-16 flex justify-center lg:inset-y-0 lg:left-0 lg:right-auto lg:w-[68%] lg:items-center">
              <motion.div
                className="freelance-preserve-3d relative h-[390px] w-[min(92vw,620px)]"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { rotateY: activeId === "api" ? 0 : activeNode.x > 50 ? -5 : 5 }
                }
                transition={{ type: "spring", stiffness: 90, damping: 18 }}
                style={{
                  rotateX: shouldReduceMotion ? 0 : 58,
                  rotateZ: shouldReduceMotion ? 0 : -35,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute inset-8 rounded-[2rem] border border-primary/10 bg-background/70 shadow-2xl"
                  style={{ transform: "translateZ(-18px)" }}
                />
                <div
                  className="absolute inset-8 rounded-[2rem] opacity-60"
                  style={{
                    transform: "translateZ(-14px)",
                    backgroundImage:
                      "linear-gradient(hsl(var(--border)/0.55) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)/0.55) 1px, transparent 1px)",
                    backgroundSize: "34px 34px",
                  }}
                />

                {architectureConnections.map(([fromId, toId]) => {
                  const from = architectureNodes.find((node) => node.id === fromId)!;
                  const to = architectureNodes.find((node) => node.id === toId)!;
                  return (
                    <ArchitectureBeam
                      key={`${fromId}-${toId}`}
                      from={from}
                      to={to}
                      active={activeId === fromId || activeId === toId}
                    />
                  );
                })}

                {architectureNodes.map((node) => {
                  const isActive = node.id === activeId;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onMouseEnter={() => setActiveId(node.id)}
                      onFocus={() => setActiveId(node.id)}
                      onClick={() => setActiveId(node.id)}
                      className={`absolute z-10 flex min-w-24 -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-2xl border px-3 py-2 text-left text-xs font-semibold shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground shadow-primary/30"
                          : "border-border bg-background/95 text-foreground hover:border-primary/50 hover:text-primary"
                      }`}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: `translate(-50%, -50%) translateZ(${isActive ? node.depth + 35 : node.depth}px)`,
                      }}
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${
                          isActive ? "bg-primary-foreground/15" : "bg-primary/10 text-primary"
                        }`}
                      >
                        {node.icon}
                      </span>
                      <span>{node.shortLabel}</span>
                    </button>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              key={activeNode.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border bg-background/90 p-5 shadow-xl backdrop-blur-md lg:bottom-8 lg:left-auto lg:right-8 lg:top-1/2 lg:w-80 lg:-translate-y-1/2"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  {activeNode.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Selected layer</p>
                  <h4 className="text-xl font-bold">{activeNode.label}</h4>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{activeNode.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeNode.deliverables.map((deliverable) => (
                  <span
                    key={deliverable}
                    className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
              <div className="mt-5 rounded-xl border bg-card/80 p-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Flow:</span> user request → product surface → API core → data / AI / cloud response
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-primary">
                Product-ready architecture <ArrowRight className="h-3.5 w-3.5" /> delivery-focused implementation
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ArchitectureBeam({
  from,
  to,
  active,
}: {
  from: ArchitectureNode;
  to: ArchitectureNode;
  active: boolean;
}) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <div
      className={`absolute h-1 overflow-visible rounded-full transition-all duration-500 ${
        active
          ? "bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.55)]"
          : "bg-primary/25"
      }`}
      style={{
        left: `${from.x}%`,
        top: `${from.y}%`,
        width: `${length}%`,
        transform: `rotate(${angle}deg) translateZ(24px)`,
        transformOrigin: "left center",
      }}
    >
      {active && (
        <>
          <span className="freelance-data-packet" />
          <span className="freelance-data-packet" style={{ animationDelay: "0.9s" }} />
        </>
      )}
    </div>
  );
}

export function CaseStudyDevice({
  title,
  previewUrl,
  onOpen,
}: {
  title: string;
  previewUrl: string;
  onOpen: () => void;
}) {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group/device relative mb-6 block w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/40"
      aria-label={`Open demo preview for ${title}`}
    >
      <div className="absolute -inset-2 rounded-[1.35rem] bg-primary/10 opacity-0 blur-xl transition-opacity duration-500 group-hover/device:opacity-100" />
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { rotateX: -7, rotateY: 7, y: -8 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="relative overflow-hidden rounded-2xl border bg-background shadow-xl shadow-primary/10"
        style={{ transformPerspective: 900, transformStyle: "preserve-3d" }}
      >
        <div className="flex h-8 items-center gap-1.5 border-b bg-secondary/80 px-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-2 h-3 flex-1 rounded-full bg-background/70" />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <img
            src={previewUrl}
            alt={`${title} demo preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover/device:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover/device:opacity-100">
            <span className="flex items-center gap-2 rounded-full border border-primary/30 bg-background/85 px-4 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur">
              <PlayCircle className="h-4 w-4" /> Preview demo
            </span>
          </div>
        </div>
      </motion.div>
    </button>
  );
}
