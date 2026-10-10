import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Send,
  Phone,
  Mail,
  MapPin,
  Leaf,
  CheckCircle2,
  MessageCircle,
  UserCheck,
  Clock,
  Shield,
  Compass,
  Calendar,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    project: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const cardRef = useRef(null);
  const orbRef = useRef(null);

  /* =========================
     PARALLAX
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      if (!orbRef.current) return;
      orbRef.current.style.transform = `translate3d(0, ${
        window.scrollY * 0.06
      }px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     3D CARD TILT
  ========================= */

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 3.5;
    const rotateX = (y / rect.height - 0.5) * -3.5;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-3px)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Greenfield enquiry:", formData);
    setSubmitted(true);
  };

  const inputClass = `
    font-['Inter',sans-serif]
    w-full
    rounded-xl
    border
    border-[#dbe7d9]
    bg-[#f8faf7]
    px-4
    py-3
    text-sm
    font-medium
    text-[#173b21]
    outline-none
    transition-all
    duration-300
    placeholder:font-['Inter',sans-serif]
    placeholder:text-[#9ba89d]
    hover:border-[#bcd2ba]
    focus:border-[#4d8b58]
    focus:bg-white
    focus:ring-4
    focus:ring-[#4d8b58]/10
  `;

  const labelClass = `
    font-['Poppins',sans-serif]
    mb-1.5
    block
    text-[9px]
    font-black
    uppercase
    tracking-[.15em]
    text-[#647465]
  `;

  const headingFont = "font-['Poppins',sans-serif]";
  const bodyFont = "font-['Inter',sans-serif]";

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#f3f7f1] py-16 md:py-24 lg:py-28"
    >
      {/* Background Blobs */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[#c9dfc9]/50 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#dcebd8]/70 blur-[130px]" />

      {/* Parallax Orb */}
      <div
        ref={orbRef}
        className="pointer-events-none absolute right-[12%] top-[8%] hidden h-24 w-24 rounded-full border border-[#4d8b58]/20 bg-[#dcebd8]/50 shadow-[0_0_50px_rgba(77,139,88,.15)] transition-transform md:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-7 lg:px-10 xl:px-12">
        {/* ============================================
            HEADER
        ============================================ */}

        <div className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d5e4d2] bg-white px-3.5 py-1.5 shadow-sm">
              <Leaf size={13} className="text-[#4d8b58]" />
              <span
                className={`${headingFont} text-[9px] font-black uppercase tracking-[.18em] text-[#3e6d47]`}
              >
                Greenfield Housing India
              </span>
            </div>

            <h2
              className={`${headingFont} max-w-3xl text-3xl font-black leading-[1.02] tracking-[-.035em] text-[#173b21] md:text-4xl lg:text-5xl`}
            >
              Let's find a place
              <span className="text-[#4d8b58]"> that feels like home.</span>
            </h2>

            <p
              className={`${bodyFont} mt-5 max-w-2xl text-sm font-medium leading-6 text-[#687568] md:text-base md:leading-7`}
            >
              Tell us what you're looking for — our team will help you explore
              the right Greenfield property across Coimbatore and Erode.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            {[
              { icon: Shield, label: "RERA Registered" },
              { icon: UserCheck, label: "15K+ Families" },
              { icon: Clock, label: "Since 2012" },
              { icon: Leaf, label: "1000+ Acres" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl border border-[#dce8da] bg-white px-3 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4d8b58]/40 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#edf5eb] text-[#4d8b58]">
                    <Icon size={14} />
                  </div>
                  <span
                    className={`${headingFont} text-[9px] font-black uppercase tracking-[.12em] text-[#3e6d47] md:text-[10px]`}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================
            MAIN LAYOUT — Form + Sidebar
        ============================================ */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_.85fr]">
          {/* ==========================================
              FORM
          ========================================== */}

          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden rounded-[28px] border border-[#dce8da] bg-white p-6 shadow-[0_20px_60px_rgba(23,59,33,.08)] transition-transform duration-300 ease-out md:rounded-[32px] md:p-8 lg:p-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#dcebd8] blur-[80px]" />

            <div className="relative z-10">
              {/* Form header */}
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#e8efe6] pb-6">
                <div>
                  <div
                    className={`${headingFont} mb-2 text-[8px] font-black uppercase tracking-[.2em] text-[#4d8b58]`}
                  >
                    Property Enquiry
                  </div>

                  <h3
                    className={`${headingFont} text-xl font-black text-[#173b21] md:text-2xl`}
                  >
                    Tell us what you need.
                  </h3>
                </div>

                <Leaf size={28} className="hidden text-[#d0e2cf] sm:block" />
              </div>

              {submitted ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#e7f2e5] text-[#4d8b58] ring-8 ring-[#e7f2e5]/50">
                    <CheckCircle2 size={34} />
                  </div>

                  <h3
                    className={`${headingFont} text-2xl font-black text-[#173b21]`}
                  >
                    Enquiry Received
                  </h3>

                  <p
                    className={`${bodyFont} mt-3 max-w-sm text-sm leading-relaxed text-[#6d786e]`}
                  >
                    Thank you. Our Greenfield team — including Vetri — will
                    get in touch with you shortly.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="tel:+917395864774"
                      className={`${headingFont} inline-flex items-center gap-2 rounded-full bg-[#173b21] px-6 py-3 text-[10px] font-black uppercase tracking-[.15em] text-white transition hover:bg-[#285b33]`}
                    >
                      <Phone size={13} />
                      Call Vetri Now
                    </a>
                    <a
                      href="https://wa.me/917395864774?text=Hi%20Vetri%2C%20I%20just%20submitted%20a%20Greenfield%20enquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${headingFont} inline-flex items-center gap-2 rounded-full border border-[#dce8da] bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[.15em] text-[#173b21] transition hover:border-[#4d8b58]`}
                    >
                      <MessageCircle size={13} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+91 73958 64774"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className={labelClass}>
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select property</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Residential Plot">
                          Residential Plot
                        </option>
                        <option value="Gated Community">
                          Gated Community
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Project */}
                  <div>
                    <label htmlFor="project" className={labelClass}>
                      Interested Project
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a project</option>

                      <optgroup label="Ongoing">
                        <option value="Lavender">
                          Lavender — Saravanampatti
                        </option>
                        <option value="Emerald City">
                          Emerald City — Saravanampatti
                        </option>
                        <option value="Crystal Gateway">
                          Crystal Gateway — Sulur
                        </option>
                        <option value="Diamond Avenue">
                          Diamond Avenue — Pattanam Pudur
                        </option>
                        <option value="Fairland">
                          Fairland — Ponnigoundapudur
                        </option>
                        <option value="Crown City">
                          Crown City — Kovilpalayam
                        </option>
                        <option value="Silver City">
                          Silver City — Kariyampalayam
                        </option>
                      </optgroup>

                      <optgroup label="Completed">
                        <option value="Maple">Maple — Kalapatti</option>
                        <option value="Nandavanam">
                          Nandavanam — Neelambur
                        </option>
                        <option value="Ruby Lands">
                          Ruby Lands — Neelambur
                        </option>
                        <option value="Tulip Garden">
                          Tulip Garden — Kalapatti
                        </option>
                      </optgroup>

                      <optgroup label="Ready to Occupy">
                        <option value="Bougain Villea">
                          Bougain Villea — Vilankurichi
                        </option>
                        <option value="Coral Residency">
                          Coral Residency — Vellanaipatti
                        </option>
                        <option value="Platina">
                          Platina — Vilankurichi
                        </option>
                      </optgroup>

                      <option value="Not Sure">I'm not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Your Requirement
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us your preferred location, budget, or property requirement..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`
                      ${headingFont}
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#173b21]
                      px-5
                      py-4
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[.15em]
                      text-white
                      shadow-[0_12px_25px_rgba(23,59,33,.18)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#285b33]
                      active:scale-[.98]
                    `}
                  >
                    Send Property Enquiry
                    <Send
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p
                    className={`${bodyFont} text-center text-[9px] font-medium text-[#929b92]`}
                  >
                    Your details are used only for property enquiry and
                    follow-up.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ==========================================
              SIDEBAR
          ========================================== */}

          <div className="grid gap-5">
            {/* ---------------------------
                Vetri — Sales Contact
            --------------------------- */}
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#173b21] to-[#285b33] p-7 shadow-[0_20px_60px_rgba(23,59,33,.15)] md:p-8">
              <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full border-[30px] border-white/5" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#4d8b58]/20 blur-[80px]" />

              <div className="relative z-10">
                <div
                  className={`${headingFont} mb-4 flex items-center gap-2 text-[8px] font-black uppercase tracking-[.2em] text-[#b8d5bc]`}
                >
                  <UserCheck size={13} />
                  Your Sales Contact
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#c9e1cc] ring-1 ring-white/20">
                    <UserCheck size={26} />
                  </div>
                  <div>
                    <h3
                      className={`${headingFont} text-2xl font-black text-white md:text-3xl`}
                    >
                      Vetri
                    </h3>
                    <p
                      className={`${headingFont} mt-0.5 text-[10px] font-bold uppercase tracking-[.15em] text-[#b8d5bc]`}
                    >
                      Sales Manager
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {/* Phone */}
                  <a
                    href="tel:+917395864774"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#c9e1cc]">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div
                        className={`${headingFont} text-[7px] font-bold uppercase tracking-[.15em] text-[#8fa991]`}
                      >
                        Direct Line
                      </div>
                      <div
                        className={`${bodyFont} mt-0.5 text-sm font-bold text-white`}
                      >
                        +91 73958 64774
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917395864774?text=Hi%20Vetri%2C%20I%27m%20interested%20in%20Greenfield%20Housing%20projects."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#c9e1cc]">
                      <MessageCircle size={16} />
                    </div>
                    <div>
                      <div
                        className={`${headingFont} text-[7px] font-bold uppercase tracking-[.15em] text-[#8fa991]`}
                      >
                        WhatsApp
                      </div>
                      <div
                        className={`${bodyFont} mt-0.5 text-sm font-bold text-white`}
                      >
                        Chat with Vetri
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:greenfield.developers.cbe@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#c9e1cc]">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div
                        className={`${headingFont} text-[7px] font-bold uppercase tracking-[.15em] text-[#8fa991]`}
                      >
                        Email
                      </div>
                      <div
                        className={`${bodyFont} mt-0.5 truncate text-xs font-bold text-white`}
                      >
                        greenfield.developers.cbe@gmail.com
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className={`${headingFont} mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-[9px] font-bold uppercase tracking-[.12em] text-[#b8d5bc]`}
                >
                  <Clock size={12} />
                  Mon – Sat · 9 AM – 7 PM
                </div>
              </div>
            </div>

            {/* ---------------------------
                Corporate Office
            --------------------------- */}
            <div className="flex gap-4 rounded-[28px] border border-[#dce8da] bg-white p-6 shadow-sm md:p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58]">
                <MapPin size={20} />
              </div>

              <div>
                <div
                  className={`${headingFont} text-[8px] font-black uppercase tracking-[.2em] text-[#4d8b58]`}
                >
                  Corporate Office
                </div>

                <div
                  className={`${bodyFont} mt-2 text-xs font-medium leading-5 text-[#3e4a40]`}
                >
                  No.14/15, A1, Sitra Road,
                  <br />
                  Kalapatti, Near BOSCH Global Software Technologies,
                  <br />
                  Coimbatore, Tamil Nadu – 641048
                </div>

                <a
                  href="https://maps.google.com/?q=Greenfield+Housing+India+Kalapatti+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${headingFont} mt-3 inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[.15em] text-[#376944] transition hover:text-[#4d8b58]`}
                >
                  View on Map
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            {/* ---------------------------
                Plan Site Visit
            --------------------------- */}
            <div className="flex items-center justify-between gap-4 rounded-[28px] border border-[#dce8da] bg-gradient-to-br from-[#f8faf7] to-white p-6 shadow-sm md:p-7">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4d8b58] text-white shadow-[0_10px_25px_rgba(77,139,88,.25)]">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3
                    className={`${headingFont} text-sm font-black text-[#173b21]`}
                  >
                    Plan a Site Visit
                  </h3>
                  <p
                    className={`${bodyFont} mt-0.5 text-[10px] font-medium text-[#758075]`}
                  >
                    Experience the project yourself.
                  </p>
                </div>
              </div>

              <a
                href="tel:+917395864774"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#173b21] text-white transition hover:bg-[#285b33]"
                aria-label="Call Vetri for site visit"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ============================================
            MAP VIEW — Full width
        ============================================ */}

        <div className="mt-12 md:mt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div
                className={`${headingFont} mb-2 text-[8px] font-black uppercase tracking-[.2em] text-[#4d8b58]`}
              >
                <Compass className="mr-1.5 inline h-3 w-3" />
                Visit Us
              </div>
              <h3
                className={`${headingFont} text-2xl font-black leading-tight text-[#173b21] md:text-3xl`}
              >
                Our Corporate Office
              </h3>
              <p
                className={`${bodyFont} mt-2 max-w-xl text-xs font-medium leading-relaxed text-[#6d786e] md:text-sm`}
              >
                Kalapatti, Coimbatore — near BOSCH Global Software
                Technologies.
              </p>
            </div>

            <a
              href="https://www.google.com/maps?q=10.999396,77.129444"
              target="_blank"
              rel="noopener noreferrer"
              className={`${headingFont} group inline-flex items-center gap-2 rounded-full border border-[#dce8da] bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[.15em] text-[#376944] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4d8b58] hover:shadow-md`}
            >
              <MapPin size={14} />
              Open in Google Maps
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#dce8da] bg-white shadow-[0_20px_60px_rgba(23,59,33,.08)] md:rounded-[32px]">
            {/* Map iframe */}
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/9] md:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.522141599098!2d77.12686537504511!3d10.999396289163213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU5JzU3LjgiTiA3N8KwMDcnNDYuMCJF!5e0!3m2!1sen!2sin!4v1791607564427!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Greenfield Housing India — Corporate Office Location"
              />
            </div>

            {/* Info strip below map */}
            <div className="grid gap-5 border-t border-[#e8efe6] p-6 md:grid-cols-3 md:p-8">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p
                    className={`${headingFont} text-[8px] font-black uppercase tracking-[.2em] text-[#4d8b58]`}
                  >
                    Address
                  </p>
                  <p
                    className={`${bodyFont} mt-1.5 text-xs font-medium leading-relaxed text-[#3e4a40]`}
                  >
                    Sitra Road, Kalapatti
                    <br />
                    Coimbatore – 641048
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58]">
                  <Clock size={18} />
                </div>
                <div>
                  <p
                    className={`${headingFont} text-[8px] font-black uppercase tracking-[.2em] text-[#4d8b58]`}
                  >
                    Office Hours
                  </p>
                  <p
                    className={`${bodyFont} mt-1.5 text-xs font-medium leading-relaxed text-[#3e4a40]`}
                  >
                    Mon – Sat · 9 AM – 7 PM
                    <br />
                    Sunday · Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf5eb] text-[#4d8b58]">
                  <Compass size={18} />
                </div>
                <div>
                  <p
                    className={`${headingFont} text-[8px] font-black uppercase tracking-[.2em] text-[#4d8b58]`}
                  >
                    Landmark
                  </p>
                  <p
                    className={`${bodyFont} mt-1.5 text-xs font-medium leading-relaxed text-[#3e4a40]`}
                  >
                    Near BOSCH Global
                    <br />
                    Software Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================
            BOTTOM BAR
        ============================================ */}

        <div className="mt-8 flex flex-col gap-4 rounded-[22px] border border-[#dce8da] bg-[#e5f0e2] px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Leaf size={16} className="text-[#4d8b58]" />
            <span
              className={`${headingFont} text-[9px] font-bold uppercase tracking-[.15em] text-[#547057]`}
            >
              Homes inspired by nature — since 2012
            </span>
          </div>

          <a
            href="/allprojects"
            className={`${headingFont} inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[.15em] text-[#376944] transition hover:text-[#4d8b58]`}
          >
            Explore Greenfield Projects
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}