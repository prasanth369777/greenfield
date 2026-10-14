import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Trees,
  HeartPulse,
  Volleyball,
  Users,
  Shield,
  Droplets,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Star,
  Building2,
  Phone,
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
// DATA (Verified from Source Documents)
// =====================================================

const communityFeatures = [
  {
    icon: Trees,
    title: "Green Spaces",
    desc: "Landscaped gardens and roadside greenery[cite: 8, 10].",
    stat: "Lush",
    statLabel: "Environments",
    color: "emerald",
  },
  {
    icon: HeartPulse,
    title: "Fitness Zones",
    desc: "Outdoor gyms and 400m running tracks[cite: 8].",
    stat: "Active",
    statLabel: "Lifestyle",
    color: "blue",
  },
  {
    icon: Volleyball,
    title: "Recreation",
    desc: "Clubhouses, mini theatres, and turf courts[cite: 8, 11].",
    stat: "Premium",
    statLabel: "Amenities",
    color: "purple",
  },
  {
    icon: Users,
    title: "Gatherings",
    desc: "Community halls and children's play areas[cite: 4, 8].",
    stat: "Social",
    statLabel: "Spaces",
    color: "orange",
  },
  {
    icon: Droplets,
    title: "Infrastructure",
    desc: "Individual water pipelines, underground EB, and drainage[cite: 6, 8, 10].",
    stat: "Ready",
    statLabel: "To Build",
    color: "indigo",
  },
  {
    icon: Shield,
    title: "Secure Layouts",
    desc: "24/7 security, CCTV, and gated compound walls[cite: 4, 6, 8, 10].",
    stat: "24/7",
    statLabel: "Protection",
    color: "rose",
  },
];

const stats = [
  { value: "805", label: "Plots in Gateway[cite: 8]" },
  { value: "100%", label: "Approved Layouts[cite: 6, 8, 10]" },
  { value: "3 Ac", label: "Cricket Turf[cite: 8]" },
  { value: "24/7", label: "Security[cite: 4, 6, 8, 11]" },
];

// =====================================================
// COMMUNITY SECTION
// =====================================================

export default function Community() {
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
      id="community"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full overflow-hidden bg-[#0a1f14] py-16 text-white md:py-24"
    >
      {/* =====================================================
          BACKGROUND LAYERS
      ===================================================== */}

      {/* Fine grid overlay */}
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
        className="pointer-events-none absolute -left-20 top-10 h-[300px] w-[300px] rounded-full bg-emerald-500/15 blur-[100px] md:h-[400px] md:w-[400px]"
        style={{ transform: `translate3d(${drift.x * -30}px, ${drift.y * -30}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[350px] w-[350px] rounded-full bg-amber-500/10 blur-[120px] md:h-[500px] md:w-[500px]"
        style={{ transform: `translate3d(${drift.x * 40}px, ${drift.y * 40}px, 0)` }}
      />

      {/* Decorative rings */}
      <div
        className="pointer-events-none absolute right-[6%] top-[10%] hidden h-32 w-32 rounded-full border border-white/[0.08] lg:block"
        style={{ transform: `translate3d(${drift.x * 20}px, ${drift.y * 20}px, 0)` }}
      >
        <div className="absolute inset-4 rounded-full border border-emerald-400/20" />
        <div className="absolute inset-8 rounded-full bg-emerald-400/5 blur-md" />
      </div>

      <div
        className="pointer-events-none absolute left-[4%] bottom-[12%] hidden h-20 w-20 rounded-full border border-white/[0.08] lg:block"
        style={{ transform: `translate3d(${drift.x * -20}px, ${drift.y * -20}px, 0)` }}
      >
        <div className="absolute inset-3 rounded-full bg-amber-400/[0.06] blur-sm" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ---------------------------------------------------
            HEADER
        --------------------------------------------------- */}

        <div className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end md:mb-16">
          <Reveal>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 backdrop-blur md:mb-8">
                <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 md:h-2 md:w-2" />
                </span>
                <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.2em] text-emerald-100 md:text-[10px]">
                  Community Living
                </span>
              </div>

              <h2 className="font-['Poppins',sans-serif] text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Equipped For
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                  Modern Life.
                </span>
              </h2>

              <p className="mt-4 max-w-xl font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-emerald-50/70 md:mt-6 md:text-sm">
                Every Greenfield community is built with lush green spaces, wellness zones, recreational amenities, and secure infrastructure. We turn empty lands into vibrant neighborhoods[cite: 8, 10, 11].
              </p>
            </div>
          </Reveal>

          {/* Right side — Highlight card */}
          <Reveal delay={100}>
            <div className="relative">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur md:rounded-[2rem] md:p-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <MapPin className="h-4 w-4 text-emerald-300 md:h-5 md:w-5" />
                  <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.15em] text-emerald-200/70 md:text-[10px]">
                    Featured Community
                  </span>
                </div>

                <h3 className="mt-3 font-['Poppins',sans-serif] text-xl font-black leading-tight tracking-tight md:mt-4 md:text-2xl">
                  Crystal Gateway
                  <span className="block text-sm font-light italic text-emerald-200/80 md:mt-1 md:text-base">
                    Sulur, Coimbatore
                  </span>
                </h3>

                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 md:mt-5 md:pt-5">
                  <Star className="h-4 w-4 fill-amber-300 text-amber-300 md:h-5 md:w-5" />
                  <span className="font-['Inter',sans-serif] text-[10px] font-bold uppercase tracking-wider text-white/80 md:text-xs">
                    805-plot RERA Community[cite: 8]
                  </span>
                </div>

                <Link
                  to="/project"
                  className="group mt-4 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-emerald-300 transition-colors hover:text-emerald-200 md:mt-5 md:text-[10px]"
                >
                  Discover Gateway
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-4 md:w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------------------------------------------------
            FEATURE GRID
        --------------------------------------------------- */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {communityFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={idx * 60}>
                <article className="group relative h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06] hover:shadow-lg md:rounded-[1.5rem] md:p-6">
                  {/* Corner glow on hover */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/0 blur-[40px] transition-all duration-500 group-hover:bg-emerald-400/20 md:-right-12 md:-top-12 md:h-32 md:w-32 md:blur-[50px]" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20 transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-emerald-950 group-hover:ring-emerald-400 md:h-12 md:w-12">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-['Poppins',sans-serif] text-lg font-black leading-tight tracking-tight text-white md:mt-5 md:text-xl">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-white/60 md:mt-3 md:text-sm">
                      {feature.desc}
                    </p>

                    {/* Stat row */}
                    <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4 md:mt-6 md:pt-5">
                      <div>
                        <p className="font-['Poppins',sans-serif] text-2xl font-black leading-none tracking-tight text-emerald-300 md:text-3xl">
                          {feature.stat}
                        </p>
                        <p className="mt-1 font-['Poppins',sans-serif] text-[8px] font-black uppercase tracking-[0.15em] text-white/40 md:text-[9px]">
                          {feature.statLabel}
                        </p>
                      </div>

                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 group-hover:text-emerald-300 md:h-8 md:w-8">
                        <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ---------------------------------------------------
            STATS STRIP
        --------------------------------------------------- */}

        <Reveal delay={150}>
          <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur md:mt-16 md:grid-cols-4 md:rounded-[2rem]">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`relative p-5 transition-all duration-300 hover:bg-emerald-400/[0.06] md:p-6 lg:p-8 ${
                  idx !== stats.length - 1 ? "border-r border-white/10" : ""
                } ${idx < 2 ? "border-b border-white/10 md:border-b-0" : ""}`}
              >
                <p className="font-['Poppins',sans-serif] text-2xl font-black leading-none tracking-tight text-emerald-300 md:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-['Poppins',sans-serif] text-[8px] font-black uppercase tracking-[0.15em] text-white/50 md:mt-3 md:text-[9px]">
                  {stat.label}
                </p>

                <div className="absolute right-3 top-3 h-1 w-1 rounded-full bg-emerald-400/60 md:h-1.5 md:w-1.5" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* ---------------------------------------------------
            CTA STRIP
        --------------------------------------------------- */}

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-emerald-400/[0.02] p-6 backdrop-blur md:mt-16 md:flex-row md:items-center md:rounded-[2rem] md:p-10 lg:p-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 md:gap-3">
                <Building2 className="h-4 w-4 text-emerald-300 md:h-5 md:w-5" />
                <span className="font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-emerald-200/80 md:text-[10px]">
                  Experience Greenfield
                </span>
              </div>

              <h3 className="mt-3 font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight text-white md:mt-4 md:text-3xl lg:text-4xl">
                Ready to be a part of
                <br />
                <span className="italic font-light text-emerald-200">
                  our community?
                </span>
              </h3>

              <p className="mt-3 font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-white/60 md:mt-4 md:text-sm">
                Explore our ongoing, completed, and ready-to-build projects
                across Coimbatore — and find the community where your family will thrive[cite: 3, 6, 8, 10, 11].
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 md:gap-3">
              <Link
                to="/project"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-['Poppins',sans-serif] text-xs font-bold text-emerald-950 shadow-md shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-300 md:gap-3 md:px-6 md:py-3.5 md:text-sm"
              >
                Explore Layouts
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 md:h-4 md:w-4" />
              </Link>

              <a
                href="tel:+917395864774"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-['Poppins',sans-serif] text-xs font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 md:gap-3 md:px-6 md:py-3.5 md:text-sm"
              >
                <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                Call Sales
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}