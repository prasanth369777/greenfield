
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Leaf,
  MapPin,
  Home,
  Sparkles,
  Trees,
  Building2,
} from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    category: "Featured Project",
    title: "Lavender Residences",
    location: "Coimbatore",
    description:
      "A thoughtfully planned residential community where contemporary architecture meets calm green surroundings. Designed for families who want comfort, privacy and a better everyday lifestyle.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tags: ["Premium Living", "Green Community", "Coimbatore"],
    date: "Featured Residence",
    readTime: "Explore Project",
  },
  {
    category: "Lifestyle",
    title: "Homes That Grow With You",
    location: "Coimbatore",
    description:
      "More than four walls. Discover homes designed around natural light, open spaces, thoughtful planning and the everyday moments that make a family feel at home.",
    image:
      "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Family Living", "Open Spaces", "Modern Design"],
    readTime: "4 min read",
    date: "Lifestyle",
  },
  {
    category: "Sustainability",
    title: "Living Closer to Nature",
    location: "Coimbatore",
    description:
      "Green spaces, natural surroundings and wellness-focused planning come together to create neighbourhoods that feel peaceful without disconnecting you from the city.",
    image:
      "https://images.pexels.com/photos/2072473/pexels-photo-2072473.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Nature", "Wellness", "Sustainable Living"],
    readTime: "5 min read",
    date: "Sustainability",
  },
  {
    category: "Investment",
    title: "Why Location Matters",
    location: "Tamil Nadu",
    description:
      "A good home is also a long-term decision. Explore the factors that make connectivity, neighbourhood development and future growth important when choosing a property.",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Investment", "Location", "Future Growth"],
    readTime: "6 min read",
    date: "Investment Guide",
  },
  {
    category: "Architecture",
    title: "Modern Homes Thoughtfully Designed",
    location: "Coimbatore",
    description:
      "From natural light and ventilation to practical layouts and elegant finishes, discover the details that transform a house into a truly comfortable home.",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Architecture", "Interiors", "Modern Homes"],
    readTime: "5 min read",
    date: "Design",
  },
  {
    category: "Community",
    title: "A Neighbourhood Beyond Homes",
    location: "Coimbatore",
    description:
      "The best communities create opportunities to connect. Green spaces, recreation, wellness and shared experiences make everyday living more meaningful.",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Community", "Amenities", "Wellness"],
    readTime: "4 min read",
    date: "Community",
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: "20+",
    label: "Projects",
    icon: Building2,
  },
  {
    value: "1000+",
    label: "Acres Developed",
    icon: Trees,
  },
  {
    value: "10L+",
    label: "Sq. Ft. Built",
    icon: Home,
  },
  {
    value: "15K+",
    label: "Happy Families",
    icon: Sparkles,
  },
];

/* =========================================================
   REVEAL HOOK
========================================================= */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* =========================================================
   PARALLAX IMAGE
========================================================= */

function ParallaxImage({ src, alt, strength = 25 }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) return;

    const section = image.closest("[data-parallax]");

    if (!section) return;

    let ticking = false;

    const update = () => {
      const rect = section.getBoundingClientRect();

      const viewport = window.innerHeight;

      const progress =
        (viewport - rect.top) / (viewport + rect.height);

      const value = Math.max(0, Math.min(1, progress));

      const movement = (value - 0.5) * strength;

      image.style.transform = `translateY(${movement}px) scale(1.08)`;

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [strength]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      draggable="false"
      className="h-[115%] w-full object-cover transition-transform duration-100"
    />
  );
}

/* =========================================================
   3D CARD
========================================================= */

function TiltCard({ children }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -7;
    const rotateY = ((x / rect.width) - 0.5) * 7;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  };

  const handleLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.transform = `
      perspective(1200px)
      rotateX(0)
      rotateY(0)
      translateY(0)
    `;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="h-full transform-gpu transition-transform duration-500 ease-out"
    >
      {children}
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className="h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(60px)",
        transition: `all 700ms cubic-bezier(.22,1,.36,1) ${
          index * 100
        }ms`,
      }}
    >
      <TiltCard>
        <article className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-[30px] border border-[#dce8da] bg-white shadow-[0_20px_70px_rgba(25,66,34,.08)]">
          <div
            data-parallax
            className="relative h-[280px] overflow-hidden"
          >
            <ParallaxImage
              src={project.image}
              alt={project.title}
              strength={35}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102d19]/95 via-[#102d19]/20 to-transparent" />

            <div className="absolute left-5 top-5">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white backdrop-blur-xl">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs text-white/80">
                  <MapPin size={14} />
                  {project.location}
                </div>

                <h3 className="max-w-[240px] text-2xl font-bold leading-tight text-white">
                  {project.title}
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#173b21] shadow-xl transition duration-300 group-hover:rotate-45">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#718072]">
              <Leaf size={14} className="text-[#4d8b58]" />
              {project.date}
              <span className="h-1 w-1 rounded-full bg-[#b6c8b6]" />
              {project.readTime}
            </div>

            <p className="text-sm leading-7 text-[#667266]">
              {project.description}
            </p>

            <div className="mt-auto pt-6">
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#dce8da] bg-[#f4f8f3] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] text-[#47704f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-[#173b21] transition hover:text-[#4d8b58]"
              >
                Explore Project
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </article>
      </TiltCard>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function BlogSectionClassic() {
  const { ref: headerRef, visible: headerVisible } = useReveal();

  const { ref: statsRef, visible: statsVisible } = useReveal();

  const { ref: featureRef, visible: featureVisible } = useReveal();

  const featured = projects[0];

  const remaining = projects.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#f5f8f3] py-20 md:py-28">
      {/* Background */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#cfe2cf]/50 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-150px] top-[35%] h-[500px] w-[500px] rounded-full bg-[#dcebd8]/70 blur-[130px]" />

      <div className="pointer-events-none absolute right-[8%] top-[6%] hidden h-24 w-24 animate-pulse rounded-full bg-gradient-to-br from-[#8fb996] to-[#1c4c2a] opacity-30 blur lg:block" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER */}

        <div
          ref={headerRef}
          className="mb-16 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible
              ? "translateY(0)"
              : "translateY(35px)",
            transition: "all .8s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4e3d1] bg-white px-4 py-2 shadow-sm">
              <Leaf size={16} className="text-[#4d8b58]" />

              <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#3d6d47]">
                Green Living
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-[#173b21] md:text-6xl lg:text-7xl">
              Homes crafted for
              <span className="block text-[#4d8b58]">
                better living.
              </span>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-sm leading-8 text-[#687568] md:text-base">
              Thoughtfully designed homes, sustainable communities and premium residential spaces inspired by nature and built for modern families.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Nature", "Community", "Wellness", "Smart Living"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d8e5d5] bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-[.14em] text-[#55705a]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* STATS */}

        <div
          ref={statsRef}
          className="mb-16 grid grid-cols-2 overflow-hidden rounded-[28px] border border-[#dce8da] bg-white shadow-sm md:grid-cols-4"
          style={{
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible
              ? "translateY(0)"
              : "translateY(40px)",
            transition: "all .8s ease",
          }}
        >
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`flex items-center gap-4 p-6 ${
                  i !== stats.length - 1
                    ? "border-b border-[#e8efe6] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5eb] text-[#4d8b58]">
                  <Icon size={22} />
                </div>

                <div>
                  <div className="text-2xl font-black text-[#173b21] md:text-3xl">
                    {item.value}
                  </div>

                  <div className="text-[9px] font-bold uppercase tracking-[.15em] text-[#718072]">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FEATURED */}

        <article
          ref={featureRef}
          className="mb-16 overflow-hidden rounded-[36px] bg-[#173b21] shadow-[0_30px_90px_rgba(18,57,28,.18)]"
          style={{
            opacity: featureVisible ? 1 : 0,
            transform: featureVisible
              ? "translateY(0)"
              : "translateY(60px)",
            transition: "all .9s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <div className="grid lg:grid-cols-[1.1fr_.9fr]">
            <div
              data-parallax
              className="relative min-h-[430px] overflow-hidden lg:min-h-[580px]"
            >
              <ParallaxImage
                src={featured.image}
                alt={featured.title}
                strength={45}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#173b21] max-lg:bg-gradient-to-t max-lg:from-[#102d19]" />

              <div className="absolute left-8 top-8">
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white backdrop-blur">
                  <Sparkles size={14} />
                  Signature Project
                </span>
              </div>

              <div className="absolute bottom-10 left-8">
                <div className="mb-3 flex items-center gap-2 text-sm text-white/80">
                  <MapPin size={16} />
                  {featured.location}
                </div>

                <h2 className="max-w-xl text-4xl font-black text-white md:text-5xl">
                  {featured.title}
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <div className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#a9c8ad]">
                  <Leaf size={15} />
                  Nature Inspired Living
                </div>

                <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
                  Designed around the way you want to live.
                </h3>

                <p className="mt-6 leading-8 text-[#c0d1c2]">
                  {featured.description}
                </p>
              </div>

              <div className="mt-10">
                <div className="mb-8 grid grid-cols-2 gap-3">
                  {[
                    "Premium Architecture",
                    "Green Spaces",
                    "Family Friendly",
                    "Connected Location",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-[10px] font-bold uppercase tracking-[.12em] text-[#d9e8da]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="/projects"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[.14em] text-[#173b21] transition hover:-translate-y-1 hover:bg-[#edf5eb]"
                >
                  Explore Projects
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* SECTION TITLE */}

        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#5b805f]">
              Discover More
            </div>

            <h3 className="text-3xl font-black text-[#173b21] md:text-4xl">
              Stories behind better homes.
            </h3>
          </div>

          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-[#376944] hover:text-[#173b21]"
          >
            View All Projects
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {remaining.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}

        <div className="relative mt-20 overflow-hidden rounded-[36px] bg-[#dfeedd] p-8 md:p-14">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[45px] border-white/30" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#4d7655]">
                <Leaf size={16} />
                Your Next Chapter
              </div>

              <h3 className="max-w-3xl text-3xl font-black leading-tight text-[#173b21] md:text-5xl">
                Find a home that feels like it belongs to you.
              </h3>

              <p className="mt-5 max-w-2xl leading-8 text-[#607362]">
                Explore premium residential communities designed with comfort, greenery, wellness and long-lasting value at the heart of everyday living.
              </p>
            </div>

            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#173b21] px-8 py-4 text-xs font-bold uppercase tracking-[.15em] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#24572f]"
            >
              Enquire Now
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}