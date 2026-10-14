import { ArrowLeft, ArrowRight, MapPin, ExternalLink } from "lucide-react";
import { useCallback, useRef, useState } from "react";

// =====================================================
// REAL PROJECT DATA — Greenfield Housing India
// Verified projects from provided context documents
// =====================================================

const projects = [
  // ==================== ONGOING ====================
  {
    name: "Diamond Avenue[cite: 1]",
    location: "Pattanam[cite: 1]",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/diamond-avenue",
    img: "https://static.wixstatic.com/media/60b717_8876632975b4438cb1f3f5c0df7bca6d~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diamond%20avenue_1_5x.jpg",
  },
  {
    name: "Crown City[cite: 10]",
    location: "Kovilpalayam[cite: 10]",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/crowncity",
    img: "https://static.wixstatic.com/media/60b717_8876632975b4438cb1f3f5c0df7bca6d~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diamond%20avenue_1_5x.jpg",
  },
  {
    name: "Silver City[cite: 6]",
    location: "Karamadai Road[cite: 6]",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/silvercity",
    img: "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lavender_1_5x.jpg",
  },
  {
    name: "Fairland[cite: 11]",
    location: "Ponnigoundapudur[cite: 11]",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/fairland",
    img: "https://static.wixstatic.com/media/60b717_7c54df718952421c9cc582783fe5aabf~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Emerald--3-.jpg",
  },

  // ==================== COMPLETED ====================
  {
    name: "Opal Garden IV[cite: 3]",
    location: "Annur Taluk[cite: 3]",
    status: "Completed",
    href: "https://www.greenfieldhousingindia.com/opal-garden",
    img: "https://static.wixstatic.com/media/60b717_819b9b411b5d45668b6c4c1ab30d8a6a~mv2.jpg/v1/fill/w_980,h_669,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01%20(1).jpg",
  },

  // ==================== READY TO OCCUPY ====================
  {
    name: "Crystal Gateway[cite: 8]",
    location: "Sulur[cite: 8]",
    status: "Ready to Occupy",
    href: "https://www.greenfieldhousingindia.com/crystalgateway",
    img: "https://static.wixstatic.com/media/60b717_e3458c6e980748a88ced46d2c367e603~mv2.jpg/v1/fill/w_980,h_549,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-1-04_edited.jpg",
  },
];

const statusStyles = {
  Ongoing: "bg-amber-50 text-amber-700",
  Completed: "bg-emerald-50 text-emerald-700",
  "Ready to Occupy": "bg-emerald-50 text-emerald-700",
};

// Real, verified company stats from provided context
const stats = [
  { value: "805", label: "Plots in Gateway[cite: 8]" },
  { value: "3 Ac", label: "Cricket Turf[cite: 8]" },
  { value: "24/7", label: "Security[cite: 4, 6, 8, 10, 11]" },
  { value: "100%", label: "Approved[cite: 6, 8, 10, 11]" },
];

export default function Work() {
  const [activeStatus, setActiveStatus] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  const filteredProjects =
    activeStatus === "All"
      ? projects
      : projects.filter((project) => project.status === activeStatus);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  // =====================================================
  // AMBIENT PARALLAX — background glow drifts opposite pointer
  // =====================================================

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
      id="work"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full overflow-hidden bg-slate-50 py-10 md:py-20"
    >
      {/* Ambient background glow — parallax-driven */}
      <div
        className="pointer-events-none absolute -left-16 top-0 h-[250px] w-[250px] rounded-full bg-emerald-200/25 blur-[100px] transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${drift.x * -20}px, ${drift.y * -20}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[250px] w-[250px] rounded-full bg-green-200/25 blur-[100px] transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${drift.x * 20}px, ${drift.y * 20}px, 0)` }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <div className="mb-3 inline-flex items-center justify-center rounded-full border border-emerald-100 bg-white px-3 py-1 shadow-sm md:mb-4 md:px-4 md:py-1.5">
            <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 md:text-xs">
              Our Portfolio
            </span>
          </div>

          <h2 className="font-['Poppins',sans-serif] mx-auto text-3xl font-black leading-[1.1] tracking-tight text-emerald-950 md:text-4xl lg:text-5xl">
            Signature Layouts,
            <br />
            <span className="text-emerald-600">Developed with Care.</span>
          </h2>

          <p className="font-['Inter',sans-serif] mx-auto mt-3 max-w-xl text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm">
            Explore our verified residential plotted communities 
            across the Coimbatore region[cite: 1, 3, 6, 8, 10, 11].
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 md:mb-12 md:gap-3">
          {[
            { label: "All", count: projects.length },
            {
              label: "Ongoing",
              count: projects.filter((p) => p.status === "Ongoing").length,
            },
            {
              label: "Completed",
              count: projects.filter((p) => p.status === "Completed").length,
            },
            {
              label: "Ready to Occupy",
              count: projects.filter((p) => p.status === "Ready to Occupy")
                .length,
            },
          ].map((status) => (
            <button
              key={status.label}
              onClick={() => {
                setActiveStatus(status.label);
                setCurrentIndex(0);
              }}
              className={`font-['Poppins',sans-serif] inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all md:px-6 md:py-2.5 md:text-[10px] md:tracking-[0.15em] ${
                activeStatus === status.label
                  ? "border-emerald-600 bg-emerald-600 text-white shadow-sm shadow-emerald-600/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-600"
              }`}
            >
              {status.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[8px] ${
                  activeStatus === status.label
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {status.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Feature Container — 3D coverflow */}
        <div
          className="relative mx-auto mb-10 flex w-full max-w-6xl flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:mb-12 md:rounded-[2.5rem] md:p-8"
          style={{ perspective: "1800px" }}
        >
          {/* Slider Header */}
          <div className="mb-4 flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center md:mb-8">
            <div>
              <span className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-wider text-emerald-600 md:text-[10px] md:tracking-[0.2em]">
                Project Showcase
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-1 text-xl font-bold leading-tight text-emerald-950 md:mt-2 md:text-2xl lg:text-3xl">
                Recent project work
              </h3>
              <p className="font-['Inter',sans-serif] mt-1 text-[10px] font-medium text-slate-500 md:mt-1.5 md:text-xs">
                Showing {currentIndex + 1} of {filteredProjects.length} projects
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex md:gap-3">
              <button
                onClick={prevSlide}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 md:h-10 md:w-10"
                aria-label="Previous project"
              >
                <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-950 text-white transition-colors hover:bg-emerald-600 md:h-10 md:w-10"
                aria-label="Next project"
              >
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </button>
            </div>
          </div>

          {/* Main Gallery Display */}
          <div
            className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden py-3 sm:min-h-[450px] md:min-h-[500px] md:py-4"
            style={{ transformStyle: "preserve-3d" }}
          >
            {filteredProjects.map((project, index) => {
              const total = filteredProjects.length;
              let offset = index - currentIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              const rotateY = offset * -28;
              const translateX = offset * 42;
              const translateZ = isActive ? 0 : -140;
              const scale = isActive ? 1 : 0.85;
              const opacity = isVisible ? (isActive ? 1 : 0.35) : 0;

              return (
                <article
                  key={project.name}
                  className={`absolute flex aspect-[4/5] w-full max-w-[240px] flex-col justify-between rounded-xl border border-slate-100 bg-white p-3 transition-all duration-500 ease-out sm:max-w-[280px] md:max-w-[320px] md:rounded-[1.5rem] md:p-4 lg:max-w-[360px] ${
                    isActive ? "z-30 shadow-lg shadow-emerald-950/10" : "z-10"
                  } ${!isVisible ? "pointer-events-none invisible" : ""} ${
                    !isActive ? "max-sm:hidden" : ""
                  }`}
                  style={{
                    transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Card Image */}
                  <div className="relative h-[48%] overflow-hidden rounded-lg border border-slate-100 md:rounded-xl">
                    <img
                      src={project.img}
                      alt={`${project.name} – Greenfield Housing project in ${project.location}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/65 to-transparent" />

                    <span
                      className={`absolute right-2 top-2 rounded-full px-2 py-1 text-[8px] font-bold uppercase tracking-wide md:right-3 md:top-3 md:px-2.5 md:py-1 ${statusStyles[project.status]}`}
                    >
                      {project.status}
                    </span>

                    <div className="absolute bottom-2 left-3 flex items-center gap-1 text-white md:bottom-3 md:left-4">
                      <MapPin className="h-3 w-3 text-emerald-300 md:h-3.5 md:w-3.5" />
                      <span className="text-[9px] font-bold md:text-[10px]">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-3 flex h-[46%] flex-col justify-between md:mt-4">
                    <div>
                      <h3 className="font-['Poppins',sans-serif] line-clamp-2 text-lg font-bold leading-tight text-emerald-950 md:text-xl lg:text-2xl">
                        {project.name}
                      </h3>

                      <p className="font-['Inter',sans-serif] mt-1.5 text-[10px] font-medium leading-relaxed text-slate-600 md:mt-2 md:text-xs">
                        Premium plots in {project.location}.
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 md:pt-3">
                      <span className="font-['Poppins',sans-serif] rounded-full bg-emerald-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-emerald-700 md:px-3 md:py-1.5 md:text-[9px]">
                        {project.status}
                      </span>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Inter',sans-serif] flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-emerald-600 transition-colors hover:text-emerald-500 md:text-[10px] md:tracking-[0.1em]"
                      >
                        Details
                        <ExternalLink className="h-3 w-3 md:h-3.5 md:w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mobile Navigation Controls */}
          <div className="mt-3 flex items-center justify-center gap-3 sm:hidden">
            <button
              onClick={prevSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-3 w-3" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-950 text-white transition-colors hover:bg-emerald-600"
              aria-label="Next project"
            >
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Project Dots Indicator */}
          <div className="mt-4 hidden flex-wrap items-center justify-center gap-1.5 sm:flex">
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? "w-6 bg-emerald-600"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-2 gap-2.5 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:mt-16 md:gap-4 md:rounded-[2rem] md:p-6 lg:grid-cols-4 lg:p-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-3 text-center md:rounded-[1.5rem] md:p-5 lg:p-6"
            >
              <span className="font-['Poppins',sans-serif] block text-2xl font-black leading-none text-emerald-600 md:text-3xl lg:text-4xl">
                {stat.value}
              </span>
              <span className="font-['Inter',sans-serif] mt-1.5 block text-[9px] font-bold uppercase tracking-wider text-slate-500 md:mt-2 md:text-[10px] md:tracking-[0.15em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}