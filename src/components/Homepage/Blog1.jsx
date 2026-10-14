import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Leaf,
  MapPin,

  Trees,
  Building2,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    category: "Featured",
    title: "Crystal Gateway[cite: 8]",
    location: "Sulur, Coimbatore[cite: 8]",
    description:
      "An 805-plot RERA-registered community featuring a 3-acre cricket turf, grand clubhouse, and premium amenities[cite: 8].",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tags: ["805 Plots[cite: 8]", "RERA[cite: 8]"],
    date: "Ready Project[cite: 8]",
    readTime: "Explore",
  },
  {
    category: "Gated Layout",
    title: "Crown City[cite: 10]",
    location: "Kovilpalayam[cite: 10]",
    description:
      "A secure residential layout with 30ft and 40ft blacktop roads, offering loan assistance up to 80%[cite: 10].",
    image:
      "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["DTCP[cite: 10]", "Gated[cite: 10]"],
    readTime: "View Details",
    date: "Ongoing",
  },
  {
    category: "Premium",
    title: "Fairland[cite: 11]",
    location: "Ponnigoundapudur[cite: 11]",
    description:
      "Features an indoor shuttle court, turf court, and a commercial complex connecting to NH 544 & NH 948[cite: 11].",
    image:
      "https://images.pexels.com/photos/2072473/pexels-photo-2072473.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["RERA[cite: 11]", "Turf Court[cite: 11]"],
    readTime: "View Details",
    date: "Ongoing",
  },
  {
    category: "Investment",
    title: "Silver City[cite: 6]",
    location: "Karamadai Road[cite: 6]",
    description:
      "DTCP approved plots ranging from 1.5 to 5 cents, starting at 7.50 lakhs with 24/7 security[cite: 6].",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["From ₹7.5L[cite: 6]", "DTCP[cite: 6]"],
    readTime: "View Details",
    date: "Ongoing",
  },
  {
    category: "Community",
    title: "Opal Garden Phase IV[cite: 3]",
    location: "Annur Taluk[cite: 3]",
    description:
      "RERA registered plots with gated access, CCTV, and a dedicated children's play area[cite: 3, 4].",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["RERA[cite: 3]", "Secure[cite: 4]"],
    readTime: "View Details",
    date: "Completed",
  },
  {
    category: "Upcoming",
    title: "Diamond Avenue[cite: 1]",
    location: "Pattanam[cite: 1]",
    description:
      "Our upcoming residential plot project strategically located in the Pattanam district[cite: 1].",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tags: ["Plots[cite: 1]", "Pattanam[cite: 1]"],
    readTime: "Coming Soon",
    date: "Upcoming",
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: "805",
    label: "Plots[cite: 8]",
    icon: Building2,
  },
  {
    value: "100%",
    label: "Approved[cite: 6, 8, 10, 11]",
    icon: FileCheck,
  },
  {
    value: "3 Ac",
    label: "Cricket Turf[cite: 8]",
    icon: Trees,
  },
  {
    value: "24/7",
    label: "Security[cite: 4, 6, 8, 10, 11]",
    icon: ShieldCheck,
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
      { threshold: 0.15 }
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
      const progress = (viewport - rect.top) / (viewport + rect.height);
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", handleScroll);
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
    const rotateX = (y / rect.height - 0.5) * -7;
    const rotateY = (x / rect.width - 0.5) * 7;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1200px) rotateX(0) rotateY(0) translateY(0)`;
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
        transform: visible ? "translateY(0)" : "translateY(60px)",
        transition: `all 700ms cubic-bezier(.22,1,.36,1) ${index * 100}ms`,
      }}
    >
      <TiltCard>
        <article className="group flex h-full min-h-[480px] flex-col overflow-hidden rounded-[24px] border border-[#dce8da] bg-white shadow-sm md:min-h-[520px] md:rounded-[30px]">
          <div data-parallax className="relative h-[240px] overflow-hidden md:h-[280px]">
            <ParallaxImage src={project.image} alt={project.title} strength={35} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102d19]/95 via-[#102d19]/20 to-transparent" />

            <div className="absolute left-4 top-4 md:left-5 md:top-5">
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-white backdrop-blur-xl md:px-4 md:py-2 md:text-[10px]">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between md:bottom-5 md:left-5 md:right-5">
              <div>
                <div className="mb-1 flex items-center gap-1.5 text-[10px] text-white/80 md:mb-2 md:text-xs">
                  <MapPin size={12} className="md:w-3.5 md:h-3.5" />
                  {project.location}
                </div>
                <h3 className="max-w-[200px] text-xl font-bold leading-tight text-white md:max-w-[240px] md:text-2xl">
                  {project.title}
                </h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#173b21] shadow-xl transition duration-300 group-hover:rotate-45 md:h-12 md:w-12">
                <ArrowUpRight size={18} className="md:w-5 md:h-5" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 md:p-6">
            <div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.15em] text-[#718072] md:mb-4 md:text-[10px]">
              <Leaf size={12} className="text-[#4d8b58] md:w-3.5 md:h-3.5" />
              {project.date}
              <span className="h-1 w-1 rounded-full bg-[#b6c8b6]" />
              {project.readTime}
            </div>

            <p className="text-xs leading-relaxed text-[#667266] md:text-sm md:leading-7">
              {project.description}
            </p>

            <div className="mt-auto pt-4 md:pt-6">
              <div className="mb-4 flex flex-wrap gap-1.5 md:mb-5 md:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#dce8da] bg-[#f4f8f3] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.12em] text-[#47704f] md:px-3 md:py-1.5 md:text-[9px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="/projects"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.15em] text-[#173b21] transition hover:text-[#4d8b58] md:gap-2 md:text-xs"
              >
                Explore Project
                <ArrowUpRight size={14} className="md:w-4 md:h-4" />
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
    <section className="relative overflow-hidden bg-[#f5f8f3] py-16 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[300px] w-[300px] rounded-full bg-[#cfe2cf]/50 blur-[100px] md:h-[450px] md:w-[450px]" />
      <div className="pointer-events-none absolute right-[-100px] top-[35%] h-[350px] w-[350px] rounded-full bg-[#dcebd8]/70 blur-[110px] md:right-[-150px] md:h-[500px] md:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1fr_.8fr] lg:items-end"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(35px)",
            transition: "all .8s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4e3d1] bg-white px-3 py-1.5 shadow-sm md:mb-6 md:px-4 md:py-2">
              <Leaf size={14} className="text-[#4d8b58] md:w-4 md:h-4" />
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#3d6d47] md:text-[10px]">
                Greenfield Projects
              </span>
            </div>

            <h2 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight text-[#173b21] md:text-5xl lg:text-7xl">
              Layouts crafted for
              <span className="block text-[#4d8b58]">better living.</span>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-xs leading-relaxed text-[#687568] md:text-sm md:leading-8">
              Explore our fully approved, meticulously planned residential communities 
              across Coimbatore, complete with essential infrastructure and premium amenities[cite: 6, 8, 10, 11].
            </p>

            <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
              {["DTCP Approved", "RERA Registered", "Gated Communities"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d8e5d5] bg-white px-3 py-1.5 text-[8px] font-bold uppercase tracking-[.14em] text-[#55705a] md:px-4 md:py-2 md:text-[9px]"
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
          className="mb-12 grid grid-cols-2 overflow-hidden rounded-[20px] border border-[#dce8da] bg-white shadow-sm md:mb-16 md:grid-cols-4 md:rounded-[28px]"
          style={{
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all .8s ease",
          }}
        >
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-3 p-4 md:gap-4 md:p-6 ${
                  i !== stats.length - 1 ? "border-[#e8efe6] max-md:border-b max-md:even:border-l md:border-r" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58] md:h-12 md:w-12 md:rounded-2xl">
                  <Icon size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <div className="text-lg font-black text-[#173b21] md:text-2xl lg:text-3xl">
                    {item.value}
                  </div>
                  <div className="text-[8px] font-bold uppercase tracking-[.15em] text-[#718072] md:text-[9px]">
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
          className="mb-12 overflow-hidden rounded-[28px] bg-[#173b21] shadow-lg md:mb-16 md:rounded-[36px]"
          style={{
            opacity: featureVisible ? 1 : 0,
            transform: featureVisible ? "translateY(0)" : "translateY(60px)",
            transition: "all .9s cubic-bezier(.22,1,.36,1)",
          }}
        >
          <div className="grid lg:grid-cols-[1.1fr_.9fr]">
            <div data-parallax className="relative min-h-[320px] overflow-hidden md:min-h-[430px] lg:min-h-[580px]">
              <ParallaxImage src={featured.image} alt={featured.title} strength={45} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102d19] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#173b21]" />

              <div className="absolute left-5 top-5 md:left-8 md:top-8">
                <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-white backdrop-blur md:gap-2 md:px-4 md:py-2 md:text-[10px]">
                  <Building2 size={12} className="md:w-3.5 md:h-3.5" />
                  Signature Project
                </span>
              </div>

              <div className="absolute bottom-6 left-5 md:bottom-10 md:left-8">
                <div className="mb-2 flex items-center gap-1.5 text-xs text-white/80 md:mb-3 md:text-sm">
                  <MapPin size={14} className="md:w-4 md:h-4" />
                  {featured.location}
                </div>
                <h2 className="max-w-xs text-3xl font-black text-white md:max-w-xl md:text-4xl lg:text-5xl">
                  {featured.title}
                </h2>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 md:p-8 lg:p-12">
              <div>
                <div className="mb-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#a9c8ad] md:mb-6 md:text-[10px]">
                  <Leaf size={14} className="md:w-3.5 md:h-3.5" />
                  Premium Community
                </div>

                <h3 className="text-2xl font-black leading-tight text-white md:text-3xl lg:text-4xl">
                  Designed around the way you want to live.
                </h3>

                <p className="mt-4 text-xs leading-relaxed text-[#c0d1c2] md:mt-6 md:text-sm md:leading-8">
                  {featured.description}
                </p>
              </div>

              <div className="mt-8 md:mt-10">
                <div className="mb-6 grid grid-cols-2 gap-2 md:mb-8 md:gap-3">
                  {featured.tags.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-[9px] font-bold uppercase tracking-[.12em] text-[#d9e8da] md:rounded-2xl md:p-4 md:text-[10px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-[#173b21] transition hover:-translate-y-1 hover:bg-[#edf5eb] md:gap-3 md:px-7 md:py-4 md:text-xs"
                >
                  Explore Gateway
                  <ArrowUpRight size={16} className="md:w-[17px] md:h-[17px]" />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* SECTION TITLE */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <div className="mb-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#5b805f] md:mb-3 md:text-[10px]">
              Discover More
            </div>
            <h3 className="text-2xl font-black text-[#173b21] md:text-3xl lg:text-4xl">
              Explore Our Portfolio.
            </h3>
          </div>

          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[.15em] text-[#376944] hover:text-[#173b21] md:gap-2 md:text-xs"
          >
            View All Projects
            <ArrowUpRight size={16} className="md:w-[17px] md:h-[17px]" />
          </a>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-7">
          {remaining.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[28px] bg-[#dfeedd] p-6 md:mt-20 md:rounded-[36px] md:p-14">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-[30px] border-white/30 md:h-72 md:w-72 md:border-[45px]" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center md:gap-8">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#4d7655] md:mb-4 md:text-[10px]">
                <Leaf size={14} className="md:w-4 md:h-4" />
                Your Next Chapter
              </div>

              <h3 className="max-w-3xl text-2xl font-black leading-tight text-[#173b21] md:text-4xl lg:text-5xl">
                Find a plot that feels like it belongs to you.
              </h3>

              <p className="mt-3 max-w-2xl text-xs leading-relaxed text-[#607362] md:mt-5 md:text-sm md:leading-8">
                Explore premium residential communities designed with essential infrastructure, modern amenities, and legal transparency at the heart of everyday living[cite: 6, 8, 10, 11].
              </p>
            </div>

            <a
              href="tel:+917395864774"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173b21] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[.15em] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#24572f] md:gap-3 md:px-8 md:py-4 md:text-xs"
            >
              Call 7395864774
              <ArrowUpRight size={16} className="md:w-[17px] md:h-[17px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}