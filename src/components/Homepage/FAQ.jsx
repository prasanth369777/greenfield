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
   (Verified from provided documents)
========================================================= */

const faqCategories = [
  {
    title: "About Us",
    icon: Home,
    faqs: [
      {
        question: "Who is Greenfield Housing India?",
        answer:
          "Greenfield Housing India Pvt. Ltd. is a real estate developer based in Coimbatore[cite: 3, 11]. We focus on delivering premium, legally verified residential communities[cite: 8, 10].",
      },
      {
        question: "Where are your projects located?",
        answer:
          "We operate across the greater Coimbatore region, with projects in prime areas including Sulur, Kovilpalayam, Annur, S.S. Kulam, and Karamadai Road[cite: 3, 6, 8, 10, 11].",
      },
      {
        question: "Are your projects RERA registered?",
        answer:
          "Yes, we prioritize legal compliance. For instance, Crystal Gateway (TN11//Layout/0360/2025)[cite: 8], Opal Garden Phase IV (TNRERA/11/LO/3358/2026)[cite: 3], and Fairland (TN/11/Layout/1405/2023)[cite: 11] are fully RERA registered.",
      },
      {
        question: "Do you have DTCP approvals?",
        answer:
          "Yes, our plotted developments like Silver City (DTCP No. 58/2025)[cite: 6] and Crown City[cite: 10] are DTCP approved.",
      },
    ],
  },

  {
    title: "Projects",
    icon: Building2,
    faqs: [
      {
        question: "What types of properties do you offer?",
        answer:
          "We specialize in premium residential plots set within securely gated communities[cite: 8, 10, 11].",
      },
      {
        question: "What are your current key projects?",
        answer:
          "Our key projects include Crystal Gateway (Sulur)[cite: 8], Crown City (Kovilpalayam)[cite: 10], Silver City (Karamadai Road)[cite: 6], Fairland (Ponnigoundapudur)[cite: 11], Opal Garden (Annur)[cite: 3], and Diamond Avenue (Pattanam)[cite: 1].",
      },
      {
        question: "What is Crystal Gateway?",
        answer:
          "Crystal Gateway is an 805-plot RERA-registered development in Sulur[cite: 8]. It features luxury amenities like a 3-acre cricket ground, grand clubhouse, and mini theatre[cite: 8].",
      },
      {
        question: "What are the plot sizes available?",
        answer:
          "Plot sizes vary by project. Crystal Gateway offers plots from 1,200 to 2,400 sq.ft.[cite: 8], while Silver City offers sizes from 1.5 to 5 cents[cite: 6].",
      },
    ],
  },

  {
    title: "Amenities",
    icon: Trees,
    faqs: [
      {
        question: "What basic infrastructure is provided?",
        answer:
          "We provide essential infrastructure including 30ft/40ft blacktop roads[cite: 10], individual water pipelines[cite: 6, 8, 10], underground EB cables[cite: 8], and government-standard drainage[cite: 6, 8, 10].",
      },
      {
        question: "Are your projects secure?",
        answer:
          "Yes, we build gated communities with full compound walls, grand entrance arches, 24/7 security, and CCTV surveillance[cite: 4, 6, 8, 10, 11].",
      },
      {
        question: "Do you offer sports and fitness facilities?",
        answer:
          "Many projects include sports facilities. Crystal Gateway features a 3-acre cricket turf and outdoor gym[cite: 8], while Fairland offers a fitness center and indoor shuttle court[cite: 11].",
      },
      {
        question: "Are there community gathering spaces?",
        answer:
          "Yes, our developments often feature landscaped gardens, children's play areas, community halls, and clubhouses[cite: 4, 8, 10].",
      },
    ],
  },

  {
    title: "Locations",
    icon: MapPin,
    faqs: [
      {
        question: "Where is Crystal Gateway located?",
        answer:
          "It is located on Kalangal Road, Sulur, approximately 2 km from L&T Bypass and 10 km from the Coimbatore Airport[cite: 8].",
      },
      {
        question: "Where is Crown City?",
        answer:
          "Crown City is situated on Sathy Main Road in Kovilpalayam[cite: 10].",
      },
      {
        question: "Where is Fairland?",
        answer:
          "Fairland is located in Ponnigoundapudur, S.S. Kulam, connecting easily to Avinashi (NH 544) and Sathy (NH 948) roads[cite: 11].",
      },
    ],
  },

  {
    title: "Booking",
    icon: ShieldCheck,
    faqs: [
      {
        question: "How do I enquire about pricing?",
        answer:
          "Pricing and availability vary. For example, Silver City starts at 7.50 lakhs[cite: 6]. Please contact us at 7395864774 for exact, updated pricing[cite: 3, 5].",
      },
      {
        question: "Do you assist with home loans?",
        answer:
          "Yes, loan assistance is available on select projects. Crown City, for instance, mentions loan assistance up to 80%, subject to current availability[cite: 10].",
      },
      {
        question: "How can I schedule a site visit?",
        answer:
          "You can call our sales enquiry line at 7395864774 to arrange a visit and verify plot availability and dimensions[cite: 3, 5, 6].",
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

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mb-10 max-w-4xl md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4e3d1] bg-white px-3 py-1.5 shadow-sm md:mb-5">
            <Leaf size={14} className="text-[#4d8b58]" />
            <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-[#3d6c46]">
              Project FAQ
            </span>
          </div>

          <h2 className="font-['Poppins',sans-serif] text-3xl font-black leading-tight tracking-tight text-[#173b21] md:text-5xl lg:text-6xl">
            Everything you need to know.
          </h2>

          <p className="mt-4 max-w-2xl font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-[#667466] md:text-base">
            Quick answers about our RERA-registered communities, amenities, and buying process.
          </p>
        </div>

        {/* ===================================================
            FAQ CONTENT
        ==================================================== */}

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr] xl:gap-12">
          {/* =================================================
              CATEGORIES
          ================================================== */}

          <aside className="lg:sticky lg:top-24">
            <div className="mb-4 font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[.2em] text-[#638067]">
              Explore Topics
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide lg:flex-col lg:gap-2.5 lg:overflow-visible lg:pb-0">
              {faqCategories.map((category, index) => {
                const Icon = category.icon;
                const active = activeCategory === index;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => handleCategoryChange(index)}
                    className={`group flex w-max shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left font-['Poppins',sans-serif] text-xs font-bold transition-all duration-300 lg:w-full lg:rounded-2xl lg:py-4 lg:text-sm ${
                      active
                        ? "bg-[#173b21] text-white shadow-md"
                        : "border border-[#e0e9dd] bg-white text-[#657166] hover:bg-[#edf5eb]"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={active ? "text-[#c2dec5]" : "text-[#6d906f]"}
                    />
                    <span>{category.title}</span>
                    <ChevronRight
                      size={14}
                      className={`ml-auto hidden transition-transform lg:block ${
                        active ? "translate-x-1 text-white" : "text-[#c2d0c2]"
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

          <div className="min-h-[400px]">
            {/* Current category header */}
            <div className="mb-6 flex items-center gap-3 md:mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#173b21] text-[#c9e1cc] md:h-12 md:w-12 md:rounded-2xl">
                {(() => {
                  const Icon = currentCategory.icon;
                  return <Icon size={18} className="md:h-5 md:w-5" />;
                })()}
              </div>

              <div>
                <h3 className="font-['Poppins',sans-serif] text-xl font-black text-[#173b21] md:text-2xl">
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
                    className={`overflow-hidden rounded-xl border transition-all duration-300 md:rounded-[22px] ${
                      isOpen
                        ? "border-[#bcd3ba] bg-white shadow-md"
                        : "border-[#e1e9df] bg-white hover:border-[#cbdcc8]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-center justify-between gap-4 p-4 text-left md:p-5"
                    >
                      <span
                        className={`pr-2 font-['Poppins',sans-serif] text-xs font-bold leading-relaxed md:text-sm ${
                          isOpen ? "text-[#173b21]" : "text-[#293d2d]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 md:h-10 md:w-10 md:rounded-xl ${
                          isOpen
                            ? "bg-[#173b21] text-white"
                            : "bg-[#edf5eb] text-[#4d8b58]"
                        }`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#edf2eb] px-4 pb-5 pt-4 md:px-5">
                          <p className="font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-[#687568] md:text-sm">
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

        <div className="relative mt-12 overflow-hidden rounded-[24px] bg-[#dfeedd] p-6 md:mt-20 md:rounded-[32px] md:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[45px] border-white/30" />
          
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[.2em] text-[#4d7655]">
                <Leaf size={14} />
                Still Have Questions?
              </div>

              <h2 className="font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight text-[#173b21] md:text-4xl">
                Talk to our team.
              </h2>

              <p className="mt-3 max-w-xl font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-[#607362] md:text-sm">
                Call our sales line for site visits, exact pricing, and plot availability.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/allprojects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#173b21] px-6 py-3.5 font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#285b33] sm:w-auto md:px-7 md:py-4 md:text-xs"
              >
                View Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="tel:+917395864774"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#173b21]/20 bg-white px-6 py-3.5 font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-[#173b21] shadow-sm transition-all hover:border-[#173b21] hover:bg-gray-50 sm:w-auto md:px-7 md:py-4 md:text-xs"
              >
                Call 7395864774
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}