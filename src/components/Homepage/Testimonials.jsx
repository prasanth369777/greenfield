import { useEffect, useRef, useState } from "react";
import {
  Star,
  Quote,
  ArrowUpRight,
  Leaf,
  MapPin,
  Home,
  CheckCircle2,
} from "lucide-react";

/* =========================================================
   GREENFIELD TESTIMONIALS
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
    name: "Greenfield Homeowner",
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
   MAIN COMPONENT
========================================================= */

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  const cardRef = useRef(null);
  const imageRef = useRef(null);

  /* =======================================================
     AUTO ROTATION
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % testimonials.length;
      });
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  /* =======================================================
     3D MOUSE PARALLAX
  ======================================================= */

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -6;

    card.style.transform = `
      perspective(1400px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
    `;

    if (image) {
      const imageX = ((x / rect.width) - 0.5) * 18;
      const imageY = ((y / rect.height) - 0.5) * 18;

      image.style.transform = `
        translate3d(${imageX}px, ${imageY}px, 0)
        scale(1.08)
      `;
    }
  };

  /* =======================================================
     RESET 3D
  ======================================================= */

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (card) {
      card.style.transform = `
        perspective(1400px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
      `;
    }

    if (image) {
      image.style.transform = `
        translate3d(0,0,0)
        scale(1.05)
      `;
    }
  };

  /* =======================================================
     SELECT TESTIMONIAL
  ======================================================= */

  const changeTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f3f7f1]
        py-16
        md:py-24
        lg:py-28
      "
    >
      {/* ===================================================
          BACKGROUND
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#c8dfc9]/45
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#dcebd8]/70
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[50%]
          top-[40%]
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-[#e2eee0]/60
          blur-[100px]
        "
      />

      {/* ===================================================
          FLOATING ORBS
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[12%]
          h-20
          w-20
          animate-pulse
          rounded-full
          bg-[#3f754b]/15
          blur-xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-[8%]
          h-12
          w-12
          animate-pulse
          rounded-full
          bg-[#7ca681]/20
          blur-lg
        "
      />

      {/* ===================================================
          MAIN CONTAINER
      ==================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#d3e3d0]
              bg-white
              px-4
              py-2
              shadow-sm
            "
          >
            <Leaf
              size={15}
              className="text-[#4d8b58]"
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#3e6d47]
                md:text-xs
              "
            >
              Greenfield Homeowners
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-[#173b21]
              md:text-5xl
              lg:text-6xl
            "
          >
            Stories from people
            <span className="block text-[#4d8b58]">
              who chose Greenfield.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-[#667466]
              md:text-base
              md:leading-8
            "
          >
            Hear from homeowners who have experienced
            Greenfield's approach to quality, communication,
            thoughtful planning and modern community living.
          </p>
        </div>

        {/* =================================================
            TRUST STRIP
        ================================================== */}

        <div
          className="
            mx-auto
            mb-10
            flex
            max-w-[1100px]
            flex-wrap
            items-center
            justify-center
            gap-3
            md:mb-14
            md:gap-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#d8e5d5]
              bg-white
              px-4
              py-2.5
              shadow-sm
            "
          >
            <CheckCircle2
              size={15}
              className="text-[#4d8b58]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[.12em] text-[#506654]">
              Quality Focus
            </span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#d8e5d5]
              bg-white
              px-4
              py-2.5
              shadow-sm
            "
          >
            <Leaf
              size={15}
              className="text-[#4d8b58]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[.12em] text-[#506654]">
              Green Communities
            </span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#d8e5d5]
              bg-white
              px-4
              py-2.5
              shadow-sm
            "
          >
            <Home
              size={15}
              className="text-[#4d8b58]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[.12em] text-[#506654]">
              Thoughtful Living
            </span>
          </div>
        </div>

        {/* =================================================
            3D TESTIMONIAL STAGE
        ================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-[1280px]
            gap-7
            lg:grid-cols-[180px_1fr]
            lg:items-center
            xl:grid-cols-[200px_1fr]
            xl:gap-12
          "
        >
          {/* =================================================
              IMAGE SELECTOR
          ================================================== */}

          <div
            className="
              order-2
              flex
              w-full
              gap-3
              overflow-x-auto
              rounded-[26px]
              border
              border-[#dce8da]
              bg-white
              p-3
              shadow-[0_15px_50px_rgba(23,59,33,.07)]
              lg:order-1
              lg:flex-col
              lg:overflow-visible
              lg:p-4
            "
          >
            {testimonials.slice(0, 4).map(
              (testimonial, index) => {
                const isActive =
                  activeIndex === index;

                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() =>
                      changeTestimonial(index)
                    }
                    className={`
                      group
                      relative
                      h-20
                      min-w-[85px]
                      overflow-hidden
                      rounded-2xl
                      transition-all
                      duration-500
                      lg:h-28
                      lg:w-full
                      lg:min-w-0
                      ${
                        isActive
                          ? "scale-[1.03] shadow-lg ring-2 ring-[#4d8b58] ring-offset-2 ring-offset-white"
                          : "opacity-60 grayscale hover:scale-[1.02] hover:opacity-100 hover:grayscale-0"
                      }
                    `}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div
                      className={`
                        absolute
                        inset-0
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-[#173b21]/10"
                            : "bg-[#173b21]/20"
                        }
                      `}
                    />

                    {isActive && (
                      <div
                        className="
                          absolute
                          bottom-2
                          left-2
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-white
                          shadow
                        "
                      />
                    )}
                  </button>
                );
              }
            )}
          </div>

          {/* =================================================
              FEATURED CARD
          ================================================== */}

          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
              order-1
              relative
              min-h-[520px]
              overflow-hidden
              rounded-[32px]
              border
              border-[#d8e5d5]
              bg-white
              shadow-[0_35px_100px_rgba(23,59,33,.12)]
              transition-transform
              duration-500
              ease-out
              lg:order-2
              lg:min-h-[570px]
              lg:rounded-[42px]
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* =================================================
                CARD GLOW
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#dcebd8]
                blur-[80px]
              "
            />

            {/* =================================================
                DECORATIVE QUOTE
            ================================================== */}

            <Quote
              className="
                pointer-events-none
                absolute
                right-4
                top-0
                h-40
                w-40
                rotate-180
                text-[#edf4eb]
                md:right-8
                md:h-64
                md:w-64
              "
            />

            {/* =================================================
                CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10
                grid
                h-full
                lg:grid-cols-[.7fr_1fr]
              "
            >
              {/* =================================================
                  PERSON IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  min-h-[280px]
                  overflow-hidden
                  bg-[#173b21]
                  lg:min-h-full
                "
              >
                <img
                  ref={imageRef}
                  src={active.image}
                  alt={active.name}
                  className="
                    absolute
                    -inset-[5%]
                    h-[110%]
                    w-[110%]
                    object-cover
                    transition-transform
                    duration-300
                    ease-out
                  "
                  style={{
                    transform:
                      "translate3d(0,0,0) scale(1.05)",
                  }}
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#102d19]
                    via-[#173b21]/20
                    to-transparent
                  "
                />

                {/* Project badge */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-2
                    backdrop-blur-xl
                  "
                >
                  <Home
                    size={13}
                    className="text-[#cce0ce]"
                  />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.16em]
                      text-white
                    "
                  >
                    {active.project}
                  </span>
                </div>

                {/* Location */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-white/80
                  "
                >
                  <MapPin size={14} />

                  {active.location}
                </div>
              </div>

              {/* =================================================
                  REVIEW
              ================================================== */}

              <div
                className="
                  flex
                  flex-col
                  justify-between
                  p-7
                  md:p-10
                  lg:p-12
                  xl:p-16
                "
              >
                <div>
                  {/* Stars */}

                  <div
                    className="
                      mb-7
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div className="flex gap-1">
                      {Array.from({
                        length: active.rating,
                      }).map((_, index) => (
                        <Star
                          key={index}
                          size={18}
                          className="
                            fill-[#d7a84a]
                            text-[#d7a84a]
                          "
                        />
                      ))}
                    </div>

                    <div
                      className="
                        rounded-full
                        bg-[#edf5eb]
                        px-3
                        py-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[.15em]
                        text-[#4d7654]
                      "
                    >
                      Verified Story
                    </div>
                  </div>

                  {/* Quote */}

                  <p
                    className="
                      max-w-3xl
                      text-2xl
                      font-black
                      leading-[1.3]
                      tracking-[-0.025em]
                      text-[#173b21]
                      md:text-3xl
                      lg:text-4xl
                    "
                  >
                    "{active.content}"
                  </p>

                  {/* Supporting copy */}

                  <p
                    className="
                      mt-6
                      max-w-2xl
                      text-sm
                      font-medium
                      leading-7
                      text-[#6b776d]
                    "
                  >
                    Real experiences from Greenfield
                    homeowners who value thoughtful
                    planning, quality, communication
                    and community living.
                  </p>
                </div>

                {/* =================================================
                    PERSON INFO
                ================================================== */}

                <div
                  className="
                    mt-10
                    border-t
                    border-[#e6eee4]
                    pt-6
                    md:mt-12
                    md:pt-8
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      justify-between
                      gap-5
                      sm:flex-row
                      sm:items-end
                    "
                  >
                    <div>
                      <div
                        className="
                          text-lg
                          font-black
                          text-[#173b21]
                        "
                      >
                        {active.name}
                      </div>

                      <div
                        className="
                          mt-1
                          text-xs
                          font-medium
                          text-[#738073]
                        "
                      >
                        {active.project} ·{" "}
                        {active.location}
                      </div>
                    </div>

                    <a
                      href="/allprojects"
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[.16em]
                        text-[#376944]
                      "
                    >
                      Explore Projects

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                        "
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            TESTIMONIAL SELECTORS
        ================================================== */}

        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-[1200px]
            flex-wrap
            justify-center
            gap-2
            md:mt-12
            md:gap-3
          "
        >
          {testimonials.map(
            (testimonial, index) => {
              const activeButton =
                activeIndex === index;

              return (
                <button
                  key={`${testimonial.name}-${testimonial.project}`}
                  type="button"
                  onClick={() =>
                    changeTestimonial(index)
                  }
                  className={`
                    rounded-full
                    px-4
                    py-2.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[.13em]
                    transition-all
                    duration-300
                    md:px-5
                    md:text-[10px]
                    ${
                      activeButton
                        ? "bg-[#173b21] text-white shadow-lg"
                        : "border border-[#dce8da] bg-white text-[#687568] hover:-translate-y-0.5 hover:border-[#bcd3ba] hover:text-[#376944]"
                    }
                  `}
                >
                  {testimonial.name}
                </button>
              );
            }
          )}
        </div>

        {/* =================================================
            BOTTOM TRUST MESSAGE
        ================================================== */}

        <div
          className="
            mx-auto
            mt-12
            flex
            max-w-3xl
            flex-col
            items-center
            justify-center
            text-center
            md:mt-16
          "
        >
          <div
            className="
              mb-4
              flex
              items-center
              gap-2
              text-[#4d8b58]
            "
          >
            <span className="h-px w-8 bg-[#b7cdb8]" />

            <Leaf size={16} />

            <span className="h-px w-8 bg-[#b7cdb8]" />
          </div>

    
        </div>
      </div>
    </section>
  );
}