import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles, Award, Users, Zap, Shield, Heart, Target, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/manas/AnimatedBackground";
import { Counter } from "@/components/manas/Counter";
import { clients, testimonials } from "@/lib/manas-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Manas Advertising" },
      { name: "description", content: "Fifteen years of building brand presence across India. Meet the people, principles and print floor behind Manas Advertising." },
      { property: "og:title", content: "About — Manas Advertising" },
      { property: "og:description", content: "Fifteen years of building brand presence across India. Our story, values and team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Craft over volume", text: "We turn away work we can't do brilliantly. Every install carries our name." },
  { icon: Zap, title: "Speed with intent", text: "Same-week turnarounds are standard — because a delayed campaign is a lost one." },
  { icon: Shield, title: "Materials that last", text: "3M, Avery, and premium papers only. No substitutions, no shortcuts." },
  { icon: Heart, title: "Made by hand, always", text: "Machines finish. People decide. Every job is checked by a human before it ships." },
  { icon: Target, title: "One point of contact", text: "You get a dedicated brand manager. Not a ticket queue." },
  { icon: Users, title: "In-house everything", text: "Design, print, install, delivery — one team, one accountability line." },
];

const team = [
  { name: "Aditya Manas", role: "Founder & Creative Director", initial: "A" },
  { name: "Sneha Verma", role: "Head of Production", initial: "S" },
  { name: "Rajat Khanna", role: "Print Studio Lead", initial: "R" },
  { name: "Farah Ahmed", role: "Client Partner", initial: "F" },
  { name: "Vikram Joshi", role: "Install Ops Head", initial: "V" },
  { name: "Ishaan Batra", role: "Design Lead", initial: "I" },
];

const timeline = [
  { year: "2010", title: "Founded in Delhi", text: "Two people, one flex printer, one office room." },
  { year: "2014", title: "First fleet wrap", text: "Wrapped 12 vehicles for a national FMCG. Word spread." },
  { year: "2017", title: "Print studio expansion", text: "Added offset presses and moved to a 20,000 sq ft facility." },
  { year: "2020", title: "Nationwide network", text: "Opened install partnerships across 20 cities." },
  { year: "2023", title: "In-shop branding division", text: "Retail interiors division launched. 40 store rollout in year one." },
  { year: "2025", title: "1,200+ projects delivered", text: "Serving 480+ clients across 40 cities and counting." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> About Manas
          </div>
          <h1 className="mt-6 font-display text-6xl font-bold sm:text-7xl leading-[0.95]">
            Fifteen years of making brands <span className="text-gradient">impossible to ignore.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Manas Advertising began in 2010 with a single flex printer and a stubborn belief:
            that great advertising is a craft, not a commodity. Today, we run one of India's most
            integrated brand-production houses — design, print, and install, all in-house.
          </p>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 rounded-3xl glass-strong p-8 sm:grid-cols-4">
            {[
              { n: 15, s: "+", l: "Years" },
              { n: 1200, s: "+", l: "Projects" },
              { n: 480, s: "+", l: "Clients" },
              { n: 40, s: "+", l: "Cities" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">What we believe</div>
            <h2 className="mt-3 font-display text-5xl font-bold">Six principles. <span className="text-gradient">Zero exceptions.</span></h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-2xl glass-strong p-7 transition hover:-translate-y-1"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/90 text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Our story</div>
            <h2 className="mt-3 font-display text-5xl font-bold">Fifteen years, <span className="text-gradient">one thread.</span></h2>
          </div>

          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className={`relative flex flex-col gap-4 pl-12 md:flex-row md:items-center md:gap-8 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="rounded-2xl glass-strong p-6">
                      <div className="text-sm font-semibold text-accent">{t.year}</div>
                      <h3 className="mt-1 font-display text-xl font-semibold">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                    <div className="grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background" />
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">The team</div>
            <h2 className="mt-3 font-display text-5xl font-bold">Small crew. <span className="text-gradient">Big output.</span></h2>
            <p className="mt-4 text-muted-foreground">The people who own your project from brief to install.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-5 rounded-2xl glass-strong p-6"
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl text-2xl font-bold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  {m.initial}
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">{m.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{m.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Trusted by</div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Brands that returned.</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {clients.map((c) => (
              <div key={c} className="grid h-20 place-items-center rounded-xl glass text-xs font-bold tracking-[0.2em] text-muted-foreground transition hover:text-foreground">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] glass-strong p-10 text-center sm:p-16">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Want to see what we can do?</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Book a 20-minute studio call. Bring a brief, or just an idea.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">
              Talk to Manas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
