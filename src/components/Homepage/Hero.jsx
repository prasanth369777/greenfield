import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Trees,
  Sparkles,
  MapPin,
} from "lucide-react";

import Image1 from "../../assests/team/herosection/cubehero1.webp";
import Image2 from "../../assests/team/herosection/cubehero2.webp";
import Image3 from "../../assests/team/herosection/cubehero3.webp";
import Image4 from "../../assests/team/herosection/cubehero4.webp";

/*
  Greenfield Housing India
  Premium real estate developer in Coimbatore & Erode.
  Content aligned with current Greenfield Housing website & project portfolio.
*/

const slides = [
  {
    id: 1,
    tag: "SINCE 2012 · COIMBATORE",
    eyebrow: "Crafting Homes, Inspired by Nature",
    title: "We Build Homes,\nNot Houses",
    desc: "Blending modern comforts with nature's embrace. These are not just houses — they are spaces to grow, connect, and truly belong. Trusted by 15,000+ happy families across Coimbatore & Erode.",
    img: Image1,
  },
  {
    id: 2,
    tag: "PREMIUM APARTMENTS",
    eyebrow: "Thoughtfully Designed Homes",
    title: "Luxury Living\nin Prime Locations",
    desc: "Discover premium 2, 3 & 4 BHK apartments in Saravanampatti, Kalapatti, and Thudiyalur — thoughtfully crafted with smart layouts, sky gardens, wellness zones, and world-class amenities.",
    img: Image2,
  },
  {
    id: 3,
    tag: "RERA APPROVED PLOTS",
    eyebrow: "High Return Investment Options",
    title: "Invest in Land,\nGrow Your Future",
    desc: "Explore RERA-registered residential plots in Sulur, Kovilpalayam, and S.S. Kulam — with tar roads, underground EB cables, water connections, and premium amenities in gated communities.",
    img: Image3,
  },
  {
    id: 4,
    tag: "COMMUNITY LIVING",
    eyebrow: "Designed for Meaningful Bonds",
    title: "More Than Living.\nA Community.",
    desc: "Lush green spaces, wellness zones, recreational amenities, and smart living features — everything designed for meaningful bonds, shared experiences, and lifelong joy.",
    img: Image4,
  },
];

const FACE_COUNT = slides.length;
const FACE_ANGLE = 360 / FACE_COUNT;

const stats = [
  { value: "20+", label: "Projects across Coimbatore & Erode" },
  { value: "1000+", label: "Acres of developed land" },
  { value: "10 Lakh+", label: "Sq.ft. of constructed area" },
  { value: "15K+", label: "Happy Families" },
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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const cubeRotation = -current * FACE_ANGLE;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handlePointerLeave}
      className="relative mt-16 min-h-[600px] overflow-hidden bg-[#062c1d] text-white md:min-h-[640px] lg:min-h-[680px] xl:min-h-[700px]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* =====================================================
          BACKGROUND PARALLAX
      ===================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(52,211,153,0.18),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(34,197,94,0.15),transparent_35%)]" />

      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${tilt.x * -60}px, ${tilt.y * -55}px, 0)`,
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-green-400/10 blur-[140px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${tilt.x * 90}px, ${tilt.y * 70}px, 0)`,
        }}
      />

      <div
        className="pointer-events-none absolute right-[8%] top-[13%] z-20 h-20 w-20 rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_100px_rgba(52,211,153,0.18)] backdrop-blur-md transition-transform duration-500 ease-out md:h-28 md:w-28"
        style={{
          transform: `translate3d(${tilt.x * 45}px, ${tilt.y * 35}px, 0)`,
        }}
      />

      {/* =====================================================
          3D CUBE IMAGE STAGE
      ===================================================== */}

      <div
        className="absolute inset-0"
        style={{
          perspective: "2300px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          className="absolute inset-[-4%] transition-transform duration-[1300ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            transformStyle: "preserve-3d",
            transform: `
              rotateY(${cubeRotation}deg)
              rotateX(${tilt.y * -3}deg)
              rotateZ(${tilt.x * 0.35}deg)
              translate3d(${tilt.x * -18}px, ${tilt.y * -14}px, 0)
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
                  alt={`Greenfield Housing India – ${slide.title.replace("\n", " ")} in Coimbatore`}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />

                {/* Green cinematic overlays */}
                <div className="absolute inset-0 bg-emerald-950/25 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#021b11]/95 via-[#062c1d]/65 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021b11]/95 via-[#062c1d]/15 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,transparent_0%,rgba(2,27,17,0.15)_50%,rgba(2,27,17,0.55)_100%)]" />

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
        className="relative z-30 mx-auto flex min-h-[600px] w-full max-w-[1800px] items-center px-5 py-16 sm:px-8 md:min-h-[640px] md:px-12 lg:min-h-[680px] lg:px-16 xl:min-h-[700px] xl:px-20 2xl:px-24"
        style={{ perspective: "1600px" }}
      >
        <div
          className="w-full transition-transform duration-300 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `
              rotateX(${tilt.y * 1.5}deg)
              rotateY(${tilt.x * -1.8}deg)
              translate3d(${tilt.x * 8}px, ${tilt.y * 6}px, 0)
            `,
          }}
        >
          <div
            className="max-w-[980px]"
            style={{ transform: "translateZ(90px)" }}
          >
            {/* Eyebrow */}
            <div
              key={`eyebrow-${activeSlide.id}`}
              className="mb-4 flex animate-[fadeSlideUp_0.5s_ease] items-center gap-3"
            >
              <span className="h-px w-10 bg-emerald-300 md:w-12" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-200 md:text-xs">
                {activeSlide.eyebrow}
              </span>
            </div>

            {/* Tag */}
            <div
              key={`tag-${activeSlide.id}`}
              className="mb-5 inline-flex animate-[fadeSlideUp_0.6s_ease] items-center gap-3 rounded-full border border-emerald-200/20 bg-[#062c1d]/45 px-4 py-2 shadow-[0_15px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl md:px-5 md:py-2.5"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 md:h-7 md:w-7">
                <Trees className="h-3 w-3 md:h-3.5 md:w-3.5" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
                {activeSlide.tag}
              </span>
            </div>

            {/* Main Heading */}
            <h1
              key={`title-${activeSlide.id}`}
              className="animate-[fadeSlideUp_0.7s_ease] whitespace-pre-line font-['Poppins',sans-serif] text-[36px] font-black leading-[0.98] tracking-[-0.03em] text-white sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[72px] 2xl:text-[64px]"
              style={{
                textShadow: "0 18px 60px rgba(0,0,0,0.48)",
              }}
            >
              {activeSlide.title}
            </h1>

            {/* Accent */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-1 w-16 rounded-full bg-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.5)] md:w-20" />
              <div className="h-1 w-2 rounded-full bg-white/60" />
            </div>

            {/* Description */}
            <p
              key={`desc-${activeSlide.id}`}
              className="mt-5 max-w-[660px] animate-[fadeSlideUp_0.8s_ease] text-[14px] font-medium leading-6 text-white/75 sm:text-[15px] md:mt-6 md:text-[16px] md:leading-7"
            >
              {activeSlide.desc}
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex h-12 items-center gap-4 rounded-full bg-emerald-400 px-6 font-['Poppins',sans-serif] text-[12px] font-bold text-emerald-950 shadow-[0_18px_45px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 active:translate-y-0 md:h-13"
              >
                <span>Enquire Now</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-950 text-white transition-transform duration-300 group-hover:rotate-45 md:h-8 md:w-8">
                  <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex h-12 items-center gap-3 rounded-full border border-white/20 bg-white/[0.07] px-6 font-['Poppins',sans-serif] text-[12px] font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-emerald-900/30 md:h-13"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-6 grid max-w-[720px] grid-cols-2 gap-2 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/15 px-3 py-2.5 backdrop-blur-md"
                >
                  <p className="font-['Poppins',sans-serif] text-base font-black text-emerald-300 md:text-lg">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[8px] font-semibold uppercase leading-tight tracking-[0.08em] text-white/45 md:text-[9px]">
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

      <div className="absolute bottom-5 left-5 right-5 z-50 sm:left-8 sm:right-8 lg:bottom-7 lg:left-10 lg:right-10">
        <div className="mx-auto flex max-w-[560px] items-center justify-between rounded-full border border-white/10 bg-[#021b11]/50 px-3 py-2.5 shadow-2xl backdrop-blur-2xl lg:mx-0 lg:ml-auto">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-white transition-all hover:bg-emerald-500/20 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  current === index
                    ? "w-10 bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-white transition-all hover:bg-emerald-500/20 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <span className="hidden items-center gap-2 px-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35 sm:flex">
            <Sparkles className="h-3 w-3 text-emerald-300" />
            Explore
          </span>
        </div>
      </div>

      {/* Desktop side indicator */}
      <div className="absolute right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
        <div className="h-14 w-px bg-gradient-to-b from-transparent via-emerald-300/50 to-transparent" />

        <div className="flex flex-col items-center gap-2 text-emerald-200/60">
          <MapPin className="h-4 w-4" />

          <span
            className="text-[9px] font-bold uppercase tracking-[0.25em]"
            style={{ writingMode: "vertical-rl" }}
          >
            Coimbatore
          </span>
        </div>

        <div className="h-14 w-px bg-gradient-to-b from-emerald-300/50 via-transparent to-transparent" />
      </div>

      {/* Bottom left slide number */}
      <div className="absolute bottom-8 left-10 z-40 hidden items-center gap-4 xl:flex">
        <span className="font-['Poppins',sans-serif] text-[10px] font-bold tracking-[0.2em] text-white/40">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(FACE_COUNT).padStart(2, "0")}
        </span>

        <div className="h-px w-12 bg-white/20" />

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
          Scroll to explore
        </span>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(22px);
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