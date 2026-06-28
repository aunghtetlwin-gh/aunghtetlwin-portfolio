"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, Code2, Briefcase, GitBranch, Award, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

const links = [
  { label: "About",          href: "#about",          icon: User },
  { label: "Skills",         href: "#skills",         icon: Code2 },
  { label: "Experience",     href: "#experience",     icon: Briefcase },
  { label: "Projects",       href: "#projects",       icon: GitBranch },
  { label: "Certifications", href: "#certifications", icon: Award },
  { label: "Contact",        href: "#contact",        icon: Mail },
];

const slideIn = (delay: number) => ({
  initial: { opacity: 0, x: 28 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as number[], delay },
});

export function Nav() {
  const [open, setOpen]                   = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [ready, setReady]                 = useState(false);
  const [introPlayed, setIntroPlayed]     = useState(false);

  // Gate — nav appears as hero CTAs animate in (~3.9s mark)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3800);
    return () => clearTimeout(t);
  }, []);

  // Scroll → pill threshold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href: string) => activeSection === href.slice(1);

  // Only animate from right on the first intro; skip on scroll-swap replays
  const introProps = (delay: number) =>
    introPlayed ? {} : slideIn(delay);

  return (
    <>
      {/* ── Mobile nav: always a fixed top bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-700 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        } ${ready ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="px-4 flex items-center justify-between h-16">
          <a href="#" onClick={close} className="flex items-center gap-2 font-semibold text-white">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/40 shrink-0">
              <Image src="/photo.jpg" alt={personalInfo.name} width={32} height={32} className="object-cover w-full h-full" />
            </div>
          </a>
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* ── Desktop nav: full bar → floating pill ── */}
      <div className={`hidden md:block transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <AnimatePresence mode="wait">
          {!scrolled ? (
            <motion.header
              key="full-desktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 z-50 bg-transparent"
            >
              <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                  {/* Profile logo + name — slides from right first */}
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 font-semibold text-white hover:text-primary transition-colors"
                    {...introProps(0)}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/40 shrink-0">
                      <Image src="/photo.jpg" alt={personalInfo.name} width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <span className="text-sm">{personalInfo.name}</span>
                  </motion.a>

                  {/* Nav links — stagger from right */}
                  <nav className="flex items-center gap-6">
                    {links.map((link, i) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        {...introProps(0.07 + i * 0.07)}
                        className={`relative text-sm transition-colors pb-0.5 ${
                          isActive(link.href)
                            ? "text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-primary"
                            : "text-white/65 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </nav>

                  {/* Contact button — slides in last */}
                  <motion.a
                    href="#contact"
                    title="Contact"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    {...introProps(0.07 + links.length * 0.07)}
                    onAnimationComplete={() => setIntroPlayed(true)}
                  >
                    <Mail className="size-4" />
                  </motion.a>

                </div>
              </div>
            </motion.header>
          ) : (
            <motion.header
              key="pill-desktop"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/85 backdrop-blur-md border border-border shadow-2xl">
                <a href="#" className="shrink-0" title="Back to top">
                  <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/40">
                    <Image
                      src="/photo.jpg"
                      alt={personalInfo.name}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </a>

                <div className="w-px h-5 bg-border mx-1" />

                <nav className="flex items-center gap-0.5">
                  {links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        title={link.label}
                        className={`p-2 rounded-lg transition-colors ${
                          isActive(link.href)
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        }`}
                      >
                        <Icon className="size-4" />
                      </a>
                    );
                  })}
                </nav>

                <div className="w-px h-5 bg-border mx-1" />

                <a
                  href="#contact"
                  title="Contact"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Mail className="size-4" />
                </a>
              </div>
            </motion.header>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/30" onClick={close} />
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg"
            >
              <nav className="flex flex-col p-4 gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
