"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/about";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Reveal } from "@/components/reveal";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="portfolio-surface min-h-screen text-foreground">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <About />
      <Hero />
      <Projects />
      <ContactForm />
      <Reveal>
        <footer className="border-t border-border/60 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex items-center gap-2.5">     
              </div>
              <p className="text-sm text-muted-foreground">
                Copyright &copy; {new Date().getFullYear()} Rayhan Kabir. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </Reveal>
    </div>
  );
}
