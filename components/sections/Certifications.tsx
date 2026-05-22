import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { certifications } from "@/lib/data";

const colorMap: Record<string, { bg: string; text: string; border: string; logo: string }> = {
  blue:   { bg: "bg-accent",           text: "text-accent-foreground", border: "border-border",          logo: "bg-blue-900/40 border-blue-700/30 text-blue-300" },
  orange: { bg: "bg-orange-900/30",    text: "text-orange-400",        border: "border-orange-800/40",   logo: "bg-orange-900/40 border-orange-700/30 text-orange-300" },
  purple: { bg: "bg-purple-900/30",    text: "text-purple-400",        border: "border-purple-800/40",   logo: "bg-purple-900/40 border-purple-700/30 text-purple-300" },
  sky:    { bg: "bg-sky-900/30",       text: "text-sky-400",           border: "border-sky-800/40",      logo: "bg-sky-900/40 border-sky-700/30 text-sky-300" },
  red:    { bg: "bg-red-900/30",       text: "text-red-400",           border: "border-red-800/40",      logo: "bg-red-900/40 border-red-700/30 text-red-300" },
  gray:   { bg: "bg-muted",            text: "text-muted-foreground",  border: "border-border",          logo: "bg-muted border-border text-muted-foreground" },
};

function LogoPlaceholder({ shortName, className }: { shortName: string; className: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed text-[10px] font-mono font-semibold leading-tight text-center ${className}`}
    >
      {shortName}
    </div>
  );
}

export function Certifications() {
  const featured = certifications.find((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </Reveal>

        {/* Kubestronaut featured card */}
        {featured && (
          <Reveal delay={0.05}>
            <div className="mb-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white relative overflow-hidden">
              <div className="absolute -top-8 -right-8 size-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-12 -left-8 size-56 rounded-full bg-white/5" />

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  {featured.logo ? (
                    <div className="flex items-center justify-center size-20 rounded-2xl bg-white/10 overflow-hidden">
                      <Image
                        src={featured.logo}
                        alt={featured.name}
                        width={72}
                        height={72}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center size-20 rounded-2xl bg-white/10 border border-dashed border-white/20">
                      <Star className="size-10 text-yellow-300 fill-yellow-300" />
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                      Top Achievement
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{featured.name}</h3>
                  <p className="text-blue-100 text-sm mb-2">
                    {featured.issuer} · {featured.date}
                  </p>
                  <p className="text-sm text-blue-100 leading-relaxed max-w-xl">
                    Awarded to engineers who hold all five core Kubernetes certifications (CKA, CKAD, CKS, KCNA, KCSA) — one of fewer than 1,000 holders globally.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Kubernetes certs highlight */}
        <Reveal delay={0.08}>
          <div className="mb-8 p-5 rounded-2xl bg-accent border border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-3">
              Kubernetes Certifications — All 5
            </p>
            <div className="flex flex-wrap gap-3">
              {rest
                .filter((c) => c.color === "blue")
                .map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border"
                  >
                    {c.logo ? (
                      <div className="size-9 shrink-0 flex items-center justify-center rounded-lg overflow-hidden bg-white">
                        <Image
                          src={c.logo}
                          alt={c.shortName}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <LogoPlaceholder
                        shortName={c.shortName}
                        className="w-9 h-9 bg-blue-900/40 border-blue-700/30 text-blue-300"
                      />
                    )}
                    <div>
                      <p className="text-xs font-semibold text-accent-foreground leading-none">
                        {c.name.replace(/Certified /g, "").split(" (")[0]}
                      </p>
                      <p className="text-[10px] text-blue-400 mt-0.5">{c.date}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Reveal>

        {/* All other certs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest
            .filter((c) => c.color !== "blue")
            .map((cert, i) => {
              const colors = colorMap[cert.color] ?? colorMap.gray;
              return (
                <Reveal key={cert.name} delay={0.1 + i * 0.06}>
                  <div
                    className={`flex items-start gap-3 p-4 rounded-xl border ${colors.bg} ${colors.border}`}
                  >
                    {cert.logo ? (
                      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg overflow-hidden bg-white">
                        <Image
                          src={cert.logo}
                          alt={cert.shortName}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <LogoPlaceholder
                        shortName={cert.shortName}
                        className={`w-12 h-12 shrink-0 ${colors.logo}`}
                      />
                    )}
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold leading-snug ${colors.text}`}>
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
        </div>
      </div>
    </section>
  );
}
