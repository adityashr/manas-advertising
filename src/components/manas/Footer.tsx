import { Link } from "@tanstack/react-router";

export function Footer() {
  const services = [
    "Van Advertising", "Flex Printing", "Vinyl Printing", "Offset Printing", "In-Shop Branding",
  ];
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">M</span>
            <span className="font-display text-lg font-bold tracking-widest">MANAS</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Your Brand Everywhere. Premium advertising, printing and branding since 2010.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Services</div>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s}><Link to="/services" className="text-foreground/80 transition hover:text-foreground">{s}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-foreground/80 transition hover:text-foreground">About</Link></li>
            <li><Link to="/portfolio" className="text-foreground/80 transition hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/services" className="text-foreground/80 transition hover:text-foreground">Services</Link></li>
            <li><Link to="/contact" className="text-foreground/80 transition hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
          <ul className="mt-4 space-y-2 text-sm">
            {["Instagram", "LinkedIn", "Behance", "Facebook"].map((t) => (
              <li key={t}><a href="#" className="text-foreground/80 transition hover:text-foreground">{t}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Manas Advertising. All rights reserved.</div>
        <div>Crafted with obsession in India.</div>
      </div>
    </footer>
  );
}
