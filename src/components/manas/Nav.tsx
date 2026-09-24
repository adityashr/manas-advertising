import { Link } from "@tanstack/react-router";
import Logo from "./Logo";

export function Nav() {
  const linkCls = "text-white/90 transition-colors duration-200 hover:text-white";
  const activeCls = "text-white border-b-2 border-cyan-400 pb-1";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="brand-logo">
            <Logo showText={false} />
          </span>
          <span className="text-lg font-bold leading-tight tracking-tight sm:text-2xl">
            Manas <span className="text-cyan-300">Advertising</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm md:flex">
          <Link to="/" className={linkCls} activeProps={{ className: activeCls }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/about" className={linkCls} activeProps={{ className: activeCls }}>
            About Us
          </Link>
          <Link to="/services" className={linkCls} activeProps={{ className: activeCls }}>
            Why Choose Us
          </Link>
          <Link to="/portfolio" className={linkCls} activeProps={{ className: activeCls }}>
            Our Work
          </Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: activeCls }}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
