import { useState } from "react";
import { motion } from "motion/react";
import { Truck, Tent, Umbrella, Printer, Palette, Store } from "lucide-react";

const nodes = [
  { icon: Truck, label: "Van Advertising", desc: "Turn every road into your marketing space." },
  { icon: Printer, label: "Flex Printing", desc: "High-quality flex for banners & hoardings." },
  { icon: Store, label: "In-Shop Branding", desc: "Complete interior branding solutions." },
  { icon: Palette, label: "Offset Printing", desc: "Business cards, brochures, stationery." },
  { icon: Umbrella, label: "Umbrella Advertising", desc: "Printed promotional umbrellas." },
  { icon: Tent, label: "Canopy Advertising", desc: "Custom canopies for events & outdoor." },
];

export function ServicesCircle() {
  const [active, setActive] = useState(0);
  const radius = 220;

  return (
    <div className="relative mx-auto flex h-[560px] w-full max-w-[560px] items-center justify-center sm:h-[620px] sm:max-w-[620px]">
      {/* Concentric rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[460px] w-[460px] rounded-full border border-primary/20 sm:h-[520px] sm:w-[520px]" />
        <div className="absolute h-[360px] w-[360px] rounded-full border border-primary/10 animate-spin-slow sm:h-[400px] sm:w-[400px]"
          style={{ borderStyle: "dashed" }} />
        <div className="absolute h-[240px] w-[240px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Center logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-20 flex h-40 w-40 flex-col items-center justify-center rounded-full glass-strong glow"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent">Manas</span>
        <span className="mt-1 font-display text-xl font-bold">Advertising</span>
        <span className="mt-1 text-[9px] uppercase tracking-widest text-muted-foreground">Est. 2010</span>
        <span className="absolute inset-0 rounded-full border border-primary/40 animate-pulse-ring" />
      </motion.div>

      {/* Orbit nodes */}
      {nodes.map((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const Icon = n.icon;
        const isActive = active === i;
        return (
          <motion.button
            key={n.label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, type: "spring", stiffness: 120 }}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className="absolute z-10 flex flex-col items-center gap-2 text-center"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <span className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
              isActive
                ? "bg-primary text-primary-foreground scale-110 shadow-[0_0_40px_hsl(var(--primary)/0.6)]"
                : "glass hover:scale-105"
            }`}
              style={isActive ? { boxShadow: "0 0 40px oklch(0.62 0.24 260 / 0.7)" } : undefined}
            >
              <Icon className="h-7 w-7" />
            </span>
            <span className={`max-w-[90px] text-[11px] font-medium leading-tight transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
              {n.label}
            </span>
          </motion.button>
        );
      })}

      {/* Active description card */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute -bottom-4 left-1/2 z-30 w-[280px] -translate-x-1/2 rounded-2xl glass-strong p-4 text-center"
      >
        <div className="text-sm font-semibold">{nodes[active].label}</div>
        <div className="mt-1 text-xs text-muted-foreground">{nodes[active].desc}</div>
      </motion.div>
    </div>
  );
}
