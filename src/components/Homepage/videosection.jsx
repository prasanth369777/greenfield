import React, { useState, useRef } from "react";
import { X, MessageCircle, ArrowUpRight, Play } from "lucide-react";

// Replace these with your actual video imports or URLs
import Video1 from "../../assests/videos/video1.mp4";
import Video2 from "../../assests/videos/video2.mp4";
import Video3 from "../../assests/videos/video3.mp4";
import Video4 from "../../assests/videos/video4.mp4";
import Video5 from "../../assests/videos/video5.mp4";
import Video6 from "../../assests/videos/video6.mp4";
import Video7 from "../../assests/videos/video7.mp4";
import Video8 from "../../assests/videos/video8.mp4";
import Video9 from "../../assests/videos/video9.mp4";
import Video10 from "../../assests/videos/video10.mp4";

// Optional: Import poster images for the videos to show before playing
import Poster1 from "../../assests/gallery/gallery1.webp";
import Poster2 from "../../assests/gallery/gallery2.webp";

const videos = [
  {
    id: 1,
    src: Video1,
    poster: Poster1, // Fallback image before the video loads
    category: "3D Visualization",
    title: "Modular Kitchen",
    desc: "Photorealistic 3D architectural motion graphic highlighting smart kitchen storage.",
  },
  {
    id: 2,
    src: Video2,
    poster: Poster2,
    category: "Commercial",
    title: "Living Space Revamp",
    desc: "Before-and-after room sweep showcasing modern interior styling and furniture.",
  },
  {
    id: 3,
    src: Video3,
    category: "Workspace",
    title: "Office Layout",
    desc: "Blueprint grid transformation sequence into a fully productive workspace.",
  },
  {
    id: 4,
    src: Video4,
    category: "Bedroom",
    title: "Luxury Room",
    desc: "Warm bedroom interiors visualized with refined materials and ambient lighting.",
  },
  {
    id: 5,
    src: Video5,
    category: "Residential",
    title: "Urban Home Tour",
    desc: "A complete home concept focused on light, space, and long-term usability.",
  },
  {
    id: 6,
    src: Video6,
    category: "Motion Graphic",
    title: "Creative Studio",
    desc: "A smart workspace designed for focus, collaboration, and modern business needs.",
  },
  {
    id: 7,
    src: Video7,
    category: "Commercial Ad",
    title: "Retail Interior",
    desc: "Commercial interior design highlighting customer flow and product display.",
  },
  {
    id: 8,
    src: Video8,
    category: "3D Walkthrough",
    title: "Minimalist Lounge",
    desc: "Floating 3D objects and clean paper backgrounds demonstrating layout concepts.",
  },
  {
    id: 9,
    src: Video9,
    category: "Turnkey",
    title: "Site Execution",
    desc: "Fast-paced transition from raw site supervision to the final polished handover.",
  },
  {
    id: 10,
    src: Video10,
    category: "Promotional",
    title: "Custom Furniture",
    desc: "Detailed close-up shots emphasizing custom furniture design and upholstery.",
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
    image: Poster1, // Reusing poster/image here
  },
  {
    label: "Turnkey",
    title: "Design to handover",
    desc: "One team manages the full journey from concept to completion.",
    image: Poster2,
  },
  {
    label: "Support",
    title: "A team you can trust",
    desc: "Clear communication, timely updates, and professional coordination.",
    soft: true,
  },
];

export default function VideoGalleryGrid() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Refs to handle hover play/pause in the grid
  const videoRefs = useRef({});

  const handleMouseEnter = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  const handleMouseLeave = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
      videoRefs.current[id].currentTime = 0; // Reset video to start
    }
  };

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const redirectToWhatsApp = (title) => {
    const message = encodeURIComponent(
      `Hello! I would like to know more about this Cube4Spaces video project: ${title}`
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
              Video Showcase
            </span>

            <h1 className="font-['Poppins',sans-serif] max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-5xl lg:leading-[1.05]">
              Spaces in Motion.
              <br />
              Built Beautifully.
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-base font-medium leading-relaxed text-slate-600 md:text-xl">
              Watch selected Cube4Spaces interior transformations, 3D walkthroughs, and turnkey project highlights.
            </p>

            <button
              onClick={() => redirectToWhatsApp("Video Showcase")}
              className="font-['Inter',sans-serif] mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-600 active:scale-95 sm:w-auto md:mt-8 md:px-8 md:py-4 md:text-base"
            >
              Chat on WhatsApp
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Video Grid */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8 lg:masonry">
          {videos.map((video, index) => (
            <article
              key={video.id}
              onClick={() => openModal(video)}
              onMouseEnter={() => handleMouseEnter(video.id)}
              onMouseLeave={() => handleMouseLeave(video.id)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:rounded-[2rem] ${
                index % 3 === 1 ? "lg:mt-10" : index % 3 === 2 ? "lg:mt-20" : "lg:mt-0"
              }`}
            >
              <div className="relative aspect-[9/16] sm:aspect-[4/5] overflow-hidden bg-slate-900">
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.src}
                  poster={video.poster}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                      <Play className="h-5 w-5 fill-white text-white" />
                   </div>
                </div>

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between md:left-6 md:right-6 md:top-6">
                  <span className="font-['Poppins',sans-serif] rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-800 backdrop-blur md:px-4 md:py-2 md:text-xs">
                    {video.category}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-slate-900 backdrop-blur transition-colors group-hover:bg-indigo-600 group-hover:text-white md:h-10 md:w-10">
                    <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <span className="font-['Poppins',sans-serif] mb-2 block text-xs font-bold text-white/70 md:mb-3 md:text-sm">
                    0{video.id}
                  </span>

                  <h3 className="font-['Poppins',sans-serif] text-2xl font-bold leading-tight text-white md:text-3xl">
                    {video.title}
                  </h3>

                  <p className="font-['Inter',sans-serif] mt-2 line-clamp-2 text-sm font-medium leading-relaxed text-slate-300 md:mt-3 md:text-base">
                    {video.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Studio Section */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-white px-4 py-12 shadow-sm md:mt-24 md:rounded-[3rem] md:px-10 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1400px]">
            
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

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md md:p-8"
            onClick={closeModal}
          >
            <div
              className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row md:rounded-[2.5rem]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Video Player */}
              <div className="relative h-64 w-full flex-shrink-0 bg-black md:h-auto md:w-1/2">
                <video
                  src={selectedVideo.src}
                  poster={selectedVideo.poster}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="flex flex-col justify-center overflow-y-auto p-6 md:w-1/2 md:p-12 lg:p-16">
                <span className="font-['Poppins',sans-serif] mb-3 inline-flex w-fit rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 md:mb-5 md:px-5 md:py-2 md:text-sm">
                  {selectedVideo.category}
                </span>

                <h2 className="font-['Poppins',sans-serif] text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                  {selectedVideo.title}
                </h2>

                <p className="font-['Inter',sans-serif] mt-4 text-base font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg lg:text-xl">
                  {selectedVideo.desc}
                </p>

                <div className="mt-8 border-t border-slate-100 pt-6 md:mt-10 md:pt-8">
                  <button
                    onClick={() => redirectToWhatsApp(selectedVideo.title)}
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
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm backdrop-blur transition-colors hover:bg-slate-100 md:right-6 md:top-6 md:h-12 md:w-12 z-10"
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