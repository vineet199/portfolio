import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Send, Loader2, CheckCircle2, Mail, Phone } from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">05. What's Next?</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you have a role in mind, want to collaborate on something interesting, or just want to say hi — I'm always happy to connect.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <a
                href="mailto:vineetsk99@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                <Mail size={18} />
                vineetsk99@gmail.com
              </a>
              <a
                href="tel:+916360381491"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                <Phone size={18} />
                +91 636 038 1491
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 disabled:opacity-50"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 disabled:opacity-50"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  disabled={status === "loading" || status === "success"}
                  className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 resize-none disabled:opacity-50"
                  placeholder="Hello Vineet, I'd love to chat about..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`
                  w-full sm:w-auto px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2
                  transition-all duration-300
                  ${status === "success" 
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/20" 
                    : "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  }
                  disabled:cursor-not-allowed
                `}
              >
                {status === "idle" && (<>Send Message <Send size={18} /></>)}
                {status === "loading" && (<>Sending... <Loader2 size={18} className="animate-spin" /></>)}
                {status === "success" && (<>Message Sent! <CheckCircle2 size={18} /></>)}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
