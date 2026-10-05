'use client';

import { useState } from 'react';
import { CalendarDays, CheckCircle2, Clock, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { profile } from '@/lib/profile';
import { Reveal } from '@/components/reveal';

const callSlots = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
];

function formatBookingDate(date?: Date) {
  if (!date) return '';

  return new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState(callSlots[0]);
  const [sent, setSent] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);

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

  const handleBooking = () => {
    if (!selectedDate) return;

    const date = formatBookingDate(selectedDate);
    const subject = encodeURIComponent(`30 minute call request - ${date}`);
    const body = encodeURIComponent(
      `Hi ${profile.name},\n\nI would like to book a 30 minute call.\n\nDate: ${date}\nTime: ${selectedTime}\n\nName:\nEmail:\nProject notes:\n`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setBookingSent(true);
    setTimeout(() => setBookingSent(false), 4000);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative mx-auto max-w-6xl">
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

        <Reveal delay={120} className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.86fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border/80 bg-card/90 p-6 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
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

          <div className="rounded-2xl border border-border/80 bg-card/90 p-6 shadow-xl shadow-black/5 backdrop-blur transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight">Book a call</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pick a day and time for a 30 minute project chat.
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <CalendarDays className="h-5 w-5" />
              </span>
            </div>

            <div className="mt-5 rounded-xl border border-border bg-background/70">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={{ before: today }}
                className="mx-auto w-fit"
              />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Clock className="h-4 w-4 text-primary" />
                30 minute slots
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {callSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition-all ${
                      selectedTime === slot
                        ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/15'
                        : 'border-border bg-background/70 text-foreground/75 hover:border-primary/40 hover:text-foreground'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-border/60 pt-5 sm:flex-row sm:items-center">
              <Button
                type="button"
                onClick={handleBooking}
                disabled={!selectedDate}
                className="gap-2"
              >
                <CalendarDays className="h-4 w-4" />
                Book Call
              </Button>
              <div className="min-h-5 text-sm text-muted-foreground">
                {selectedDate ? (
                  <span>
                    {formatBookingDate(selectedDate)} at {selectedTime}
                  </span>
                ) : (
                  <span>Select a date to continue.</span>
                )}
                {bookingSent && (
                  <span className="ml-0 mt-1 flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400 sm:ml-3 sm:mt-0 sm:inline-flex">
                    <CheckCircle2 className="h-4 w-4" />
                    Opening mail client...
                  </span>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
