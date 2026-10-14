import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Trees,
  MapPin,
  Compass,
} from "lucide-react";

import Image1 from "../../assests/team/herosection/cubehero1.webp";
import Image2 from "../../assests/team/herosection/cubehero2.webp";
import Image3 from "../../assests/team/herosection/cubehero3.webp";
import Image4 from "../../assests/team/herosection/cubehero4.webp";

const slides = [
  {
    id: 1,
    tag: "GREENFIELD HOUSING INDIA",
    eyebrow: "Coimbatore's Trusted Developer",
    title: "Building Legacies,\nSecuring Futures",
    desc: "Discover premium DTCP & RERA approved residential plots across Coimbatore's prime locations including Sulur[cite: 8], Kovilpalayam[cite: 10], Annur[cite: 3], and S.S. Kulam[cite: 11].",
    img: Image1,
  },
  {
    id: 2,
    tag: "MEGA TOWNSHIP · SULUR",
    eyebrow: "Crystal Gateway",
    title: "A Lifestyle Beyond\nExpectations",
    desc: "Explore 805 premium RERA-registered plots on Kalangal Road[cite: 8]. Experience world-class amenities including a 3-acre cricket turf, grand clubhouse, and outdoor gym[cite: 8].",
    img: Image2,
  },
  {
    id: 3,
    tag: "PREMIUM COMMUNITIES",
    eyebrow: "Opal Garden & Fairland",
    title: "Modern Living,\nNature's Embrace",
    desc: "Secure your future in gated communities in Annur[cite: 3] and Ponnigoundapudur[cite: 11]. Featuring 24/7 security, lush parks, fitness centers, and commercial complexes[cite: 4, 11].",
    img: Image3,
  },
  {
    id: 4,
    tag: "STRATEGIC LOCATIONS",
    eyebrow: "Crown City, Silver City & Diamond Avenue",
    title: "Invest in Land,\nGrow Your Wealth",
    desc: "High-appreciation residential plots on Sathy Main Road[cite: 10], Karamadai Road[cite: 6], and Pattanam[cite: 1]. Ready-to-build spaces with blacktop roads and essential infrastructure[cite: 6, 10].",
    img: Image4,
  },
];

const FACE_COUNT = slides.length;
const FACE_ANGLE = 360 / FACE_COUNT;

const stats = [
  { value: "6+", label: "Ongoing Projects" },
  { value: "805", label: "Plots in Crystal Gateway[cite: 8]" },
  { value: "100%", label: "Approved Layouts[cite: 6, 8, 10, 11]" },
  { value: "24/7", label: "Secure Communities[cite: 4, 6, 8, 10, 11]" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  const activeSlide = useMemo(() => slides[current], [current]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === FACE_COUNT - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? FACE_COUNT - 1 : prev - 1));
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrent(index);
  }, []);

  // Preload hero images.
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, []);

  // Auto-rotate carousel.
  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(nextSlide, 6500);
    return () => window.clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Mouse-driven 3D parallax.
  const handlePointerMove = useCallback((e) => {
    const el = sectionRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({ x: px, y: py });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsPaused(false);
  }, []);

  const cubeRotation = -current * FACE_ANGLE;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handlePointerLeave}
      className="relative mt-16 min-h-[550px] overflow-hidden bg-[#062c1d] text-white md:min-h-[600px] lg:min-h-[650px] xl:min-h-[700px]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* =====================================================
          BACKGROUND PARALLAX
      ===================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(52,211,153,0.18),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(34,197,94,0.15),transparent_35%)]" />

      <div
        className="pointer-events-none absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px] transition-transform duration-700 ease-out md:h-[420px] md:w-[420px] md:blur-[120px]"
        style={{
          transform: `translate3d(${tilt.x * -60}px, ${tilt.y * -55}px, 0)`,
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-[350px] w-[350px] rounded-full bg-green-400/10 blur-[100px] transition-transform duration-700 ease-out md:h-[520px] md:w-[520px] md:blur-[140px]"
        style={{
          transform: `translate3d(${tilt.x * -90}px, ${tilt.y * 70}px, 0)`,
        }}
      />

      <div
        className="pointer-events-none absolute right-[5%] top-[10%] z-20 h-16 w-16 rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_80px_rgba(52,211,153,0.15)] backdrop-blur-md transition-transform duration-500 ease-out md:right-[8%] md:top-[13%] md:h-24 md:w-24"
        style={{
          transform: `translate3d(${tilt.x * -45}px, ${tilt.y * 35}px, 0)`,
        }}
      />

      {/* =====================================================
          3D CUBE IMAGE STAGE
      ===================================================== */}

      <div
        className="absolute inset-0"
        style={{
          perspective: "2000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          className="absolute inset-[-5%] transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            transformStyle: "preserve-3d",
            transform: `
              rotateY(${cubeRotation}deg)
              rotateX(${tilt.y * -3}deg)
              rotateZ(${tilt.x * 0.35}deg)
              translate3d(${tilt.x * -15}px, ${tilt.y * -12}px, 0)
            `,
          }}
        >
          {slides.map((slide, index) => {
            const faceAngle = index * FACE_ANGLE;
            const isActive = current === index;

            return (
              <div
                key={slide.id}
                className="absolute inset-0 overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${faceAngle}deg) translateZ(58vw)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={slide.img}
                  alt={`Greenfield Housing India – ${slide.title.replace("\n", " ")}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#021b11]/95 via-[#062c1d]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021b11]/95 via-[#062c1d]/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,transparent_0%,rgba(2,27,17,0.15)_50%,rgba(2,27,17,0.60)_100%)]" />

                {isActive && (
                  <div className="absolute inset-0 ring-1 ring-inset ring-emerald-300/20" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          FOREGROUND CONTENT
      ===================================================== */}

      <div
        className="relative z-30 mx-auto flex min-h-[550px] w-full max-w-[1600px] items-center px-4 py-12 sm:px-6 md:min-h-[600px] md:px-10 lg:min-h-[650px] lg:px-14 xl:min-h-[700px]"
        style={{ perspective: "1500px" }}
      >
        <div
          className="w-full transition-transform duration-300 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `
              rotateX(${tilt.y * 1.5}deg)
              rotateY(${tilt.x * -1.8}deg)
              translate3d(${tilt.x * -8}px, ${tilt.y * 6}px, 0)
            `,
          }}
        >
          <div
            className="max-w-[850px]"
            style={{ transform: "translateZ(60px)" }}
          >
            {/* Eyebrow */}
            <div
              key={`eyebrow-${activeSlide.id}`}
              className="mb-3 flex animate-[fadeSlideUp_0.5s_ease] items-center gap-2.5 md:mb-4"
            >
              <span className="h-px w-8 bg-emerald-400 md:w-10" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-200 md:text-[10px]">
                {activeSlide.eyebrow}
              </span>
            </div>

            {/* Tag */}
            <div
              key={`tag-${activeSlide.id}`}
              className="mb-4 inline-flex animate-[fadeSlideUp_0.6s_ease] items-center gap-2.5 rounded-full border border-emerald-200/20 bg-[#062c1d]/50 px-3 py-1.5 shadow-lg backdrop-blur-md md:mb-5 md:px-4 md:py-2"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-emerald-950 md:h-6 md:w-6">
                <Trees className="h-3 w-3 md:h-3.5 md:w-3.5" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/90 md:text-[10px]">
                {activeSlide.tag}
              </span>
            </div>

            {/* Main Heading */}
            <h1
              key={`title-${activeSlide.id}`}
              className="animate-[fadeSlideUp_0.7s_ease] whitespace-pre-line font-['Poppins',sans-serif] text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                textShadow: "0 10px 40px rgba(0,0,0,0.5)",
              }}
            >
              {activeSlide.title}
            </h1>

            {/* Accent */}
            <div className="mt-4 flex items-center gap-2 md:mt-5">
              <div className="h-1 w-12 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)] md:w-16" />
              <div className="h-1 w-1.5 rounded-full bg-white/50 md:w-2" />
            </div>

            {/* Description */}
            <p
              key={`desc-${activeSlide.id}`}
              className="mt-4 max-w-[580px] animate-[fadeSlideUp_0.8s_ease] text-xs font-medium leading-relaxed text-emerald-50/80 sm:text-sm md:mt-5 md:text-base"
            >
              {activeSlide.desc}
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
              <Link
                to="/contactus"
                className="group inline-flex h-10 items-center gap-3 rounded-full bg-emerald-500 px-5 font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-emerald-950 shadow-[0_10px_30px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 active:translate-y-0 md:h-12 md:px-6 md:text-xs"
              >
                <span>Enquire Now</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-white transition-transform duration-300 group-hover:rotate-45 md:h-7 md:w-7">
                  <ArrowUpRight className="h-3 w-3 md:h-3.5 md:w-3.5" />
                </span>
              </Link>

              <Link
                to="/project"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-900/40 md:h-12 md:px-6 md:text-xs"
              >
                View Projects
                <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-6 grid max-w-[640px] grid-cols-2 gap-2 sm:grid-cols-4 md:mt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm md:rounded-2xl md:px-4 md:py-3"
                >
                  <p className="font-['Poppins',sans-serif] text-sm font-black text-emerald-400 md:text-lg">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[7px] font-semibold uppercase leading-tight tracking-wider text-white/50 md:mt-1 md:text-[8px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTROLS
      ===================================================== */}

      <div className="absolute bottom-4 left-4 right-4 z-50 sm:left-6 sm:right-6 lg:bottom-6 lg:left-10 lg:right-10">
        <div className="mx-auto flex max-w-[480px] items-center justify-between rounded-full border border-white/10 bg-[#021b11]/60 px-2.5 py-2 shadow-2xl backdrop-blur-xl lg:mx-0 lg:ml-auto md:px-3 md:py-2.5">
          <button
            onClick={prevSlide}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-emerald-500/30 active:scale-95 md:h-10 md:w-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <div className="flex items-center gap-1.5 md:gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-500 md:h-1.5 ${
                  current === index
                    ? "w-6 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)] md:w-8"
                    : "w-1.5 bg-white/30 hover:bg-white/50 md:w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-emerald-500/30 active:scale-95 md:h-10 md:w-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          <span className="hidden items-center gap-1.5 px-2 text-[8px] font-bold uppercase tracking-wider text-white/40 sm:flex md:px-3 md:text-[9px] md:tracking-[0.15em]">
            <Compass className="h-3 w-3 text-emerald-400" />
            Explore
          </span>
        </div>
      </div>

      {/* Desktop side indicator */}
      <div className="absolute right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 xl:flex">
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />
        <div className="flex flex-col items-center gap-1.5 text-emerald-200/50">
          <MapPin className="h-3.5 w-3.5" />
          <span
            className="text-[8px] font-bold uppercase tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            Coimbatore
          </span>
        </div>
        <div className="h-10 w-px bg-gradient-to-b from-emerald-400/40 via-transparent to-transparent" />
      </div>

      {/* Bottom left slide number */}
      <div className="absolute bottom-6 left-8 z-40 hidden items-center gap-3 xl:flex">
        <span className="font-['Poppins',sans-serif] text-[9px] font-bold tracking-widest text-white/40">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(FACE_COUNT).padStart(2, "0")}
        </span>
        <div className="h-px w-8 bg-white/20" />
        <span className="text-[8px] uppercase tracking-widest text-white/30">
          Scroll to explore
        </span>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}