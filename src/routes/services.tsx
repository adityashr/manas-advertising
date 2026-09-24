import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { services } from "@/lib/manas-data";
import { AnimatedBackground } from "@/components/manas/AnimatedBackground";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Manas Advertising" },
      { name: "description", content: "Van advertising, canopy, umbrella, flex, vinyl, offset printing and in-shop branding. Full production, install and rollout across India." },
      { property: "og:title", content: "Services — Manas Advertising" },
      { property: "og:description", content: "Seven disciplines. One relentless standard. See what Manas produces and installs across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Services
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 font-display text-6xl font-bold sm:text-7xl">
            What we <span className="text-gradient">produce.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Seven interconnected disciplines under one roof. From the first sketch to the final install — we own the whole chain so the quality never breaks.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={s.slug} id={s.slug}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-3xl glass-strong p-3">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-[420px] w-full rounded-2xl object-cover" />
                  <div className="absolute left-6 top-6 grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-accent">0{i + 1} / Service</div>
                  <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{s.title}</h2>
                  <p className="mt-3 text-lg text-accent/90">{s.tagline}</p>
                  <p className="mt-4 text-muted-foreground">{s.desc}</p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">What's included</div>
                      <ul className="mt-3 space-y-2 text-sm">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Deliverables</div>
                      <ul className="mt-3 space-y-2 text-sm">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">
                    Request a quote for {s.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}
