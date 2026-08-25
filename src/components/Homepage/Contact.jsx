import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Send,
  Phone,
  Mail,
  MapPin,
  Leaf,
  CheckCircle2,
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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

    const rotateY = ((x / rect.width) - 0.5) * 3.5;
    const rotateX = ((y / rect.height) - 0.5) * -3.5;

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

  /* =========================
     INPUT
  ========================= */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* =========================
     SUBMIT
  ========================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Greenfield enquiry:", formData);

    setSubmitted(true);
  };

  const inputClass = `
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
    placeholder:text-[#9ba89d]
    hover:border-[#bcd2ba]
    focus:border-[#4d8b58]
    focus:bg-white
    focus:ring-4
    focus:ring-[#4d8b58]/10
  `;

  const labelClass = `
    mb-1.5
    block
    text-[9px]
    font-black
    uppercase
    tracking-[.15em]
    text-[#647465]
  `;

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f3f7f1]
        py-10
        md:py-14
        lg:py-16
      "
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#c9dfc9]/50
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#dcebd8]/70
          blur-[110px]
        "
      />

      <div
        ref={orbRef}
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[8%]
          h-20
          w-20
          rounded-full
          border
          border-[#4d8b58]/20
          bg-[#dcebd8]/50
          shadow-[0_0_50px_rgba(77,139,88,.15)]
          transition-transform
        "
      />

      {/* =========================
          CONTAINER
      ========================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1350px]
          px-5
          sm:px-7
          lg:px-10
          xl:px-12
        "
      >
        {/* =========================
            HEADER
        ========================= */}

        <div
          className="
            mb-7
            grid
            gap-5
            md:mb-9
            lg:grid-cols-[1fr_.65fr]
            lg:items-end
          "
        >
          <div>
            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#d5e4d2]
                bg-white
                px-3
                py-1.5
              "
            >
              <Leaf
                size={13}
                className="text-[#4d8b58]"
              />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[.18em]
                  text-[#3e6d47]
                "
              >
                Greenfield Housing
              </span>
            </div>

            <h2
              className="
                max-w-3xl
                text-3xl
                font-black
                leading-[1.02]
                tracking-[-.035em]
                text-[#173b21]
                md:text-4xl
                lg:text-5xl
              "
            >
              Let's find a place
              <span className="text-[#4d8b58]">
                {" "}
                that feels like home.
              </span>
            </h2>
          </div>

          <div>
            <p
              className="
                max-w-lg
                text-xs
                font-medium
                leading-6
                text-[#687568]
                md:text-sm
                md:leading-7
              "
            >
              Tell us what you're looking for and
              our team will help you explore the
              right Greenfield property.
            </p>
          </div>
        </div>

        {/* =========================
            SMALL STATS
        ========================= */}

        <div
          className="
            mb-7
            grid
            grid-cols-2
            gap-2
            md:grid-cols-4
            md:gap-3
          "
        >
         

        </div>

        {/* =========================
            MAIN
        ========================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-[1.2fr_.8fr]
          "
        >
          {/* =========================
              FORM
          ========================= */}

          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
              relative
              overflow-hidden
              rounded-[25px]
              border
              border-[#dce8da]
              bg-white
              p-5
              shadow-[0_20px_60px_rgba(23,59,33,.08)]
              transition-transform
              duration-300
              ease-out
              md:rounded-[30px]
              md:p-7
              lg:p-8
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-[#dcebd8]
                blur-[70px]
              "
            />

            <div className="relative z-10">
              {/* Form heading */}

              <div
                className="
                  mb-5
                  flex
                  items-end
                  justify-between
                  gap-4
                  border-b
                  border-[#e8efe6]
                  pb-5
                "
              >
                <div>
                  <div
                    className="
                      mb-1.5
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[.18em]
                      text-[#4d8b58]
                    "
                  >
                    Property Enquiry
                  </div>

                  <h3
                    className="
                      text-xl
                      font-black
                      text-[#173b21]
                      md:text-2xl
                    "
                  >
                    Tell us what you need.
                  </h3>
                </div>

                <Leaf
                  size={25}
                  className="
                    hidden
                    text-[#d0e2cf]
                    sm:block
                  "
                />
              </div>

              {submitted ? (
                <div
                  className="
                    flex
                    min-h-[300px]
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      mb-4
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e7f2e5]
                      text-[#4d8b58]
                    "
                  >
                    <CheckCircle2 size={30} />
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-black
                      text-[#173b21]
                    "
                  >
                    Enquiry Received
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-sm
                      text-xs
                      leading-6
                      text-[#6d786e]
                    "
                  >
                    Thank you. Our Greenfield team
                    will get in touch with you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Row 1 */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-4
                      sm:grid-cols-2
                    "
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className={labelClass}
                      >
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
                      <label
                        htmlFor="phone"
                        className={labelClass}
                      >
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
                        placeholder="+91 70922 11222"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-4
                      sm:grid-cols-2
                    "
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className={labelClass}
                      >
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
                      <label
                        htmlFor="propertyType"
                        className={labelClass}
                      >
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
                        <option value="">
                          Select property
                        </option>

                        <option value="Apartment">
                          Apartment
                        </option>

                        <option value="Villa">
                          Villa
                        </option>

                        <option value="Plot">
                          Plot
                        </option>

                        <option value="Community">
                          Gated Community
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Project */}

                  <div>
                    <label
                      htmlFor="project"
                      className={labelClass}
                    >
                      Interested Project
                    </label>

                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">
                        Select a project
                      </option>

                      <option value="Lavender">
                        Lavender
                      </option>

                      <option value="Maple">
                        Maple
                      </option>

                      <option value="Pearl Park Avenue">
                        Pearl Park Avenue
                      </option>

                      <option value="Crystal Gateway">
                        Crystal Gateway
                      </option>

                      <option value="Guhan Garden">
                        Guhan Garden
                      </option>

                      <option value="Platina">
                        Platina
                      </option>

                      <option value="Not Sure">
                        I'm not sure yet
                      </option>
                    </select>
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className={labelClass}
                    >
                      Your Requirement
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us your preferred location, budget or property requirement..."
                    />
                  </div>

                  {/* Button */}

                  <button
                    type="submit"
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#173b21]
                      px-5
                      py-3.5
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
                    "
                  >
                    Send Property Enquiry

                    <Send
                      size={15}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </button>

                  <p
                    className="
                      text-center
                      text-[8px]
                      font-medium
                      text-[#929b92]
                    "
                  >
                    Your details are used only for
                    property enquiry and follow-up.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* =========================
              SIDEBAR
          ========================= */}

          <div className="grid gap-5">
            {/* Contact */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[25px]
                bg-[#173b21]
                p-6
                shadow-[0_20px_60px_rgba(23,59,33,.15)]
                md:p-7
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-14
                  -top-14
                  h-40
                  w-40
                  rounded-full
                  border-[25px]
                  border-white/5
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[.18em]
                    text-[#b8d5bc]
                  "
                >
                  <Leaf size={13} />

                  Direct Contact
                </div>

                <h3
                  className="
                    text-2xl
                    font-black
                    text-white
                    md:text-3xl
                  "
                >
                  Talk to our team.
                </h3>

                <div className="mt-5 space-y-4">
                  {/* Phone */}

                  <a
                    href="tel:+917092211222"
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      p-3
                      transition
                      hover:bg-white/10
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-white/10
                        text-[#c9e1cc]
                      "
                    >
                      <Phone size={15} />
                    </div>

                    <div>
                      <div
                        className="
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[.15em]
                          text-[#8fa991]
                        "
                      >
                        Phone
                      </div>

                      <div
                        className="
                          mt-0.5
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        +91 70922 11222
                      </div>
                    </div>
                  </a>

                  {/* Email */}

                  <a
                    href="mailto:info@gfhil.com"
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      p-3
                      transition
                      hover:bg-white/10
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-white/10
                        text-[#c9e1cc]
                      "
                    >
                      <Mail size={15} />
                    </div>

                    <div>
                      <div
                        className="
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[.15em]
                          text-[#8fa991]
                        "
                      >
                        Email
                      </div>

                      <div
                        className="
                          mt-0.5
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        info@gfhil.com
                      </div>
                    </div>
                  </a>

                  {/* Location */}

                  <div
                    className="
                      flex
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      p-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-white/10
                        text-[#c9e1cc]
                      "
                    >
                      <MapPin size={15} />
                    </div>

                    <div>
                      <div
                        className="
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[.15em]
                          text-[#8fa991]
                        "
                      >
                        Corporate Office
                      </div>

                      <div
                        className="
                          mt-0.5
                          text-xs
                          font-medium
                          leading-5
                          text-white
                        "
                      >
                        No.14/15, A1, Sitra Road,
                        <br />
                        Kalapatti, Coimbatore
                        <br />
                        Tamil Nadu – 641048
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                VISIT CARD
            ========================= */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                rounded-[25px]
                border
                border-[#dce8da]
                bg-white
                p-5
                shadow-sm
                md:p-6
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#edf5eb]
                    text-[#4d8b58]
                  "
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <h3
                    className="
                      text-sm
                      font-black
                      text-[#173b21]
                    "
                  >
                    Plan a Site Visit
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      font-medium
                      text-[#758075]
                    "
                  >
                    Experience the project yourself.
                  </p>
                </div>
              </div>

              <a
                href="/contact-us"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#173b21]
                  text-white
                  transition
                  hover:bg-[#285b33]
                "
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================= */}

        <div
          className="
            mt-5
            flex
            flex-col
            gap-3
            rounded-[22px]
            border
            border-[#dce8da]
            bg-[#e5f0e2]
            px-5
            py-4
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div className="flex items-center gap-2">
            <Leaf
              size={15}
              className="text-[#4d8b58]"
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[.14em]
                text-[#547057]
              "
            >
              Homes inspired by nature
            </span>
          </div>

          <a
            href="/allprojects"
            className="
              inline-flex
              items-center
              gap-2
              text-[9px]
              font-black
              uppercase
              tracking-[.14em]
              text-[#376944]
            "
          >
            Explore Greenfield Projects

            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}