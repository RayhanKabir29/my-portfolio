'use client';

import { useEffect, useState } from 'react';
import {
  GitBranch,
  AtSign,
  Link2,
  Users,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

import { profile, type SocialLink } from '@/lib/profile';
import { SplitText } from '@/components/split-text';
import { Reveal } from '@/components/reveal';

const socialIcons: Record<SocialLink['icon'], typeof GitBranch> = {
  github: GitBranch,
  twitter: AtSign,
  linkedin: Link2,
  facebook: Users,
};

export function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-45" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
         <Reveal>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for new opportunities
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {mounted ? (
                <SplitText
                  text={`Hi, I'm ${profile.name}`}
                  delay={120}
                  stagger={38}
                />
              ) : (
                `Hi, I'm ${profile.name}`
              )}
            </h2>

            <p className="mt-4 max-w-3xl text-lg font-semibold leading-relaxed text-foreground/85">
              {profile.headline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/75">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                {profile.phone}
              </a>
            </div>
          </Reveal>
        <div className="grid items-start gap-10 lg:grid-cols-[1.45fr_0.9fr]">
         
          <Reveal>
            <div className="mt-8 max-w-3xl space-y-5 rounded-2xl border border-border/70 bg-card/75 p-6 text-base leading-8 text-foreground/80 shadow-xl shadow-black/5 backdrop-blur dark:bg-card/70 dark:text-foreground/85">
              {profile.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0} className="lg:pt-2">
            <div className="rounded-2xl border border-border/80 bg-card/80 p-6 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
                Connect with me
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 rounded-xl border border-border bg-background/80 px-3 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary hover:text-foreground"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      {social.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 space-y-3 border-t border-border/60 pt-5 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-foreground/75 transition-colors hover:text-foreground"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                    <Mail className="h-4 w-4 text-primary" />
                  </span>
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-foreground/75 transition-colors hover:text-foreground"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                    <Phone className="h-4 w-4 text-primary" />
                  </span>
                  {profile.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
