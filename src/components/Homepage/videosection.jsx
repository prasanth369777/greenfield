import React, { useState, useRef } from "react";
import { X, MessageCircle, Play } from "lucide-react";

// Video imports
import Video1 from "../../assests/video/1.mp4";
import Video2 from "../../assests/video/2.mp4";
import Video3 from "../../assests/video/3.mp4";
import Video4 from "../../assests/video/4.mp4";
import Video5 from "../../assests/video/5.mp4";
import Video6 from "../../assests/video/6.mp4";
import Video7 from "../../assests/video/1.mp4";
import Video8 from "../../assests/video/2.mp4";
import Video9 from "../../assests/video/3.mp4";
import Video10 from "../../assests/video/4.mp4";

const videos = [
  { id: 1, src: Video1 },
  { id: 2, src: Video2 },
  { id: 3, src: Video3 },
  { id: 4, src: Video4 },
  { id: 5, src: Video5 },
  { id: 6, src: Video6 },
  { id: 7, src: Video7 },
  { id: 8, src: Video8 },
  { id: 9, src: Video9 },
  { id: 10, src: Video10 },
];

export default function VideoGalleryGrid() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRefs = useRef({});

  const handleMouseEnter = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].play().catch((e) => console.log("Autoplay prevented:", e));
    }
  };

  const handleMouseLeave = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
      videoRefs.current[id].currentTime = 0; 
    }
  };

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  const redirectToWhatsApp = (id) => {
    const phoneNumber = "917395864774"; // Includes country code
    const message = encodeURIComponent(
      id 
      ? `Hello! I would like to know more about Greenfield video project #${id}`
      : "Hello! I would like to start a new interior project with Greenfield."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
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
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-base font-medium leading-relaxed text-slate-600 md:text-xl">
              Watch our cinematic 9:16 interior transformations, walkthroughs, and turnkey project highlights.
            </p>
          </div>
        </header>

        {/* 9:16 Video Grid (Responsive) */}
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6">
          {videos.map((video) => (
            <article
              key={video.id}
              onClick={() => openModal(video)}
              onMouseEnter={() => handleMouseEnter(video.id)}
              onMouseLeave={() => handleMouseLeave(video.id)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-900 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:rounded-2xl"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/0" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md md:h-12 md:w-12">
                      <Play className="h-4 w-4 fill-white text-white md:h-5 md:w-5" />
                   </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 9:16 Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md sm:p-8"
            onClick={closeModal}
          >
            <div
              className="relative flex h-full max-h-[90vh] w-full max-w-[45vh] flex-col overflow-hidden rounded-2xl bg-black shadow-2xl md:rounded-[2rem]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Video Player (Vertical) */}
              <div className="relative h-full w-full flex-grow">
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bottom Actions inside Modal */}
              <div className="flex flex-shrink-0 items-center justify-center bg-white p-4">
                <button
                  onClick={() => redirectToWhatsApp(selectedVideo.id)}
                  className="font-['Inter',sans-serif] flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-95"
                >
                  Inquire on WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/70"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}