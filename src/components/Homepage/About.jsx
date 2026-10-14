import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Award,
  Eye,
  Heart,
  ArrowRight,
  Building2,
  Ruler,
  CheckCircle2,
  Leaf,
  Home,
  Star,
  MapPin,
  Shield,
  FileCheck,
  Phone,
  MessageCircle,
  UserCheck,
} from "lucide-react";

import AboutImage from "../../assests/team/herosection/cubehero3.webp";

// =====================================================
// 3D TILT — wraps any card, tilts it toward the pointer
// =====================================================

function Tilt({ children, className = "", max = 10, scale = 1.02, glare = true }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, o: 0 });

  const handleMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * max * 2;
      const rotateX = (0.5 - py) * max * 2;

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      });
      setGlarePos({ x: px * 100, y: py * 100, o: 0.18 });
    },
    [max, scale]
  );

  const handleLeave = useCallback(() => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    });
    setGlarePos((g) => ({ ...g, o: 0 }));
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
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glarePos.o,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.9), transparent 55%)`,
          }}
        />
      )}
    </div>
  );
}

// =====================================================
// SCROLL REVEAL
// =====================================================

function useInView(threshold = 0.2) {
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
  const [ref, inView] = useInView(0.15);
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
// ABOUT — Greenfield Housing India
// =====================================================

export default function About() {
  const sectionRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const coreValues = [
    {
      icon: Award,
      title: "Integrity",
      desc: "Delivering officially approved layouts and maintaining clear legal standards[cite: 6, 8, 10].",
    },
    {
      icon: Eye,
      title: "Innovation",
      desc: "Integrating modern amenities like underground cables and extensive sports facilities[cite: 8].",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Prioritizing green living with landscaped gardens and rainwater harvesting systems[cite: 8, 10].",
    },
    {
      icon: Heart,
      title: "Community Focus",
      desc: "Building gated environments with 24/7 security and dedicated spaces for families[cite: 4, 8, 10].",
    },
  ];

  const highlights = [
    {
      icon: Building2,
      title: "Premium Plots",
      desc: "Residential plots ranging from 1.5 cents up to 2,400 sq.ft[cite: 6, 8].",
    },
    {
      icon: Ruler,
      title: "Massive Scale",
      desc: "Expansive communities, including the 805-plot Crystal Gateway[cite: 8].",
    },
    {
      icon: Home,
      title: "Prime Locations",
      desc: "Located in Coimbatore areas like Sulur, Annur, and Kovilpalayam[cite: 3, 8, 10].",
    },
  ];

  const milestones = [
    {
      tag: "Sulur",
      title: "Crystal Gateway",
      desc: "805 plots with a 3-acre cricket turf and grand clubhouse[cite: 8].",
    },
    {
      tag: "Ponnigoundapudur",
      title: "Fairland",
      desc: "Gated community with an indoor shuttle court and commercial complex[cite: 11].",
    },
    {
      tag: "Annur",
      title: "Opal Garden IV",
      desc: "RERA-registered layout with street lighting and park access[cite: 3, 4].",
    },
    {
      tag: "Kovilpalayam",
      title: "Crown City",
      desc: "DTCP-approved layout on Sathy Main Road with 30ft/40ft roads[cite: 10].",
    },
    {
      tag: "Karamadai Road",
      title: "Silver City",
      desc: "Secure plots with individual water pipelines from ₹7.50L[cite: 6].",
    },
    {
      tag: "Pattanam",
      title: "Diamond Avenue",
      desc: "Upcoming residential plot project[cite: 1].",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionMove = useCallback((e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setDrift({ x: px, y: py });
  }, []);

  const handleSectionLeave = useCallback(() => setDrift({ x: 0, y: 0 }), []);

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={handleSectionMove}
      onMouseLeave={handleSectionLeave}
      className="relative w-full overflow-hidden bg-slate-50 py-10 md:py-20"
      style={{ perspective: "1800px" }}
    >
      {/* Background Decor */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-emerald-200/30 blur-[80px] transition-transform duration-300 ease-out md:h-[400px] md:w-[400px]"
        style={{
          transform: `translate3d(${drift.x * -30}px, ${drift.y * -30}px, 0)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-slate-300/40 blur-[100px] transition-transform duration-300 ease-out md:h-[400px] md:w-[400px]"
        style={{
          transform: `translate3d(${drift.x * 20}px, ${drift.y * 20}px, 0)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <Reveal className="mb-8 grid gap-5 md:mb-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-1.5 shadow-sm md:mb-5 md:px-4 md:py-2">
              <Home className="h-3.5 w-3.5 text-emerald-600 md:h-4 md:w-4" />
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-700 md:text-xs">
                About The Developer
              </span>
            </div>

            <h1 className="font-['Poppins',sans-serif] max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
              We Build Communities,
              <span className="block text-emerald-600">Not Just Layouts.</span>
            </h1>

            <p className="font-['Inter',sans-serif] mt-4 max-w-xl text-sm font-medium leading-relaxed text-slate-600 md:mt-5 md:text-base">
              We craft premium, RERA-registered residential communities across the greater Coimbatore region[cite: 3, 8, 11].
            </p>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="rounded-xl border border-emerald-100 bg-white p-3 shadow-sm md:rounded-2xl md:p-4">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <p className="mt-1.5 font-['Poppins',sans-serif] text-xs font-bold text-slate-950 md:mt-2 md:text-sm">
                  Coimbatore District
                </p>
                <p className="font-['Inter',sans-serif] text-[10px] font-medium text-slate-500 md:text-xs">
                  Sulur, Annur, S.S. Kulam[cite: 3, 8, 11]
                </p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-white p-3 shadow-sm md:rounded-2xl md:p-4">
                <Shield className="h-4 w-4 text-emerald-600" />
                <p className="mt-1.5 font-['Poppins',sans-serif] text-xs font-bold text-slate-950 md:mt-2 md:text-sm">
                  Fully Verified
                </p>
                <p className="font-['Inter',sans-serif] text-[10px] font-medium text-slate-500 md:text-xs">
                  DTCP & RERA Approved[cite: 8, 10, 11]
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 md:mt-6 md:gap-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="font-['Inter',sans-serif] inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-800 active:scale-95 md:gap-3 md:px-7 md:py-3.5 md:text-base"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <a
                href="tel:+917395864774"
                className="font-['Inter',sans-serif] inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-50 active:scale-95 md:px-7 md:py-3.5 md:text-base"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                Call Sales
              </a>
            </div>
          </div>
        </Reveal>

        {/* Main About Block */}
        <Reveal
          delay={100}
          className="mb-6 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:mb-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <Tilt max={6} scale={1.01} className="rounded-none">
            <div className="relative min-h-[200px] overflow-hidden md:min-h-[350px] lg:min-h-[500px]">
              <img
                src={AboutImage}
                alt="Greenfield Housing India premium communities in Coimbatore"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 md:bottom-6 md:left-6 md:right-6 md:gap-2">
                {["Gated Communities", "Underground Utilities", "Sports Turfs"].map((item) => (
                  <span
                    key={item}
                    className="font-['Poppins',sans-serif] rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm backdrop-blur md:px-3 md:py-1.5 md:text-[10px]"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Tilt>

          <div className="flex flex-col justify-center p-4 md:p-8 lg:p-10">
            <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-xs">
              Our Story
            </span>

            <h2 className="font-['Poppins',sans-serif] mt-2 max-w-xl text-xl font-black leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
              Transforming lands into thriving neighborhoods.
            </h2>

            <p className="font-['Inter',sans-serif] mt-3 max-w-xl text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm lg:text-base">
              We develop residential plots with robust infrastructure, including individual water pipelines, tar roads, and government-standard drainage to ensure a comfortable future[cite: 6, 8].
            </p>

            <p className="font-['Inter',sans-serif] mt-3 max-w-xl text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm lg:text-base">
              From the 805-plot <strong>Crystal Gateway</strong> in Sulur[cite: 8] to the secure <strong>Fairland</strong> in Ponnigoundapudur[cite: 11], our layouts blend modern convenience with community living.
            </p>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 md:mt-8 md:gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Tilt key={item.title} max={8}>
                    <div className="h-full rounded-xl border border-slate-100 bg-slate-50 p-3 transition-colors hover:border-emerald-100 hover:bg-white hover:shadow-md md:p-4">
                      <div
                        className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-emerald-600 shadow-sm md:mb-3 md:h-10 md:w-10"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.5} />
                      </div>
                      <h3 className="font-['Poppins',sans-serif] text-sm font-bold leading-snug text-slate-950 md:text-base">
                        {item.title}
                      </h3>
                      <p className="font-['Inter',sans-serif] mt-1.5 text-[10px] font-medium leading-relaxed text-slate-500 md:text-xs">
                        {item.desc}
                      </p>
                    </div>
                  </Tilt>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Mission + Vision */}
        <div className="mb-6 grid gap-5 lg:grid-cols-2 md:mb-10 md:gap-6">
          <Reveal delay={0}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8 lg:p-10">
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-xs">
                Mission
              </span>

              <h3 className="font-['Poppins',sans-serif] mt-2 max-w-xl text-xl font-black leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
                Reliable spaces for modern living.
              </h3>

              <p className="font-['Inter',sans-serif] mt-3 max-w-xl text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm lg:text-base">
                We deliver residential properties designed with high-quality infrastructure, featuring 30ft to 40ft blacktop roads, drainage, and reliable utilities[cite: 6, 8, 10].
              </p>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8 lg:p-10">
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-xs">
                Vision
              </span>

              <h3 className="font-['Poppins',sans-serif] mt-2 max-w-xl text-xl font-black leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
                Active environments for peace and comfort.
              </h3>

              <p className="font-['Inter',sans-serif] mt-3 max-w-xl text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm lg:text-base">
                We turn empty lands into vibrant communities by integrating leisure facilities like outdoor gyms, children's parks, and running tracks[cite: 6, 8, 10].
              </p>

              <div className="mt-4 grid gap-2 md:mt-6 md:gap-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50/50 px-3 py-2 md:px-4 md:py-3">
                  <CheckCircle2
                    className="h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5"
                    strokeWidth={2.5}
                  />
                  <span className="font-['Inter',sans-serif] text-xs font-semibold text-slate-700 md:text-sm">
                    Enclosed compound walls and grand entrance arches[cite: 8, 10].
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50/50 px-3 py-2 md:px-4 md:py-3">
                  <CheckCircle2
                    className="h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5"
                    strokeWidth={2.5}
                  />
                  <span className="font-['Inter',sans-serif] text-xs font-semibold text-slate-700 md:text-sm">
                    Community halls and shared recreational turfs[cite: 8, 11].
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Core Values */}
        <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:mb-10 md:p-8 lg:p-10">
          <div className="mb-6 grid gap-3 lg:grid-cols-[1fr_1fr] lg:items-end md:mb-10 md:gap-6">
            <div>
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-xs">
                Our Principles
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-1.5 max-w-xl text-2xl font-black leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
                Building Blocks of Success.
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] max-w-lg text-xs font-medium leading-relaxed text-slate-600 lg:ml-auto md:text-sm">
              Safety, Infrastructure & Legal Transparency — laid on a strong foundation of Integrity, Innovation & Excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5 xl:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Tilt key={value.title} max={12}>
                  <article className="group h-full rounded-xl border border-slate-100 bg-slate-50 p-4 shadow-[0_0_0_rgba(0,0,0,0)] transition-colors duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-xl md:p-6">
                    <div
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-emerald-600 shadow-sm transition-colors group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white md:mb-6 md:h-12 md:w-12"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.5} />
                    </div>
                    <h4
                      className="font-['Poppins',sans-serif] text-base font-bold text-slate-950 md:text-xl"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      {value.title}
                    </h4>
                    <p className="font-['Inter',sans-serif] mt-1.5 text-xs font-medium leading-relaxed text-slate-600 md:mt-2 md:text-sm">
                      {value.desc}
                    </p>
                  </article>
                </Tilt>
              );
            })}
          </div>
        </Reveal>

        {/* Our Projects / Timeline */}
        <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:mb-10 md:p-8 lg:p-10">
          <div className="mb-6 md:mb-10">
            <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-xs">
              Our Portfolio
            </span>
            <h3 className="font-['Poppins',sans-serif] mt-1.5 max-w-xl text-2xl font-black leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
              Showcase of Premium Developments.
            </h3>
            <p className="font-['Inter',sans-serif] mt-3 max-w-xl text-xs font-medium leading-relaxed text-slate-600 md:text-sm">
              Discover carefully curated plotted layouts developed across Coimbatore.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {milestones.map((milestone, index) => (
              <Tilt key={index} max={8}>
                <div className="h-full rounded-xl border border-slate-100 bg-slate-50 p-3 transition-colors hover:border-emerald-200 hover:bg-white hover:shadow-md md:p-4">
                  <div className="mb-1.5 flex items-center gap-1.5 md:mb-2">
                    <MapPin className="h-3 w-3 text-emerald-600 md:h-4 md:w-4" />
                    <span className="font-['Poppins',sans-serif] text-xs font-bold text-emerald-700 md:text-sm">
                      {milestone.tag}
                    </span>
                  </div>
                  <h4 className="font-['Poppins',sans-serif] text-sm font-bold text-slate-950 md:text-base">
                    {milestone.title}
                  </h4>
                  <p className="font-['Inter',sans-serif] mt-1 text-[10px] text-slate-600 md:text-xs">
                    {milestone.desc}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </Reveal>

        {/* Trust Signals Strip */}
        <Reveal className="mb-6 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 md:mb-10 md:p-8">
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm md:h-12 md:w-12">
                <Shield className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div>
                <h4 className="font-['Poppins',sans-serif] text-sm font-bold text-slate-950 md:text-base">
                  RERA Registered
                </h4>
                <ul className="font-['Inter',sans-serif] mt-1 text-[10px] text-slate-600 list-inside list-disc md:text-xs">
                  <li>Crystal Gateway: TN11//Layout/0360/2025[cite: 8]</li>
                  <li>Opal Garden IV: TNRERA/11/LO/3358/2026[cite: 3]</li>
                  <li>Fairland: TN/11/Layout/1405/2023[cite: 11]</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm md:h-12 md:w-12">
                <FileCheck className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div>
                <h4 className="font-['Poppins',sans-serif] text-sm font-bold text-slate-950 md:text-base">
                  DTCP Approved
                </h4>
                <ul className="font-['Inter',sans-serif] mt-1 text-[10px] text-slate-600 list-inside list-disc md:text-xs">
                  <li>Silver City: No. 58/2025[cite: 6]</li>
                  <li>Crown City: Approved Layout[cite: 10]</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm md:h-12 md:w-12">
                <Star className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div>
                <h4 className="font-['Poppins',sans-serif] text-sm font-bold text-slate-950 md:text-base">
                  Premium Quality
                </h4>
                <p className="font-['Inter',sans-serif] mt-1 text-[10px] text-slate-600 md:text-xs">
                  Verified official project documents for complete legal transparency[cite: 10, 11].
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Project Developers */}
        <div className="mb-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] md:mb-10 md:gap-6">
          <Reveal delay={0}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8 lg:p-10">
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-xs">
                Our Network
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-2 max-w-xl text-xl font-black leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
                The Developers Behind Our Communities.
              </h3>

              <div className="mt-4 space-y-3 md:mt-6 md:space-y-4">
                <Tilt max={6}>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 md:p-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <Building2 className="h-6 w-6 text-emerald-600 md:h-8 md:w-8" />
                      <div>
                        <h4 className="font-['Poppins',sans-serif] text-sm font-bold text-slate-950 md:text-base">
                          Greenfield Housing India Pvt. Ltd.
                        </h4>
                        <p className="font-['Inter',sans-serif] text-[10px] font-medium text-emerald-700 md:text-xs">
                          Primary Developer of Opal Garden and Fairland[cite: 3, 11]
                        </p>
                      </div>
                    </div>
                  </div>
                </Tilt>

                <Tilt max={6}>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 md:p-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <Building2 className="h-6 w-6 text-emerald-600 md:h-8 md:w-8" />
                      <div>
                        <h4 className="font-['Poppins',sans-serif] text-sm font-bold text-slate-950 md:text-base">
                          Terra Field Realtors
                        </h4>
                        <p className="font-['Inter',sans-serif] text-[10px] font-medium text-emerald-700 md:text-xs">
                          Promoter of Crystal Gateway[cite: 8]
                        </p>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8 lg:p-10">
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-xs">
                Our Promise
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-2 text-xl font-black leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
                "Ready for the Future"
              </h3>
              <p className="font-['Inter',sans-serif] mt-3 text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm lg:text-base">
                We create plotted spaces that foster meaningful bonds. Whether through loan assistance up to 80%[cite: 10] or providing legal clarity[cite: 11], we stand by our clients.
              </p>
            </article>
          </Reveal>
        </div>

        {/* =====================================================
            SALES CONTACT 
        ===================================================== */}
        <Reveal className="mb-6 md:mb-10">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 p-5 text-white shadow-xl md:p-8 lg:p-10">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-emerald-400/20 blur-[80px] md:h-[300px] md:w-[300px] md:blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-green-500/20 blur-[80px] md:h-[300px] md:w-[300px] md:blur-[100px]" />

            <div className="relative grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center md:gap-6">
              <div>
                <span className="font-['Poppins',sans-serif] inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-100 backdrop-blur md:gap-2 md:px-4 md:py-2 md:text-[10px]">
                  <UserCheck className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  Sales Enquiry
                </span>

                <h3 className="font-['Poppins',sans-serif] mt-3 text-2xl font-black leading-tight md:mt-4 md:text-3xl lg:text-4xl">
                  Talk to Our Sales Team
                </h3>

                <p className="font-['Inter',sans-serif] mt-2 max-w-xl text-xs font-medium leading-relaxed text-emerald-100 md:mt-3 md:text-sm">
                  Reach out for site visits, project details, current pricing, and availability — our team is here to help you find the perfect plot[cite: 5].
                </p>

                <div className="mt-5 flex flex-wrap gap-4 md:mt-6 md:gap-5">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-700 shadow-md md:h-12 md:w-12">
                      <Phone className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-200 md:text-[10px]">
                        Direct Line
                      </p>
                      <a
                        href="tel:+917395864774"
                        className="font-['Poppins',sans-serif] text-base font-black text-white underline-offset-4 hover:underline md:text-lg"
                      >
                        +91 73958 64774
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 lg:flex-col md:gap-3">
                <a
                  href="tel:+917395864774"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-['Inter',sans-serif] text-xs font-bold text-emerald-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 md:gap-3 md:px-6 md:py-3.5 md:text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Call Vetri
                </a>

                <a
                  href="https://wa.me/917395864774?text=Hi%2C%20I%27m%20interested%20in%20your%20residential%20plot%20projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 font-['Inter',sans-serif] text-xs font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 md:gap-3 md:px-6 md:py-3.5 md:text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Final CTA */}
        <Reveal>
          <Tilt max={4} scale={1.005}>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md md:p-8 lg:p-10">
              <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center md:gap-8">
                <div>
                  <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-xs">
                    Your foundation awaits
                  </span>
                  <h3 className="font-['Poppins',sans-serif] mt-2 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
                    Ready to find your ideal plot?
                  </h3>
                  <p className="font-['Inter',sans-serif] mt-2 max-w-lg text-xs font-medium leading-relaxed text-slate-600 md:mt-3 md:text-sm">
                    Explore our RERA/DTCP-approved residential plots across Coimbatore. From Crystal Gateway in Sulur to Silver City in Karamadai — find the perfect land to build your family's future[cite: 6, 8].
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-2 md:mt-5 md:gap-3 md:px-5 md:py-3">
                    <Phone className="h-4 w-4 text-emerald-600 md:h-5 md:w-5" />
                    <span className="font-['Inter',sans-serif] text-[10px] font-semibold text-slate-700 md:text-sm">
                      Speak with our sales team at{" "}
                      <a
                        href="tel:+917395864774"
                        className="text-emerald-700 underline-offset-4 hover:underline font-bold"
                      >
                        +91 73958 64774
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 lg:flex-col lg:items-end md:gap-3">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-emerald-800 active:scale-95 sm:w-auto md:gap-3 md:rounded-full md:px-8 md:py-4 md:text-base"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    View Our Projects
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </button>

                  <a
                    href="tel:+917395864774"
                    className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-xs font-semibold text-slate-800 shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-50 active:scale-95 sm:w-auto md:gap-3 md:rounded-full md:px-8 md:py-4 md:text-base"
                  >
                    <Phone className="h-4 w-4 text-emerald-600 md:h-5 md:w-5" />
                    Call Sales
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}