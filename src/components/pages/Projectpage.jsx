import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Building2,
  Home,
  
  Play,
  Instagram,
  Camera,
  Video,
  
  Shield,
  FileCheck,
  
  CheckCircle2,
  Phone,
  MessageCircle,
  Users,

} from "lucide-react";

// =====================================================
// HOOKS
// =====================================================

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Reveal({ children, className = "", delay = 0, y = 40 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        opacity: inView ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}

// =====================================================
// DATA
// =====================================================

const INSTAGRAM_URL = "https://www.instagram.com/greenfield_developers_/?hl=en";

const projects = [
  // ============= ONGOING =============
  {
    id: 1,
    name: "Lavender",
    location: "Saravanampatti, Coimbatore",
    type: "Premium Apartments",
    status: "Ongoing",
    config: "2, 3 & 4 BHK",
    rera: "RERA Registered",
    href: "/lavender-campaign",
    image:
      "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lavender_1_5x.jpg",
    highlights: ["Sky Garden", "Aqua Lounge", "Wellness Arena"],
  },
  {
    id: 2,
    name: "Emerald City",
    location: "Saravanampatti, Coimbatore",
    type: "Villas & Plots",
    status: "Ongoing",
    config: "Villas / Plots",
    rera: "DTCP Approved",
    href: "/emeraldcity",
    image:
      "https://static.wixstatic.com/media/60b717_7c54df718952421c9cc582783fe5aabf~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Emerald--3-.jpg",
    highlights: ["KGISL IT Park nearby", "Sathy Road access", "Gated community"],
  },
  {
    id: 3,
    name: "Crystal Gateway",
    location: "Kalangal Road, Sulur",
    type: "RERA Residential Plots",
    status: "Ongoing",
    config: "1,200–2,400 sq.ft.",
    rera: "TN/11/Layout/0360/2025",
    href: "/crystalgateway",
    image:
      "https://static.wixstatic.com/media/60b717_e3458c6e980748a88ced46d2c367e603~mv2.jpg/v1/fill/w_980,h_549,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-1-04_edited.jpg",
    highlights: ["805 plots", "3-acre cricket ground", "Grand clubhouse"],
  },
  {
    id: 4,
    name: "Diamond Avenue",
    location: "Pattanam Pudur, Coimbatore",
    type: "Residential Plots",
    status: "Ongoing",
    config: "Multiple sizes",
    rera: "DTCP Approved",
    href: "/diamond-avenue",
    image:
      "https://static.wixstatic.com/media/60b717_8876632975b4438cb1f3f5c0df7bca6d~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diamond%20avenue_1_5x.jpg",
    highlights: ["Prime location", "Tar roads", "Gated layout"],
  },
  {
    id: 5,
    name: "Fairland",
    location: "Ponnigoundapudur, Coimbatore",
    type: "RERA Residential Plots",
    status: "Ongoing",
    config: "Multiple sizes",
    rera: "TN/11/Layout/1405/2023",
    href: "/fairland",
    image:
      "https://static.wixstatic.com/media/60b717_621aed18452743cb8f83f6651f33aa7a~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nandhavanam_1_5x.jpg",
    highlights: ["Indoor shuttle court", "Fitness center", "Commercial complex"],
  },
  {
    id: 6,
    name: "Crown City",
    location: "Kovilpalayam, Coimbatore",
    type: "DTCP Residential Plots",
    status: "Ongoing",
    config: "Multiple sizes",
    rera: "DTCP Approved",
    href: "/crowncity",
    image:
      "https://static.wixstatic.com/media/60b717_8a7bc8e08a1b4499b01c0143cd0c7bd9~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ruby%20Lands_1_5x.jpg",
    highlights: ["30/40 ft roads", "Rainwater harvesting", "Loan up to 80%"],
  },
  {
    id: 7,
    name: "Silver City",
    location: "Kariyampalayam, Coimbatore",
    type: "DTCP Residential Plots",
    status: "Ongoing",
    config: "1.5 – 5 cents",
    rera: "DTCP No. 58/2025",
    href: "/silvercity",
    image:
      "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lavender_1_5x.jpg",
    highlights: ["₹7.50L onwards", "Tar roads", "24/7 security"],
  },

  // ============= COMPLETED =============
  {
    id: 8,
    name: "Maple",
    location: "Kalapatti, Coimbatore",
    type: "Luxury Gated Villas",
    status: "Completed",
    config: "Villas",
    rera: "RERA Registered",
    href: "/maple-kalapatti",
    image:
      "https://static.wixstatic.com/media/60b717_f9a74e1c8c5c4731b0a7db4c69e0a342~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Maple_1_5x.jpg",
    highlights: ["Luxury villas", "Gated community", "Clubhouse"],
  },
  {
    id: 9,
    name: "Nandavanam",
    location: "Neelambur, Coimbatore",
    type: "Gated Community",
    status: "Completed",
    config: "Villas / Plots",
    rera: "RERA Registered",
    href: "/nandhavanam",
    image:
      "https://static.wixstatic.com/media/60b717_621aed18452743cb8f83f6651f33aa7a~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nandhavanam_1_5x.jpg",
    highlights: ["Green spaces", "Community hall", "Kids' play area"],
  },
  {
    id: 10,
    name: "Ruby Lands",
    location: "Neelambur, Coimbatore",
    type: "Residential Plots",
    status: "Completed",
    config: "Multiple sizes",
    rera: "DTCP Approved",
    href: "/ruby-lands",
    image:
      "https://static.wixstatic.com/media/60b717_8a7bc8e08a1b4499b01c0143cd0c7bd9~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ruby%20Lands_1_5x.jpg",
    highlights: ["Prime location", "Full amenities", "Well-connected"],
  },
  {
    id: 11,
    name: "Tulip Garden",
    location: "Kalapatti, Coimbatore",
    type: "Gated Community",
    status: "Completed",
    config: "Villas / Plots",
    rera: "RERA Registered",
    href: "/tulip-garden",
    image:
      "https://static.wixstatic.com/media/60b717_819b9b411b5d45668b6c4c1ab30d8a6a~mv2.jpg/v1/fill/w_980,h_669,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01%20(1).jpg",
    highlights: ["Landscaped gardens", "Recreation zones", "Gated access"],
  },
  {
    id: 12,
    name: "Natchatra Homes",
    location: "Coimbatore",
    type: "First Gated Community",
    status: "Completed",
    config: "Villas / Plots",
    rera: "RERA Registered",
    href: "/natchatra-homes",
    image:
      "https://static.wixstatic.com/media/60b717_621aed18452743cb8f83f6651f33aa7a~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nandhavanam_1_5x.jpg",
    highlights: ["Landmark project", "Community-first design", "Est. 2012"],
  },
  {
    id: 13,
    name: "Pearl Park Avenue",
    location: "Coimbatore",
    type: "Premium Apartments",
    status: "Completed",
    config: "2 & 3 BHK",
    rera: "RERA Registered",
    href: "/pearl-park-avenue",
    image:
      "https://static.wixstatic.com/media/60b717_f9a74e1c8c5c4731b0a7db4c69e0a342~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Maple_1_5x.jpg",
    highlights: ["Premium amenities", "Prime location", "Quality construction"],
  },

  // ============= READY TO OCCUPY =============
  {
    id: 14,
    name: "Bougain Villea",
    location: "Vilankurichi, Coimbatore",
    type: "Apartments & Villas",
    status: "Ready to Occupy",
    config: "2 & 3 BHK",
    rera: "RERA Registered",
    href: "/bougain-apartment-villas",
    image:
      "https://static.wixstatic.com/media/60b717_38682915f7de44d6a27f2ae985ec2389~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bougain%20villea%20Apartment_1_5x.jpg",
    highlights: ["Move-in ready", "Modern amenities", "Prime location"],
  },
  {
    id: 15,
    name: "Coral Residency",
    location: "Vellanaipatti, Coimbatore",
    type: "Premium Plots",
    status: "Ready to Occupy",
    config: "Multiple sizes",
    rera: "DTCP Approved",
    href: "/coral-residency",
    image:
      "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lavender_1_5x.jpg",
    highlights: ["Near Kalapatti", "Ready to build", "Gated layout"],
  },
  {
    id: 16,
    name: "Platina",
    location: "Vilankurichi, Coimbatore",
    type: "Premium Plots",
    status: "Ready to Occupy",
    config: "Multiple sizes",
    rera: "DTCP Approved",
    href: "/platina",
    image:
      "https://static.wixstatic.com/media/60b717_8a7bc8e08a1b4499b01c0143cd0c7bd9~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ruby%20Lands_1_5x.jpg",
    highlights: ["Prime Kalapatti area", "Ready to build", "DTCP approved"],
  },
];

const statusFilters = [
  { key: "All", label: "All Projects", icon: Building2 },
  { key: "Ongoing", label: "Ongoing", icon: Play },
  { key: "Completed", label: "Completed", icon: CheckCircle2 },
  { key: "Ready to Occupy", label: "Ready to Occupy", icon: Home },
];

// Placeholder Instagram post tiles — replace these with real embeds
const instagramPosts = [
  {
    id: 1,
    href: INSTAGRAM_URL,
    caption: "Lavender — the landmark is rising",
    image:
      "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,enc_avif,quality_auto/lavender_1_5x.jpg",
    isReel: false,
  },
  {
    id: 2,
    href: INSTAGRAM_URL,
    caption: "Crystal Gateway drone walkthrough",
    image:
      "https://static.wixstatic.com/media/60b717_e3458c6e980748a88ced46d2c367e603~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,enc_avif,quality_auto/Untitled-1-04_edited.jpg",
    isReel: true,
  },
  {
    id: 3,
    href: INSTAGRAM_URL,
    caption: "Emerald City — villa construction",
    image:
      "https://static.wixstatic.com/media/60b717_7c54df718952421c9cc582783fe5aabf~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,enc_avif,quality_auto/Emerald--3-.jpg",
    isReel: false,
  },
  {
    id: 4,
    href: INSTAGRAM_URL,
    caption: "Maple — community walkthrough",
    image:
      "https://static.wixstatic.com/media/60b717_f9a74e1c8c5c4731b0a7db4c69e0a342~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,enc_avif,quality_auto/Maple_1_5x.jpg",
    isReel: true,
  },
  {
    id: 5,
    href: INSTAGRAM_URL,
    caption: "Silver City — site progress",
    image:
      "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,enc_avif,quality_auto/lavender_1_5x.jpg",
    isReel: false,
  },
  {
    id: 6,
    href: INSTAGRAM_URL,
    caption: "Fairland — indoor shuttle court",
    image:
      "https://static.wixstatic.com/media/60b717_621aed18452743cb8f83f6651f33aa7a~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,enc_avif,quality_auto/Nandhavanam_1_5x.jpg",
    isReel: false,
  },
];

// =====================================================
// PROJECTS PAGE
// =====================================================

export default function Projects() {
  const pageRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState("All");

  const handleMove = useCallback((e) => {
    const el = pageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setDrift({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const handleLeave = useCallback(() => setDrift({ x: 0, y: 0 }), []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <main
      ref={pageRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full overflow-hidden bg-[#f7f8f5]"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-24 text-white md:py-32 lg:py-40">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Parallax orbs */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-500/15 blur-[140px]"
          style={{ transform: `translate3d(${drift.x * -50}px, ${drift.y * -50}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-[160px]"
          style={{ transform: `translate3d(${drift.x * 60}px, ${drift.y * 60}px, 0)` }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-200/70">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span className="h-px w-6 bg-emerald-300/40" />
            <span className="text-white">Projects</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <Reveal>
              <div>
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2.5 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100">
                    20+ Projects · Coimbatore & Erode
                  </span>
                </div>

                <h1 className="font-['Poppins',sans-serif] text-[52px] font-black leading-[0.95] tracking-[-0.03em] sm:text-[64px] md:text-[76px] lg:text-[88px]">
                  Our
                  <br />
                  <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                    Signature
                  </span>
                  <br />
                  <span className="italic font-light text-emerald-100/90">
                    Communities.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl font-['Inter',sans-serif] text-base font-medium leading-relaxed text-emerald-50/70 md:text-lg">
                  Explore our portfolio of premium apartments, luxury villas,
                  and RERA/DTCP-approved residential plots across Coimbatore
                  and Erode — thoughtfully designed, delivered with care.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-4 border-l-2 border-emerald-400/30 pl-6">
                {[
                  { label: "Ongoing", value: projects.filter(p => p.status === "Ongoing").length },
                  { label: "Completed", value: projects.filter(p => p.status === "Completed").length },
                  { label: "Ready to Occupy", value: projects.filter(p => p.status === "Ready to Occupy").length },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300/70">
                      {item.label}
                    </p>
                    <p className="mt-1 font-['Poppins',sans-serif] text-2xl font-black text-white">
                      {item.value} Projects
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FILTER TABS
      ===================================================== */}

      <section className="relative -mt-10 md:-mt-12">
        <div className="relative z-20 mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <Reveal>
            <div className="flex flex-wrap gap-3 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_-30px_rgba(15,60,35,0.25)] md:p-5">
              {statusFilters.map((filter) => {
                const Icon = filter.icon;
                const count =
                  filter.key === "All"
                    ? projects.length
                    : projects.filter((p) => p.status === filter.key).length;
                const isActive = activeFilter === filter.key;

                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`group inline-flex items-center gap-2.5 rounded-2xl px-5 py-3 font-['Poppins',sans-serif] text-[11px] font-black uppercase tracking-[0.14em] transition-all duration-300 md:px-6 md:py-3.5 ${
                      isActive
                        ? "bg-emerald-950 text-white shadow-lg shadow-emerald-950/20"
                        : "bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {filter.label}
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-white text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PROJECTS GRID
      ===================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <Reveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                  Showing {filteredProjects.length} of {projects.length} Projects
                </span>
                <h2 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
                  {activeFilter === "All"
                    ? "All Greenfield Projects"
                    : activeFilter === "Ongoing"
                    ? "Ongoing Projects"
                    : activeFilter === "Completed"
                    ? "Completed Projects"
                    : "Ready to Occupy"}
                </h2>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.15em] text-slate-700 transition-all hover:border-emerald-300 hover:text-emerald-700"
              >
                <Instagram className="h-4 w-4" />
                Follow on Instagram
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={(idx % 3) * 80}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_30px_80px_-25px_rgba(15,60,35,0.35)]">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} – Greenfield Housing India project in ${project.location}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14]/80 via-[#0a1f14]/20 to-transparent" />

                    {/* Status badge */}
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 backdrop-blur">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === "Ongoing"
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }`}
                      />
                      <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-slate-800">
                        {project.status}
                      </span>
                    </div>

                    {/* RERA badge */}
                    <div className="absolute right-4 top-4 rounded-full border border-emerald-400/30 bg-emerald-950/80 px-3 py-1.5 backdrop-blur">
                      <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.12em] text-emerald-300">
                        {project.rera.split(" ")[0]}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                      <MapPin className="h-4 w-4 text-emerald-300" />
                      <span className="font-['Inter',sans-serif] text-xs font-bold">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 md:p-7">
                    <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                      {project.type}
                    </span>

                    <h3 className="mt-3 font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight text-slate-950 md:text-3xl">
                      {project.name}
                    </h3>

                    <p className="mt-2 font-['Inter',sans-serif] text-sm font-semibold text-slate-500">
                      {project.config}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 font-['Inter',sans-serif] text-[10px] font-bold text-emerald-800"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <a
                        href={project.href}
                        className="group/link inline-flex items-center gap-2 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.15em] text-emerald-700 transition-colors hover:text-emerald-900"
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                      </a>

                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                        aria-label={`View ${project.name} on Instagram`}
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INSTAGRAM SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-24 text-white md:py-32">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Orbs */}
        <div
          className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[130px]"
          style={{ transform: `translate3d(${drift.x * -50}px, ${drift.y * -50}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[150px]"
          style={{ transform: `translate3d(${drift.x * 60}px, ${drift.y * 60}px, 0)` }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          {/* Header */}
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end md:mb-16">
            <Reveal>
              <div>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2.5 backdrop-blur">
                  <Instagram className="h-3.5 w-3.5 text-emerald-300" />
                  <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100">
                    @greenfield_developers_
                  </span>
                </div>

                <h2 className="font-['Poppins',sans-serif] text-[40px] font-black leading-[0.98] tracking-[-0.03em] sm:text-[52px] md:text-[64px]">
                  Follow Our
                  <br />
                  <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                    Project Journey
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl font-['Inter',sans-serif] text-base font-medium leading-relaxed text-emerald-50/70 md:text-lg">
                  From construction progress to drone tours, community events
                  to handover celebrations — see it all on our Instagram.
                  Follow us for the latest updates, reels, and behind-the-scenes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-4 font-['Poppins',sans-serif] text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-1 hover:shadow-emerald-500/50"
                >
                  <Instagram className="h-5 w-5" />
                  Follow @greenfield_developers_
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Instagram Post Grid — placeholder tiles */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-6">
            {instagramPosts.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 60}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-[0_25px_60px_-20px_rgba(16,185,129,0.5)]"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14]/90 via-[#0a1f14]/30 to-transparent" />

                  {/* Reel badge */}
                  {post.isReel && (
                    <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 backdrop-blur">
                      <Play className="h-3.5 w-3.5 fill-white text-white" />
                    </div>
                  )}

                  {/* Icon hint */}
                  <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 backdrop-blur">
                    {post.isReel ? (
                      <Video className="h-3.5 w-3.5 text-white" />
                    ) : (
                      <Camera className="h-3.5 w-3.5 text-white" />
                    )}
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-['Inter',sans-serif] text-[10px] font-bold leading-tight text-white line-clamp-2">
                      {post.caption}
                    </p>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 shadow-xl">
                      <Instagram className="h-5 w-5" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Bottom note */}
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-emerald-400/[0.02] p-6 backdrop-blur md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400 text-emerald-950">
                  
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] text-sm font-black uppercase tracking-[0.15em] text-white">
                    Latest Reels & Site Updates
                  </p>
                  <p className="mt-1 font-['Inter',sans-serif] text-xs font-medium text-emerald-100/70">
                    Get weekly construction updates and drone tours on Instagram
                  </p>
                </div>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-['Poppins',sans-serif] text-sm font-bold text-emerald-900 shadow-xl transition-all hover:-translate-y-1 hover:bg-emerald-50"
              >
                Follow Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          STATS STRIP
      ===================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <Reveal>
            <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_-30px_rgba(15,60,35,0.25)] md:grid-cols-4 md:rounded-[2rem]">
              {[
                { value: "20+", label: "Projects Delivered" },
                { value: "1000+", label: "Acres Developed" },
                { value: "15K+", label: "Happy Families" },
                { value: "13+", label: "Years of Trust" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`relative p-6 transition-all duration-300 hover:bg-emerald-50/50 md:p-8 ${
                    idx !== 3 ? "border-r border-slate-100" : ""
                  } ${idx < 2 ? "border-b border-slate-100 md:border-b-0" : ""}`}
                >
                  <p className="font-['Poppins',sans-serif] text-4xl font-black leading-none tracking-tight text-emerald-700 md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.16em] text-slate-800 md:text-[11px]">
                    {stat.label}
                  </p>
                  <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-24 text-white md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300">
                  Ready to Begin?
                </span>
                <h2 className="mt-5 font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                  Find your home
                  <br />
                  <span className="italic font-light text-emerald-300">
                    with Greenfield.
                  </span>
                </h2>
                <p className="mt-6 max-w-2xl font-['Inter',sans-serif] text-base font-medium leading-relaxed text-emerald-50/70 md:text-lg">
                  Whether you're looking for a premium apartment, luxury
                  villa, or an investment-ready plot — our team will guide you
                  to the right project.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="tel:+917395864774"
                    className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-8 py-4 font-['Poppins',sans-serif] text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-emerald-300"
                  >
                    <Phone className="h-5 w-5" />
                    Call Vetri
                  </a>

                  <a
                    href="https://wa.me/917395864774?text=Hi%20Vetri%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-['Poppins',sans-serif] text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, value: "20+", label: "Projects" },
                  { icon: Users, value: "15K+", label: "Families" },
                  { icon: Shield, value: "RERA", label: "Registered" },
                  { icon: FileCheck, value: "DTCP", label: "Approved" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-colors hover:border-emerald-400/30 hover:bg-white/[0.06]"
                    >
                      <Icon className="h-6 w-6 text-emerald-300" />
                      <p className="mt-4 font-['Poppins',sans-serif] text-3xl font-black text-white">
                        {item.value}
                      </p>
                      <p className="font-['Poppins',sans-serif] mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200/70">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}