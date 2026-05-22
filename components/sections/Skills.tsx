import { Cloud, Box, FileCode2, GitBranch, ShieldCheck, Terminal } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/lib/data";

const groupIcon: Record<string, React.ReactNode> = {
  "Cloud": <Cloud className="size-4" />,
  "Container & Orchestration": <Box className="size-4" />,
  "Infrastructure as Code": <FileCode2 className="size-4" />,
  "CI/CD": <GitBranch className="size-4" />,
  "Observability & Security": <ShieldCheck className="size-4" />,
  "Languages & OS": <Terminal className="size-4" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Skills
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-border/80 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary/70">
                    {groupIcon[group.group]}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {group.group}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-accent text-accent-foreground border border-border hover:border-primary/30 hover:bg-accent/80 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
