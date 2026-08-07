'use client';

import { useMemo, useState } from 'react';
import { FolderGit2, Search, Code2, ArrowUpRight } from 'lucide-react';
import {
  projects,
  statusConfig,
  categoryColors,
  type ProjectStatus,
} from '@/lib/projects';
import { Reveal } from '@/components/reveal';

const statusOrder: Record<ProjectStatus, number> = {
  Delivered: 0,
  Complete: 1,
  Ongoing: 2,
  Paused: 3,
};

export function Projects() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeStatus, setActiveStatus] = useState<string>('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const statuses = ['All', 'Delivered', 'Complete', 'Ongoing', 'Paused'];

  const filtered = useMemo(() => {
    return projects
      .filter((p) => {
        const q = query.toLowerCase().trim();
        const matchesQuery =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q));
        const matchesCategory =
          activeCategory === 'All' || p.category === activeCategory;
        const matchesStatus =
          activeStatus === 'All' || p.status === activeStatus;
        return matchesQuery && matchesCategory && matchesStatus;
      })
      .sort(
        (a, b) =>
          statusOrder[a.status] - statusOrder[b.status] ||
          a.name.localeCompare(b.name)
      );
  }, [query, activeCategory, activeStatus]);

  return (
    <main
      id="projects"
      className="relative scroll-mt-20 overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* <Reveal className="mx-auto mb-10 max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              work
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Browse the projects I&apos;ve shipped. Filter by category or status
            to find what you&apos;re looking for.
          </p>
        </div>
      </Reveal> */}

      <div className="mx-auto max-w-7xl">
        {/* <div className="relative mb-6 max-w-2xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects, technologies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div> */}

        <div className="mb-3 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setActiveStatus(st)}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                activeStatus === st
                  ? 'bg-foreground text-background'
                  : 'border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {st !== 'All' && (
                <span
                  className={`h-1.5 w-1.5 rounded-full ${statusConfig[st as ProjectStatus]?.dot}`}
                />
              )}
              {st}
            </button>
          ))}
        </div>

        <div className="mb-6 text-sm text-muted-foreground">
          Showing{' '}
          <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
          of {projects.length} projects
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
            <Search className="mb-3 h-8 w-8 text-muted-foreground/50" />
            <p className="text-lg font-medium">No projects found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <Reveal stagger={60} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => {
              const sc = statusConfig[project.status];
              const isRepo = project.repoUrl.includes('github.com');
              return (
                <article
                  key={project.id}
                  data-reveal-child
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wide ${categoryColors[project.category]}`}
                      >
                        {project.category}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${sc.className}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${sc.dot}`} />
                        {sc.label}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold leading-tight tracking-tight">
                      {project.name}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <Code2 className="h-3.5 w-3.5" />
                        {project.framework}
                      </span>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <FolderGit2 className="h-3.5 w-3.5" />
                        {isRepo ? 'View Repo' : 'View Site'}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </Reveal>
        )}
      </div>
    </main>
  );
}
