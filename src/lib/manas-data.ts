import { Truck, Tent, Umbrella, Printer, Palette, Store, type LucideIcon } from "lucide-react";
import van from "@/assets/van.jpg";
import canopy from "@/assets/canopy.jpg";
import umbrella from "@/assets/umbrella.jpg";
import flex from "@/assets/flex.jpg";
import vinyl from "@/assets/vinyl.jpg";
import offset from "@/assets/offset.jpg";
import shop from "@/assets/shop.jpg";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  img: string;
  tagline: string;
  desc: string;
  features: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "van-advertising",
    icon: Truck,
    title: "Van Advertising",
    img: van,
    tagline: "Turn every road into your marketing space.",
    desc: "Full and partial vehicle wraps engineered for the Indian climate. Cast vinyl films, laminate coatings and precision installation on delivery vans, buses, autos and private fleets.",
    features: [
      "3M and Avery cast vinyl films",
      "UV & weather-resistant lamination",
      "Full wraps, partial wraps, one-way vision",
      "Fleet-wide colour matching",
      "Same-day installation available",
    ],
    deliverables: ["Design concepts", "3D vehicle mockups", "Print + lamination", "On-site install", "12-month warranty"],
  },
  {
    slug: "canopy-advertising",
    icon: Tent,
    title: "Canopy Advertising",
    img: canopy,
    tagline: "Command any outdoor space.",
    desc: "Custom-printed promotional canopies built for exhibitions, sampling activations, trade shows and outdoor brand experiences. Aluminium frames, dye-sublimated fabric, 60-second setup.",
    features: [
      "3×3m, 3×4.5m and 3×6m sizes",
      "Aircraft-grade aluminium frame",
      "Full-colour dye-sublimation printing",
      "Waterproof, fire-retardant fabric",
      "Carry bag and stakes included",
    ],
    deliverables: ["Structural design", "Print & assembly", "Setup crew", "Storage kit", "Repeat re-skin service"],
  },
  {
    slug: "umbrella-advertising",
    icon: Umbrella,
    title: "Umbrella Advertising",
    img: umbrella,
    tagline: "The most photographed brand asset.",
    desc: "Premium café, garden and beach umbrellas printed with your identity. Perfect for hospitality, retail patios and lifestyle brand seeding.",
    features: [
      "6.5ft and 9ft options",
      "Wooden and aluminium poles",
      "Fade-resistant printed canvas",
      "Wind-vented crown",
      "MOQ from just 25 units",
    ],
    deliverables: ["Colour-perfect prints", "Custom logo placement", "Bulk packaging", "Pan-India delivery"],
  },
  {
    slug: "flex-printing",
    icon: Printer,
    title: "Flex Printing",
    img: flex,
    tagline: "Skyline-scale, magazine-sharp.",
    desc: "High-DPI flex banners, hoardings and building wraps. From single storefront banners to 200-foot façades — printed on solvent, eco-solvent and UV inks.",
    features: [
      "Up to 1440 DPI resolution",
      "Frontlit, backlit, star flex, mesh",
      "Sizes from 3ft to 200ft",
      "Weather-sealed edges + eyelets",
      "24-hour turnaround",
    ],
    deliverables: ["Artwork prep", "Print + finishing", "Installation crew", "Removal & disposal"],
  },
  {
    slug: "vinyl-printing",
    icon: Palette,
    title: "Vinyl Printing",
    img: vinyl,
    tagline: "Precision graphics for surfaces that matter.",
    desc: "Cut vinyl and printed vinyl for windows, walls, vehicles and displays. Removable, permanent and one-way vision options with laminate protection.",
    features: [
      "Cast, calendared and reflective vinyls",
      "One-way vision for glass",
      "Frosted etched-glass effect",
      "Contour-cut die shapes",
      "Removable adhesive available",
    ],
    deliverables: ["Design + cut files", "Sample proof", "Print + laminate", "Professional application"],
  },
  {
    slug: "in-shop-branding",
    icon: Store,
    title: "In-Shop Branding",
    img: shop,
    tagline: "A store that remembers your brand for you.",
    desc: "End-to-end retail interior branding. Wall graphics, counter wraps, backlit signage, standees, danglers, shelf-talkers and immersive brand corners — installed nationwide.",
    features: [
      "Wall & ceiling graphics",
      "Backlit acrylic signage",
      "Retail POP + POSM production",
      "Counter, till & pillar wraps",
      "Multi-store rollout management",
    ],
    deliverables: ["Store audit", "Concept design", "Production", "Nationwide install", "Refresh cycles"],
  },
  {
    slug: "offset-printing",
    icon: Printer,
    title: "Offset Printing",
    img: offset,
    tagline: "The details clients touch.",
    desc: "Corporate stationery, brochures, catalogues, invitations and packaging. Pantone-accurate offset presses, premium papers, foil, emboss and spot-UV finishes.",
    features: [
      "Business cards, letterheads, envelopes",
      "Brochures, catalogues, flyers",
      "Foil stamping, embossing, spot-UV",
      "Uncoated, silk and gloss papers",
      "GSM range 90 to 400",
    ],
    deliverables: ["Prepress + proofing", "Offset print run", "Binding & finishing", "Bulk delivery"],
  },
];

export const testimonials = [
  { name: "Rohan Mehta", role: "Founder, Nexa Retail", text: "Manas rebuilt our storefront identity across 12 stores. Traffic is up 34%. The craft is unreal." },
  { name: "Aisha Kapoor", role: "CMO, Urban Fleet Co.", text: "Their van wraps turned our vehicles into a moving campaign. Every install was flawless." },
  { name: "Devansh Rao", role: "Marketing Head, BrewLab", text: "The umbrella series became our brand signature. Photography-perfect quality." },
  { name: "Priya Nair", role: "GM, Halcyon Hospitality", text: "From canopy to menu print — one team, one standard. That's rare in this industry." },
  { name: "Karan Shah", role: "Founder, Motive Motors", text: "We wrapped 40 vehicles in three weeks. Zero downtime, zero complaints." },
  { name: "Meera Iyer", role: "Retail Head, Verre & Co.", text: "The in-shop branding refresh completely changed footfall behaviour. Worth every rupee." },
];

export const clients = [
  "NEXA RETAIL", "URBAN FLEET", "BREWLAB", "HALCYON", "MOTIVE", "VERRE & CO.",
  "AXIS FOODS", "NORTH STAR", "OASIS HOTELS", "KAYA PHARMA",
];
