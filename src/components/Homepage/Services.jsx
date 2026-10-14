import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Trees,
  HeartPulse,
  Volleyball,
  Users,
  Building2,
  Shield,
  Home,
  TrendingUp,
  FileCheck,
  Award,
} from "lucide-react";

// =====================================================
// 3D TILT
// =====================================================

function Tilt({ children, className = "", max = 10, scale = 1.02 }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });

  const handleMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      setStyle({
        transform: `perspective(1000px) rotateX(${(0.5 - py) * max * 2}deg) rotateY(${
          (px - 0.5) * max * 2
        }deg) scale3d(${scale}, ${scale}, ${scale})`,
      });
      setGlare({ x: px * 100, y: py * 100, o: 0.14 });
    },
    [max, scale]
  );

  const handleLeave = useCallback(() => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    });
    setGlare((g) => ({ ...g, o: 0 }));
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ ...style, transformStyle: "preserve-3d" }}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glare.o,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.9), transparent 55%)`,
        }}
      />
    </div>
  );
}

// =====================================================
// SCROLL REVEAL
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

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// =====================================================
// CONTENT — Greenfield Housing India
// =====================================================

const projectFilters = [
  {
    name: "Ongoing",
    href: "/project",
    icon: Building2,
  },
  {
    name: "Completed",
    href: "/project",
    icon: Shield,
  },
  {
    name: "Ready",
    href: "/project",
    icon: Home,
  },
];

const featuredProjects = [
  {
    id: "01",
    name: "Crystal Gateway",
    location: "Sulur, Coimbatore",
    type: "Plots",
    tags: ["805 Plots", "Ready"],
    href: "/project",
    gradient: "linear-gradient(135deg, #065f46 0%, #10b981 48%, #a7f3d0 100%)",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    meta: ["RERA: TN11//Layout/0360/2025"],
  },
  {
    id: "02",
    name: "Crown City",
    location: "Kovilpalayam",
    type: "Plots",
    tags: ["DTCP", "Gated"],
    href: "/project",
    gradient: "linear-gradient(135deg, #064e3b 0%, #047857 48%, #6ee7b7 100%)",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    meta: ["Loan up to 80%"],
  },
  {
    id: "03",
    name: "Silver City",
    location: "Karamadai Road",
    type: "Plots",
    tags: ["From ₹7.50L", "DTCP"],
    href: "/project",
    gradient: "linear-gradient(135deg, #14532d 0%, #15803d 48%, #bbf7d0 100%)",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    meta: ["1.5 to 5 cents"],
  },
  {
    id: "04",
    name: "Fairland",
    location: "Ponnigoundapudur",
    type: "Plots",
    tags: ["Turf Court", "Commercial"],
    href: "/project",
    gradient: "linear-gradient(135deg, #064e3b 0%, #059669 48%, #6ee7b7 100%)",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    meta: ["TN/11/Layout/1405/2023"],
  },
  {
    id: "05",
    name: "Opal Garden IV",
    location: "Annur Taluk",
    type: "Plots",
    tags: ["RERA", "9.75L per cent"],
    href: "/project",
    gradient: "linear-gradient(135deg, #052e16 0%, #166534 48%, #86efac 100%)",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=800",
    meta: ["Gated access"],
  },
  {
    id: "06",
    name: "Diamond Avenue",
    location: "Pattanam",
    type: "Plots",
    tags: ["Upcoming", "Pattanam"],
    href: "/project",
    gradient: "linear-gradient(135deg, #14532d 0%, #16a34a 48%, #86efac 100%)",
    image: "https://images.unsplash.com/photo-1628611225249-6c11760c6d7a?auto=format&fit=crop&q=80&w=800",
    meta: ["Details TBA"],
  },
];

const highlightProject = {
  name: "Crystal Gateway",
  location: "Sulur, Coimbatore",
  rera: "TN11//Layout/0360/2025",
  approval: "Layout 74/2024",
  totalPlots: "805 plots",
  plotSizes: "1,200-2,400 sq.ft.",
  href: "/project",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  amenities: [
    "Entrance Arch",
    "CCTV",
    "Tar Roads",
    "EB Cables",
    "Water Connection",
    "Drainage",
    "Play Area",
    "Outdoor Gym",
    "Turf Court",
    "Cricket Ground",
    "Running Track",
    "Clubhouse",
    "Mini Theatre",
  ],
  nearby: [
    { name: "L&T Bypass", dist: "2 km" },
    { name: "KMCH", dist: "3 km" },
    { name: "RVS Inst.", dist: "4 km" },
    { name: "Airport", dist: "10 km" },
  ],
};

const communityFeatures = [
  { icon: Trees, label: "Landscaped gardens" },
  { icon: HeartPulse, label: "Outdoor gyms" },
  { icon: Volleyball, label: "Turf courts" },
  { icon: Users, label: "Community halls" },
  { icon: Shield, label: "24/7 CCTV" },
  { icon: Home, label: "Gated developments" },
];

// =====================================================
// PROJECTS
// =====================================================

export default function Projects() {
  const sectionRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setDrift({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const handleLeave = useCallback(() => setDrift({ x: 0, y: 0 }), []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full overflow-hidden bg-emerald-50 py-16 md:py-24"
      style={{ perspective: "1800px" }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.06),transparent_40%)]" />
      <div
        className="pointer-events-none absolute -left-10 top-10 h-[280px] w-[280px] rounded-full bg-emerald-200/30 blur-[100px] transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${drift.x * 30}px, ${drift.y * 30}px, 0)` }}
      />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {/* =================================================
            HEADER
        ================================================= */}
        <Reveal className="mb-10 md:mb-14">
          <span className="font-['Poppins',sans-serif] mb-4 inline-flex rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur-sm">
            Projects
          </span>

          <h2 className="font-['Poppins',sans-serif] max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Thoughtfully designed communities.
          </h2>

          <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:text-base">
            Explore premium RERA and DTCP-approved plotted developments across Coimbatore.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {projectFilters.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 font-['Inter',sans-serif] text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700"
                >
                  <Icon className="h-3.5 w-3.5 text-emerald-600" />
                  {item.name}
                </a>
              );
            })}
          </div>
        </Reveal>

        {/* =================================================
            FEATURED PROJECTS
        ================================================= */}
        <Reveal delay={100} className="mb-10 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <h3 className="font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Signature Plotted Homes
            </h3>
            <p className="font-['Inter',sans-serif] mt-3 max-w-xl text-sm font-medium leading-relaxed text-slate-600">
              Discover carefully crafted developments in prime locations.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <a
              href="/allprojects"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-['Inter',sans-serif] text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600"
            >
              View All
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </div>
        </Reveal>

        <div className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3 md:mb-24">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 50}>
              <Tilt max={7}>
                <a
                  href={project.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-sm transition-all duration-500 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div
                    className="relative flex h-40 items-end overflow-hidden p-6 sm:h-48"
                    style={{ transform: "translateZ(15px)", background: project.gradient }}
                  >
                    {project.image && (
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-50 transition-transform duration-700 group-hover:scale-110" 
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-black/10" />
                    <span className="font-['Inter',sans-serif] absolute left-5 top-5 rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-800 shadow-sm backdrop-blur">
                      {project.type}
                    </span>
                    <span className="font-['Poppins',sans-serif] absolute right-5 top-4 text-4xl font-black text-white/20">
                      {project.id}
                    </span>
                    <div className="relative flex items-center gap-1.5 text-white/90">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="font-['Inter',sans-serif] text-xs font-semibold">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-grow flex-col p-6" style={{ transform: "translateZ(10px)" }}>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-['Inter',sans-serif] rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-['Poppins',sans-serif] text-xl font-bold tracking-tight text-slate-950 md:text-2xl">
                      {project.name}
                    </h4>
                    {project.meta && (
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
                        {project.meta.map((m) => (
                          <span key={m} className="inline-flex items-center gap-1">
                            <span className="h-1 w-1 rounded-full bg-emerald-500" />
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto flex items-center gap-1.5 pt-6 font-['Inter',sans-serif] text-sm font-bold text-emerald-700">
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>

        {/* =================================================
            HIGHLIGHT — Crystal Gateway Spotlight
        ================================================= */}
        <Reveal className="mb-16 md:mb-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-white shadow-xl">
            {highlightProject.image && (
              <img 
                src={highlightProject.image} 
                alt="Highlight Project Background" 
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.04]" 
              />
            )}
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_45%)]" />

            <div className="relative grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-12">
              <div>
                <span className="font-['Poppins',sans-serif] inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                  <Award className="h-3 w-3" />
                  Featured
                </span>

                <h3 className="font-['Poppins',sans-serif] mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl">
                  {highlightProject.name}
                </h3>

                <p className="font-['Inter',sans-serif] mt-2 flex items-center gap-1.5 text-sm font-medium text-slate-600 md:text-base">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  {highlightProject.location}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-emerald-600">
                      <FileCheck className="h-3 w-3" />
                      <span className="text-[9px] font-bold uppercase tracking-wider">RERA</span>
                    </div>
                    <p className="mt-1 font-['Poppins',sans-serif] text-xs font-bold text-slate-950">
                      {highlightProject.rera}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <div className="flex items-center gap-1.5 text-emerald-600">
                      <Home className="h-3 w-3" />
                      <span className="text-[9px] font-bold uppercase tracking-wider">Plots</span>
                    </div>
                    <p className="mt-1 font-['Poppins',sans-serif] text-xs font-bold text-slate-950">
                      {highlightProject.totalPlots}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-wider text-slate-500">
                    Amenities
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {highlightProject.amenities.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-emerald-100 bg-emerald-50/60 px-2.5 py-1 font-['Inter',sans-serif] text-[10px] font-semibold text-emerald-800"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={highlightProject.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 font-['Inter',sans-serif] text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-700"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  <p className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Location
                  </p>
                </div>
                <h4 className="font-['Poppins',sans-serif] mt-2 text-lg font-black text-slate-950 md:text-xl">
                  Connectivity
                </h4>
                <div className="mt-4 space-y-2">
                  {highlightProject.nearby.map((place) => (
                    <div
                      key={place.name}
                      className="flex items-center justify-between rounded-lg border border-white bg-white px-3 py-2 shadow-sm"
                    >
                      <span className="font-['Inter',sans-serif] text-xs font-semibold text-slate-700">
                        {place.name}
                      </span>
                      <span className="font-['Poppins',sans-serif] text-xs font-bold text-emerald-700">
                        {place.dist}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =================================================
            COMMUNITY
        ================================================= */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-900 bg-slate-950 p-6 text-white shadow-xl md:p-12">
            <div
              className="pointer-events-none absolute -top-16 right-0 h-[200px] w-[200px] rounded-full bg-emerald-500/20 blur-[80px] transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${drift.x * 15}px, ${drift.y * 15}px, 0)` }}
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="font-['Poppins',sans-serif] inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  <Building2 className="h-3.5 w-3.5" />
                  Community
                </span>

                <h3 className="font-['Poppins',sans-serif] mt-4 text-3xl font-black leading-tight tracking-tight md:text-4xl">
                  Designed for more than just living.
                </h3>

                <p className="font-['Inter',sans-serif] mt-4 text-sm font-medium leading-relaxed text-white/70 md:text-base">
                  Every community is thoughtfully designed with green spaces, wellness zones, and smart layout features to help families thrive.
                </p>

                <a
                  href="/community"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-['Inter',sans-serif] text-sm font-bold text-slate-950 shadow-lg transition-all hover:bg-emerald-50"
                >
                  Experience More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                {communityFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <Tilt key={feature.label} max={10}>
                      <div className="flex h-full flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:border-emerald-400/40 hover:bg-white/10">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-emerald-300"
                          style={{ transform: "translateZ(10px)" }}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-['Inter',sans-serif] text-xs font-semibold leading-snug text-white/90">
                          {feature.label}
                        </span>
                      </div>
                    </Tilt>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}