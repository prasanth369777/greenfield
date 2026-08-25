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
} from "lucide-react";

import AboutImage from "../../assests/team/herosection/cubehero3.webp";

// =====================================================
// 3D TILT — wraps any card, tilts it toward the pointer
// =====================================================

function Tilt({
  children,
  className = "",
  max = 10,
  scale = 1.02,
  glare = true,
}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, o: 0 });

  const handleMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
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
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
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
// SCROLL REVEAL — fades + lifts an element into place
// once it enters the viewport
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
// ABOUT
// =====================================================

export default function About() {
  const sectionRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const coreValues = [
    {
      icon: Award,
      title: "Integrity",
      desc: "Staying true to our commitments with honesty and transparency in every dealing.",
    },
    {
      icon: Eye,
      title: "Innovation",
      desc: "Constantly evolving with creative and forward-thinking solutions for modern living.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Building homes with respect for nature and future generations.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      desc: "Your needs are at the heart of everything we do, from design to delivery.",
    },
  ];

  const highlights = [
    {
      icon: Building2,
      title: "20+ Projects",
      desc: "Successfully delivered projects across Coimbatore and Erode.",
    },
    {
      icon: Ruler,
      title: "1000+ Acres",
      desc: "Developed prime land into thriving communities and neighborhoods.",
    },
    {
      icon: Home,
      title: "15K+ Families",
      desc: "Happy families who found their dream home with Greenfield Housing.",
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
      desc: "Launched Natchatra Homes - our first gated community project.",
    },
    {
      year: "2016",
      title: "4 Projects Delivered",
      desc: "Successfully delivered 4 gated community projects in record time.",
    },
    {
      year: "2017",
      title: "Maple Project",
      desc: "Started Maple - our first luxurious gated community in Kalapatti.",
    },
    {
      year: "2020",
      title: "CREDAI Award",
      desc: "First developer in Coimbatore to receive CREDAI award for environment-friendly quality projects.",
    },
    {
      year: "2022",
      title: "COVID Relief",
      desc: "Donated ₹1 crore to CM's fund for the wellbeing of society.",
    },
    {
      year: "2025",
      title: "Lavender Project",
      desc: "Launched Lavender - our prestigious landmark project in Saravanampatti.",
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

  // =====================================================
  // AMBIENT PARALLAX — background blobs drift opposite the
  // pointer across the whole section for a sense of depth
  // =====================================================

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
      {/* Background Decor — now parallax-driven */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-emerald-200/30 blur-[100px] transition-transform duration-300 ease-out md:h-[500px] md:w-[500px]"
        style={{
          transform: `translate3d(${drift.x * -40}px, ${
            drift.y * -40
          }px, 0)`,
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

            <h1 className="font-['Poppins',sans-serif] max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              We Build Homes,
              <span className="block text-emerald-600">Not Houses.</span>
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-base font-medium leading-relaxed text-slate-600 md:text-lg">
              Greenfield Housing has spent decades crafting homes that blend
              modern living with trust, innovation, and community spirit. We
              create sustainable spaces where families thrive.
            </p>

            <button
              onClick={() => scrollToSection("projects")}
              className="font-['Inter',sans-serif] mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-800 active:scale-95 sm:w-auto md:mt-8 md:px-8 md:py-4 md:text-lg"
            >
              Explore Projects
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        {/* Main About Block — image panel now tilts in 3D on hover */}
        <Reveal
          delay={100}
          className="mb-6 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:mb-10 md:rounded-[2rem] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <Tilt max={6} scale={1.01} className="rounded-none">
            <div className="relative min-h-[250px] overflow-hidden md:min-h-[400px] lg:min-h-[600px]">
              <img
                src={AboutImage}
                alt="Greenfield Housing premium homes and communities in Coimbatore"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 md:bottom-8 md:left-8 md:right-8">
                {["20+ Projects", "1000+ Acres", "15K+ Families"].map(
                  (item) => (
                    <span
                      key={item}
                      className="font-['Poppins',sans-serif] rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm backdrop-blur md:px-4 md:py-2 md:text-xs"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {item}
                    </span>
                  )
                )}
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
              Greenfield Housing was founded with a mission to create spaces
              that foster community, ideas, and a balanced future built on
              trust. We design and build homes that blend modern comfort with
              nature's embrace, creating neighborhoods where families can
              grow, connect, and create lasting memories.
            </p>

            <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:mt-6 md:text-base lg:text-lg">
              From premium apartments in Saravanampatti to luxurious villas in
              Kalapatti, every Greenfield project is thoughtfully designed
              with modern amenities, lush green spaces, and smart living
              features.
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
                It is our mission to sell to our clients properties that are
                designed by leading quality architects, engineers, and
                interior designers, giving cost-effective solutions and
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
                through quality construction and best practices to enhance
                the lives of people. We abide by these enduring values that
                are the foundation of our business and is at the heart of all
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

        {/* Core Values — tilt cards that lift toward the cursor */}
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
              Safety, Collaboration, & Quality Craftsmanship, laid on strong
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
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  Trusted by 15,000+ happy families
                </span>
              </div>
            </article>
          </Reveal>
        </div>

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
                    Explore our premium projects in Coimbatore and Erode. From
                    luxury apartments to spacious villas, find the perfect
                    home for your family.
                  </p>
                </div>

                <div className="lg:text-right">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-700 px-6 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-800 active:scale-95 sm:w-auto md:rounded-full md:px-10 md:py-5 md:text-lg"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    View Our Projects
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
