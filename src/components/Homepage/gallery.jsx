import React, { useState } from "react";
import { X, MessageCircle, ArrowUpRight } from "lucide-react";

// Assuming these are your imports
import Image1 from "../../assests/gallery/gallery1.webp";
import Image2 from "../../assests/gallery/gallery2.webp";
import Image3 from "../../assests/gallery/gallery3.webp";
import Image4 from "../../assests/gallery/gallery4.webp";
import Image5 from "../../assests/team/herosection/cubehero3.webp";
import Image6 from "../../assests/team/herosection/cubehero4.webp";

const projects = [
  {
    id: 1,
    img: Image1,
    category: "Kitchen",
    title: "Modular Kitchen",
    desc: "Elegant kitchen design with smart storage, premium finish, and practical workflow.",
  },
  {
    id: 2,
    img: Image2,
    category: "Interior",
    title: "Living Interior",
    desc: "Modern interior styling designed for comfort, function, and visual balance.",
  },
  {
    id: 3,
    img: Image3,
    category: "Commercial",
    title: "Office Space",
    desc: "A productive workspace planned with clean design and efficient space usage.",
  },
  {
    id: 4,
    img: Image4,
    category: "Bedroom",
    title: "Luxury Room",
    desc: "Warm bedroom interiors with refined materials and a calm premium look.",
  },
  {
    id: 5,
    img: Image5,
    category: "Residential",
    title: "Urban Home",
    desc: "A complete home concept focused on light, space, and long-term usability.",
  },
  {
    id: 6,
    img: Image6,
    category: "Workspace",
    title: "Creative Studio",
    desc: "A smart workspace designed for focus, collaboration, and modern business needs.",
  },
];

const bottomCards = [
  {
    label: "Planning",
    title: "Smart space planning",
    desc: "We plan every corner for comfort, flow, and practical daily use.",
    dark: true,
  },
  {
    label: "Execution",
    title: "Quality-driven interiors",
    desc: "Clean finishes, reliable materials, and supervised project delivery.",
    image: Image2,
  },
  {
    label: "Turnkey",
    title: "Design to handover",
    desc: "One team manages the full journey from concept to completion.",
    image: Image5,
  },
  {
    label: "Support",
    title: "A team you can trust",
    desc: "Clear communication, timely updates, and professional coordination.",
    soft: true,
  },
];

export default function GalleryGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const redirectToWhatsApp = (title) => {
    const message = encodeURIComponent(
      `Hello! I would like to know more about this Cube4Spaces project: ${title}`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-50 py-12 md:py-24">
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-slate-200/40 blur-[100px] md:h-[500px] md:w-[500px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-200/30 blur-[100px] md:h-[500px] md:w-[500px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <header className="mb-10 grid gap-6 md:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <span className="font-['Poppins',sans-serif] mb-4 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 md:mb-6 md:px-5 md:py-2 md:text-sm">
              Project Gallery
            </span>

            <h1 className="font-['Poppins',sans-serif] max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-5xl lg:leading-[1.05]">
              Crafted Spaces.
              <br />
              Built Beautifully.
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-base font-medium leading-relaxed text-slate-600 md:text-xl">
              Explore selected Cube4Spaces projects across interiors, kitchens,
              homes, offices, and turnkey spaces.
            </p>

            <button
              onClick={() => redirectToWhatsApp("Project Gallery")}
              className="font-['Inter',sans-serif] mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-600 active:scale-95 sm:w-auto md:mt-8 md:px-8 md:py-4 md:text-base"
            >
              Chat on WhatsApp
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Gallery Grid */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => openModal(project)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:rounded-[2rem] ${
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-10"
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between md:left-6 md:right-6 md:top-6">
                  <span className="font-['Poppins',sans-serif] rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-800 backdrop-blur md:px-4 md:py-2 md:text-xs">
                    {project.category}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-slate-900 backdrop-blur transition-colors group-hover:bg-indigo-600 group-hover:text-white md:h-10 md:w-10">
                    <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <span className="font-['Poppins',sans-serif] mb-2 block text-xs font-bold text-white/70 md:mb-3 md:text-sm">
                    0{project.id}
                  </span>

                  <h3 className="font-['Poppins',sans-serif] text-2xl font-bold leading-tight text-white md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="font-['Inter',sans-serif] mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-slate-300 md:mt-3 md:text-base">
                    {project.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Studio Section */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-white px-4 py-12 shadow-sm md:mt-24 md:rounded-[3rem] md:px-10 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1400px]">
            
            {/* Top Heading */}
            <div className="mb-10 grid gap-6 md:mb-16 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <span className="font-['Poppins',sans-serif] mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 md:mb-6">
                  About Studio
                </span>

                <h2 className="font-['Poppins',sans-serif] max-w-2xl text-3xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
                  Cube4Spaces creates beautiful spaces with{" "}
                  <span className="text-slate-400">
                    practical planning and premium execution.
                  </span>
                </h2>
              </div>
              
              <div className="lg:pt-10">
                <p className="font-['Inter',sans-serif] max-w-xl text-base font-medium leading-relaxed text-slate-600 md:text-lg lg:text-xl">
                  We combine design thinking, material knowledge, and site
                  execution to deliver interiors that look refined and work well
                  in real life.
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:items-end">
              {bottomCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`group relative min-h-[220px] overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:min-h-[320px] md:rounded-[2rem] md:p-8 ${
                    index === 1 || index === 3 ? "lg:translate-y-8" : ""
                  } ${
                    card.dark
                      ? "border-slate-900 bg-slate-950 text-white"
                      : card.soft
                      ? "border-slate-200 bg-slate-100 text-slate-900"
                      : "border-slate-200 bg-white text-white"
                  }`}
                >
                  {card.image && (
                    <>
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                    </>
                  )}

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <span
                      className={`font-['Poppins',sans-serif] w-fit rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider md:px-4 md:py-2 md:text-xs ${
                        card.dark
                          ? "border-slate-700 bg-slate-800/50 text-slate-300"
                          : card.soft
                          ? "border-slate-300 bg-white/50 text-slate-600"
                          : "border-white/30 bg-black/20 text-white/90 backdrop-blur-md"
                      }`}
                    >
                      {card.label}
                    </span>

                    <div className="mt-8 md:mt-0">
                      <h3
                        className={`font-['Poppins',sans-serif] text-xl font-bold leading-tight md:text-2xl ${
                          card.dark
                            ? "text-white"
                            : card.soft
                            ? "text-slate-950"
                            : "text-white"
                        }`}
                      >
                        {card.title}
                      </h3>

                      <p
                        className={`font-['Inter',sans-serif] mt-2 max-w-xs text-sm font-medium leading-relaxed md:mt-3 md:text-base ${
                          card.dark
                            ? "text-slate-400"
                            : card.soft
                            ? "text-slate-600"
                            : "text-slate-200"
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Strip */}
            <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-indigo-50 p-6 md:mt-24 md:flex-row md:items-center md:rounded-[2rem] md:p-10">
              <div>
                <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 md:text-sm">
                  Start Your Project
                </span>
                <h3 className="font-['Poppins',sans-serif] mt-2 text-2xl font-black text-slate-950 md:mt-3 md:text-4xl">
                  Ready to design your space?
                </h3>
              </div>

              <button
                onClick={() => redirectToWhatsApp("New Interior Project")}
                className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 active:scale-95 md:w-auto md:px-8 md:text-lg"
              >
                Get Project Quote
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm md:p-8"
            onClick={closeModal}
          >
            <div
              className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row md:rounded-[2.5rem]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative h-64 w-full flex-shrink-0 md:h-auto md:w-1/2">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent md:hidden" />
              </div>

              {/* Modal Content */}
              <div className="flex flex-col justify-center overflow-y-auto p-6 md:w-1/2 md:p-12 lg:p-16">
                <span className="font-['Poppins',sans-serif] mb-3 inline-flex w-fit rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 md:mb-5 md:px-5 md:py-2 md:text-sm">
                  {selectedProject.category}
                </span>

                <h2 className="font-['Poppins',sans-serif] text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                  {selectedProject.title}
                </h2>

                <p className="font-['Inter',sans-serif] mt-4 text-base font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg lg:text-xl">
                  {selectedProject.desc}
                </p>

                <div className="mt-8 border-t border-slate-100 pt-6 md:mt-10 md:pt-8">
                  <button
                    onClick={() => redirectToWhatsApp(selectedProject.title)}
                    className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition-all hover:bg-indigo-600 active:scale-95 sm:w-auto md:px-8 md:text-lg"
                  >
                    Get Quote on WhatsApp
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm backdrop-blur transition-colors hover:bg-slate-100 md:right-6 md:top-6 md:h-12 md:w-12"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}