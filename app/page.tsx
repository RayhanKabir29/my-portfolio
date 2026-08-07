"use client";

import { useEffect, useState } from "react";
import { Layers } from "lucide-react";

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
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_5%,hsl(var(--primary)/0.14),transparent_30%),radial-gradient(circle_at_85%_28%,hsl(var(--accent)/0.16),transparent_28%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/0.42),hsl(var(--background)))] text-foreground dark:bg-[radial-gradient(circle_at_18%_6%,hsl(var(--primary)/0.18),transparent_30%),radial-gradient(circle_at_82%_34%,hsl(var(--accent)/0.14),transparent_30%),linear-gradient(180deg,hsl(35_13%_8%),hsl(34_18%_12%)_45%,hsl(35_13%_8%))]">
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
