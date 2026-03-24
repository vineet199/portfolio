import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#about");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.querySelector(link.href) as HTMLElement | null)
        .filter(Boolean) as HTMLElement[];

      const scrollPos = window.scrollY + 140;
      let current = "#about";

      for (const section of sections) {
        if (scrollPos >= section.offsetTop) {
          current = `#${section.id}`;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-display font-bold tracking-tighter text-foreground group"
        >
          <span className="text-primary transition-colors">V</span>
          <span className="group-hover:text-primary transition-colors">K.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "relative text-sm font-medium px-1 py-0.5 transition-colors",
                activeSection === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute left-0 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-300 ease-out",
                  activeSection === link.href ? "w-full opacity-100" : "w-0 opacity-0"
                )}
              />
            </a>
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
            className="p-2 rounded-full bg-secondary text-secondary-foreground"
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
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground py-2 border-b border-border/50 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
