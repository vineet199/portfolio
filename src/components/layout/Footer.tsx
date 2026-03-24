import { FolderGit2, Link2, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-display font-bold">Vineet S Kamath</h2>
          <p className="text-muted-foreground mt-1">Staff Engineer · AI & Cloud Platforms</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background border text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="GitHub">
            <FolderGit2 size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background border text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="LinkedIn">
            <Link2 size={20} />
          </a>
          <a href="mailto:vineetsk99@gmail.com" className="p-2 rounded-full bg-background border text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-8 text-center md:text-left">
        <p className="text-sm text-muted-foreground/70">
          © {currentYear} Vineet S Kamath. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
