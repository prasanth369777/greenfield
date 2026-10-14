import { useCallback, useRef, useState } from "react";
import { ChevronRight, CheckCircle2, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";

// =====================================================
// CONTENT — Greenfield Housing India Buyer Journey
// =====================================================

const steps = [
  {
    step: "01",
    title: "Explore",
    subtitle: "Discover",
    description:
      "Browse our residential plot communities across Coimbatore, from Crystal Gateway in Sulur to Silver City on Karamadai Road[cite: 6, 8].",
    points: [
      "Compare approved plots[cite: 6, 8]",
      "Check layout amenities[cite: 8, 10]",
      "Verify RERA/DTCP details[cite: 8, 10]",
    ],
  },
  {
    step: "02",
    title: "Site Visit",
    subtitle: "Tour & Consult",
    description:
      "Walk through the internal roads and site conditions. Confirm exact plot dimensions and view completed developments firsthand[cite: 6, 10].",
    points: [
      "View entrance & roads[cite: 8, 10]",
      "Verify plot boundaries[cite: 8]",
      "Discuss current pricing[cite: 6, 8]",
    ],
  },
  {
    step: "03",
    title: "Book",
    subtitle: "Documentation",
    description:
      "We guide you through transparent documentation, verifying RERA certificates, DTCP approvals, and title deeds before booking[cite: 6, 8, 11].",
    points: [
      "Verify RERA/DTCP[cite: 8, 10]",
      "Review title documents[cite: 11]",
      "Discuss payment plans[cite: 10]",
    ],
  },
  {
    step: "04",
    title: "Handover",
    subtitle: "Take Possession",
    description:
      "Secure your registered plot equipped with individual water connections, electricity, and clear boundaries in a secure gated community[cite: 6, 10].",
    points: [
      "Final plot inspection[cite: 6]",
      "Register title deeds[cite: 11]",
      "Secure your plot[cite: 8, 10]",
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
      className="flex items-start gap-2 md:gap-3"
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: delay * 0.08 }}
    >
      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-600 md:h-4 md:w-4" />
      <span className="font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-slate-600 md:text-sm">
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
      className="relative w-full overflow-hidden bg-slate-50 py-10 md:py-20"
      style={{ perspective: "1800px" }}
    >
      {/* Background Decor — parallax-driven, green theme */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[200px] w-[200px] rounded-full bg-emerald-200/30 blur-[80px] transition-transform duration-300 ease-out md:h-[350px] md:w-[350px]"
        style={{ transform: `translate3d(${drift.x * -30}px, ${drift.y * -30}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[200px] w-[200px] rounded-full bg-slate-200/40 blur-[80px] transition-transform duration-300 ease-out md:h-[400px] md:w-[400px]"
        style={{ transform: `translate3d(${drift.x * 20}px, ${drift.y * 20}px, 0)` }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mb-8 grid gap-4 md:mb-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white px-3 py-1 shadow-sm md:mb-4 md:px-4 md:py-1.5">
              <span className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-wider text-emerald-700 md:text-[10px] md:tracking-[0.2em]">
                Home Buying Journey
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] max-w-2xl text-2xl font-black leading-tight tracking-tight text-slate-950 md:text-3xl lg:text-4xl">
              Your Path to Ownership,
              <span className="block text-emerald-600">
                From Visit to Handover.
              </span>
            </h2>
          </div>

          <div className="max-w-lg lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-slate-600 md:text-sm">
              A clear, guided path from your first site visit to the day you
              take possession — with fully verified documents and transparent
              communication[cite: 10, 11].
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:gap-2">
              {["Explore", "Site Visit", "Book", "Handover"].map((item) => (
                <span
                  key={item}
                  className="font-['Poppins',sans-serif] rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-colors hover:border-emerald-200 hover:text-emerald-600 md:px-3 md:py-1.5 md:text-[9px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="absolute left-0 right-0 top-[30px] hidden h-[2px] bg-slate-200 lg:block md:top-[35px]"
            style={{ transform: "translateZ(-10px)" }}
          />

          <motion.div
            className="absolute left-0 top-[30px] hidden h-[2px] bg-emerald-600 lg:block md:top-[35px]"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transform: "translateZ(-10px)" }}
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, idx) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col"
              >
                {/* Step Number Node */}
                <div className="relative z-10 mb-3 flex items-center justify-between md:mb-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md lg:h-16 lg:w-16"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <span className="font-['Poppins',sans-serif] text-lg font-black text-emerald-600 lg:text-2xl">
                      {step.step}
                    </span>
                  </div>

                  <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-colors group-hover:border-emerald-200 group-hover:text-emerald-600 lg:flex">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Card */}
                <Tilt max={6} className="flex flex-1">
                  <div className="flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md md:p-6">
                    <div style={{ transform: "translateZ(10px)" }}>
                      <span className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-wider text-emerald-600 md:text-[10px]">
                        {step.subtitle}
                      </span>

                      <h3 className="font-['Poppins',sans-serif] mt-1.5 text-lg font-bold leading-tight text-slate-950 md:mt-2 md:text-xl">
                        {step.title}
                      </h3>

                      <p className="font-['Inter',sans-serif] mt-2 text-[11px] font-medium leading-relaxed text-slate-600 md:mt-3 md:text-xs">
                        {step.description}
                      </p>
                    </div>

                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 md:mt-5 md:space-y-3 md:pt-5">
                      {step.points.map((point, pointIndex) => (
                        <AnimatedPoint
                          key={point}
                          text={point}
                          delay={pointIndex + idx * 2}
                        />
                      ))}
                    </ul>

                    <div className="mt-auto pt-4 md:pt-6">
                      <div
                        className="inline-block rounded-full bg-emerald-50 px-2.5 py-1 md:px-3 md:py-1.5"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        <span className="font-['Poppins',sans-serif] text-[8px] font-bold uppercase tracking-wider text-emerald-700 md:text-[9px]">
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

        {/* CTA — Speak with Sales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm md:mt-14 md:flex-row md:p-8"
        >
          <div className="text-center md:text-left">
            <span className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-wider text-emerald-700 md:text-[10px]">
              Ready to Begin?
            </span>
            <h3 className="font-['Poppins',sans-serif] mt-1.5 text-xl font-black text-slate-950 md:mt-2 md:text-2xl">
              Speak with our sales team
            </h3>
            <p className="font-['Inter',sans-serif] mt-1.5 max-w-lg text-xs font-medium text-slate-600 md:mt-2 md:text-sm">
              Call us at <strong className="text-slate-950">7395864774</strong> for site
              visits, project details, and current pricing[cite: 3, 5, 6].
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
            <a
              href="tel:+917395864774"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 font-['Inter',sans-serif] text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 md:gap-2.5 md:px-6 md:py-3"
            >
              <Phone className="h-4 w-4" />
              Call 7395864774
            </a>

            <a
              href="https://wa.me/917395864774?text=Hi%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 font-['Inter',sans-serif] text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 md:gap-2.5 md:px-6 md:py-3"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}