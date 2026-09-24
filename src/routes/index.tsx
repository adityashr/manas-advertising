import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Star, Check, Phone } from "lucide-react";
import { ServicesCircle } from "@/components/manas/ServicesCircle";
import { Counter } from "@/components/manas/Counter";
import { services, testimonials, clients } from "@/lib/manas-data";
import heroBg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manas Advertising — Your Brand Everywhere." },
      { name: "description", content: "Premium advertising, printing and branding. Van, canopy, umbrella, flex, vinyl, offset and in-shop branding that makes your business impossible to ignore." },
      { property: "og:title", content: "Manas Advertising — Your Brand Everywhere." },
      { property: "og:description", content: "Premium advertising, printing and branding solutions that make your business impossible to ignore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section
      className="hero relative min-h-[760px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(3,6,12,0.68) 0%, rgba(3,6,12,0.46) 30%, rgba(3,6,12,0.18) 55%, rgba(3,6,12,0.04) 100%), url(${heroBg})`,
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="w-full max-w-3xl">
          <div className="hero-badge inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4 L20 18 L4 18 Z" />
            </svg>
            Creative Advertising & Branding Since 2017
          </div>

          <h1 className="mt-10 text-5xl font-display font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Building Brands Through
            <span className="line2 text-cyan-300"> Creative Advertising</span>
          </h1>

          <p className="hero-desc">
            Manas Advertising delivers creative advertising, printing, vehicle branding, promotional, and outdoor branding solutions that help businesses stand out and connect with the right audience.
          </p>

          <div className="hero-buttons">
            <Link
              to="/contact"
              className="primary-btn"
            >
              Consult With Us
              <span className="arrow-circle">→</span>
            </Link>
            <a
              href="#work"
              className="secondary-btn"
            >
              View Our Work
            </a>
            <span className="experience">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-cyan-200">
                <circle cx="12" cy="8" r="5" />
                <path d="M8 13 L6 22 L12 19 L18 22 L16 13" />
              </svg>
              9+ Years Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const specialties = [
  {
    label: "Van Advertising",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <rect x="1" y="7" width="14" height="10" rx="1" />
        <path d="M15 10 H19 L22 13 V17 H15 Z" />
        <circle cx="6" cy="18.5" r="1.6" />
        <circle cx="18" cy="18.5" r="1.6" />
      </svg>
    ),
  },
  {
    label: "Flex & Vinyl Printing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <rect x="4" y="3" width="16" height="6" rx="1" />
        <rect x="4" y="9" width="16" height="8" rx="1" />
        <rect x="8" y="17" width="8" height="4" />
      </svg>
    ),
  },
  {
    label: "In-Shop Branding",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M3 10 L12 3 L21 10" />
        <path d="M5 10 V21 H19 V10" />
        <rect x="10" y="14" width="4" height="7" />
      </svg>
    ),
  },
  {
    label: "Billboard & Outdoor",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <rect x="2" y="5" width="20" height="13" rx="1" />
        <path d="M8 21 H16 M12 18 V21" />
      </svg>
    ),
  },
  {
    label: "Promotional Kiosks & Canopies",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M3 11 L15 6 V16 L3 13 Z" />
        <path d="M15 9 L21 8 V15 L15 14" />
        <path d="M6 13 L7 18 H9 L8 13" />
      </svg>
    ),
  },
];

function Specialties() {
  return (
    <section className="specialties bg-[#060a11] border-t border-white/5 py-20">
      <div className="specialties-inner mx-auto max-w-7xl px-6">
        <div className="specialties-title flex items-center gap-3 text-cyan-200 text-xs font-semibold uppercase tracking-[0.5px] mb-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8 L12 12 L15 14" />
          </svg>
          OUR KEY SPECIALTIES
        </div>
        <div className="specialties-list flex flex-wrap gap-9">
          {specialties.map((item) => (
            <div key={item.label} className="spec-item flex items-center gap-3 text-sm font-semibold text-[#eef3f7]">
              <div className="icon h-5 w-5 text-cyan-200">{item.icon}</div>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">Our Services</div>
          <h2 className="mt-5 font-display text-5xl font-bold sm:text-6xl">Every surface. <span className="text-gradient">Every city.</span></h2>
          <p className="mt-4 text-muted-foreground">Seven disciplines. One relentless standard. We handle the concept, the print, and the install — end to end.</p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl glass-strong transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/90 text-primary-foreground backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                  <Link to="/services" hash={s.slug} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition group-hover:gap-2.5">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">The Manas Method</div>
          <h2 className="mt-5 font-display text-5xl font-bold sm:text-6xl">A single loop <br /> that <span className="text-gradient">never breaks.</span></h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            From the first sketch to the final install, every service connects. That's how we deliver campaigns that feel written by one hand — because they are.
          </p>
          <ul className="mt-8 space-y-3">
            {["In-house creative, print and install teams", "Colour-accurate, weatherproof materials", "Nationwide install network", "One dedicated brand manager per project"].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/20 text-accent"><Check className="h-3 w-3" /></span>
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <ServicesCircle />
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: 1200, s: "+", l: "Projects Completed" },
    { n: 480, s: "+", l: "Happy Clients" },
    { n: 15, s: "+", l: "Years Experience" },
    { n: 40, s: "+", l: "Cities Served" },
    { n: 2, s: "M sq/ft", l: "Print Capacity" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 rounded-3xl glass-strong p-8 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient sm:text-5xl"><Counter to={s.n} suffix={s.s} /></div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">Client Voices</div>
          <h2 className="mt-5 font-display text-5xl font-bold sm:text-6xl">Trusted by <span className="text-gradient">brands that grow.</span></h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.blockquote key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-3xl glass-strong p-7">
              <div className="flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-5 text-base leading-relaxed text-foreground/90">"{t.text}"</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/20 font-semibold text-accent">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] p-12 sm:p-20 text-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-5xl font-bold leading-tight sm:text-7xl">Let's build your <span className="text-gradient">brand.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Free consultation. Quote within 24 hours. National install network ready.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-20px_oklch(0.62_0.24_260/0.9)] transition hover:scale-[1.02]">
                Request a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-4 text-sm font-semibold transition hover:bg-white/10">
                <Phone className="h-4 w-4" /> +91 99999 99999
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Specialties />
      <ServicesGrid />
      <Workflow />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
