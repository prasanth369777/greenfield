import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Trees,
  HeartPulse,
  Volleyball,
  Users,
  Wifi,
  ShoppingBag,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Star,
  Building2,
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

const communityFeatures = [
  {
    icon: Trees,
    title: "Lush Green Spaces",
    desc: "Serene gardens, landscaped parks, and tree-lined avenues that bring nature to your doorstep.",
    stat: "40%",
    statLabel: "Open Green Area",
  },
  {
    icon: HeartPulse,
    title: "Wellness Zones",
    desc: "Fitness centers, yoga decks, walking trails, and meditation corners for a healthier lifestyle.",
    stat: "24/7",
    statLabel: "Wellness Access",
  },
  {
    icon: Volleyball,
    title: "Recreational Amenities",
    desc: "Clubhouses, swimming pools, sports courts, and indoor games for every age group.",
    stat: "15+",
    statLabel: "Amenities",
  },
  {
    icon: Users,
    title: "Community Gatherings",
    desc: "Spaces designed for celebrations, festivals, events, and building lasting bonds with neighbors.",
    stat: "50+",
    statLabel: "Events / Year",
  },
  {
    icon: Wifi,
    title: "Smart Living Features",
    desc: "Modern technology integrated for convenience, security, and efficient everyday living.",
    stat: "Smart",
    statLabel: "Enabled Homes",
  },
  {
    icon: ShoppingBag,
    title: "Proximity to Essentials",
    desc: "Located near schools, hospitals, IT parks, shopping malls, and entertainment hubs.",
    stat: "5 km",
    statLabel: "Avg. Distance",
  },
];

const stats = [
  { value: "15K+", label: "Happy Families" },
  { value: "20+", label: "Communities" },
  { value: "1000+", label: "Acres Developed" },
  { value: "13+", label: "Years of Trust" },
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
      className="relative w-full overflow-hidden bg-[#0a1f14] py-24 text-white md:py-32"
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
          backgroundSize: "70px 70px",
        }}
      />

      {/* Parallax orbs */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[130px]"
        style={{ transform: `translate3d(${drift.x * -50}px, ${drift.y * -50}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[150px]"
        style={{ transform: `translate3d(${drift.x * 60}px, ${drift.y * 60}px, 0)` }}
      />

      {/* Decorative rings */}
      <div
        className="pointer-events-none absolute right-[6%] top-[10%] hidden h-40 w-40 rounded-full border border-white/[0.08] lg:block"
        style={{ transform: `translate3d(${drift.x * 40}px, ${drift.y * 40}px, 0)` }}
      >
        <div className="absolute inset-4 rounded-full border border-emerald-400/20" />
        <div className="absolute inset-10 rounded-full bg-emerald-400/5 blur-md" />
      </div>

      <div
        className="pointer-events-none absolute left-[4%] bottom-[12%] hidden h-24 w-24 rounded-full border border-white/[0.08] lg:block"
        style={{ transform: `translate3d(${drift.x * -30}px, ${drift.y * -30}px, 0)` }}
      >
        <div className="absolute inset-3 rounded-full bg-amber-400/[0.06] blur-sm" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* ---------------------------------------------------
            HEADER
        --------------------------------------------------- */}

        <div className="mb-16 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end md:mb-20">
          <Reveal>
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2.5 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100">
                  Community Living
                </span>
              </div>

              <h2 className="font-['Poppins',sans-serif] text-[40px] font-black leading-[0.98] tracking-[-0.03em] sm:text-[52px] md:text-[64px] lg:text-[76px]">
                Designed for
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                  More Than
                </span>{" "}
                Living.
              </h2>

              <p className="mt-8 max-w-2xl font-['Inter',sans-serif] text-base font-medium leading-relaxed text-emerald-50/70 md:text-lg">
                Create meaningful bonds and shared experiences in spaces
                designed for connection, wellness, and joy. Every Greenfield
                community is built with lush green spaces, wellness zones,
                recreational amenities, and smart living features.
              </p>
            </div>
          </Reveal>

          {/* Right side — Highlight card */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur md:p-10">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-300" />
                  <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200/70">
                    Featured Community
                  </span>
                </div>

                <h3 className="mt-5 font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight md:text-3xl">
                  Lavender
                  <span className="block text-lg font-light italic text-emerald-200/80 md:text-xl">
                    Saravanampatti, Coimbatore
                  </span>
                </h3>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                  <Star className="h-5 w-5 fill-amber-300 text-amber-300" />
                  <span className="font-['Inter',sans-serif] text-xs font-bold uppercase tracking-wider text-white/80">
                    Our prestigious landmark project
                  </span>
                </div>

                <a
                  href="/lavender-campaign"
                  className="group mt-6 inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-300 transition-colors hover:text-emerald-200"
                >
                  Discover Lavender
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-emerald-400/20 bg-emerald-950/80 px-5 py-3.5 backdrop-blur md:block">
                <div className="flex items-center gap-3">
                 
                  <div>
                    <p className="font-['Poppins',sans-serif] text-xs font-black text-white">
                      Since 2012
                    </p>
                    <p className="font-['Inter',sans-serif] text-[10px] font-medium text-emerald-200/70">
                      13+ Years of Trust
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------------------------------------------------
            FEATURE GRID
        --------------------------------------------------- */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {communityFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={idx * 80}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.06] hover:shadow-[0_25px_60px_-20px_rgba(16,185,129,0.4)] md:p-8">
                  {/* Corner glow on hover */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/0 blur-[60px] transition-all duration-500 group-hover:bg-emerald-400/20" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20 transition-all duration-500 group-hover:bg-emerald-400 group-hover:text-emerald-950 group-hover:ring-emerald-400">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-7 font-['Poppins',sans-serif] text-xl font-black leading-tight tracking-tight text-white md:text-2xl">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-white/60 md:text-[15px]">
                      {feature.desc}
                    </p>

                    {/* Stat row */}
                    <div className="mt-7 flex items-end justify-between border-t border-white/10 pt-5">
                      <div>
                        <p className="font-['Poppins',sans-serif] text-3xl font-black leading-none tracking-tight text-emerald-300 md:text-4xl">
                          {feature.stat}
                        </p>
                        <p className="mt-1.5 font-['Poppins',sans-serif] text-[9px] font-black uppercase tracking-[0.18em] text-white/40">
                          {feature.statLabel}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 group-hover:text-emerald-300">
                        <ArrowUpRight className="h-4 w-4" />
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

        <Reveal delay={200}>
          <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur md:mt-20 md:grid-cols-4 md:rounded-[2rem]">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`relative p-6 transition-all duration-300 hover:bg-emerald-400/[0.06] md:p-8 ${
                  idx !== stats.length - 1 ? "border-r border-white/10" : ""
                } ${idx < 2 ? "border-b border-white/10 md:border-b-0" : ""}`}
              >
                <p className="font-['Poppins',sans-serif] text-3xl font-black leading-none tracking-tight text-emerald-300 md:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.18em] text-white/50 md:text-[11px]">
                  {stat.label}
                </p>

                <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* ---------------------------------------------------
            CTA STRIP
        --------------------------------------------------- */}

        <Reveal delay={250}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-emerald-400/[0.02] p-8 backdrop-blur md:mt-20 md:flex-row md:items-center md:rounded-[2.5rem] md:p-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-emerald-300" />
                <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.2em] text-emerald-200/80">
                  Experience Greenfield Living
                </span>
              </div>

              <h3 className="mt-4 font-['Poppins',sans-serif] text-3xl font-black leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
                Ready to be a part of
                <br />
                <span className="italic font-light text-emerald-200">
                  our community?
                </span>
              </h3>

              <p className="mt-5 font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-white/60 md:text-base">
                Explore our ongoing, completed, and ready-to-occupy projects
                across Coimbatore and Erode — and find the community where
                your family will thrive.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/allprojects"
                className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-7 py-4 font-['Poppins',sans-serif] text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-emerald-300"
              >
                Explore Communities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+917395864774"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-['Poppins',sans-serif] text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                Call Vetri
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}