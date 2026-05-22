import { Star, GraduationCap, Server, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { personalInfo } from "@/lib/data";

const highlightIcons: Record<string, React.ReactNode> = {
  "CNCF Kubestronaut": <Star className="size-4 text-yellow-400 shrink-0" />,
  "AIT Master's": <GraduationCap className="size-4 text-accent-foreground shrink-0" />,
  "Hands-on DevOps since 2022": <Server className="size-4 text-accent-foreground shrink-0" />,
  "English & Japanese (N3)": <Globe className="size-4 text-accent-foreground shrink-0" />,
};

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            About
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio */}
          <Reveal className="lg:col-span-2" delay={0.05}>
            <div className="flex flex-col gap-4">
              {personalInfo.bio.map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Highlight chips */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                At a glance
              </p>
              {personalInfo.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted border border-border"
                >
                  {highlightIcons[item] ?? <span className="size-2 rounded-full bg-primary shrink-0" />}
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
