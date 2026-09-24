import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/manas/AnimatedBackground";
import { services } from "@/lib/manas-data";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Manas Advertising" },
      { name: "description", content: "Get a free quote from Manas Advertising. Call, WhatsApp, email, or visit our Delhi studio. Reply within 24 hours on business days." },
      { property: "og:title", content: "Contact — Manas Advertising" },
      { property: "og:description", content: "Get a free quote. Call, WhatsApp or write to us — we usually reply within an hour." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "How fast can you turn around a project?", a: "Small print jobs ship in 24–48 hours. Van wraps and canopy sets: 5–7 working days. Multi-store rollouts: 2–4 weeks depending on scale." },
  { q: "Do you deliver outside Delhi?", a: "Yes. We serve 40+ Indian cities directly and can install nationwide through our vetted partner network." },
  { q: "What's the minimum order size?", a: "There is none. We've printed a single business card and wrapped a fleet of 400 vehicles. The standard stays identical." },
  { q: "Can you handle a full brand rollout?", a: "That's our sweet spot. Design, print, install, refresh cycles — one team, one point of contact." },
  { q: "Do you provide artwork design?", a: "Yes. Our in-house creative team designs everything from single flyers to full identity systems." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Contact
          </div>
          <h1 className="mt-6 font-display text-6xl font-bold sm:text-7xl">Let's talk <span className="text-gradient">brand.</span></h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Reach out any way you like — we usually reply within an hour on business days.
          </p>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Phone, label: "Call us", value: "+91 99999 99999", href: "tel:+919999999999" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: "https://wa.me/919999999999" },
              { icon: Mail, label: "Email", value: "hello@manasadvertising.com", href: "mailto:hello@manasadvertising.com" },
              { icon: MapPin, label: "Studio", value: "MG Road, New Delhi", href: "#map" },
            ].map((c, i) => (
              <motion.a
                key={c.label} href={c.href}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group rounded-2xl glass-strong p-6 transition hover:-translate-y-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/90 text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="mt-1 font-display text-lg font-semibold transition group-hover:text-accent">{c.value}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display text-4xl font-bold">Visit the studio.</h2>
              <p className="mt-3 text-muted-foreground">Manas House, MG Road, New Delhi 110001. Walk-ins welcome — but a call ahead is kind.</p>
            </div>
            <div className="rounded-2xl glass p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/90 text-primary-foreground"><Clock className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                  <div className="text-sm font-semibold">Mon – Sat · 09:00 – 19:00</div>
                </div>
              </div>
            </div>
            <div id="map" className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Manas Advertising location"
                src="https://www.google.com/maps?q=Connaught+Place,+New+Delhi&output=embed"
                className="h-72 w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-3xl glass-strong p-8"
          >
            <h3 className="font-display text-2xl font-semibold">Request a quote</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tell us what you need. We'll take it from there.</p>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-6 text-center">
                <div className="font-display text-xl font-semibold text-accent">Message received.</div>
                <p className="mt-2 text-sm text-muted-foreground">A brand manager will reach out within 24 hours. Thank you.</p>
              </div>
            ) : (
              <div className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" />
                  <input required placeholder="Company" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" />
                  <input required placeholder="Phone / WhatsApp" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" />
                </div>
                <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary">
                  <option className="bg-card">Service — Select one</option>
                  {services.map((s) => <option key={s.slug} className="bg-card">{s.title}</option>)}
                  <option className="bg-card">Multiple / Not sure</option>
                </select>
                <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary">
                  <option className="bg-card">Budget range</option>
                  <option className="bg-card">Under ₹50,000</option>
                  <option className="bg-card">₹50,000 – ₹2,00,000</option>
                  <option className="bg-card">₹2,00,000 – ₹10,00,000</option>
                  <option className="bg-card">₹10,00,000+</option>
                </select>
                <textarea rows={4} placeholder="Tell us about your project…" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary" />
                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.01]">
                  Send request <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">FAQs</div>
            <h2 className="mt-3 font-display text-5xl font-bold">Common <span className="text-gradient">questions.</span></h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl glass-strong p-6 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-semibold">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/20 text-accent transition group-open:rotate-45">
                    <span className="text-lg leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
