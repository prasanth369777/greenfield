import React, { useMemo } from "react";
import {
  Leaf,
  Dumbbell,
  Users,
  Shield,
  Activity,
  Droplets,
  Trees,
} from "lucide-react";

// Community features data based on verified projects
const communityFeatures = [
  {
    icon: Trees,
    title: "Green Spaces",
    desc: "Landscaped gardens, parks, and roadside greenery[cite: 3, 8, 10].",
    color: "emerald",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Sports",
    desc: "Outdoor gyms, 400m running tracks, and indoor shuttle courts[cite: 8, 11].",
    color: "blue",
  },
  {
    icon: Activity,
    title: "Recreation",
    desc: "Grand clubhouses, mini theatres, and a 3-acre cricket turf[cite: 8].",
    color: "purple",
  },
  {
    icon: Users,
    title: "Community Areas",
    desc: "Dedicated community halls and children's play areas[cite: 4, 6, 8, 10].",
    color: "orange",
  },
  {
    icon: Droplets,
    title: "Infrastructure",
    desc: "Individual water lines, underground EB, and standard drainage[cite: 6, 8, 10].",
    color: "indigo",
  },
  {
    icon: Shield,
    title: "Secure Layouts",
    desc: "24/7 security, CCTV, and fully enclosed compound walls[cite: 4, 6, 8, 10, 11].",
    color: "rose",
  },
];

// Scroll items for the infinite scroll
const scrollItems = [
  "Grand Clubhouse",
  "3-Acre Cricket Turf",
  "Outdoor Gym",
  "Mini Theatre",
  "Underground EB",
  "Blacktop Roads",
  "CCTV Surveillance",
  "Indoor Shuttle Court",
  "Rainwater Harvesting",
  "Landscaped Gardens",
  "Community Hall",
  "Children's Park",
];

// Items to highlight as active
const activeItems = new Set([
  "3-Acre Cricket Turf",
  "CCTV Surveillance",
  "Underground EB",
]);

function InfiniteScroll() {
  const duplicatedItems = useMemo(
    () => [...scrollItems, ...scrollItems],
    []
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Community Features Section */}
      <section
        id="community"
        className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-16"
      >
        {/* Background Decor */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-emerald-200/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-blue-200/20 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Section Header */}
          <div className="mb-10 text-center md:mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white px-3 py-1.5 shadow-sm md:px-4 md:py-2">
              <Users className="h-3.5 w-3.5 text-emerald-600" />
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-700 md:text-xs">
                Community Living
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] mt-3 text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-3xl lg:text-4xl">
              Equipped For Modern Life
            </h2>
            <p className="font-['Inter',sans-serif] mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-slate-600 md:mt-4 md:text-base">
              Secure, gated plotted developments featuring premium amenities, 
              essential infrastructure, and vibrant social spaces[cite: 8, 10, 11].
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {communityFeatures.map((feature) => {
              const Icon = feature.icon;
              const colorClasses = {
                emerald: "border-emerald-100 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
                blue: "border-blue-100 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                purple: "border-purple-100 bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
                orange: "border-orange-100 bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
                indigo: "border-indigo-100 bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
                rose: "border-rose-100 bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white",
              };

              return (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:rounded-2xl md:p-6"
                >
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-300 md:mb-4 md:h-12 md:w-12 md:rounded-xl ${colorClasses[feature.color]}`}
                  >
                    <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-['Poppins',sans-serif] text-base font-bold text-slate-950 md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] mt-1.5 text-xs font-medium leading-relaxed text-slate-600 md:mt-2 md:text-sm">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center md:mt-10">
            <button
              onClick={() => scrollToSection("projects")}
              className="font-['Inter',sans-serif] inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-800 active:scale-95 md:gap-3 md:px-8 md:py-3.5 md:text-base"
            >
              Explore Layouts
              <Leaf className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Section */}
      <section className="relative w-full overflow-hidden bg-white py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 md:grid-cols-2 md:gap-10 lg:px-12 xl:px-24">
          
          {/* Left Static Brand Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50/50 px-3 py-1.5 md:mb-4 md:px-4 md:py-2">
              <Shield className="h-3.5 w-3.5 text-emerald-600" />
              <span className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-700 md:text-[10px]">
                Verified Layouts
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] text-3xl font-black tracking-tight text-slate-950 sm:text-4xl xl:text-5xl leading-[1.1]">
              Where <span className="text-emerald-600">Community</span> Thrives
            </h2>

            <p className="font-['Inter',sans-serif] mt-3 max-w-md text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm">
              Our residential plots are delivered with complete legal transparency, 
              robust infrastructure, and premium lifestyle facilities[cite: 8, 10, 11].
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6 md:justify-start">
              <div className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                100% Approved
              </div>
              <div className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                RERA Registered
              </div>
              <div className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-700">
                DTCP Layouts
              </div>
            </div>
          </div>

          {/* Right Infinite Vertical Scroll */}
          <div className="vertical-scroll-mask relative h-[320px] w-full overflow-hidden lg:h-[380px]">
            <div className="vertical-scroll-track">
              {duplicatedItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className={`font-['Poppins',sans-serif] vertical-scroll-item py-2 text-xl font-black tracking-tight sm:text-2xl lg:text-3xl ${
                    activeItems.has(item)
                      ? "text-emerald-700"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            .vertical-scroll-mask {
              contain: strict;
              mask-image: linear-gradient(
                to bottom,
                transparent 0%,
                black 15%,
                black 85%,
                transparent 100%
              );
              -webkit-mask-image: linear-gradient(
                to bottom,
                transparent 0%,
                black 15%,
                black 85%,
                transparent 100%
              );
            }

            .vertical-scroll-track {
              display: flex;
              flex-direction: column;
              animation: cubeVerticalScroll 30s linear infinite;
              will-change: transform;
              transform: translate3d(0, 0, 0);
              backface-visibility: hidden;
              perspective: 1000px;
            }

            .vertical-scroll-item {
              line-height: 1.2;
              white-space: nowrap;
              backface-visibility: hidden;
              transform: translate3d(0, 0, 0);
              transition: color 0.2s ease;
            }

            @keyframes cubeVerticalScroll {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(0, -50%, 0);
              }
            }

            .vertical-scroll-mask:hover .vertical-scroll-track {
              animation-play-state: paused;
            }

            @media (prefers-reduced-motion: reduce) {
              .vertical-scroll-track {
                animation: none;
                transform: none;
              }
            }
          `}
        </style>
      </section>
    </>
  );
}

export default React.memo(InfiniteScroll);