import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, ExternalLink, Menu, X, Home, Building2, Users, Phone, Mail } from "lucide-react";
import logo from "../../assests/greenfield.webp";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links for Greenfield Housing
  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/aboutus", icon: Users },
    { name: "Community", path: "/community", icon: Building2 },
    { name: "Contact Us", path: "/contactus", icon: Phone },
  ];

  // Project dropdown items
  const projectItems = [
    { name: "All Projects", path: "/project" },
  
  ];

  const navLinkClass = ({ isActive }) =>
    `font-['Inter',sans-serif] text-base font-medium px-4 py-2.5 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-emerald-50 text-emerald-700"
        : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
    }`;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <nav className="mx-auto flex w-full items-center justify-between px-5 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
        
        {/* Logo Section */}
        <Link
          to="/"
          className="group flex items-center gap-4 flex-shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm transition-all group-hover:border-emerald-200 group-hover:shadow-md">
            <img
              src={logo}
              alt="Greenfield Housing India Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-['Poppins',sans-serif] text-2xl font-bold tracking-tight text-gray-900">
              GREENFIELD<span className="text-emerald-600">.</span>
            </span>
            <span className="font-['Inter',sans-serif] text-sm font-medium text-gray-500">
              We Build Homes, Not Houses
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links - Full Width Centered */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={navLinkClass}>
              {link.name}
            </NavLink>
          ))}

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProjectsOpen((prev) => !prev)}
              className={`font-['Inter',sans-serif] flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-200 ${
                projectsOpen
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
              }`}
            >
              Projects
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  projectsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-[calc(100%+8px)] w-80 -translate-x-1/2 origin-top rounded-2xl border border-gray-100 bg-white p-3 shadow-xl transition-all duration-300 ${
                projectsOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div className="px-3 pb-2 pt-2">
                <span className="font-['Poppins',sans-serif] text-sm font-semibold text-gray-900">
                  Our Projects
                </span>
                <p className="font-['Inter',sans-serif] mt-1 text-sm text-gray-500">
                  Explore our premium projects across Coimbatore & Erode
                </p>
              </div>

              <div className="mt-2 flex flex-col gap-1 border-t border-gray-100 pt-2">
                {projectItems.map((project) => (
                  <NavLink
                    key={project.name}
                    to={project.path}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-xl px-3 py-3 transition-all duration-200 ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                      }`
                    }
                  >
                    <span className="font-['Inter',sans-serif] text-sm font-medium">
                      {project.name}
                    </span>
                    <ExternalLink className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry CTA Button */}
        <div className="hidden lg:block flex-shrink-0">
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="font-['Inter',sans-serif] inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-emerald-800 hover:shadow-md active:scale-95"
          >
            Enquiry
            <Mail className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden flex-shrink-0"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu - Full Width */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[900px] border-t border-gray-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full px-5 py-6 sm:px-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-['Inter',sans-serif] flex items-center gap-3 rounded-xl px-4 py-3.5 text-lg font-medium transition-all ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Projects Dropdown */}
          <div className="my-6 border-t border-gray-100 pt-6">
            <button
              type="button"
              onClick={() => setMobileProjectsOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium text-gray-700 transition-all hover:bg-gray-50"
            >
              <span>Projects</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  mobileProjectsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileProjectsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-3 flex flex-col gap-2 pl-4">
                {projectItems.map((project) => (
                  <NavLink
                    key={project.name}
                    to={project.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-['Inter',sans-serif] rounded-xl px-4 py-3 text-base font-medium transition-all ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {project.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
            className="font-['Inter',sans-serif] mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-4 text-lg font-semibold text-white shadow-sm transition-all hover:bg-emerald-800 active:scale-95"
          >
            Enquiry
            <Mail className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}