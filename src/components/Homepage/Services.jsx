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
// CONTENT
// =====================================================

const projectFilters = [
  { name: "Ongoing Projects", href: "https://www.greenfieldhousingindia.com/ongoing-projects" },
  { name: "Completed Project", href: "https://www.greenfieldhousingindia.com/completed-project" },
  { name: "Ready To Occupy", href: "https://www.greenfieldhousingindia.com/ready-to-occupy" },
];

const featuredProjects = [
  {
    id: "01",
    name: "Lavender",
    location: "Saravanampatti, Coimbatore",
    tags: ["Serenity", "Accessibility"],
    href: "https://www.greenfieldhousingindia.com/lavender-campaign",
  },
  {
    id: "02",
    name: "Maple",
    location: "Kalapatti, Coimbatore",
    tags: ["Affordability", "Sustainability"],
    href: "https://www.greenfieldhousingindia.com/maple-kalapatti",
  },
  {
    id: "03",
    name: "Bougain Villea Apartment",
    location: "Coimbatore",
    tags: ["Community", "Innovation"],
    href: "https://www.greenfieldhousingindia.com/bougain-apartment-villas",
  },
];

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

          <div className="mt-10 flex flex-wrap gap-3">
            {projectFilters.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-6 py-3 font-['Inter',sans-serif] text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md"
              >
                {item.name}
                <ArrowUpRight className="h-4 w-4 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Reveal>

        {/* =================================================
            FEATURED PROJECTS
        ================================================= */}

        <Reveal delay={100} className="mb-24 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end md:mb-28">
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
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </div>
        </Reveal>

        <div className="mb-32 grid gap-10 md:grid-cols-2 xl:grid-cols-3 md:mb-40">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <Tilt max={9}>
                <a
                  href={project.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-white shadow-sm transition-all duration-500 hover:border-emerald-300 hover:shadow-2xl"
                >
                  {/* Placeholder visual panel — swap in a real project
                      photo here; kept as a generated gradient scene so
                      the layout works without image assets. */}
                  <div
                    className="relative flex h-56 items-end overflow-hidden p-8"
                    style={{
                      transform: "translateZ(20px)",
                      background:
                        index === 0
                          ? "linear-gradient(135deg, #064e3b 0%, #059669 48%, #6ee7b7 100%)"
                          : index === 1
                          ? "linear-gradient(135deg, #052e16 0%, #166534 48%, #86efac 100%)"
                          : "linear-gradient(135deg, #14532d 0%, #16a34a 48%, #86efac 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <span className="font-['Poppins',sans-serif] absolute right-6 top-6 text-6xl font-black text-white/20">
                      {project.id}
                    </span>
                    <div className="relative flex items-center gap-2 text-white/85">
                      <MapPin className="h-4 w-4" />
                      <span className="font-['Inter',sans-serif] text-sm font-semibold">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-grow flex-col p-8 xl:p-10" style={{ transform: "translateZ(10px)" }}>
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
            COMMUNITY
        ================================================= */}

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-900 bg-slate-950 p-10 text-white shadow-2xl md:p-16">
            {/* Ambient depth glow, parallax-driven */}
            <div
              className="pointer-events-none absolute -top-24 right-0 h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-[110px] transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${drift.x * 25}px, ${drift.y * 25}px, 0)` }}
            />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <span className="font-['Poppins',sans-serif] inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                  <Building2 className="h-4 w-4" />
                  Community
                </span>

                <h3 className="font-['Poppins',sans-serif] mt-6 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl">
                  Designed for more than just living, but to create
                  meaningful bonds and shared experiences.
                </h3>

                <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
                  <MapPin className="h-4 w-4 text-emerald-300" />
                  <span className="font-['Inter',sans-serif] text-sm font-semibold text-white/80">
                    Lavender &middot; Coimbatore
                  </span>
                </div>

                <a
                  href="https://www.greenfieldhousingindia.com/community"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-['Inter',sans-serif] text-lg font-bold text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50"
                >
                  Experience More
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
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