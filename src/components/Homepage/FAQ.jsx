import { useState } from "react";
import {
  Plus,
  Minus,
  ArrowRight,
  ChevronRight,
  Leaf,
  Home,
  Building2,
  MapPin,
  ShieldCheck,
  Trees,
} from "lucide-react";

/* =========================================================
   GREENFIELD HOUSING FAQ DATA
========================================================= */

const faqCategories = [
  {
    title: "About Greenfield",
    icon: Home,
    faqs: [
      {
        question: "Who is Greenfield Housing India?",
        answer:
          "Greenfield Housing India Pvt. Ltd. is a trusted real estate developer based in Coimbatore, Tamil Nadu. Since 2012, we have delivered premium apartments, luxury villas, and RERA-registered residential plots across Coimbatore and Erode — guided by our philosophy, 'We Build Homes, Not Houses.'",
      },
      {
        question: "How many projects has Greenfield Housing completed?",
        answer:
          "Greenfield Housing has delivered 20+ projects across Coimbatore and Erode, developed over 1000 acres of land, built more than 10 lakh square feet of constructed area, and served over 15,000 happy families.",
      },
      {
        question: "Where does Greenfield Housing operate?",
        answer:
          "We operate primarily across Coimbatore and Erode in Tamil Nadu. Our projects are located in prime areas like Saravanampatti, Kalapatti, Sulur, Kovilpalayam, Kariyampalayam, Vilankurichi, Neelambur, and Ponnigoundapudur.",
      },
      {
        question: "Is Greenfield Housing a RERA-registered developer?",
        answer:
          "Yes. All our current projects are fully RERA registered. For example, Crystal Gateway is registered under TN/11/Layout/0360/2025 and Fairland under TN/11/Layout/1405/2023. Our plotted developments are also DTCP approved.",
      },
      {
        question: "Has Greenfield Housing received any awards?",
        answer:
          "Yes. In 2020, Greenfield Housing became the first developer in Coimbatore to receive the CREDAI award for environment-friendly quality projects. We also donated ₹1 crore to the Chief Minister's Relief Fund during the COVID-19 pandemic in 2022.",
      },
    ],
  },

  {
    title: "Projects",
    icon: Building2,
    faqs: [
      {
        question: "What types of properties does Greenfield offer?",
        answer:
          "We offer a diverse range of residential options — premium 2, 3 & 4 BHK apartments, luxury villas, gated community homes, and RERA/DTCP-approved residential plots. Each project is thoughtfully designed with modern amenities, green spaces, and smart living features.",
      },
      {
        question: "What are Greenfield Housing's current projects?",
        answer:
          "Our ongoing projects include Lavender (Saravanampatti), Emerald City (Saravanampatti), Crystal Gateway (Sulur), Diamond Avenue (Pattanam Pudur), Fairland (Ponnigoundapudur), Crown City (Kovilpalayam), and Silver City (Kariyampalayam). We also have completed and ready-to-occupy projects like Maple, Nandavanam, Ruby Lands, Tulip Garden, Bougain Villea, Coral Residency, and Platina.",
      },
      {
        question: "What is Greenfield Lavender?",
        answer:
          "Lavender is our prestigious landmark project located in Saravanampatti, Coimbatore. It offers premium 2, 3 & 4 BHK apartments with signature amenities including a Sky Garden, Aqua Lounge, Wellness Arena, and smart living features.",
      },
      {
        question: "What is Crystal Gateway?",
        answer:
          "Crystal Gateway is a RERA-registered (TN/11/Layout/0360/2025) plotted development at Kalangal Road, Sulur, Coimbatore. It features 805 plots in sizes of 1,200–2,400 sq.ft. with a grand clubhouse, 3-acre turf cricket ground, mini theatre, and premium amenities.",
      },
      {
        question: "How can I find the right Greenfield project?",
        answer:
          "You can explore our project portfolio by status — ongoing, completed, or ready-to-occupy — and filter by location or property type. Our team is also happy to help you match a project to your budget, family size, and lifestyle.",
      },
    ],
  },

  {
    title: "Community",
    icon: Trees,
    faqs: [
      {
        question: "What makes Greenfield communities different?",
        answer:
          "Greenfield focuses on creating complete living environments, not just individual properties. Every community is planned around lush green spaces, wellness zones, recreational amenities, and opportunities for residents to connect — creating neighborhoods where families truly thrive.",
      },
      {
        question: "Do Greenfield projects include green spaces?",
        answer:
          "Yes. Green spaces are at the heart of every Greenfield community. Our projects typically include landscaped gardens, tree-lined avenues, parks, and open areas — designed to bring nature to your doorstep.",
      },
      {
        question: "Are Greenfield communities suitable for families?",
        answer:
          "Absolutely. Our projects are designed with families in mind, with children's play areas, community gathering spaces, wellness zones, sports facilities, and safe, gated environments that let families grow together.",
      },
      {
        question: "Does Greenfield focus on sustainable living?",
        answer:
          "Yes. Sustainability is one of our core values. We incorporate green spaces, rainwater harvesting, energy-efficient design, and nature-inspired planning into our communities — helping build a more balanced future for the next generation.",
      },
      {
        question: "What kinds of amenities do Greenfield communities offer?",
        answer:
          "Amenities vary by project but typically include a grand clubhouse, swimming pool, gymnasium, children's play area, landscaped gardens, walking tracks, community hall, sports courts, and 24/7 security with CCTV surveillance.",
      },
    ],
  },

  {
    title: "Locations",
    icon: MapPin,
    faqs: [
      {
        question: "Why does Greenfield choose locations around Coimbatore?",
        answer:
          "Coimbatore is one of Tamil Nadu's fastest-growing real estate markets, driven by its strong IT sector, educational institutions, healthcare infrastructure, and industrial base. We select locations with excellent connectivity, appreciation potential, and access to everyday essentials.",
      },
      {
        question: "Where is Lavender located?",
        answer:
          "Lavender is located in Saravanampatti, Coimbatore — one of the city's most sought-after neighborhoods with close proximity to KGISL IT Park, top schools, hospitals, and shopping centers.",
      },
      {
        question: "Where is Crystal Gateway located?",
        answer:
          "Crystal Gateway is located at Kalangal Road, Sulur, Coimbatore. It is approximately 2 km from L&T Bypass, 3 km from KMCH Hospital, 4 km from RVS Institutions, and 10 km from Coimbatore Airport.",
      },
      {
        question: "Are Greenfield projects well connected?",
        answer:
          "Yes. Our projects are strategically located with easy access to major roads (including NH 544, NH 948, and Sathy Road), IT parks, schools, hospitals, shopping centers, and public transport — ensuring convenience for every family member.",
      },
      {
        question: "Can I visit a Greenfield project?",
        answer:
          "Yes. We warmly welcome you for a guided site visit. Call or WhatsApp Vetri at +91 73958 64774 to schedule a visit at any of our projects across Coimbatore and Erode.",
      },
    ],
  },

  {
    title: "Buying & Booking",
    icon: ShieldCheck,
    faqs: [
      {
        question: "How can I enquire about a Greenfield property?",
        answer:
          "You can reach out to us via phone at +91 73958 64774, email at greenfield.developers.cbe@gmail.com, or WhatsApp. Our sales team — including Vetri — will respond within 2 business hours.",
      },
      {
        question: "Can I schedule a site visit?",
        answer:
          "Yes. Call or WhatsApp Vetri at +91 73958 64774 to arrange a guided site visit at any of our projects. We'll help you experience the location, amenities, and community firsthand.",
      },
      {
        question: "Can I check the floor plan before booking?",
        answer:
          "Yes. For apartment and villa projects, we share floor plans and layout details during your site visit or enquiry. For plotted developments, we provide the approved layout master plan.",
      },
      {
        question: "Do you assist with home loans?",
        answer:
          "Yes. We provide end-to-end loan assistance guidance through our partner banks. Up to 80% financing may be available on eligible projects, subject to bank approval.",
      },
      {
        question: "What documents are needed for booking?",
        answer:
          "You'll typically need ID proof, address proof, PAN card, and a booking cheque. Our team will walk you through the complete documentation and registration process step by step.",
      },
      {
        question: "How can I know the latest property price?",
        answer:
          "Pricing depends on the project, location, configuration, size, and availability. Please contact us directly at +91 73958 64774 for the latest pricing and inventory details.",
      },
    ],
  },

  {
    title: "Lavender",
    icon: Leaf,
    faqs: [
      {
        question: "What homes are available at Lavender?",
        answer:
          "Greenfield Lavender offers premium 2, 3 & 4 BHK apartments within a thoughtfully planned residential community in Saravanampatti, Coimbatore — designed with modern layouts, refined finishes, and lifestyle amenities.",
      },
      {
        question: "What amenities does Lavender offer?",
        answer:
          "Lavender includes a curated range of amenities — Sky Garden, Aqua Lounge, Wellness Arena, grand clubhouse, swimming pool, fitness center, children's play area, landscaped gardens, and 24/7 security with CCTV surveillance.",
      },
      {
        question: "Does Lavender have landscaped green spaces?",
        answer:
          "Yes. Lavender is designed to blend modern living with nature's embrace. The project incorporates lush landscaped gardens, tree-lined avenues, and open green spaces — creating a serene environment for residents.",
      },
      {
        question: "Why is Lavender's location important?",
        answer:
          "Lavender is located in Saravanampatti — a well-established and rapidly developing area of Coimbatore. The project offers excellent connectivity to KGISL IT Park, top educational institutions, hospitals, shopping malls, and major roads.",
      },
      {
        question: "Is Lavender RERA registered?",
        answer:
          "Yes. Lavender is a fully RERA-registered project. Our sales team can share the RERA registration details, approved plans, and legal documentation during your enquiry.",
      },
    ],
  },
];

/* =========================================================
   FAQ COMPONENT
========================================================= */

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const currentCategory = faqCategories[activeCategory];

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setOpenIndex(0);
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-[#f5f8f3] py-16 md:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-[15%] h-[420px] w-[420px] rounded-full bg-[#cfe4cf]/50 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#dcebd8]/60 blur-[130px]" />
      <div className="pointer-events-none absolute right-[12%] top-[7%] h-28 w-28 rounded-full bg-[#6f9d76]/15 blur-xl" />
      <div className="pointer-events-none absolute bottom-[30%] left-[45%] h-20 w-20 rounded-full bg-[#9fbea2]/20 blur-2xl" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mb-12 max-w-4xl md:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4e3d1] bg-white px-4 py-2 shadow-sm">
            <Leaf size={16} className="text-[#4d8b58]" />
            <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-[#3d6c46] md:text-xs">
              Greenfield Housing FAQ
            </span>
          </div>

          <h2 className="max-w-4xl font-['Poppins',sans-serif] text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#173b21] md:text-5xl lg:text-6xl">
            Everything you need to know
            <span className="block text-[#4d8b58]">
              before choosing your home.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl font-['Inter',sans-serif] text-sm font-medium leading-7 text-[#667466] md:text-base md:leading-8">
            Answers to common questions about Greenfield's projects,
            communities, amenities, locations, and the buying process — so you
            can make an informed decision with confidence.
          </p>
        </div>

        {/* ===================================================
            FAQ CONTENT
        ==================================================== */}

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[310px_1fr] xl:gap-16">
          {/* =================================================
              CATEGORIES
          ================================================== */}

          <aside className="lg:sticky lg:top-24">
            <div className="mb-5 font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[.2em] text-[#638067]">
              Explore Topics
            </div>

            <div className="flex gap-2 overflow-x-auto pb-3 lg:flex-col lg:gap-2.5 lg:overflow-visible lg:pb-0">
              {faqCategories.map((category, index) => {
                const Icon = category.icon;
                const active = activeCategory === index;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => handleCategoryChange(index)}
                    className={`group flex w-max shrink-0 items-center gap-3 rounded-2xl px-5 py-3.5 text-left font-['Poppins',sans-serif] text-xs font-bold transition-all duration-300 lg:w-full lg:py-4 lg:text-sm ${
                      active
                        ? "bg-[#173b21] text-white shadow-[0_15px_35px_rgba(23,59,33,.18)]"
                        : "border border-[#e0e9dd] bg-white text-[#657166] hover:border-[#c8ddc6] hover:bg-[#edf5eb] hover:text-[#315d3b]"
                    }`}
                  >
                    <Icon
                      size={17}
                      className={active ? "text-[#c2dec5]" : "text-[#6d906f]"}
                    />

                    <span>{category.title}</span>

                    <ChevronRight
                      size={16}
                      className={`ml-auto hidden transition-transform lg:block ${
                        active
                          ? "translate-x-1 text-white"
                          : "text-[#c2d0c2]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* =================================================
              FAQ LIST
          ================================================== */}

          <div className="min-h-[500px]">
            {/* Current category header */}

            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173b21] text-[#c9e1cc]">
                {(() => {
                  const Icon = currentCategory.icon;
                  return <Icon size={20} />;
                })()}
              </div>

              <div>
                <div className="font-['Poppins',sans-serif] text-[9px] font-bold uppercase tracking-[.18em] text-[#709074]">
                  Frequently Asked
                </div>

                <h3 className="mt-1 font-['Poppins',sans-serif] text-2xl font-black text-[#173b21] md:text-3xl">
                  {currentCategory.title}
                </h3>
              </div>
            </div>

            {/* Questions */}

            <div className="flex flex-col gap-3">
              {currentCategory.faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-[22px] border transition-all duration-300 ${
                      isOpen
                        ? "border-[#bcd3ba] bg-white shadow-[0_18px_45px_rgba(25,66,34,.08)]"
                        : "border-[#e1e9df] bg-white hover:border-[#cbdcc8]"
                    }`}
                  >
                    {/* Question */}

                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-center justify-between gap-5 p-5 text-left md:p-6"
                    >
                      <span
                        className={`pr-4 font-['Poppins',sans-serif] text-sm font-bold leading-6 md:text-base ${
                          isOpen ? "text-[#173b21]" : "text-[#293d2d]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isOpen
                            ? "bg-[#173b21] text-white"
                            : "bg-[#edf5eb] text-[#4d8b58]"
                        }`}
                      >
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>

                    {/* Answer */}

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#edf2eb] px-5 pb-6 pt-5 md:px-6">
                          <p className="max-w-3xl font-['Inter',sans-serif] text-sm font-medium leading-7 text-[#687568] md:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================================================
            CTA
        ==================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-[32px] bg-[#dfeedd] p-7 md:mt-24 md:p-12 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[45px] border-white/30" />
          <div className="pointer-events-none absolute bottom-[-100px] left-[35%] h-64 w-64 rounded-full bg-[#b9d5b9]/40 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[.2em] text-[#4d7655]">
                <Leaf size={16} />
                Still Have Questions?
              </div>

              <h2 className="max-w-3xl font-['Poppins',sans-serif] text-3xl font-black leading-tight tracking-tight text-[#173b21] md:text-4xl lg:text-5xl">
                Talk to our team
                <br />
                directly.
              </h2>

              <p className="mt-4 max-w-2xl font-['Inter',sans-serif] text-sm font-medium leading-7 text-[#607362] md:text-base md:leading-8">
                Speak with Vetri, our Sales Manager, for site visits, project
                details, and pricing — call or WhatsApp us at{" "}
                <a
                  href="tel:+917395864774"
                  className="font-bold text-[#173b21] underline-offset-4 hover:underline"
                >
                  +91 73958 64774
                </a>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/allprojects"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#173b21] px-7 py-4 font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[.15em] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#285b33]"
              >
                Explore Projects
                <ArrowRight size={17} />
              </a>

              <a
                href="tel:+917395864774"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#173b21]/20 bg-white px-7 py-4 font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[.15em] text-[#173b21] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#173b21] hover:shadow-md"
              >
                Call Vetri
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}