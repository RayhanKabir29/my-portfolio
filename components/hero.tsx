'use client';

import { useEffect, useState } from 'react';
import { Sparkles, Layers, CheckCircle2, Code2, Clock } from 'lucide-react';
import { projects } from '@/lib/projects';
import { SplitText } from '@/components/split-text';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stats = (() => {
    const delivered = projects.filter(
      (p) => p.status === 'Delivered' || p.status === 'Complete'
    ).length;
    const reactCount = projects.filter((p) => p.framework === 'React').length;
    const nextCount = projects.filter((p) => p.framework === 'Next.js').length;
    return { total: projects.length, delivered, reactCount, nextCount };
  })();

  const statItems = [
    { label: 'Total Projects', value: stats.total, icon: Layers },
    { label: 'Delivered', value: stats.delivered, icon: CheckCircle2 },
    { label: 'React Apps', value: stats.reactCount, icon: Code2 },
    { label: 'Next.js Apps', value: stats.nextCount, icon: Clock },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-55" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm font-semibold text-foreground/75 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {stats.delivered} Projects Delivered
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {mounted ? (
              <SplitText text="Building software that" stagger={34} />
            ) : (
              'Building software that'
            )}
            <span className="mt-2 block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {mounted ? (
                <SplitText text="ships and scales" delay={420} stagger={34} />
              ) : (
                'ships and scales'
              )}
            </span>
          </h1>

          <p className="text-balance mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-foreground/75">
            A curated collection of production applications delivered across
            GovTech, FinTech, HealthTech, and beyond - built with React and
            Next.js.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl animate-fade-up grid-cols-2 gap-4 sm:grid-cols-4">
          {statItems.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/80 bg-card/80 p-4 text-center shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
