import React, { useMemo } from "react";
import {
  Leaf,
  Dumbbell,
  Users,
  Users2,
  Smartphone,
  MapPin,
 
  Trees,

} from "lucide-react";

// Community features data
const communityFeatures = [
  {
    icon: Trees,
    title: "Lush Green Spaces",
    desc: "Serene gardens and landscaped parks that bring nature to your doorstep.",
    color: "emerald",
  },
  {
    icon: Dumbbell,
    title: "Wellness Zones",
    desc: "Fitness centers, yoga decks, and walking trails for a healthy lifestyle.",
    color: "blue",
  },
  {
    icon: Users2,
    title: "Recreational Amenities",
    desc: "Clubhouses, swimming pools, and sports facilities for every age group.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Community Gatherings",
    desc: "Spaces designed for celebrations, events, and building lasting connections.",
    color: "orange",
  },
  {
    icon: Smartphone,
    title: "Smart Living Features",
    desc: "Modern technology integrated for convenience, security, and efficiency.",
    color: "indigo",
  },
  {
    icon: MapPin,
    title: "Proximity to Essentials",
    desc: "Located near schools, hospitals, IT parks, and shopping centers.",
    color: "rose",
  },
];

// Scroll items for the infinite scroll
const scrollItems = [
  "Lush Green Spaces",
  "Wellness Zones",
  "Recreational Amenities",
  "Community Gatherings",
  "Smart Living Features",
  "Proximity to Essentials",
  "Clubhouse",
  "Swimming Pool",
  "Gymnasium",
  "Children's Play Area",
  "Walking Trails",
  "Yoga Deck",
  "Party Hall",
  "Security Systems",
  "Landscaped Gardens",
];

// Items to highlight as active
const activeItems = new Set([
  "Lush Green Spaces",
  "Wellness Zones",
  "Community Gatherings",
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
        className="relative w-full overflow-hidden bg-slate-50 py-16 md:py-24"
      >
        {/* Background Decor */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-emerald-200/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 shadow-sm md:px-5 md:py-2.5">
              <Users className="h-4 w-4 text-emerald-600" />
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-emerald-700 md:text-sm">
                Community Living
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] mt-4 text-4xl font-black leading-tight text-slate-950 md:mt-6 md:text-5xl lg:text-6xl">
              Designed for More Than Just Living
            </h2>
            <p className="font-['Inter',sans-serif] mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:text-lg">
              Create meaningful bonds and shared experiences in spaces designed
              for connection, wellness, and joy.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
                >
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl border transition-colors duration-300 md:h-16 md:w-16 ${colorClasses[feature.color]}`}
                  >
                    <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2} />
                  </div>
                  <h3 className="font-['Poppins',sans-serif] text-xl font-bold text-slate-950 md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] mt-2 text-sm font-medium leading-relaxed text-slate-600 md:text-base">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="font-['Inter',sans-serif] inline-flex items-center gap-3 rounded-full bg-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-emerald-800 hover:shadow-xl active:scale-95 md:px-10 md:py-5 md:text-lg"
            >
              Explore Our Communities
              <Leaf className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Section */}
      <section className="relative w-full overflow-hidden bg-white py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-10 lg:px-12 xl:px-24">
          
          {/* Left Static Brand Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-2 md:mb-6">
              <Users2 className="h-4 w-4 text-emerald-600" />
              <span className="font-['Poppins',sans-serif] text-xs font-medium uppercase tracking-[0.15em] text-emerald-700 md:text-sm">
                Greenfield Communities
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] text-4xl font-black tracking-tight text-slate-950 sm:text-5xl xl:text-[3.5rem] leading-[1.05]">
              Where <span className="text-emerald-600">Community</span> Thrives
            </h2>

            <p className="font-['Inter',sans-serif] mt-4 max-w-lg text-sm font-medium leading-relaxed text-slate-600 md:mt-6 md:text-base lg:text-lg">
              Every Greenfield community is thoughtfully designed with amenities
              that bring people together — from lush green spaces to wellness
              zones and smart living features.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
              <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                15K+ Families
              </div>
              <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                20+ Projects
              </div>
              <div className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
                1000+ Acres
              </div>
            </div>
          </div>

          {/* Right Infinite Vertical Scroll */}
          <div className="vertical-scroll-mask relative h-[420px] w-full overflow-hidden lg:h-[450px]">
            <div className="vertical-scroll-track">
              {duplicatedItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className={`font-['Poppins',sans-serif] vertical-scroll-item py-2.5 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl ${
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