"use client";

import Image from "next/image";
import { MapPin, Download, Mail } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { personalInfo } from "@/lib/data";

const techLogos = [
  { name: "AWS", src: "/logos/tech/aws.png" },
  { name: "Kubernetes", src: "/logos/CKA.png" },
  { name: "Docker", src: "/logos/tech/docker.png" },
  { name: "Terraform", src: "/logos/tech/terraform.png" },
  { name: "Linux", src: "/logos/tech/linux.jpeg" },
  { name: "GitHub", src: "/logos/tech/github.png" },
  { name: "GitLab", src: "/logos/tech/gitlab.png" },
  { name: "Istio", src: "/logos/tech/istio.png" },
  { name: "Vault", src: "/logos/tech/vault.png" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    animate: {
      transition: shouldReduceMotion ? {} : { delayChildren: 0.5, staggerChildren: 0.85 },
    },
  };

  const item: Variants = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.85, ease: "easeOut" } },
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <motion.div
        className="pointer-events-none absolute right-8 top-1/2 z-10 hidden w-[360px] -translate-y-1/2 grid-cols-3 gap-3 xl:grid 2xl:right-24"
        initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: "easeOut", delay: 3.1 }}
        aria-label="Core technology logos"
      >
        {techLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-white/90 p-3 shadow-2xl shadow-black/25 backdrop-blur-sm"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={96}
              height={56}
              className="max-h-12 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>

      {/* Content — sequential reveal via variants */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div
          className="max-w-3xl flex flex-col gap-6"
          variants={container}
          initial="initial"
          animate="animate"
        >
          {/* Role badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
              {personalInfo.role}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={item}
            className="flex items-center gap-1.5 text-sm text-white/60"
          >
            <MapPin className="size-4 shrink-0" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-white/20 bg-white/10 text-white text-sm font-medium hover:bg-white/20 backdrop-blur-sm transition-colors"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
