import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Award,
  ArrowRight,
  Building2,
  Ruler,
  CheckCircle2,
  Leaf,
  Users,
  Home,
  Calendar,
  Star,
  Shield,
  FileCheck,
  Phone,
  MessageCircle,
  Mail,
  UserCheck,
  TrendingUp,
  Target,
  Compass,
  Quote,
  ArrowUpRight,
  Sparkles,
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
      className={`transition-all duration-1000 ease-out ${
        inView ? "translate-y-0 opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

// =====================================================
// ABOUT US PAGE
// =====================================================

export default function AboutUs() {
  const pageRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

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

  // =====================================================
  // DATA
  // =====================================================

  const stats = [
    { value: "20+", label: "Projects Delivered", sub: "Coimbatore & Erode" },
    { value: "1000+", label: "Acres Developed", sub: "Prime Locations" },
    { value: "10L+", label: "Sq.Ft. Constructed", sub: "Premium Quality" },
    { value: "15K+", label: "Happy Families", sub: "Since 2012" },
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      desc: "Staying true to our commitments with honesty and transparency in every dealing — from booking to handover.",
      number: "01",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      desc: "Constantly evolving with creative and forward-thinking solutions for modern living and community design.",
      number: "02",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Building homes with respect for nature and future generations — green spaces, smart design, lasting value.",
      number: "03",
    },
    {
      icon: Home,
      title: "Customer Focus",
      desc: "Your needs are at the heart of everything we do — from the first site visit to years after possession.",
      number: "04",
    },
  ];

  const milestones = [
    { year: "2012", title: "Founded in Erode", desc: "Vision to redefine real estate in Tamil Nadu." },
    { year: "2012", title: "Entered Coimbatore", desc: "Expanded operations to transform the sector." },
    { year: "2012", title: "First Gated Community", desc: "Launched Natchatra Homes — our first gated project." },
    { year: "2016", title: "4 Projects Delivered", desc: "Delivered 4 gated communities in record time." },
    { year: "2017", title: "Maple Project", desc: "First luxury gated community in Kalapatti." },
    { year: "2020", title: "CREDAI Award", desc: "First developer in Coimbatore honoured for environment-friendly projects." },
    { year: "2022", title: "COVID Relief", desc: "Donated ₹1 crore to CM's relief fund." },
    { year: "2025", title: "Lavender Project", desc: "Launched our prestigious landmark project in Saravanampatti." },
    { year: "2025", title: "Crystal Gateway", desc: "RERA-registered 805-plot community in Sulur." },
    { year: "2040", title: "Integrated City", desc: "Mission to complete an integrated city." },
  ];

  const trustSignals = [
    {
      icon: Shield,
      title: "RERA Registered",
      desc: "Crystal Gateway (TN/11/Layout/0360/2025) and Fairland (TN/11/Layout/1405/2023) are fully RERA-registered.",
      accent: "emerald",
    },
    {
      icon: Award,
      title: "CREDAI Awarded",
      desc: "First developer in Coimbatore to receive CREDAI award for environment-friendly quality projects.",
      accent: "amber",
    },
    {
      icon: FileCheck,
      title: "DTCP Approved",
      desc: "Silver City (DTCP No. 58/2025) and Crown City are fully DTCP-approved residential layouts.",
      accent: "sky",
    },
  ];

  const leadership = [
    {
      name: "Mr. V. Sadhasivam",
      role: "Chairman",
      initials: "VS",
      quote: "Every home we build carries a promise — of quality, trust, and lasting value.",
    },
    {
      name: "Shri. C. K. Balasubramaniyam",
      role: "Managing Director",
      initials: "CB",
      quote: "We don't just build structures. We craft communities where families thrive.",
    },
  ];

  return (
    <main
      ref={pageRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full overflow-hidden bg-[#f7f8f5]"
    >
      {/* =====================================================
          HERO — Editorial, cinematic
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-24 text-white md:py-32 lg:py-40">
        {/* Layered gradient orbs */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-500/15 blur-[140px]"
          style={{ transform: `translate3d(${drift.x * -50}px, ${drift.y * -50}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-[160px]"
          style={{ transform: `translate3d(${drift.x * 60}px, ${drift.y * 60}px, 0)` }}
        />

        {/* Fine grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Decorative ring */}
        <div
          className="pointer-events-none absolute right-[8%] top-[12%] h-40 w-40 rounded-full border border-white/10"
          style={{ transform: `translate3d(${drift.x * 40}px, ${drift.y * 40}px, 0)` }}
        >
          <div className="absolute inset-4 rounded-full border border-emerald-400/20" />
          <div className="absolute inset-10 rounded-full bg-emerald-400/5 blur-md" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-200/70">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span className="h-px w-6 bg-emerald-300/40" />
            <span className="text-white">About Us</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            {/* Left — heading */}
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2.5 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100">
                  Greenfield Housing India · Est. 2012
                </span>
              </div>

              <h1 className="font-['Poppins',sans-serif] text-[52px] font-black leading-[0.95] tracking-[-0.03em] sm:text-[64px] md:text-[76px] lg:text-[88px]">
                We Build
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                  Homes,
                </span>{" "}
                Not
                <br />
                <span className="italic font-light text-emerald-100/90">Houses.</span>
              </h1>

              <p className="mt-8 max-w-2xl font-['Inter',sans-serif] text-base font-medium leading-relaxed text-emerald-50/70 md:text-lg">
                For over a decade, Greenfield Housing India has been crafting
                premium apartments, luxury villas, and RERA-registered
                residential communities across Coimbatore and Erode — blending
                modern comfort with nature's embrace.
              </p>
            </div>

            {/* Right — CTAs + micro info */}
            <div className="lg:pl-8">
              <div className="mb-8 space-y-4 border-l-2 border-emerald-400/30 pl-6">
                <div>
                  <p className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300/70">
                    Serving
                  </p>
                  <p className="mt-1 font-['Poppins',sans-serif] text-lg font-black text-white">
                    Coimbatore &amp; Erode
                  </p>
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300/70">
                    Recognized by
                  </p>
                  <p className="mt-1 font-['Poppins',sans-serif] text-lg font-black text-white">
                    CREDAI · RERA · DTCP
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/allprojects"
                  className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-7 py-4 font-['Poppins',sans-serif] text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-emerald-300"
                >
                  Explore Projects
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="tel:+917395864774"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-['Poppins',sans-serif] text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Vetri
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS STRIP
      ===================================================== */}

      <section className="relative -mt-14 md:-mt-20">
        <div className="relative z-20 mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <Reveal>
            <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_-30px_rgba(15,60,35,0.25)] md:grid-cols-4 md:rounded-[2rem]">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`relative p-6 transition-all duration-300 hover:bg-emerald-50/50 md:p-8 ${
                    idx !== stats.length - 1 ? "border-r border-slate-100" : ""
                  } ${idx < 2 ? "border-b border-slate-100 md:border-b-0" : ""}`}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-['Poppins',sans-serif] text-4xl font-black leading-none tracking-tight text-emerald-700 md:text-5xl">
                      {stat.value}
                    </span>
                  </div>
                  <p className="mt-3 font-['Poppins',sans-serif] text-[11px] font-black uppercase tracking-[0.14em] text-slate-800">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-['Inter',sans-serif] text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    {stat.sub}
                  </p>

                  {/* Subtle emerald corner */}
                  <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          OUR STORY — Editorial split
      ===================================================== */}

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* Left — Story text */}
            <Reveal>
              <div className="relative">
                <span className="absolute -left-4 -top-6 hidden font-['Poppins',sans-serif] text-[140px] font-black leading-none text-emerald-100/50 md:block">
                  “
                </span>
                <div className="relative">
                  <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                    Our Story
                  </span>

                  <h2 className="mt-5 font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl">
                    Turning empty spaces into environments of{" "}
                    <span className="italic font-light text-emerald-700">
                      peace and comfort.
                    </span>
                  </h2>

                  <div className="mt-8 space-y-5">
                    <p className="font-['Inter',sans-serif] text-base font-medium leading-relaxed text-slate-600 md:text-lg">
                      Greenfield Housing was founded in 2012 with a mission to
                      create spaces that foster community, ideas, and a
                      balanced future built on trust.
                    </p>
                    <p className="font-['Inter',sans-serif] text-base font-medium leading-relaxed text-slate-600 md:text-lg">
                      From premium apartments at{" "}
                      <strong className="font-bold text-slate-900">
                        Lavender
                      </strong>{" "}
                      in Saravanampatti and gated villas at{" "}
                      <strong className="font-bold text-slate-900">Maple</strong>{" "}
                      in Kalapatti, to RERA-registered plotted communities like{" "}
                      <strong className="font-bold text-slate-900">
                        Crystal Gateway
                      </strong>{" "}
                      in Sulur — every project is thoughtfully designed.
                    </p>
                  </div>

                  {/* Mini stat pills */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    {[
                      { icon: Building2, label: "20+ Projects" },
                      { icon: Ruler, label: "1000+ Acres" },
                      { icon: Users, label: "15K+ Families" },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-2.5 rounded-full border border-emerald-200 bg-white px-4 py-2.5 shadow-sm"
                        >
                          <Icon className="h-4 w-4 text-emerald-600" />
                          <span className="font-['Poppins',sans-serif] text-[11px] font-black uppercase tracking-wider text-emerald-900">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right — Stacked visual tiles */}
            <Reveal delay={150}>
              <div className="relative">
                {/* Big feature tile */}
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-800 via-emerald-900 to-[#0a1f14] p-10 text-white shadow-2xl">
                  {/* Layered pattern */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 ring-1 ring-white/20">
                      <Leaf className="h-7 w-7" />
                    </div>

                    <h3 className="mt-8 font-['Poppins',sans-serif] text-3xl font-black leading-tight tracking-tight md:text-4xl">
                      Homes inspired by nature
                    </h3>

                    <p className="mt-4 font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-emerald-100/80 md:text-base">
                      Every Greenfield community is designed with lush green
                      spaces, wellness zones, and smart living features — a
                      neighborhood that breathes.
                    </p>

                    <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                      <Star className="h-5 w-5 fill-amber-300 text-amber-300" />
                      <span className="font-['Inter',sans-serif] text-xs font-bold uppercase tracking-wider text-emerald-100/90">
                        CREDAI award · 2020
                      </span>
                    </div>
                  </div>
                </div>

                {/* Two smaller tiles below */}
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                    <Calendar className="h-7 w-7 text-emerald-600" />
                    <p className="mt-5 font-['Poppins',sans-serif] text-3xl font-black text-slate-950">
                      2012
                    </p>
                    <p className="mt-1 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Established
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                    <Award className="h-7 w-7 text-amber-500" />
                    <p className="mt-5 font-['Poppins',sans-serif] text-3xl font-black text-slate-950">
                      CREDAI
                    </p>
                    <p className="mt-1 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Award 2020
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-xl md:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-['Poppins',sans-serif] text-xs font-black text-slate-950">
                        13+ Years
                      </p>
                      <p className="font-['Inter',sans-serif] text-[10px] font-medium text-slate-500">
                        of trusted delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION — Dual cards, differentiated
      ===================================================== */}

      <section className="bg-[#0f2418] py-24 text-white md:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="mb-16 max-w-3xl">
            <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300">
              Mission &amp; Vision
            </span>
            <h2 className="mt-5 font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              What drives us
              <br />
              <span className="italic font-light text-emerald-300">
                forward, every day.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <Reveal>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-emerald-400/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur md:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-500/20 blur-[100px] transition-transform duration-700 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400 text-emerald-950">
                      <Target className="h-7 w-7" />
                    </div>
                    <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300/60">
                      01 · Mission
                    </span>
                  </div>

                  <h3 className="mt-10 font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight md:text-3xl">
                    Leading real estate services in Tamil Nadu.
                  </h3>

                  <p className="mt-6 font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-emerald-50/70 md:text-base">
                    It is our mission to deliver properties designed by leading
                    architects, engineers, and interior designers — offering
                    cost-effective solutions and innovative designs that meet
                    the evolving needs of real estate.
                  </p>

                  <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Driven by purpose
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={100}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-amber-400/10 bg-gradient-to-br from-amber-50/[0.06] to-white/[0.02] p-8 backdrop-blur md:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-500/10 blur-[100px] transition-transform duration-700 group-hover:scale-125" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-200 text-amber-950">
                      <Compass className="h-7 w-7" />
                    </div>
                    <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-amber-200/60">
                      02 · Vision
                    </span>
                  </div>

                  <h3 className="mt-10 font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight md:text-3xl">
                    Creating environments of peace and comfort.
                  </h3>

                  <p className="mt-6 font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-emerald-50/70 md:text-base">
                    To turn empty spaces into environments of peace and comfort
                    through quality construction and best practices that
                    enhance the lives of people.
                  </p>

                  <div className="mt-8 grid gap-3">
                    {[
                      "Building with respect for nature",
                      "Neighborhoods where people thrive",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-amber-200" />
                        <span className="font-['Inter',sans-serif] text-xs font-semibold text-white/90 md:text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES — Numbered cards
      ===================================================== */}

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                Our Principles
              </span>
              <h2 className="mt-5 font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Building blocks
                <br />
                of{" "}
                <span className="italic font-light text-emerald-700">
                  success.
                </span>
              </h2>
            </div>
            <p className="max-w-lg font-['Inter',sans-serif] text-base font-medium leading-relaxed text-slate-600 md:text-lg">
              Safety, collaboration &amp; quality craftsmanship — laid on a
              strong foundation of integrity, innovation &amp; excellence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={idx * 100}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl md:p-8">
                    {/* Number watermark */}
                    <span className="pointer-events-none absolute right-5 top-4 font-['Poppins',sans-serif] text-6xl font-black text-slate-100 transition-colors duration-500 group-hover:text-emerald-100">
                      {value.number}
                    </span>

                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-950 text-emerald-300 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>

                      <h3 className="mt-8 font-['Poppins',sans-serif] text-xl font-black text-slate-950 md:text-2xl">
                        {value.title}
                      </h3>

                      <p className="mt-4 font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-slate-600">
                        {value.desc}
                      </p>

                      <div className="mt-6 h-px w-12 bg-emerald-600 transition-all duration-500 group-hover:w-20" />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="mb-16 max-w-3xl">
            <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
              Our History
            </span>
            <h2 className="mt-5 font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Decades of excellence
              <br />
              <span className="italic font-light text-emerald-700">
                in real estate.
              </span>
            </h2>
          </div>

          {/* Timeline track */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {milestones.map((milestone, index) => (
                <Reveal key={index} delay={index * 60}>
                  <div className="group relative">
                    {/* Node */}
                    <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:shadow-lg">
                      <span className="font-['Poppins',sans-serif] text-sm font-black text-emerald-700 transition-colors group-hover:text-white">
                        {milestone.year}
                      </span>
                    </div>

                    <h4 className="font-['Poppins',sans-serif] text-base font-black leading-tight text-slate-950">
                      {milestone.title}
                    </h4>

                    <p className="mt-2 font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-slate-600">
                      {milestone.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST SIGNALS
      ===================================================== */}

      <section className="bg-[#0f2418] py-24 text-white md:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="mb-16 text-center">
            <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300">
              Compliance &amp; Trust
            </span>
            <h2 className="mt-5 font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Approved. Awarded.
              <br />
              <span className="italic font-light text-emerald-300">
                Trusted.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trustSignals.map((signal, idx) => {
              const Icon = signal.icon;
              const accentMap = {
                emerald: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
                amber: "border-amber-400/20 bg-amber-500/10 text-amber-300",
                sky: "border-sky-400/20 bg-sky-500/10 text-sky-300",
              };
              return (
                <Reveal key={signal.title} delay={idx * 100}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.06] md:p-10">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${accentMap[signal.accent]}`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-8 font-['Poppins',sans-serif] text-xl font-black tracking-tight md:text-2xl">
                      {signal.title}
                    </h3>

                    <p className="mt-4 font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-white/60">
                      {signal.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="mb-16 max-w-3xl">
            <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
              Leadership
            </span>
            <h2 className="mt-5 font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Visionaries behind
              <br />
              <span className="italic font-light text-emerald-700">
                our mission.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {leadership.map((leader, idx) => (
              <Reveal key={leader.name} delay={idx * 100}>
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl md:p-10">
                  <Quote className="absolute right-8 top-8 h-12 w-12 text-emerald-100 transition-colors duration-500 group-hover:text-emerald-200" />

                  <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 font-['Poppins',sans-serif] text-2xl font-black text-white shadow-lg">
                      {leader.initials}
                    </div>
                    <div>
                      <h3 className="font-['Poppins',sans-serif] text-xl font-black tracking-tight text-slate-950 md:text-2xl">
                        {leader.name}
                      </h3>
                      <p className="mt-1 font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-8 border-t border-slate-100 pt-6 font-['Inter',sans-serif] text-base font-medium italic leading-relaxed text-slate-600 md:text-lg">
                    “{leader.quote}”
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR PROMISE + SALES CONTACT
      ===================================================== */}

      <section className="bg-slate-50 py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            {/* Promise */}
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
                <Quote className="absolute right-8 top-8 h-16 w-16 text-emerald-100" />

                <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">
                  Our Promise
                </span>

                <h2 className="mt-5 font-['Poppins',sans-serif] text-3xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
                  “We Build Homes,
                  <br />
                  <span className="italic font-light text-emerald-700">
                    Not Houses.”
                  </span>
                </h2>

                <p className="mt-6 max-w-xl font-['Inter',sans-serif] text-base font-medium leading-relaxed text-slate-600 md:text-lg">
                  This philosophy defines our approach to every project. We
                  create spaces that foster meaningful bonds, shared
                  experiences, and lasting joy — because a home is where life
                  happens.
                </p>

                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                  <Star className="h-7 w-7 fill-emerald-600 text-emerald-600" />
                  <span className="font-['Inter',sans-serif] text-sm font-bold text-slate-700 md:text-base">
                    Trusted by 15,000+ happy families across Coimbatore &amp;
                    Erode
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Sales Contact — Vetri */}
            <Reveal delay={100}>
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-[#0a1f14] p-8 text-white shadow-2xl md:p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-[100px]" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-amber-400/10 blur-[90px]" />

                <div className="relative">
                  <span className="font-['Poppins',sans-serif] inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100 backdrop-blur">
                    <UserCheck className="h-3 w-3" />
                    Sales Contact
                  </span>

                  <h3 className="mt-6 font-['Poppins',sans-serif] text-2xl font-black leading-tight md:text-3xl">
                    Talk to Our
                    <br />
                    <span className="italic font-light text-emerald-200">
                      Sales Team
                    </span>
                  </h3>

                  {/* Vetri card */}
                  <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-lg">
                      <UserCheck className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200">
                        Sales Manager
                      </p>
                      <p className="mt-0.5 font-['Poppins',sans-serif] text-2xl font-black text-white">
                        Vetri
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <a
                      href="tel:+917395864774"
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <Phone className="h-5 w-5 text-emerald-300" />
                      <span className="font-['Inter',sans-serif] text-sm font-bold text-white">
                        +91 73958 64774
                      </span>
                    </a>

                    <a
                      href="https://wa.me/917395864774?text=Hi%20Vetri%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5 text-emerald-300" />
                      <span className="font-['Inter',sans-serif] text-sm font-bold text-white">
                        WhatsApp Vetri
                      </span>
                    </a>

                    <a
                      href="mailto:info@gfhil.com"
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <Mail className="h-5 w-5 text-emerald-300" />
                      <span className="font-['Inter',sans-serif] text-sm font-bold text-white">
                        info@gfhil.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0a1f14] py-24 text-white md:py-32">
        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[140px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <span className="font-['Poppins',sans-serif] text-[10px] font-black uppercase tracking-[0.22em] text-emerald-300">
                Ready to Begin?
              </span>
              <h2 className="mt-5 font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Find your dream home
                <br />
                <span className="italic font-light text-emerald-300">
                  with Greenfield.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl font-['Inter',sans-serif] text-base font-medium leading-relaxed text-emerald-50/70 md:text-lg">
                Explore premium apartments, gated villas, and RERA/DTCP-approved
                residential plots across Coimbatore and Erode.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/allprojects"
                  className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-8 py-4 font-['Poppins',sans-serif] text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-emerald-300"
                >
                  View All Projects
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+917395864774"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-['Poppins',sans-serif] text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                  Call Vetri
                </a>
              </div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, value: "20+", label: "Projects" },
                { icon: Users, value: "15K+", label: "Families" },
                { icon: Ruler, value: "1000+", label: "Acres" },
                { icon: TrendingUp, value: "13+", label: "Years" },
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
          </div>
        </div>
      </section>
    </main>
  );
}