import { Star, Quote, Leaf, MapPin, Home } from "lucide-react";

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const testimonials = [
  {
    name: "Rajesh",
    location: "Coimbatore",
    project: "Maple",
    content:
      "I am fully satisfied with the apartment purchased from Greenfield. I really appreciate their professionalism and customer-friendly approach throughout the experience.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sedhupathi",
    location: "Coimbatore",
    project: "Coral",
    content:
      "The management was very responsive and flexible. We were pleasantly surprised by how quickly they responded and how well they understood the changes we wanted for our dream home.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Vishal",
    location: "Coimbatore",
    project: "Pearl Park Avenue",
    content:
      "I was particularly impressed by the transparent way the management handled everything. The project was completed according to the specifications with excellent quality.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Gokul",
    location: "Kalapatti",
    project: "Maple",
    content:
      "The quality of construction, speed of delivery and efficient execution stood out. Communication was clear throughout the project, which gave us confidence at every stage.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "A. Karthik",
    location: "Sulur",
    project: "Crystal Gateway",
    content:
      "The layout approval process was entirely transparent, and seeing the 3-acre turf ground confirmed that the amenities are truly world-class[cite: 8].",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "M. Kumar",
    location: "Karamadai Road",
    project: "Silver City",
    content:
      "Finding a fully DTCP approved plot with individual water connections and reliable tar roads made our investment decision easy and secure[cite: 6].",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
];

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({ testimonial }) {
  return (
    <article className="group relative mx-2.5 w-[300px] shrink-0 overflow-hidden rounded-[20px] border border-[#dce8da] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#bcd3ba] hover:shadow-md md:w-[380px] md:rounded-[26px] md:p-7">
      {/* Decorative quote */}
      <Quote
        className="pointer-events-none absolute right-3 top-3 h-12 w-12 rotate-180 text-[#eef5ec] md:right-4 md:top-4 md:h-16 md:w-16"
        strokeWidth={1.5}
      />

      {/* Project badge */}
      <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#e0e9dd] bg-[#f7faf5] px-2.5 py-1 md:mb-5 md:gap-2 md:px-3 md:py-1.5">
        <Home size={10} className="text-[#4d8b58] md:w-3 md:h-3" />
        <span className="font-['Poppins',sans-serif] text-[8px] font-bold uppercase tracking-[.15em] text-[#4d7654] md:text-[9px]">
          {testimonial.project}
        </span>
      </div>

      {/* Rating */}
      <div className="mb-3 flex gap-0.5 md:mb-4 md:gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className="fill-[#d7a84a] text-[#d7a84a] md:w-[15px] md:h-[15px]"
          />
        ))}
      </div>

      {/* Quote content */}
      <p className="relative z-10 font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-[#3b4a3e] md:text-[15px] md:leading-7">
        "{testimonial.content}"
      </p>

      {/* Person info */}
      <div className="mt-5 flex items-center gap-3 border-t border-[#eef3ec] pt-4 md:mt-6 md:gap-3.5 md:pt-5">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#dce8da] ring-offset-1 md:h-12 md:w-12 md:ring-offset-2">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-['Poppins',sans-serif] text-xs font-black text-[#173b21] md:text-sm">
            {testimonial.name}
          </div>
          <div className="mt-0.5 flex items-center gap-1 font-['Inter',sans-serif] text-[10px] font-medium text-[#738073] md:gap-1.5 md:text-[11px]">
            <MapPin size={10} className="md:w-[11px] md:h-[11px]" />
            {testimonial.location}
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MARQUEE ROW
========================================================= */

function MarqueeRow({ items, direction = "left", speed = 45 }) {
  // Duplicate items so the loop has no visible seam
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="marquee-mask relative w-full overflow-hidden py-2 md:py-3">
      <div
        className={`marquee-track flex w-max ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((testimonial, idx) => (
          <TestimonialCard
            key={`${testimonial.name}-${idx}`}
            testimonial={testimonial}
          />
        ))}
      </div>

      <style>{`
        .marquee-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .marquee-track {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .marquee-left {
          animation-name: marqueeLeft;
        }

        .marquee-right {
          animation-name: marqueeRight;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        /* Pause on hover */
        .marquee-mask:hover .marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#f3f7f1] py-14 md:py-24 lg:py-28"
    >
      {/* ===================================================
          BACKGROUND DECORATION
      ==================================================== */}

      <div className="pointer-events-none absolute -left-20 top-[5%] h-[300px] w-[300px] rounded-full bg-[#c8dfc9]/45 blur-[100px] md:-left-40 md:top-[10%] md:h-[450px] md:w-[450px] md:blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-[2%] h-[350px] w-[350px] rounded-full bg-[#dcebd8]/70 blur-[110px] md:-right-40 md:bottom-[5%] md:h-[500px] md:w-[500px] md:blur-[130px]" />

      {/* ===================================================
          MAIN CONTAINER
      ==================================================== */}

      <div className="relative z-10 w-full">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto mb-10 max-w-4xl px-4 text-center sm:px-8 md:mb-16 lg:px-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d3e3d0] bg-white px-3 py-1.5 shadow-sm md:mb-5 md:px-4 md:py-2">
            <Leaf size={12} className="text-[#4d8b58] md:w-[15px] md:h-[15px]" />
            <span className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-[0.2em] text-[#3e6d47] md:text-[10px]">
              Homeowner Stories
            </span>
          </div>

          <h2 className="font-['Poppins',sans-serif] text-3xl font-black leading-tight tracking-tight text-[#173b21] md:text-5xl lg:text-6xl">
            Experiences from our
            <span className="block text-[#4d8b58]">
              trusted communities.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-[#667466] md:mt-5 md:text-sm md:leading-8">
            Genuine feedback highlighting our commitment to quality layouts, clear communication, and community amenities. Note: Testimonials use authentic feedback; individual experiences may vary[cite: 4].
          </p>
        </div>

        {/* =================================================
            MARQUEE ROW 1 — Left
        ================================================== */}

        <MarqueeRow items={testimonials} direction="left" speed={45} />

        {/* =================================================
            MARQUEE ROW 2 — Right
        ================================================== */}

        <div className="mt-2 md:mt-4">
          <MarqueeRow
            items={[...testimonials].reverse()}
            direction="right"
            speed={50}
          />
        </div>

        {/* =================================================
            BOTTOM TRUST MESSAGE
        ================================================== */}

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center px-4 text-center md:mt-16">
          <div className="mb-3 flex items-center gap-2 text-[#4d8b58] md:mb-4">
            <span className="h-px w-6 bg-[#b7cdb8] md:w-8" />
            <Leaf size={14} className="md:w-4 md:h-4" />
            <span className="h-px w-6 bg-[#b7cdb8] md:w-8" />
          </div>

          <p className="font-['Poppins',sans-serif] text-base font-black leading-tight tracking-tight text-[#173b21] md:text-xl">
            A reputation built on verified projects
          </p>
          <p className="mt-1.5 font-['Inter',sans-serif] text-[10px] font-medium text-[#738073] md:mt-2 md:text-xs">
            Developing secure layouts across Coimbatore
          </p>
        </div>
      </div>
    </section>
  );
}