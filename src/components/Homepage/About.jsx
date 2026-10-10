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
  Users,
  Home,
  Calendar,
  Star,
  MapPin,
  Shield,
  FileCheck,
  Phone,
  MessageCircle,
  Mail,
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
      desc: "Staying true to our commitments with honesty and transparency in every dealing — from booking to handover.",
    },
    {
      icon: Eye,
      title: "Innovation",
      desc: "Constantly evolving with creative and forward-thinking solutions for modern living and community design.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Building homes with respect for nature and future generations — green spaces, smart design, lasting value.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      desc: "Your needs are at the heart of everything we do — from the first site visit to years after possession.",
    },
  ];

  const highlights = [
    {
      icon: Building2,
      title: "20+ Projects",
      desc: "Delivered across Coimbatore and Erode since 2012.",
    },
    {
      icon: Ruler,
      title: "1000+ Acres",
      desc: "Developed prime land into thriving communities.",
    },
    {
      icon: Home,
      title: "15K+ Families",
      desc: "Happy families who found their dream home with us.",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Founded in Erode",
      desc: "Started with a vision to redefine real estate in Tamil Nadu.",
    },
    {
      year: "2012",
      title: "Entered Coimbatore",
      desc: "Expanded operations to Coimbatore to transform the real estate sector.",
    },
    {
      year: "2012",
      title: "First Gated Community",
      desc: "Launched Natchatra Homes — our first gated community project in Coimbatore.",
    },
    {
      year: "2016",
      title: "4 Projects Delivered",
      desc: "Successfully delivered 4 gated community projects in record time.",
    },
    {
      year: "2017",
      title: "Maple Project",
      desc: "Started Maple — our first luxurious gated community in Kalapatti.",
    },
    {
      year: "2020",
      title: "CREDAI Award",
      desc: "First developer in Coimbatore to receive CREDAI award for environment-friendly quality projects.",
    },
    {
      year: "2022",
      title: "COVID Relief",
      desc: "Donated ₹1 crore to CM's relief fund for the wellbeing of society.",
    },
    {
      year: "2025",
      title: "Lavender Project",
      desc: "Launched Lavender — our prestigious landmark project in Saravanampatti.",
    },
    {
      year: "2025",
      title: "Crystal Gateway",
      desc: "RERA-registered 805-plot community development in Sulur (TN/11/Layout/0360/2025).",
    },
    {
      year: "2040",
      title: "Integrated City",
      desc: "Mission to complete an integrated city with world-class amenities.",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Ambient parallax — background blobs drift opposite pointer
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
      className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24"
      style={{ perspective: "1800px" }}
    >
      {/* Background Decor */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-emerald-200/30 blur-[100px] transition-transform duration-300 ease-out md:h-[500px] md:w-[500px]"
        style={{
          transform: `translate3d(${drift.x * -40}px, ${drift.y * -40}px, 0)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-slate-300/40 blur-[120px] transition-transform duration-300 ease-out md:h-[500px] md:w-[500px]"
        style={{
          transform: `translate3d(${drift.x * 30}px, ${drift.y * 30}px, 0)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <Reveal className="mb-10 grid gap-6 md:mb-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 shadow-sm md:mb-6 md:px-5 md:py-2.5">
              <Home className="h-4 w-4 text-emerald-600" />
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-emerald-700 md:text-sm">
                About Greenfield Housing
              </span>
            </div>

            <h1 className="font-['Poppins',sans-serif] max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              We Build Homes,
              <span className="block text-emerald-600">Not Houses.</span>
            </h1>

            <p className="font-['Inter',sans-serif] mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:text-lg">
              For over a decade, Greenfield Housing India has been crafting
              premium apartments, luxury villas, and RERA-registered
              residential communities across Coimbatore and Erode — blending
              modern comfort with nature's embrace.
            </p>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <p className="mt-2 font-['Poppins',sans-serif] text-sm font-bold text-slate-950">
                  Coimbatore & Erode
                </p>
                <p className="font-['Inter',sans-serif] text-xs font-medium text-slate-500">
                  Serving Tamil Nadu
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <p className="mt-2 font-['Poppins',sans-serif] text-sm font-bold text-slate-950">
                  Since 2012
                </p>
                <p className="font-['Inter',sans-serif] text-xs font-medium text-slate-500">
                  13+ Years of Trust
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="font-['Inter',sans-serif] inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-800 active:scale-95 md:px-8 md:py-4 md:text-lg"
              >
                Explore Projects
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="tel:+917395864774"
                className="font-['Inter',sans-serif] inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-50 active:scale-95 md:px-8 md:py-4 md:text-lg"
              >
                <Phone className="h-5 w-5 text-emerald-600" />
                Call Vetri
              </a>
            </div>
          </div>
        </Reveal>

        {/* Main About Block */}
        <Reveal
          delay={100}
          className="mb-6 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:mb-10 md:rounded-[2rem] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <Tilt max={6} scale={1.01} className="rounded-none">
            <div className="relative min-h-[250px] overflow-hidden md:min-h-[400px] lg:min-h-[600px]">
              <img
                src={AboutImage}
                alt="Greenfield Housing India premium homes and communities in Coimbatore"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 md:bottom-8 md:left-8 md:right-8">
                {["20+ Projects", "1000+ Acres", "15K+ Families"].map((item) => (
                  <span
                    key={item}
                    className="font-['Poppins',sans-serif] rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm backdrop-blur md:px-4 md:py-2 md:text-xs"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Tilt>

          <div className="flex flex-col justify-center p-5 md:p-10 lg:p-12">
            <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-sm">
              Our Story
            </span>

            <h2 className="font-['Poppins',sans-serif] mt-3 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
              Turning empty spaces into environments of peace and comfort.
            </h2>

            <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:mt-6 md:text-base lg:text-lg">
              Greenfield Housing was founded in 2012 with a mission to create
              spaces that foster community, ideas, and a balanced future built
              on trust. We design and build homes that blend modern comfort
              with nature's embrace, creating neighborhoods where families can
              grow, connect, and create lasting memories.
            </p>

            <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:mt-6 md:text-base lg:text-lg">
              From premium apartments at <strong>Lavender</strong> in
              Saravanampatti and gated villas at <strong>Maple</strong> in
              Kalapatti, to RERA-registered plotted communities like{" "}
              <strong>Crystal Gateway</strong> in Sulur and{" "}
              <strong>Silver City</strong> near Karamadai — every project is
              thoughtfully designed with modern amenities, lush green spaces,
              and smart living features.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 md:gap-5">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Tilt key={item.title} max={8}>
                    <div className="h-full rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-emerald-100 hover:bg-white hover:shadow-md md:rounded-2xl md:p-5">
                      <div
                        className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-emerald-600 shadow-sm md:mb-4 md:h-12 md:w-12 md:rounded-xl"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2.5} />
                      </div>
                      <h3 className="font-['Poppins',sans-serif] text-base font-bold leading-snug text-slate-950 md:text-lg">
                        {item.title}
                      </h3>
                      <p className="font-['Inter',sans-serif] mt-2 text-xs font-medium leading-relaxed text-slate-500 md:text-sm">
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
        <div className="mb-6 grid gap-6 lg:grid-cols-2 md:mb-10 md:gap-8">
          <Reveal delay={0}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-10 lg:p-12">
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-sm">
                Mission
              </span>

              <h3 className="font-['Poppins',sans-serif] mt-3 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
                Leading real estate services in Tamil Nadu.
              </h3>

              <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
                It is our mission to deliver to our clients properties
                designed by leading quality architects, engineers, and
                interior designers — giving cost-effective solutions and
                innovative designs. Our goal is to be the leading real estate
                services company in Tamil Nadu, providing a full range of
                services to meet the diverse and evolving needs of the real
                estate industry.
              </p>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-10 lg:p-12">
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-sm">
                Vision
              </span>

              <h3 className="font-['Poppins',sans-serif] mt-3 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
                Creating environments of peace and comfort.
              </h3>

              <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
                To turn empty spaces into environments of peace and comfort
                through quality construction and best practices that enhance
                the lives of people. We abide by these enduring values that
                are the foundation of our business and are at the heart of all
                that we do each day.
              </p>

              <div className="mt-6 grid gap-3 md:mt-8">
                <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 md:rounded-2xl">
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 text-emerald-600"
                    strokeWidth={2.5}
                  />
                  <span className="font-['Inter',sans-serif] text-sm font-semibold text-slate-700 md:text-base">
                    Building homes with respect for nature and future
                    generations
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 md:rounded-2xl">
                  <CheckCircle2
                    className="h-5 w-5 flex-shrink-0 text-emerald-600"
                    strokeWidth={2.5}
                  />
                  <span className="font-['Inter',sans-serif] text-sm font-semibold text-slate-700 md:text-base">
                    Creating neighborhoods where people and ideas thrive
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Core Values */}
        <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:mb-10 md:rounded-[2rem] md:p-10 lg:p-12">
          <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-end md:mb-12 md:gap-8">
            <div>
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-sm">
                Our Principles
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-2 max-w-2xl text-3xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
                Building Blocks of Success.
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] max-w-xl text-base font-medium leading-relaxed text-slate-600 lg:ml-auto md:text-lg">
              Safety, Collaboration & Quality Craftsmanship — laid on a strong
              foundation of Integrity, Innovation & Excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Tilt key={value.title} max={12}>
                  <article className="group h-full rounded-xl border border-slate-100 bg-slate-50 p-5 shadow-[0_0_0_rgba(0,0,0,0)] transition-colors duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-xl md:rounded-2xl md:p-8">
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-emerald-600 shadow-sm transition-colors group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white md:mb-8 md:h-14 md:w-14"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.5} />
                    </div>
                    <h4
                      className="font-['Poppins',sans-serif] text-xl font-bold text-slate-950 md:text-2xl"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {value.title}
                    </h4>
                    <p className="font-['Inter',sans-serif] mt-2 text-sm font-medium leading-relaxed text-slate-600 md:mt-3 md:text-base">
                      {value.desc}
                    </p>
                  </article>
                </Tilt>
              );
            })}
          </div>
        </Reveal>

        {/* Our History / Timeline */}
        <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:mb-10 md:rounded-[2rem] md:p-10 lg:p-12">
          <div className="mb-8 md:mb-12">
            <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-sm">
              Our History
            </span>
            <h3 className="font-['Poppins',sans-serif] mt-2 max-w-2xl text-3xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
              Decades of Excellence in Real Estate.
            </h3>
            <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:text-lg">
              From our first gated community in Coimbatore to RERA-registered
              plotted developments in Sulur — here's how Greenfield Housing
              India has grown over 13+ years.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {milestones.map((milestone, index) => (
              <Tilt key={index} max={8}>
                <div className="h-full rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-emerald-200 hover:bg-white hover:shadow-md md:p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <span className="font-['Poppins',sans-serif] text-sm font-bold text-emerald-700">
                      {milestone.year}
                    </span>
                  </div>
                  <h4 className="font-['Poppins',sans-serif] text-base font-bold text-slate-950">
                    {milestone.title}
                  </h4>
                  <p className="font-['Inter',sans-serif] mt-1 text-sm text-slate-600">
                    {milestone.desc}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </Reveal>

        {/* Trust Signals Strip */}
        <Reveal className="mb-6 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 md:mb-10 md:rounded-[2rem] md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-['Poppins',sans-serif] text-base font-bold text-slate-950">
                  RERA Registered
                </h4>
                <p className="font-['Inter',sans-serif] mt-1 text-sm text-slate-600">
                  Projects like Crystal Gateway (TN/11/Layout/0360/2025) and
                  Fairland (TN/11/Layout/1405/2023) are fully RERA-registered.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-['Poppins',sans-serif] text-base font-bold text-slate-950">
                  CREDAI Awarded
                </h4>
                <p className="font-['Inter',sans-serif] mt-1 text-sm text-slate-600">
                  First developer in Coimbatore to receive the CREDAI award
                  for environment-friendly quality projects.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                <FileCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-['Poppins',sans-serif] text-base font-bold text-slate-950">
                  DTCP Approved
                </h4>
                <p className="font-['Inter',sans-serif] mt-1 text-sm text-slate-600">
                  Projects like Silver City (DTCP No. 58/2025) and Crown City
                  are fully DTCP-approved residential layouts.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Leadership */}
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] md:mb-12 md:gap-8">
          <Reveal delay={0}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-10 lg:p-12">
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-sm">
                Leadership
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-3 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
                Visionaries Behind Our Mission.
              </h3>

              <div className="mt-6 space-y-4">
                <Tilt max={6}>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 md:p-5">
                    <div className="flex items-center gap-4">
                      <Users className="h-8 w-8 text-emerald-600" />
                      <div>
                        <h4 className="font-['Poppins',sans-serif] text-lg font-bold text-slate-950">
                          Mr. V. Sadhasivam
                        </h4>
                        <p className="font-['Inter',sans-serif] text-sm font-medium text-emerald-700">
                          Chairman, Greenfield Housing
                        </p>
                      </div>
                    </div>
                  </div>
                </Tilt>

                <Tilt max={6}>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 md:p-5">
                    <div className="flex items-center gap-4">
                      <Users className="h-8 w-8 text-emerald-600" />
                      <div>
                        <h4 className="font-['Poppins',sans-serif] text-lg font-bold text-slate-950">
                          Shri. C. K. Balasubramaniyam
                        </h4>
                        <p className="font-['Inter',sans-serif] text-sm font-medium text-emerald-700">
                          Managing Director, Greenfield Housing
                        </p>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-10 lg:p-12">
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-sm">
                Our Promise
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-3 text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
                "We Build Homes, Not Houses"
              </h3>
              <p className="font-['Inter',sans-serif] mt-4 text-base font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
                This philosophy defines our approach to every project. We
                create spaces that foster meaningful bonds, shared
                experiences, and lasting joy — because a home is where life
                happens.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Star className="h-6 w-6 fill-emerald-600 text-emerald-600" />
                <span className="font-['Inter',sans-serif] text-sm font-semibold text-slate-700">
                  Trusted by 15,000+ happy families across Coimbatore & Erode
                </span>
              </div>
            </article>
          </Reveal>
        </div>

        {/* =====================================================
            SALES CONTACT — Vetri
        ===================================================== */}
        <Reveal className="mb-8 md:mb-12">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 p-6 text-white shadow-2xl md:rounded-[2rem] md:p-10 lg:p-12">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-green-500/20 blur-[100px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="font-['Poppins',sans-serif] inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-100 backdrop-blur">
                  <UserCheck className="h-3.5 w-3.5" />
                  Sales Enquiry
                </span>

                <h3 className="font-['Poppins',sans-serif] mt-5 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
                  Talk to Our Sales Team
                </h3>

                <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-base font-medium leading-relaxed text-emerald-100 md:text-lg">
                  Reach out for site visits, project details, current pricing,
                  and availability — our team is here to help you find the
                  perfect home across Coimbatore and Erode.
                </p>

                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow-lg">
                      <UserCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                        Sales Manager
                      </p>
                      <p className="font-['Poppins',sans-serif] text-xl font-black text-white">
                        Vetri
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-700 shadow-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                        Direct Line
                      </p>
                      <a
                        href="tel:+917395864774"
                        className="font-['Poppins',sans-serif] text-xl font-black text-white underline-offset-4 hover:underline"
                      >
                        +91 73958 64774
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 lg:flex-col">
                <a
                  href="tel:+917395864774"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-['Inter',sans-serif] text-base font-bold text-emerald-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50"
                >
                  <Phone className="h-5 w-5" />
                  Call Vetri
                </a>

                <a
                  href="https://wa.me/917395864774?text=Hi%20Vetri%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-['Inter',sans-serif] text-base font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>

                <a
                  href="mailto:info@gfhil.com"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-['Inter',sans-serif] text-base font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Final CTA */}
        <Reveal>
          <Tilt max={4} scale={1.005}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:rounded-[2.5rem] md:p-10 lg:p-14">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center md:gap-10">
                <div>
                  <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 md:text-sm">
                    Your dream home awaits
                  </span>
                  <h3 className="font-['Poppins',sans-serif] mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
                    Ready to find your dream home?
                  </h3>
                  <p className="font-['Inter',sans-serif] mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-600 md:mt-5 md:text-lg">
                    Explore our premium apartments, gated villas, and
                    RERA/DTCP-approved residential plots across Coimbatore and
                    Erode. From Lavender in Saravanampatti to Crystal Gateway
                    in Sulur — find the perfect home for your family.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-5 py-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <span className="font-['Inter',sans-serif] text-sm font-semibold text-slate-700">
                      Speak with{" "}
                      <strong className="text-slate-950">Vetri</strong> at{" "}
                      <a
                        href="tel:+917395864774"
                        className="text-emerald-700 underline-offset-4 hover:underline"
                      >
                        +91 73958 64774
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-700 px-6 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-800 active:scale-95 sm:w-auto md:rounded-full md:px-10 md:py-5 md:text-lg"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    View Our Projects
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <a
                    href="tel:+917395864774"
                    className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-800 shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-50 active:scale-95 sm:w-auto md:rounded-full md:px-10 md:py-5 md:text-lg"
                  >
                    <Phone className="h-5 w-5 text-emerald-600" />
                    Call Vetri
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