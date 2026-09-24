import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "@/lib/manas-data";
import { AnimatedBackground } from "@/components/manas/AnimatedBackground";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Manas Advertising" },
      { name: "description", content: "Selected work: fleet wraps, retail interiors, umbrella campaigns, canopy activations, façade hoardings and premium print." },
      { property: "og:title", content: "Portfolio — Manas Advertising" },
      { property: "og:description", content: "Selected recent work from Manas Advertising across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  { title: "Nexa Retail Flagship", client: "Nexa Retail", category: "In-Shop Branding", year: "2025", img: services[5].img, span: "col-span-2 row-span-2" },
  { title: "Urban Fleet · 40-Van Rollout", client: "Urban Fleet Co.", category: "Van Advertising", year: "2025", img: services[0].img, span: "col-span-2" },
  { title: "BrewLab Umbrella Series", client: "BrewLab", category: "Umbrella Advertising", year: "2024", img: services[2].img, span: "col-span-1" },
  { title: "Skyline Hoarding — MG Road", client: "Motive Motors", category: "Flex Printing", year: "2024", img: services[3].img, span: "col-span-1 row-span-2" },
  { title: "Expo Canopy · Auto India", client: "North Star", category: "Canopy Advertising", year: "2024", img: services[1].img, span: "col-span-1" },
  { title: "Verre Vinyl Windows", client: "Verre & Co.", category: "Vinyl Printing", year: "2023", img: services[4].img, span: "col-span-1" },
  { title: "Halcyon Print Studio", client: "Halcyon Hospitality", category: "Offset Printing", year: "2023", img: services[6].img, span: "col-span-2" },
  { title: "Oasis Hotel Signage", client: "Oasis Hotels", category: "In-Shop Branding", year: "2023", img: services[5].img, span: "col-span-1" },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Selected Work
          </div>
          <h1 className="mt-6 font-display text-6xl font-bold sm:text-7xl">Work that <span className="text-gradient">gets noticed.</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A short cut of recent projects across fleet, retail and outdoor. Every piece designed, produced and installed by Manas teams.
          </p>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition ${
                  filter === c ? "bg-primary text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid auto-rows-[260px] grid-cols-2 gap-4 sm:grid-cols-4">
            {visible.map((p, i) => (
              <motion.figure
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl ${filter === "All" ? p.span : "col-span-2 row-span-2"}`}
              >
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-accent">{p.category} · {p.year}</div>
                      <div className="mt-1 font-display text-lg font-semibold leading-tight">{p.title}</div>
                      <div className="text-xs text-muted-foreground">{p.client}</div>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-20 rounded-3xl glass-strong p-10 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              We take on new work every month. Send us your brief and we'll respond within 24 hours.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
