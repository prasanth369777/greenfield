import { ArrowLeft, ArrowRight, MapPin, ExternalLink } from "lucide-react";
import { useCallback, useRef, useState } from "react";

// =====================================================
// REAL PROJECT DATA — Greenfield Housing India
// Verified projects from greenfieldhousingindia.com
// =====================================================

const projects = [
  // ==================== ONGOING ====================
  {
    name: "Lavender",
    location: "Saravanampatti, Coimbatore",
    status: "Ongoing",
    href: "http://lavender.greenfieldhousingindia.com/",
    img: "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lavender_1_5x.jpg",
  },
  {
    name: "Emerald City",
    location: "Saravanampatti, Coimbatore",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/emeraldcity",
    img: "https://static.wixstatic.com/media/60b717_7c54df718952421c9cc582783fe5aabf~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Emerald--3-.jpg",
  },
  {
    name: "Crystal Gateway",
    location: "Kalangal Road, Sulur",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/crystalgateway",
    img: "https://static.wixstatic.com/media/60b717_e3458c6e980748a88ced46d2c367e603~mv2.jpg/v1/fill/w_980,h_549,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-1-04_edited.jpg",
  },
  {
    name: "Diamond Avenue",
    location: "Pattanam Pudur, Coimbatore",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/diamond-avenue",
    img: "https://static.wixstatic.com/media/60b717_8876632975b4438cb1f3f5c0df7bca6d~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diamond%20avenue_1_5x.jpg",
  },
  {
    name: "Fairland",
    location: "Ponnigoundapudur, Coimbatore",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/fairland",
    img: "https://static.wixstatic.com/media/60b717_7c54df718952421c9cc582783fe5aabf~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Emerald--3-.jpg",
  },
  {
    name: "Crown City",
    location: "Kovilpalayam, Coimbatore",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/crowncity",
    img: "https://static.wixstatic.com/media/60b717_8876632975b4438cb1f3f5c0df7bca6d~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diamond%20avenue_1_5x.jpg",
  },
  {
    name: "Silver City",
    location: "Kariyampalayam, Coimbatore",
    status: "Ongoing",
    href: "https://www.greenfieldhousingindia.com/silvercity",
    img: "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lavender_1_5x.jpg",
  },

  // ==================== COMPLETED ====================
  {
    name: "Maple",
    location: "Kalapatti, Coimbatore",
    status: "Completed",
    href: "https://www.greenfieldhousingindia.com/maple-kalapatti",
    img: "https://static.wixstatic.com/media/60b717_f9a74e1c8c5c4731b0a7db4c69e0a342~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Maple_1_5x.jpg",
  },
  {
    name: "Nandavanam",
    location: "Neelambur, Coimbatore",
    status: "Completed",
    href: "https://www.greenfieldhousingindia.com/nandhavanam",
    img: "https://static.wixstatic.com/media/60b717_621aed18452743cb8f83f6651f33aa7a~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nandhavanam_1_5x.jpg",
  },
  {
    name: "Ruby Lands",
    location: "Neelambur, Coimbatore",
    status: "Completed",
    href: "https://www.greenfieldhousingindia.com/ruby-lands",
    img: "https://static.wixstatic.com/media/60b717_8a7bc8e08a1b4499b01c0143cd0c7bd9~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ruby%20Lands_1_5x.jpg",
  },
  {
    name: "Tulip Garden",
    location: "Kalapatti, Coimbatore",
    status: "Completed",
    href: "https://www.greenfieldhousingindia.com/tulip-garden",
    img: "https://static.wixstatic.com/media/60b717_819b9b411b5d45668b6c4c1ab30d8a6a~mv2.jpg/v1/fill/w_980,h_669,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01%20(1).jpg",
  },
  {
    name: "Natchatra Homes",
    location: "Coimbatore",
    status: "Completed",
    href: "https://www.greenfieldhousingindia.com/natchatra-homes",
    img: "https://static.wixstatic.com/media/60b717_621aed18452743cb8f83f6651f33aa7a~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nandhavanam_1_5x.jpg",
  },
  {
    name: "Pearl Park Avenue",
    location: "Coimbatore",
    status: "Completed",
    href: "https://www.greenfieldhousingindia.com/pearl-park-avenue",
    img: "https://static.wixstatic.com/media/60b717_f9a74e1c8c5c4731b0a7db4c69e0a342~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Maple_1_5x.jpg",
  },

  // ==================== READY TO OCCUPY ====================
  {
    name: "Bougain Villea Apartment",
    location: "Vilankurichi, Coimbatore",
    status: "Ready to Occupy",
    href: "https://www.greenfieldhousingindia.com/bougain-apartment-villas",
    img: "https://static.wixstatic.com/media/60b717_38682915f7de44d6a27f2ae985ec2389~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bougain%20villea%20Apartment_1_5x.jpg",
  },
  {
    name: "Coral Residency",
    location: "Vellanaipatti, Coimbatore",
    status: "Ready to Occupy",
    href: "https://www.greenfieldhousingindia.com/coral-residency",
    img: "https://static.wixstatic.com/media/60b717_005782c45b6c4b59ae38e1242078eb0e~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/lavender_1_5x.jpg",
  },
  {
    name: "Platina",
    location: "Vilankurichi, Coimbatore",
    status: "Ready to Occupy",
    href: "https://www.greenfieldhousingindia.com/platina",
    img: "https://static.wixstatic.com/media/60b717_8a7bc8e08a1b4499b01c0143cd0c7bd9~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ruby%20Lands_1_5x.jpg",
  },
];

const statusStyles = {
  Ongoing: "bg-amber-50 text-amber-700",
  Completed: "bg-emerald-50 text-emerald-700",
  "Ready to Occupy": "bg-emerald-50 text-emerald-700",
};

// Real, verified company stats (from greenfieldhousingindia.com homepage)
const stats = [
  { value: "20+", label: "Projects across Coimbatore & Erode" },
  { value: "1000+", label: "Acres of developed land" },
  { value: "10 Lakh+", label: "Sq. ft. of constructed area" },
  { value: "15K+", label: "Happy Families" },
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
      className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24"
    >
      {/* Ambient background glow — parallax-driven */}
      <div
        className="pointer-events-none absolute -left-16 top-0 h-[350px] w-[350px] rounded-full bg-emerald-200/25 blur-[120px] transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${drift.x * -35}px, ${drift.y * -35}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[380px] w-[380px] rounded-full bg-green-200/25 blur-[130px] transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${drift.x * 30}px, ${drift.y * 30}px, 0)` }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center justify-center rounded-full border border-emerald-100 bg-white px-4 py-1.5 shadow-sm md:mb-6 md:px-5 md:py-2">
            <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 md:text-sm">
              Our Portfolio
            </span>
          </div>

          <h2 className="font-['Poppins',sans-serif] mx-auto text-4xl font-black leading-[1.1] tracking-tight text-emerald-950 md:text-5xl lg:text-6xl">
            Signature Homes,
            <br />
            <span className="text-emerald-600">Delivered with Care.</span>
          </h2>

          <p className="font-['Inter',sans-serif] mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
            Explore our ongoing, completed, and ready-to-occupy communities
            across Coimbatore — 20+ projects delivered to 15,000+ happy
            families since 2012.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-16 md:gap-3">
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
              className={`font-['Poppins',sans-serif] inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[10px] font-bold uppercase tracking-wider transition-all md:px-7 md:py-3 md:text-xs md:tracking-[0.15em] ${
                activeStatus === status.label
                  ? "border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-600"
              }`}
            >
              {status.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[9px] ${
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
          className="relative mx-auto mb-12 flex w-full max-w-7xl flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:mb-16 md:rounded-[3rem] md:p-10"
          style={{ perspective: "1800px" }}
        >
          {/* Slider Header */}
          <div className="mb-6 flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center md:mb-10">
            <div>
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-emerald-600 md:text-xs md:tracking-[0.2em]">
                Project Showcase
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-1 text-2xl font-bold leading-tight text-emerald-950 md:mt-2 md:text-4xl lg:text-5xl">
                Recent project work
              </h3>
              <p className="font-['Inter',sans-serif] mt-2 text-xs font-medium text-slate-500 md:text-sm">
                Showing {currentIndex + 1} of {filteredProjects.length} projects
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex md:gap-3">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 md:h-12 md:w-12"
                aria-label="Previous project"
              >
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950 text-white transition-colors hover:bg-emerald-600 md:h-12 md:w-12"
                aria-label="Next project"
              >
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>

          {/* Main Gallery Display */}
          <div
            className="relative flex min-h-[460px] w-full items-center justify-center overflow-hidden py-4 sm:min-h-[500px] md:min-h-[600px] md:py-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            {filteredProjects.map((project, index) => {
              const total = filteredProjects.length;
              let offset = index - currentIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              const rotateY = offset * -32;
              const translateX = offset * 46;
              const translateZ = isActive ? 0 : -180;
              const scale = isActive ? 1 : 0.88;
              const opacity = isVisible ? (isActive ? 1 : 0.35) : 0;

              return (
                <article
                  key={project.name}
                  className={`absolute flex aspect-[4/5] w-full max-w-[280px] flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-500 ease-out sm:max-w-[320px] md:max-w-[380px] md:rounded-[2rem] md:p-5 lg:max-w-[420px] ${
                    isActive ? "z-30 shadow-xl shadow-emerald-950/10" : "z-10"
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
                  <div className="relative h-[48%] overflow-hidden rounded-xl border border-slate-100 md:rounded-2xl">
                    <img
                      src={project.img}
                      alt={`${project.name} – Greenfield Housing India project in ${project.location}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/65 to-transparent" />

                    <span
                      className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide md:right-4 md:top-4 ${statusStyles[project.status]}`}
                    >
                      {project.status}
                    </span>

                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white md:bottom-4 md:left-5">
                      <MapPin className="h-3.5 w-3.5 text-emerald-300 md:h-4 md:w-4" />
                      <span className="text-[10px] font-bold md:text-xs">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-4 flex h-[46%] flex-col justify-between md:mt-5">
                    <div>
                      <h3 className="font-['Poppins',sans-serif] line-clamp-2 text-xl font-bold leading-tight text-emerald-950 md:text-2xl lg:text-3xl">
                        {project.name}
                      </h3>

                      <p className="font-['Inter',sans-serif] mt-2 text-xs font-medium leading-relaxed text-slate-600 md:mt-3 md:text-sm">
                        A premium Greenfield Housing community in{" "}
                        {project.location}.
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 md:pt-4">
                      <span className="font-['Poppins',sans-serif] rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 md:px-4 md:py-2 md:text-xs">
                        {project.status}
                      </span>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Inter',sans-serif] flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 transition-colors hover:text-emerald-500 md:text-xs md:tracking-[0.1em]"
                      >
                        View Details
                        <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mobile Navigation Controls */}
          <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950 text-white transition-colors hover:bg-emerald-600"
              aria-label="Next project"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Project Dots Indicator */}
          <div className="mt-6 hidden flex-wrap items-center justify-center gap-2 sm:flex">
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i
                    ? "w-8 bg-emerald-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:mt-20 md:gap-5 md:rounded-[2.5rem] md:p-8 lg:grid-cols-4 lg:p-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-4 text-center md:rounded-[2rem] md:p-6 lg:p-8"
            >
              <span className="font-['Poppins',sans-serif] block text-3xl font-black leading-none text-emerald-600 md:text-4xl lg:text-5xl">
                {stat.value}
              </span>
              <span className="font-['Inter',sans-serif] mt-2 block text-[10px] font-bold uppercase tracking-wider text-slate-500 md:mt-3 md:text-xs md:tracking-[0.15em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}