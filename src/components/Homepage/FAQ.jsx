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
  Sparkles,
} from "lucide-react";

/* =========================================================
   GREENFIELD HOUSING FAQ DATA
========================================================= */

const faqCategories = [
  {
    title: "Greenfield Housing",
    icon: Home,
    faqs: [
      {
        question: "What is Greenfield Housing known for?",
        answer:
          "Greenfield Housing creates thoughtfully planned residential communities that combine modern living, natural surroundings, quality construction and community-focused amenities. The company has developed residential projects across Coimbatore and Erode.",
      },
      {
        question: "How many projects has Greenfield Housing developed?",
        answer:
          "Greenfield Housing highlights a portfolio of 20+ projects across Coimbatore and Erode, with more than 1000 acres developed, over 10 lakh square feet of constructed area and thousands of families choosing Greenfield communities.",
      },
      {
        question: "Where does Greenfield Housing operate?",
        answer:
          "Greenfield Housing has residential developments across Coimbatore and Erode, covering established neighbourhoods as well as emerging locations with strong connectivity and future development potential.",
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
          "Greenfield Housing offers a range of residential options across its developments, including plots, villas, apartments and gated community projects.",
      },
      {
        question: "What are some Greenfield Housing projects?",
        answer:
          "Greenfield's project portfolio includes developments such as Lavender, Maple, Guhan Garden, Nandavanam and Crystal Gateway, along with other residential communities across Coimbatore and Erode.",
      },
      {
        question: "What is Greenfield Lavender?",
        answer:
          "Lavender is a residential development in Kalapatti, Coimbatore. The project includes 3 BHK apartments and 4 BHK luxury villas, along with landscaped spaces and community amenities.",
      },
      {
        question: "How can I find the right Greenfield project?",
        answer:
          "You can explore Greenfield's project portfolio based on property type, location and lifestyle requirements. The project pages provide information about the development, amenities, location and available configurations.",
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
          "Greenfield focuses on creating complete living environments rather than simply developing individual properties. Communities are planned around green spaces, recreation, wellness, convenience and opportunities for residents to connect.",
      },
      {
        question: "Do Greenfield projects include green spaces?",
        answer:
          "Green spaces are an important part of Greenfield's community approach. Depending on the project, residents can find landscaped gardens, parks, tree-lined areas and open spaces.",
      },
      {
        question: "Are Greenfield communities suitable for families?",
        answer:
          "Yes. Greenfield projects are designed with family living in mind, with selected communities offering children's play areas, parks, recreation facilities, community spaces and other family-oriented amenities.",
      },
      {
        question: "Does Greenfield focus on sustainable living?",
        answer:
          "Greenfield's approach places emphasis on creating greener and more balanced communities, incorporating natural surroundings, landscaped spaces and sustainability-focused features into selected developments.",
      },
    ],
  },

  {
    title: "Amenities",
    icon: Sparkles,
    faqs: [
      {
        question: "What amenities are available in Greenfield projects?",
        answer:
          "Amenities vary from project to project. Depending on the development, features may include landscaped parks, walking areas, fitness facilities, children's play areas, clubhouses, community spaces, security systems and recreational facilities.",
      },
      {
        question: "Do Greenfield projects have security facilities?",
        answer:
          "Selected Greenfield communities provide security-focused features such as controlled access, surveillance and other safety infrastructure. Exact facilities depend on the individual project.",
      },
      {
        question: "Are children's play areas available?",
        answer:
          "Selected Greenfield communities include dedicated children's play areas designed to provide families with safe and enjoyable outdoor spaces.",
      },
      {
        question: "Are fitness and wellness amenities available?",
        answer:
          "Depending on the project, amenities can include fitness centres, outdoor fitness areas, walking tracks and other wellness-oriented facilities.",
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
          "Greenfield considers factors such as connectivity, access to schools and essential services, neighbourhood development and long-term growth potential when developing residential communities.",
      },
      {
        question: "Where is Lavender located?",
        answer:
          "Greenfield Lavender is located in Kalapatti, Coimbatore, close to NGP Institutions and other important educational, business, healthcare and transportation facilities.",
      },
      {
        question: "Are Greenfield projects well connected?",
        answer:
          "Connectivity varies by project, but Greenfield selects locations with access to important roads, educational institutions, commercial areas, healthcare facilities and other everyday conveniences.",
      },
      {
        question: "Can I visit a Greenfield project?",
        answer:
          "Yes. Prospective buyers can enquire about available projects and arrange a site visit to experience the location, development and community features before making a decision.",
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
          "You can contact Greenfield Housing through its official enquiry channels to discuss available projects, configurations, pricing, location and your property requirements.",
      },
      {
        question: "Can I schedule a site visit?",
        answer:
          "Yes. Greenfield provides options for prospective buyers to arrange project visits so they can experience the location and development before making a purchase decision.",
      },
      {
        question: "Can I check the floor plan before booking?",
        answer:
          "For projects where floor plans are available, you can review the layout and configuration details before proceeding with your property decision.",
      },
      {
        question: "How can I know the latest property price?",
        answer:
          "Property prices depend on the project, location, configuration, size and availability. Contact Greenfield Housing directly for the latest pricing and availability.",
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
          "Greenfield Lavender offers 3 BHK apartments and 4 BHK luxury villas within a planned residential community in Kalapatti, Coimbatore.",
      },
      {
        question: "What amenities does Lavender offer?",
        answer:
          "Lavender includes a range of community-focused amenities, including security, fitness facilities, children's play areas, clubhouse facilities, landscaped parks, tree plantation, street lighting and recreational spaces.",
      },
      {
        question: "Does Lavender have landscaped green spaces?",
        answer:
          "Yes. The project incorporates landscaped gardens, greenery and tree-lined areas as part of its nature-inspired residential environment.",
      },
      {
        question: "Why is Lavender's location important?",
        answer:
          "Lavender is located in Kalapatti, an established and developing area of Coimbatore. The project provides access to educational institutions, technology parks, transportation facilities and everyday conveniences.",
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
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f5f8f3]
        py-16
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[15%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#cfe4cf]/50
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#dcebd8]/60
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[7%]
          h-28
          w-28
          rounded-full
          bg-[#6f9d76]/15
          blur-xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[30%]
          left-[45%]
          h-20
          w-20
          rounded-full
          bg-[#9fbea2]/20
          blur-2xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mb-12 max-w-4xl md:mb-16">
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#d4e3d1]
              bg-white
              px-4
              py-2
              shadow-sm
            "
          >
            <Leaf
              size={16}
              className="text-[#4d8b58]"
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#3d6c46]
                md:text-xs
              "
            >
              Greenfield Housing
            </span>
          </div>

          <h1
            className="
              max-w-4xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-[#173b21]
              md:text-5xl
              lg:text-6xl
            "
          >
            Everything you need to know
            <span className="block text-[#4d8b58]">
              before choosing your home.
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-[#667466]
              md:text-base
              md:leading-8
            "
          >
            Explore Greenfield Housing's
            projects, communities, amenities,
            locations and buying process before
            taking the next step towards your
            new home.
          </p>
        </div>

       

        {/* ===================================================
            FAQ CONTENT
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-8
            lg:grid-cols-[280px_1fr]
            xl:grid-cols-[310px_1fr]
            xl:gap-16
          "
        >
          {/* =================================================
              CATEGORIES
          ================================================== */}

          <aside className="lg:sticky lg:top-24">
            <div
              className="
                mb-5
                text-[10px]
                font-bold
                uppercase
                tracking-[.2em]
                text-[#638067]
              "
            >
              Explore Topics
            </div>

            <div
              className="
                flex
                gap-2
                overflow-x-auto
                pb-3
                lg:flex-col
                lg:gap-2.5
                lg:overflow-visible
                lg:pb-0
              "
            >
              {faqCategories.map(
                (category, index) => {
                  const Icon = category.icon;

                  const active =
                    activeCategory === index;

                  return (
                    <button
                      key={category.title}
                      type="button"
                      onClick={() =>
                        handleCategoryChange(index)
                      }
                      className={`
                        group
                        flex
                        w-max
                        shrink-0
                        items-center
                        gap-3
                        rounded-2xl
                        px-5
                        py-3.5
                        text-left
                        text-xs
                        font-bold
                        transition-all
                        duration-300
                        lg:w-full
                        lg:py-4
                        lg:text-sm
                        ${
                          active
                            ? "bg-[#173b21] text-white shadow-[0_15px_35px_rgba(23,59,33,.18)]"
                            : "border border-[#e0e9dd] bg-white text-[#657166] hover:border-[#c8ddc6] hover:bg-[#edf5eb] hover:text-[#315d3b]"
                        }
                      `}
                    >
                      <Icon
                        size={17}
                        className={
                          active
                            ? "text-[#c2dec5]"
                            : "text-[#6d906f]"
                        }
                      />

                      <span>
                        {category.title}
                      </span>

                      <ChevronRight
                        size={16}
                        className={`
                          ml-auto
                          hidden
                          transition-transform
                          lg:block
                          ${
                            active
                              ? "translate-x-1 text-white"
                              : "text-[#c2d0c2]"
                          }
                        `}
                      />
                    </button>
                  );
                }
              )}
            </div>
          </aside>

          {/* =================================================
              FAQ LIST
          ================================================== */}

          <div className="min-h-[500px]">
            {/* Current category */}

            <div
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#173b21]
                  text-[#c9e1cc]
                "
              >
                {(() => {
                  const Icon =
                    currentCategory.icon;

                  return <Icon size={20} />;
                })()}
              </div>

              <div>
                <div
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[.18em]
                    text-[#709074]
                  "
                >
                  Frequently Asked
                </div>

                <h2
                  className="
                    mt-1
                    text-2xl
                    font-black
                    text-[#173b21]
                    md:text-3xl
                  "
                >
                  {currentCategory.title}
                </h2>
              </div>
            </div>

            {/* Questions */}

            <div className="flex flex-col gap-3">
              {currentCategory.faqs.map(
                (faq, index) => {
                  const isOpen =
                    openIndex === index;

                  return (
                    <div
                      key={faq.question}
                      className={`
                        overflow-hidden
                        rounded-[22px]
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "border-[#bcd3ba] bg-white shadow-[0_18px_45px_rgba(25,66,34,.08)]"
                            : "border-[#e1e9df] bg-white hover:border-[#cbdcc8]"
                        }
                      `}
                    >
                      {/* Question */}

                      <button
                        type="button"
                        onClick={() =>
                          handleToggle(index)
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          gap-5
                          p-5
                          text-left
                          md:p-6
                        "
                      >
                        <span
                          className={`
                            pr-4
                            text-sm
                            font-bold
                            leading-6
                            md:text-base
                            ${
                              isOpen
                                ? "text-[#173b21]"
                                : "text-[#293d2d]"
                            }
                          `}
                        >
                          {faq.question}
                        </span>

                        <span
                          className={`
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            transition-all
                            duration-300
                            ${
                              isOpen
                                ? "bg-[#173b21] text-white"
                                : "bg-[#edf5eb] text-[#4d8b58]"
                            }
                          `}
                        >
                          {isOpen ? (
                            <Minus size={18} />
                          ) : (
                            <Plus size={18} />
                          )}
                        </span>
                      </button>

                      {/* Answer */}

                      <div
                        className={`
                          grid
                          transition-all
                          duration-500
                          ease-in-out
                          ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="
                              border-t
                              border-[#edf2eb]
                              px-5
                              pb-6
                              pt-5
                              md:px-6
                            "
                          >
                            <p
                              className="
                                max-w-3xl
                                text-sm
                                font-medium
                                leading-7
                                text-[#687568]
                                md:text-[15px]
                              "
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* ===================================================
            CTA
        ==================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[32px]
            bg-[#dfeedd]
            p-7
            md:mt-24
            md:p-12
            lg:p-14
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-72
              w-72
              rounded-full
              border-[45px]
              border-white/30
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-100px]
              left-[35%]
              h-64
              w-64
              rounded-full
              bg-[#b9d5b9]/40
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-8
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            <div>
              <div
                className="
                  mb-4
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[.2em]
                  text-[#4d7655]
                "
              >
                <Leaf size={16} />

                Find Your Greenfield Home
              </div>

              <h2
                className="
                  max-w-3xl
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-[#173b21]
                  md:text-4xl
                  lg:text-5xl
                "
              >
                Still deciding which
                community is right for you?
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  font-medium
                  leading-7
                  text-[#607362]
                  md:text-base
                  md:leading-8
                "
              >
                Explore Greenfield's residential
                communities and find a location,
                property and lifestyle that fits
                your family's needs.
              </p>
            </div>

            <a
              href="/allprojects"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#173b21]
                px-7
                py-4
                text-xs
                font-bold
                uppercase
                tracking-[.15em]
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#285b33]
              "
            >
              Explore Projects

              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}