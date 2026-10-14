import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Logo from "../../assests/greenfield.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/project" },
    { label: "Community", href: "/community" },
    { label: "About us", href: "/aboutus" },
    { label: "Contact us", href: "/contactus" },
  ];

  const projectLinks = [
    { label: "Ongoing Projects", href: "/project" },
    { label: "Completed Projects", href: "/project" },
    { label: "Ready to Occupy", href: "/project" },
  ];

  const socials = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/greenfield_housing/?hl=en",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61564948162389",
    },
  ];

  return (
    <footer className="w-full bg-[#f4f8f3] px-4 py-5 md:px-8 md:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1800px] overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_70px_rgba(16,70,42,0.10)] md:rounded-[3rem]">

        {/* Top Brand Strip */}
        <div className="relative overflow-hidden bg-[#0b3d2a] px-6 py-10 text-white md:px-10 md:py-14 lg:px-14">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-emerald-400/20 blur-[100px]" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-green-400/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Greenfield Housing India"
                  className="h-10 w-auto object-contain brightness-0 invert md:h-14"
                />
              </Link>

              <div className="mt-10 md:mt-14">
                <p className="mb-3 font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300 md:text-xs">
                  Greenfield Housing India
                </p>
                <h2 className="font-['Poppins',sans-serif] text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-4xl lg:text-5xl">
                  We turn empty space into
                  <span className="mt-2 block text-emerald-300">
                    Aesthetic Living Spaces.
                  </span>
                </h2>
              </div>
            </div>

            <div className="max-w-md lg:pb-1">
              <p className="mb-4 font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Contact
              </p>

              <div className="space-y-4 font-['Inter',sans-serif] text-sm leading-relaxed text-white/75">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <p>
                    Greenfield Housing India Pvt Ltd,
                    <br />
                    No.14/15, A1, Sitra Road, Kalapatti,
                    <br />
                    Near BOSCH Global Software Technologies,
                    <br />
                    Coimbatore - 641 048.
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <a
                    href="tel:+917092211222"
                    className="flex items-center gap-2 font-bold text-white transition-colors hover:text-emerald-300"
                  >
                    <Phone className="h-4 w-4 text-emerald-300" />
                    +91 7092211222
                  </a>

                  <a
                    href="mailto:greenfield.developers.cbe@mail.com"
                    className="flex items-center gap-2 font-bold text-white transition-colors hover:text-emerald-300"
                  >
                    <Mail className="h-4 w-4 text-emerald-300" />
                    greenfield.developers.cbe@mail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Area */}
        <div className="px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr]">

            {/* Quick Links */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-500" />
                <p className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Quick Links
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group flex items-center gap-2 font-['Inter',sans-serif] text-sm font-semibold text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-emerald-700 md:text-[15px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-40 transition-all group-hover:opacity-100" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-500" />
                <p className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Projects
                </p>
              </div>

              <div className="space-y-4">
                {projectLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group flex items-center gap-3 font-['Inter',sans-serif] text-sm font-semibold text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-emerald-700 md:text-[15px]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      →
                    </span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-500" />
                <p className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Follow Us
                </p>
              </div>

              <p className="max-w-xs font-['Inter',sans-serif] text-sm leading-relaxed text-slate-500">
                Follow Greenfield Housing India for new projects, communities,
                updates and living-space inspiration.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {socials.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-600/20"
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 font-['Inter',sans-serif] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium text-slate-400 md:text-sm">
              © {currentYear} Greenfield Housing India Pvt Ltd. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5 text-xs font-semibold text-slate-400 md:text-sm">
              <Link
                to="/terms-conditions"
                className="transition-colors hover:text-emerald-600"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacypolicy"
                className="transition-colors hover:text-emerald-600"
              >
                Privacy Policy
              </Link>
              <Link
                to="/disclaimer"
                className="transition-colors hover:text-emerald-600"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}