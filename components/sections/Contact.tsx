import { Mail, Phone, MapPin, Globe, GitMerge, GitBranch } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { personalInfo } from "@/lib/data";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "aung-htet-lwin",
    href: personalInfo.linkedin,
  },
  {
    icon: GitMerge,
    label: "GitLab",
    value: "aunghtetlwin.atl",
    href: personalInfo.gitlab,
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "aunghtetlwin-gh",
    href: personalInfo.github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground text-base mb-10 max-w-lg">
            Currently open to DevOps, Cloud, and Platform Engineering roles — remote or based in Thailand / Southeast Asia.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={i * 0.05}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-muted/40 hover:bg-accent hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex items-center justify-center size-10 rounded-xl bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground truncate max-w-[160px]">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-muted/40">
                    <div className="flex items-center justify-center size-10 rounded-xl bg-accent text-accent-foreground shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Primary CTA */}
        <Reveal delay={0.25}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 h-14 px-10 rounded-xl bg-primary text-primary-foreground text-base font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <Mail className="size-5" />
            Send an Email
          </a>
        </Reveal>
      </div>
    </section>
  );
}
