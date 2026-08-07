'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { profile } from '@/lib/profile';
import { Reveal } from '@/components/reveal';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Get in{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              touch
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/75">
            Have a project in mind or just want to say hello? Drop a message and
            I&apos;ll get back to you.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border/80 bg-card/80 p-6 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit" className="gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
              {sent && (
                <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Opening your mail client...
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
