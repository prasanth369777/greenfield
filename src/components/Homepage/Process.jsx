import { useCallback, useRef, useState } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";

// =====================================================
// CONTENT — Greenfield Housing sells finished homes in
// gated communities rather than taking on client interior/
// construction briefs, so the journey below is framed as
// the buyer's path (explore → visit → book → move in)
// rather than a generic consult/design/build workflow.
// Note: this sequence isn't copied from a published page —
// it's a reasonable adaptation of the buying journey implied
// by the site's own project & booking structure.
// =====================================================

const steps = [
  {
    step: "01",
    title: "Explore",
    subtitle: "Discover & Shortlist",
    description:
      "Browse our ongoing, completed, and ready-to-occupy communities across Coimbatore to find the location and home that fits your life.",
    points: [
      "Explore project microsites",
      "Compare locations & unit types",
      "Shortlist your favourites",
    ],
  },
  {
    step: "02",
    title: "Visit",
    subtitle: "Tour & Consult",
    description:
      "See the site in person and speak with our team about layouts, pricing, and payment options before you decide.",
    points: [
      "Guided site visit",
      "Meet our sales team",
      "Discuss pricing & plans",
    ],
  },
  {
    step: "03",
    title: "Book",
    subtitle: "Documentation & Booking",
    description:
      "Once you've decided, we guide you through booking, agreements, and paperwork with complete transparency.",
    points: [
      "Booking confirmation",
      "Sale agreement & documentation",
      "Loan assistance guidance",
    ],
  },
  {
    step: "04",
    title: "Move In",
    subtitle: "Handover & Belong",
    description:
      "Receive your keys and settle into a community designed for real living — comfort, nature, and neighbours included.",
    points: [
      "Final walkthrough",
      "Keys handed over",
      "Welcome to the community",
    ],
  },
];

// =====================================================
// 3D TILT — pointer-driven card tilt with soft glare
// =====================================================

function Tilt({ children, className = "", max = 8 }) {
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
        }deg)`,
      });
      setGlare({ x: px * 100, y: py * 100, o: 0.13 });
    },
    [max]
  );

  const handleLeave = useCallback(() => {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
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

const AnimatedPoint = ({ text, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.li
      ref={ref}
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: delay * 0.08 }}
    >
      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 md:h-5 md:w-5" />
      <span className="font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-slate-600 md:text-base">
        {text}
      </span>
    </motion.li>
  );
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e) => {
    const el = ref.current;
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
      id="process"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24"
      style={{ perspective: "1800px" }}
    >
      {/* Background Decor — parallax-driven, green theme */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-emerald-200/30 blur-[100px] transition-transform duration-300 ease-out md:h-[400px] md:w-[400px]"
        style={{ transform: `translate3d(${drift.x * -40}px, ${drift.y * -40}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-slate-200/40 blur-[100px] transition-transform duration-300 ease-out md:h-[500px] md:w-[500px]"
        style={{ transform: `translate3d(${drift.x * 30}px, ${drift.y * 30}px, 0)` }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mb-10 grid gap-6 md:mb-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-1.5 shadow-sm md:mb-6 md:px-5 md:py-2">
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-emerald-700 md:text-xs md:tracking-[0.2em]">
                Home Buying Journey
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] max-w-4xl text-3xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
              How We Guide You
              <span className="block text-emerald-600">
                From Visit to Handover.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-slate-600 md:text-base lg:text-lg">
              A clear, guided path from your first site visit to the day you
              receive your keys — with transparent communication at every
              stage.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
              {["Explore", "Visit", "Book", "Move In"].map((item) => (
                <span
                  key={item}
                  className="font-['Poppins',sans-serif] rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-colors hover:border-emerald-200 hover:text-emerald-600 md:px-4 md:py-2 md:text-xs md:tracking-[0.15em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line — lifted slightly in Z so cards
              read as sitting just above the rail rather than on it */}
          <div
            className="absolute left-0 right-0 top-[40px] hidden h-[2px] bg-slate-200 lg:block"
            style={{ transform: "translateZ(-10px)" }}
          />

          <motion.div
            className="absolute left-0 top-[40px] hidden h-[2px] bg-emerald-600 lg:block"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transform: "translateZ(-10px)" }}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col"
              >
                {/* Step Number Node */}
                <div className="relative z-10 mb-4 flex items-center justify-between md:mb-6">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md lg:h-20 lg:w-20 lg:rounded-2xl"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <span className="font-['Poppins',sans-serif] text-xl font-black text-emerald-600 lg:text-3xl">
                      {step.step}
                    </span>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-colors group-hover:border-emerald-200 group-hover:text-emerald-600 lg:flex">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Card — tilts toward the pointer in 3D */}
                <Tilt max={6} className="flex flex-1">
                  <div className="flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl md:rounded-[2rem] md:p-8">
                    <div style={{ transform: "translateZ(15px)" }}>
                      <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-emerald-600 md:text-xs md:tracking-[0.15em]">
                        {step.subtitle}
                      </span>

                      <h3 className="font-['Poppins',sans-serif] mt-2 text-xl font-bold leading-tight text-slate-950 md:mt-3 md:text-2xl lg:text-3xl">
                        {step.title}
                      </h3>

                      <p className="font-['Inter',sans-serif] mt-3 text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm lg:text-base">
                        {step.description}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5 md:mt-6 md:space-y-4 md:pt-6">
                      {step.points.map((point, pointIndex) => (
                        <AnimatedPoint
                          key={point}
                          text={point}
                          delay={pointIndex + idx * 2}
                        />
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 md:pt-8">
                      <div
                        className="inline-block rounded-full bg-emerald-50 px-3 py-1.5 md:px-4 md:py-2"
                        style={{ transform: "translateZ(15px)" }}
                      >
                        <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-emerald-700 md:text-xs md:tracking-[0.15em]">
                          Stage {step.step}
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
