import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

function Reveal({ children, className = "", delay = 0, y = 30 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
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

const INSTAGRAM_URL = "https://www.instagram.com/greenfield_housing/?hl=en";

const projects = [
  {
    id: 1,
    name: "Crystal Gateway[cite: 8]",
    location: "Sulur[cite: 8]",
    type: "Plots[cite: 8]",
    status: "Ready to Occupy",
    config: "1,200–2,400 sq.ft.[cite: 8]",
    rera: "RERA Reg[cite: 8]",
    href: "/project",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["805 plots[cite: 8]", "Cricket turf[cite: 8]", "Clubhouse[cite: 8]"],
  },
  {
    id: 2,
    name: "Crown City[cite: 10]",
    location: "Kovilpalayam[cite: 10]",
    type: "Plots[cite: 10]",
    status: "Ongoing",
    config: "Multiple sizes",
    rera: "DTCP Approved[cite: 10]",
    href: "/project",
    image:
      "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["30/40ft roads[cite: 10]", "80% Loan[cite: 10]", "Gated[cite: 10]"],
  },
  {
    id: 3,
    name: "Silver City[cite: 6]",
    location: "Karamadai Rd[cite: 6]",
    type: "Plots[cite: 6]",
    status: "Ongoing",
    config: "1.5 – 5 cents[cite: 6]",
    rera: "DTCP Approved[cite: 6]",
    href: "/project",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["From ₹7.50L[cite: 6]", "Tar roads[cite: 6]", "24/7 security[cite: 6]"],
  },
  {
    id: 4,
    name: "Fairland[cite: 11]",
    location: "Ponnigoundapudur[cite: 11]",
    type: "Plots[cite: 11]",
    status: "Ongoing",
    config: "Multiple sizes",
    rera: "RERA Reg[cite: 11]",
    href: "/project",
    image:
      "https://images.pexels.com/photos/2072473/pexels-photo-2072473.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["Shuttle court[cite: 11]", "Commercial[cite: 11]", "NH access[cite: 11]"],
  },
  {
    id: 5,
    name: "Opal Garden IV[cite: 3]",
    location: "Annur[cite: 3]",
    type: "Plots[cite: 3]",
    status: "Completed",
    config: "Multiple sizes",
    rera: "RERA Reg[cite: 3]",
    href: "/project",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["Gated access[cite: 4]", "Play area[cite: 4]", "Street lights[cite: 4]"],
  },
  {
    id: 6,
    name: "Diamond Ave[cite: 1]",
    location: "Pattanam[cite: 1]",
    type: "Plots[cite: 1]",
    status: "Ongoing",
    config: "TBA[cite: 1]",
    rera: "Approval Pending",
    href: "/project",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1000",
    highlights: ["Upcoming[cite: 1]", "Pattanam[cite: 1]", "Residential[cite: 1]"],
  },
];

const statusFilters = [
  { key: "All", label: "All", icon: Building2 },
  { key: "Ongoing", label: "Ongoing", icon: Play },
  { key: "Completed", label: "Completed", icon: CheckCircle2 },
  { key: "Ready to Occupy", label: "Ready", icon: Home },
];

const instagramPosts = [
  {
    id: 1,
    href: INSTAGRAM_URL,
    caption: "Crystal Gateway drone walkthrough[cite: 8]",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: true,
  },
  {
    id: 2,
    href: INSTAGRAM_URL,
    caption: "Crown City — layout progress[cite: 10]",
    image:
      "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: false,
  },
  {
    id: 3,
    href: INSTAGRAM_URL,
    caption: "Silver City — boundary walls[cite: 6]",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: true,
  },
  {
    id: 4,
    href: INSTAGRAM_URL,
    caption: "Fairland — site update[cite: 11]",
    image:
      "https://images.pexels.com/photos/2072473/pexels-photo-2072473.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: false,
  },
  {
    id: 5,
    href: INSTAGRAM_URL,
    caption: "Opal Garden — street lighting[cite: 4]",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=500",
    isReel: true,
  },
  {
    id: 6,
    href: INSTAGRAM_URL,
    caption: "Diamond Ave — upcoming[cite: 1]",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=500",
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

      <section className="relative overflow-hidden bg-[#0a1f14] py-16 text-white md:py-24">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Parallax orbs */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-emerald-500/15 blur-[80px]"
          style={{ transform: `translate3d(${drift.x * -20}px, ${drift.y * -20}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[100px]"
          style={{ transform: `translate3d(${drift.x * 30}px, ${drift.y * 30}px, 0)` }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-200/70 md:mb-8 md:text-[10px]">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="h-px w-4 bg-emerald-300/40 md:w-6" />
            <span className="text-white">Projects</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end md:gap-10">
            <Reveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 backdrop-blur md:mb-6 md:px-4 md:py-2">
                  <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 md:h-2 md:w-2" />
                  </span>
                  <span className="font-['Poppins',sans-serif] text-[8px] font-black uppercase tracking-[0.15em] text-emerald-100 md:text-[9px] md:tracking-[0.2em]">
                    Premium Layouts · Coimbatore
                  </span>
                </div>

                <h1 className="font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
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

                <p className="mt-4 max-w-xl font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-emerald-50/70 md:mt-6 md:text-sm">
                  Explore our RERA/DTCP-approved plotted communities across Coimbatore. Verified, secure, and equipped for modern living[cite: 6, 8, 10, 11].
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-3 border-l-2 border-emerald-400/30 pl-4 md:space-y-4 md:pl-5">
                {[
                  { label: "Ongoing", value: projects.filter(p => p.status === "Ongoing").length },
                  { label: "Completed", value: projects.filter(p => p.status === "Completed").length },
                  { label: "Ready", value: projects.filter(p => p.status === "Ready to Occupy").length },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.2em] text-emerald-300/70">
                      {item.label}
                    </p>
                    <p className="font-['Poppins',sans-serif] mt-0.5 text-xl font-black text-white md:text-2xl">
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

      <section className="relative -mt-6 md:-mt-8">
        <div className="relative z-20 mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <Reveal>
            <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg md:gap-3 md:rounded-[2rem] md:p-4">
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
                    className={`group inline-flex items-center gap-1.5 rounded-xl px-3 py-2 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-300 md:gap-2.5 md:rounded-2xl md:px-5 md:py-3 md:text-[10px] md:tracking-[0.12em] ${
                      isActive
                        ? "bg-emerald-950 text-white shadow-md shadow-emerald-950/20"
                        : "bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    {filter.label}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[8px] md:px-2 md:text-[9px] ${
                        isActive ? "bg-white/20 text-white" : "bg-white text-slate-500"
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

      <section className="py-12 md:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12">
              <div>
                <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.2em] text-emerald-700 md:text-[10px]">
                  Showing {filteredProjects.length} Projects
                </span>
                <h2 className="mt-2 font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
                  {activeFilter === "All"
                    ? "Verified Layouts"
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
                className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.1em] text-slate-700 transition-all hover:border-emerald-300 hover:text-emerald-700 md:px-5 md:py-2.5 md:text-[10px]"
              >
                <Instagram className="h-3 w-3 md:h-3.5 md:w-3.5" />
                Instagram
                <ArrowUpRight className="h-3 w-3 md:h-3.5 md:w-3.5" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={(idx % 3) * 60}>
                <article className="group relative h-full overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md md:rounded-[1.5rem]">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14]/80 via-[#0a1f14]/10 to-transparent" />

                    {/* Status badge */}
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 backdrop-blur md:left-4 md:top-4 md:px-3 md:py-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === "Ongoing"
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                        }`}
                      />
                      <span className="font-['Poppins',sans-serif] text-[8px] font-black uppercase tracking-wider text-slate-800 md:text-[9px]">
                        {project.status}
                      </span>
                    </div>

                    {/* RERA badge */}
                    <div className="absolute right-3 top-3 rounded-full border border-emerald-400/30 bg-emerald-950/80 px-2.5 py-1 backdrop-blur md:right-4 md:top-4 md:px-3 md:py-1.5">
                      <span className="font-['Poppins',sans-serif] text-[8px] font-black uppercase tracking-wider text-emerald-300 md:text-[9px]">
                        {project.rera.split(" ")[0]}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white md:bottom-4 md:left-4 md:right-4">
                      <MapPin className="h-3.5 w-3.5 text-emerald-300" />
                      <span className="font-['Inter',sans-serif] text-[10px] font-bold md:text-xs">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-4 md:p-5">
                    <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-emerald-700 md:text-[10px]">
                      {project.type}
                    </span>

                    <h3 className="mt-1.5 font-['Poppins',sans-serif] text-xl font-black leading-tight tracking-tight text-slate-950 md:mt-2 md:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-1 font-['Inter',sans-serif] text-xs font-semibold text-slate-500 md:mt-1.5">
                      {project.config}
                    </p>

                    {/* Highlights */}
                    <div className="mt-3 flex flex-wrap gap-1.5 md:mt-4">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-1 font-['Inter',sans-serif] text-[9px] font-bold text-emerald-800 md:px-2.5 md:text-[10px]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <Link
                        to={project.href}
                        className="group/link inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-wider text-emerald-700 transition-colors hover:text-emerald-900 md:text-[10px]"
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>

                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        <Instagram className="h-3.5 w-3.5" />
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

      <section className="relative overflow-hidden bg-[#0a1f14] py-16 text-white md:py-24">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Orbs */}
        <div
          className="pointer-events-none absolute -left-20 top-10 h-[300px] w-[300px] rounded-full bg-emerald-500/15 blur-[100px]"
          style={{ transform: `translate3d(${drift.x * -30}px, ${drift.y * -30}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[120px]"
          style={{ transform: `translate3d(${drift.x * 40}px, ${drift.y * 40}px, 0)` }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="mb-10 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end md:mb-12">
            <Reveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 backdrop-blur md:mb-5">
                  <Instagram className="h-3 w-3 text-emerald-300" />
                  <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-emerald-100 md:text-[10px] md:tracking-[0.2em]">
                    @greenfield_housing
                  </span>
                </div>

                <h2 className="font-['Poppins',sans-serif] text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                  Follow Our
                  <br />
                  <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                    Project Updates
                  </span>
                </h2>

                <p className="mt-4 max-w-xl font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-emerald-50/70 md:mt-5 md:text-sm">
                  From site development progress to community highlights — follow our journey.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-2.5 font-['Poppins',sans-serif] text-xs font-bold text-emerald-950 shadow-md shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:shadow-emerald-500/40 md:px-6 md:py-3 md:text-sm"
                >
                  <Instagram className="h-4 w-4" />
                  Follow Us
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Instagram Post Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
            {instagramPosts.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 50}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-md md:rounded-2xl"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14]/80 via-[#0a1f14]/20 to-transparent" />

                  {/* Reel badge */}
                  {post.isReel && (
                    <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black/50 backdrop-blur md:right-3 md:top-3 md:h-6 md:w-6">
                      <Play className="h-2.5 w-2.5 fill-white text-white md:h-3 md:w-3" />
                    </div>
                  )}

                  {/* Icon hint */}
                  <div className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black/50 backdrop-blur md:left-3 md:top-3 md:h-6 md:w-6">
                    {post.isReel ? (
                      <Video className="h-2.5 w-2.5 text-white md:h-3 md:w-3" />
                    ) : (
                      <Camera className="h-2.5 w-2.5 text-white md:h-3 md:w-3" />
                    )}
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                    <p className="font-['Inter',sans-serif] text-[9px] font-bold leading-tight text-white line-clamp-2 md:text-[10px]">
                      {post.caption}
                    </p>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 shadow-lg md:h-10 md:w-10">
                      <Instagram className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS STRIP
      ===================================================== */}

      <section className="py-12 md:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <Reveal>
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-4 md:rounded-3xl">
              {[
                { value: "805+", label: "Plots in Gateway[cite: 8]" },
                { value: "100%", label: "Approved[cite: 6, 8, 10, 11]" },
                { value: "3 Ac", label: "Cricket Turf[cite: 8]" },
                { value: "24/7", label: "Security[cite: 4, 6, 8, 10, 11]" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`relative p-5 text-center transition-all duration-300 hover:bg-emerald-50/50 md:p-6 lg:p-8 ${
                    idx !== 3 ? "border-slate-100 max-md:even:border-l md:border-r" : ""
                  } ${idx < 2 ? "border-b border-slate-100 md:border-b-0" : ""}`}
                >
                  <p className="font-['Poppins',sans-serif] text-3xl font-black leading-none tracking-tight text-emerald-700 md:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-wider text-slate-800 md:mt-3 md:text-[10px] md:tracking-[0.15em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-16 text-white md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center md:gap-10">
            <Reveal>
              <div>
                <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.2em] text-emerald-300 md:text-[10px]">
                  Ready to Begin?
                </span>
                <h2 className="mt-3 font-['Poppins',sans-serif] text-3xl font-black leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
                  Find your plot
                  <br />
                  <span className="italic font-light text-emerald-300">
                    with Greenfield.
                  </span>
                </h2>
                <p className="mt-4 max-w-xl font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-emerald-50/70 md:mt-5 md:text-sm">
                  Whether you're looking for an investment-ready plot or a space to build your dream home — our team will guide you[cite: 5].
                </p>

                <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">
                  <a
                    href="tel:+917395864774"
                    className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 font-['Poppins',sans-serif] text-xs font-bold text-emerald-950 shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-300 md:gap-3 md:px-6 md:py-3 md:text-sm"
                  >
                    <Phone className="h-4 w-4 md:h-5 md:w-5" />
                    Call 7395864774
                  </a>

                  <a
                    href="https://wa.me/917395864774?text=Hi%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-['Poppins',sans-serif] text-xs font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 md:gap-3 md:px-6 md:py-3 md:text-sm"
                  >
                    <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
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
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition-colors hover:border-emerald-400/30 hover:bg-white/[0.06] md:rounded-2xl md:p-5"
                    >
                      <Icon className="h-5 w-5 text-emerald-300 md:h-6 md:w-6" />
                      <p className="mt-3 font-['Poppins',sans-serif] text-2xl font-black text-white md:mt-4 md:text-3xl">
                        {item.value}
                      </p>
                      <p className="font-['Poppins',sans-serif] mt-0.5 text-[9px] font-black uppercase tracking-[0.15em] text-emerald-200/70 md:text-[10px]">
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