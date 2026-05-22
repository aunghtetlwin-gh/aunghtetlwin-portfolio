import { Mail, Globe, GitMerge } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Roadmap } from "@/components/sections/Roadmap";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { BackToTop } from "@/components/ui/back-to-top";
import { personalInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Roadmap />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center size-8 rounded-lg text-muted-foreground/60 hover:text-muted-foreground hover:bg-accent transition-colors"
            >
              <Globe className="size-4" />
            </a>
            <a
              href={personalInfo.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitLab"
              className="flex items-center justify-center size-8 rounded-lg text-muted-foreground/60 hover:text-muted-foreground hover:bg-accent transition-colors"
            >
              <GitMerge className="size-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex items-center justify-center size-8 rounded-lg text-muted-foreground/60 hover:text-muted-foreground hover:bg-accent transition-colors"
            >
              <Mail className="size-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground/60">
            Built with Next.js · Tailwind CSS · Motion
          </p>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
