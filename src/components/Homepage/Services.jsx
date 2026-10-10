import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Trees,
  HeartPulse,
  Volleyball,
  Users,
  Wifi,
  ShoppingBag,
  Building2,
  Sparkles,
  Shield,
  Home,
  TrendingUp,
  Ruler,
  FileCheck,
} from "lucide-react";

// =====================================================
// 3D TILT — pointer-driven card tilt with a soft glare
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
    name: "Ongoing Projects",
    href: "https://www.greenfieldhousingindia.com/ongoing-projects",
    icon: Sparkles,
  },
  {
    name: "Completed Project",
    href: "https://www.greenfieldhousingindia.com/completed-project",
    icon: Shield,
  },
  {
    name: "Ready To Occupy",
    href: "https://www.greenfieldhousingindia.com/ready-to-occupy",
    icon: Home,
  },
];

const featuredProjects = [
  // ============= PREMIUM APARTMENTS =============
  {
    id: "01",
    name: "Lavender",
    location: "Saravanampatti, Coimbatore",
    type: "Premium Apartments",
    tags: ["Serenity", "Accessibility"],
    href: "https://www.greenfieldhousingindia.com/lavender-campaign",
    gradient: "linear-gradient(135deg, #064e3b 0%, #059669 48%, #6ee7b7 100%)",
    meta: ["2, 3 & 4 BHK", "Saravanampatti"],
  },
  {
    id: "02",
    name: "Maple",
    location: "Kalapatti, Coimbatore",
    type: "Luxury Gated Villas",
    tags: ["Affordability", "Sustainability"],
    href: "https://www.greenfieldhousingindia.com/maple-kalapatti",
    gradient: "linear-gradient(135deg, #052e16 0%, #166534 48%, #86efac 100%)",
    meta: ["Gated Community", "Kalapatti"],
  },
  {
    id: "03",
    name: "Bougain Villea",
    location: "Coimbatore",
    type: "Premium Apartments",
    tags: ["Community", "Innovation"],
    href: "https://www.greenfieldhousingindia.com/bougain-apartment-villas",
    gradient: "linear-gradient(135deg, #14532d 0%, #16a34a 48%, #86efac 100%)",
    meta: ["Apartments & Villas", "Coimbatore"],
  },

  // ============= RESIDENTIAL PLOTS =============
  {
    id: "04",
    name: "Crystal Gateway",
    location: "Kalangal Road, Sulur",
    type: "RERA Residential Plots",
    tags: ["RERA", "Investment"],
    href: "https://www.greenfieldhousingindia.com/crystal-gateway",
    gradient: "linear-gradient(135deg, #065f46 0%, #10b981 48%, #a7f3d0 100%)",
    meta: ["805 Plots", "1,200–2,400 sq.ft."],
  },
  {
    id: "05",
    name: "Crown City",
    location: "Sathy Main Road, Kovilpalayam",
    type: "DTCP Residential Plots",
    tags: ["DTCP", "Gated"],
    href: "https://www.greenfieldhousingindia.com/crown-city",
    gradient: "linear-gradient(135deg, #064e3b 0%, #047857 48%, #6ee7b7 100%)",
    meta: ["30 & 40 ft Roads", "Loan up to 80%"],
  },
  {
    id: "06",
    name: "Silver City",
    location: "Kariyampalayam, Coimbatore",
    type: "DTCP Residential Plots",
    tags: ["DTCP", "From ₹7.50L"],
    href: "https://www.greenfieldhousingindia.com/silver-city",
    gradient: "linear-gradient(135deg, #14532d 0%, #15803d 48%, #bbf7d0 100%)",
    meta: ["1.5 to 5 cents", "₹7.50 L onwards"],
  },
];

// Highlight project – displayed as a full-width feature card
const highlightProject = {
  name: "Crystal Gateway",
  location: "Kalangal Road, Sulur, Coimbatore",
  rera: "TN/11/Layout/0360/2025",
  approval: "Layout No. 74/2024",
  totalPlots: "805 RERA Registered Plots",
  plotSizes: "1,200 / 1,500 / 1,750 / 2,400 sq.ft.",
  status: "Ready / Registered",
  developer: "Terra Field Realtors · Greenfield-associated",
  href: "https://www.greenfieldhousingindia.com/crystal-gateway",
  amenities: [
    "Grand Entrance Arch",
    "CCTV Surveillance",
    "Tar Roads",
    "Underground EB Cables",
    "Individual Water Connection",
    "Government-Standard Drainage",
    "Children's Play Area",
    "Outdoor Gym",
    "Turf Court",
    "3-Acre Turf Cricket Ground",
    "Walking Track + 400m Running Track",
    "Grand Clubhouse",
    "Community Hall",
    "Mini Theatre",
    "Landscaped Gardens",
  ],
  nearby: [
    { name: "L&T Bypass", dist: "~2 km" },
    { name: "KMCH Hospital", dist: "~3 km" },
    { name: "RVS Institutions", dist: "~4 km" },
    { name: "Sulur", dist: "~5 km" },
    { name: "Singanallur", dist: "~7 km" },
    { name: "Avinashi Road", dist: "~9 km" },
    { name: "Coimbatore Airport", dist: "~10 km" },
    { name: "Railway Station", dist: "~10 km" },
  ],
};

const communityFeatures = [
  { icon: Trees, label: "Lush Green Spaces" },
  { icon: HeartPulse, label: "Wellness Zones" },
  { icon: Volleyball, label: "Recreational Amenities" },
  { icon: Users, label: "Community Gatherings" },
  { icon: Wifi, label: "Smart Living Features" },
  { icon: ShoppingBag, label: "Proximity to Essentials" },
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
      className="relative w-full overflow-hidden bg-emerald-50 py-24 md:py-32"
      style={{ perspective: "1800px" }}
    >
      {/* Background Gradients — parallax-driven */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.06),transparent_40%)]" />
      <div
        className="pointer-events-none absolute -left-20 top-10 h-[380px] w-[380px] rounded-full bg-emerald-200/30 blur-[120px] transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${drift.x * -50}px, ${drift.y * -50}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-green-200/30 blur-[130px] transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${drift.x * 40}px, ${drift.y * 40}px, 0)` }}
      />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        {/* =================================================
            HEADER — Projects
        ================================================= */}

        <Reveal className="mb-16 md:mb-20">
          <span className="font-['Poppins',sans-serif] mb-8 inline-flex rounded-full border border-emerald-100 bg-emerald-50/50 px-6 py-2.5 text-base font-bold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur-sm">
            Projects
          </span>

          <h2 className="font-['Poppins',sans-serif] max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Thoughtfully designed homes that grow with you, every step of the
            way.
          </h2>

          <p className="font-['Inter',sans-serif] mt-6 max-w-3xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl">
            Explore premium apartments, luxury villas, and RERA/DTCP-approved
            residential plots across Coimbatore and Erode — 20+ projects
            delivered to 15,000+ happy families since 2012.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {projectFilters.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-6 py-3 font-['Inter',sans-serif] text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md"
                >
                  <Icon className="h-4 w-4 text-emerald-600" />
                  {item.name}
                  <ArrowUpRight className="h-4 w-4 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              );
            })}
          </div>
        </Reveal>

        {/* =================================================
            FEATURED PROJECTS
        ================================================= */}

        <Reveal
          delay={100}
          className="mb-16 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end md:mb-20"
        >
          <div>
            <span className="font-['Poppins',sans-serif] text-base font-bold uppercase tracking-[0.2em] text-emerald-700">
              Our Featured Projects
            </span>

            <h3 className="font-['Poppins',sans-serif] mt-5 max-w-3xl text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
              Experience Our Signature Homes
            </h3>

            <p className="font-['Inter',sans-serif] mt-6 max-w-2xl text-xl font-medium leading-relaxed text-slate-600">
              Discover thoughtfully crafted homes in prime locations, where
              comfort meets modern design and every moment inspires joy.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href="https://www.greenfieldhousingindia.com/allprojects"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 font-['Inter',sans-serif] text-lg font-bold text-white shadow-xl shadow-slate-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-emerald-600/25"
            >
              View All
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </Reveal>

        <div className="mb-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3 md:mb-32">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <Tilt max={9}>
                <a
                  href={project.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-white shadow-sm transition-all duration-500 hover:border-emerald-300 hover:shadow-2xl"
                >
                  {/* Project visual panel */}
                  <div
                    className="relative flex h-56 items-end overflow-hidden p-8"
                    style={{
                      transform: "translateZ(20px)",
                      background: project.gradient,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10" />

                    <span className="font-['Inter',sans-serif] absolute left-6 top-6 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800 shadow-sm backdrop-blur">
                      {project.type}
                    </span>

                    <span className="font-['Poppins',sans-serif] absolute right-6 top-6 text-6xl font-black text-white/20">
                      {project.id}
                    </span>

                    <div className="relative flex items-center gap-2 text-white/90">
                      <MapPin className="h-4 w-4" />
                      <span className="font-['Inter',sans-serif] text-sm font-semibold">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  <div
                    className="flex flex-grow flex-col p-8 xl:p-10"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-['Inter',sans-serif] rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-['Poppins',sans-serif] text-3xl font-bold tracking-tight text-slate-950">
                      {project.name}
                    </h4>

                    {project.meta && (
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-slate-500">
                        {project.meta.map((m) => (
                          <span key={m} className="inline-flex items-center gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-emerald-500" />
                            {m}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center gap-2 pt-8 font-['Inter',sans-serif] text-base font-bold text-emerald-700">
                      Explore Project
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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

        <Reveal className="mb-24 md:mb-32">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-200 bg-white shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_45%)]" />

            <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_1fr] lg:p-16">
              {/* Left — Info */}
              <div>
                <span className="font-['Poppins',sans-serif] inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Featured Project
                </span>

                <h3 className="font-['Poppins',sans-serif] mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
                  {highlightProject.name}
                </h3>

                <p className="font-['Inter',sans-serif] mt-3 flex items-center gap-2 text-lg font-medium text-slate-600">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  {highlightProject.location}
                </p>

                {/* Fact grid */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <FileCheck className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        RERA
                      </span>
                    </div>
                    <p className="mt-1 font-['Poppins',sans-serif] text-sm font-bold text-slate-950">
                      {highlightProject.rera}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <Shield className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        Approval
                      </span>
                    </div>
                    <p className="mt-1 font-['Poppins',sans-serif] text-sm font-bold text-slate-950">
                      {highlightProject.approval}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <Home className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        Total Plots
                      </span>
                    </div>
                    <p className="mt-1 font-['Poppins',sans-serif] text-sm font-bold text-slate-950">
                      805 Plots
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <Ruler className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        Plot Sizes
                      </span>
                    </div>
                    <p className="mt-1 font-['Poppins',sans-serif] text-sm font-bold text-slate-950">
                      1,200–2,400 sq.ft.
                    </p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mt-8">
                  <p className="font-['Poppins',sans-serif] text-sm font-bold uppercase tracking-wider text-slate-500">
                    Signature Amenities
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "Grand Clubhouse",
                      "3-Acre Cricket Ground",
                      "Mini Theatre",
                      "Outdoor Gym",
                      "Kids' Play Area",
                      "Landscaped Gardens",
                    ].map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-emerald-100 bg-emerald-50/60 px-3 py-1.5 font-['Inter',sans-serif] text-xs font-semibold text-emerald-800"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={highlightProject.href}
                    className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 px-7 py-3.5 font-['Inter',sans-serif] text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700"
                  >
                    View Crystal Gateway
                    <ArrowRight
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </a>
                  <a
                    href="tel:+917395864774"
                    className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-['Inter',sans-serif] text-base font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300"
                  >
                    Call 7395864774
                  </a>
                </div>
              </div>

              {/* Right — Location Advantage */}
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-8">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  <p className="font-['Poppins',sans-serif] text-sm font-bold uppercase tracking-wider text-emerald-800">
                    Location Advantage
                  </p>
                </div>

                <h4 className="font-['Poppins',sans-serif] mt-3 text-xl font-black text-slate-950 md:text-2xl">
                  Connected to Everything That Matters
                </h4>

                <div className="mt-6 space-y-2.5">
                  {highlightProject.nearby.map((place) => (
                    <div
                      key={place.name}
                      className="flex items-center justify-between rounded-xl border border-white bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="font-['Inter',sans-serif] text-sm font-semibold text-slate-700">
                        {place.name}
                      </span>
                      <span className="font-['Poppins',sans-serif] text-sm font-bold text-emerald-700">
                        {place.dist}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 rounded-2xl border border-emerald-100 bg-white p-4 font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-slate-600">
                  <strong className="text-slate-900">Legal Disclaimer:</strong>{" "}
                  All project details, RERA numbers, and approvals should be
                  verified against official documents. Prices and availability
                  subject to change.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =================================================
            COMMUNITY
        ================================================= */}

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-900 bg-slate-950 p-10 text-white shadow-2xl md:p-16">
            <div
              className="pointer-events-none absolute -top-24 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-[110px] transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${drift.x * 25}px, ${drift.y * 25}px, 0)`,
              }}
            />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <span className="font-['Poppins',sans-serif] inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                  <Building2 className="h-4 w-4" />
                  Community
                </span>

                <h3 className="font-['Poppins',sans-serif] mt-6 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl">
                  Designed for more than just living, but to create meaningful
                  bonds and shared experiences.
                </h3>

                <p className="font-['Inter',sans-serif] mt-6 text-base font-medium leading-relaxed text-white/70 md:text-lg">
                  Every Greenfield community is thoughtfully designed with lush
                  green spaces, wellness zones, recreational amenities, and
                  smart living features — creating neighborhoods where families
                  truly thrive.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
                    <MapPin className="h-4 w-4 text-emerald-300" />
                    <span className="font-['Inter',sans-serif] text-sm font-semibold text-white/80">
                      Lavender &middot; Coimbatore
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
                    <TrendingUp className="h-4 w-4 text-emerald-300" />
                    <span className="font-['Inter',sans-serif] text-sm font-semibold text-white/80">
                      15K+ Happy Families
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.greenfieldhousingindia.com/community"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-['Inter',sans-serif] text-lg font-bold text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50"
                >
                  Experience More
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
                {communityFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <Tilt key={feature.label} max={10}>
                      <div className="flex h-full flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors duration-300 hover:border-emerald-400/40 hover:bg-white/10">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-emerald-300"
                          style={{ transform: "translateZ(20px)" }}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </div>
                        <span className="font-['Inter',sans-serif] text-sm font-semibold leading-snug text-white/90">
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