import { FadeIn } from "@/components/FadeIn";

type TrustedPartner = {
  name: string;
  label: string;
  wordmark: string;
  href?: string;
};

const trustedPartners: TrustedPartner[] = [
  {
    name: "Oracle Cloud Infrastructure",
    label: "Console Platform & AI Tooling",
    wordmark: "ORACLE",
    href: "https://www.oracle.com/cloud/",
  },
  {
    name: "Oracle Alloy",
    label: "Sovereign Cloud Configurator",
    wordmark: "ALLOY",
  },
  {
    name: "Cisco Spaces",
    label: "Smart Workspaces Analytics",
    wordmark: "CISCO",
    href: "https://spaces.cisco.com/",
  },
  {
    name: "Cisco Smart Workspaces",
    label: "Flagship Location Intelligence",
    wordmark: "SPACES",
  },
];

export function TrustedByStrip() {
  return (
    <section
      className="relative py-10 md:py-12 border-y bg-background"
      aria-label="Teams and products I've shipped for"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[1.75rem] border bg-card/75 px-5 py-5 shadow-sm md:px-7 md:py-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:max-w-[280px]">
                <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                  Teams & products
                </p>
                <h3 className="mt-2 text-xl md:text-2xl font-display font-bold">
                  Enterprise platforms I've helped scale
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:flex-1">
                {trustedPartners.map((partner) => (
                  <TrustedPartnerCard key={partner.name} partner={partner} />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TrustedPartnerCard({ partner }: { partner: TrustedPartner }) {
  const content = (
    <div className="group h-full rounded-2xl border border-border/70 bg-background/70 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background hover:shadow-md">
      <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-muted-foreground/70 group-hover:text-primary uppercase">
        {partner.wordmark}
      </p>
      <p className="mt-2 text-sm font-semibold text-foreground leading-tight">
        {partner.name}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        {partner.label}
      </p>
    </div>
  );

  if (!partner.href) {
    return <div aria-label={`${partner.name} — ${partner.label}`}>{content}</div>;
  }

  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${partner.name} — ${partner.label}`}
      className="rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {content}
    </a>
  );
}
