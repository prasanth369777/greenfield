
import { Star, Quote, Leaf, MapPin, Home } from "lucide-react";



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
    name: "Greenfield Family",
    location: "Kalapatti",
    project: "Lavender",
    content:
      "Greenfield's focus on thoughtful planning, green spaces and modern amenities creates a community that feels comfortable, connected and designed for everyday family life.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Greenfield Resident",
    location: "Coimbatore",
    project: "Residential Community",
    content:
      "What stood out to us was the combination of location, planning and community features. Greenfield has created a residential environment where comfort and quality come together.",
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
    <article className="group relative mx-3 w-[340px] shrink-0 overflow-hidden rounded-[26px] border border-[#dce8da] bg-white p-6 shadow-[0_15px_45px_rgba(23,59,33,.07)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#bcd3ba] hover:shadow-[0_25px_70px_rgba(23,59,33,.12)] md:w-[400px] md:p-7">
      {/* Decorative quote */}
      <Quote
        className="pointer-events-none absolute right-4 top-4 h-16 w-16 rotate-180 text-[#eef5ec] md:h-20 md:w-20"
        strokeWidth={1.5}
      />

      {/* Project badge */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e0e9dd] bg-[#f7faf5] px-3 py-1.5">
        <Home size={12} className="text-[#4d8b58]" />
        <span className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-[.15em] text-[#4d7654]">
          {testimonial.project}
        </span>
      </div>

      {/* Rating */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={15}
            className="fill-[#d7a84a] text-[#d7a84a]"
          />
        ))}
      </div>

      {/* Quote content */}
      <p className="relative z-10 font-['Inter',sans-serif] text-[15px] font-medium leading-7 text-[#3b4a3e]">
        "{testimonial.content}"
      </p>

      {/* Person info */}
      <div className="mt-6 flex items-center gap-3.5 border-t border-[#eef3ec] pt-5">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[#dce8da] ring-offset-2">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-['Poppins',sans-serif] text-sm font-black text-[#173b21]">
            {testimonial.name}
          </div>
          <div className="mt-0.5 flex items-center gap-1.5 font-['Inter',sans-serif] text-[11px] font-medium text-[#738073]">
            <MapPin size={11} />
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
    <div className="marquee-mask relative w-full overflow-hidden py-3">
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
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
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
      className="relative w-full overflow-hidden bg-[#f3f7f1] py-16 md:py-24 lg:py-28"
    >
      {/* ===================================================
          BACKGROUND DECORATION
      ==================================================== */}

      <div className="pointer-events-none absolute -left-40 top-[10%] h-[450px] w-[450px] rounded-full bg-[#c8dfc9]/45 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#dcebd8]/70 blur-[130px]" />
      <div className="pointer-events-none absolute left-[50%] top-[40%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#e2eee0]/60 blur-[100px]" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute right-[12%] top-[12%] h-20 w-20 animate-pulse rounded-full bg-[#3f754b]/15 blur-xl" />
      <div className="pointer-events-none absolute bottom-[18%] left-[8%] h-12 w-12 animate-pulse rounded-full bg-[#7ca681]/20 blur-lg" />

      {/* ===================================================
          MAIN CONTAINER
      ==================================================== */}

      <div className="relative z-10 w-full">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto mb-12 max-w-4xl px-5 text-center sm:px-8 md:mb-16 lg:px-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d3e3d0] bg-white px-4 py-2 shadow-sm">
            <Leaf size={15} className="text-[#4d8b58]" />
            <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-[#3e6d47] md:text-xs">
              Greenfield Homeowners
            </span>
          </div>

          <h2 className="font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#173b21] md:text-5xl lg:text-6xl">
            Stories from people
            <span className="block text-[#4d8b58]">
              who chose Greenfield.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-['Inter',sans-serif] text-sm font-medium leading-7 text-[#667466] md:text-base md:leading-8">
            Hear from homeowners who have experienced Greenfield's approach to
            quality, communication, thoughtful planning and modern community
            living.
          </p>
        </div>

        {/* =================================================
            MARQUEE ROW 1 — Left
        ================================================== */}

        <MarqueeRow items={testimonials} direction="left" speed={55} />

        {/* =================================================
            MARQUEE ROW 2 — Right (offset start)
        ================================================== */}

        <div className="mt-2 md:mt-4">
          <MarqueeRow
            items={[...testimonials].reverse()}
            direction="right"
            speed={60}
          />
        </div>

        {/* =================================================
            BOTTOM TRUST MESSAGE
        ================================================== */}

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center px-5 text-center md:mt-20">
          <div className="mb-4 flex items-center gap-2 text-[#4d8b58]">
            <span className="h-px w-8 bg-[#b7cdb8]" />
            <Leaf size={16} />
            <span className="h-px w-8 bg-[#b7cdb8]" />
          </div>

          <p className="font-['Poppins',sans-serif] text-lg font-black leading-tight tracking-tight text-[#173b21] md:text-2xl">
            Trusted by 15,000+ happy families
          </p>
          <p className="mt-2 font-['Inter',sans-serif] text-xs font-medium text-[#738073] md:text-sm">
            Across Coimbatore & Erode since 2012
          </p>
        </div>
      </div>
    </section>
  );
}