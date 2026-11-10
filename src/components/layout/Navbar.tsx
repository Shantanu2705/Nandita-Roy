"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Camera,
  Video,
  Calendar,
  MessageCircle,
} from "lucide-react";
import MobileMenu from "./MobileMenu";
import { profileData } from "@/data/profile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMediaDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsMediaDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsMediaDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMediaDropdownOpen(false);
    }, 200);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const isMediaActive =
    pathname.startsWith("/photo-gallery") ||
    pathname.startsWith("/video-gallery") ||
    pathname.startsWith("/programs-events");

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Top subtle champagne luxury utility bar */}
        <div className="bg-[#FFF3DC] text-[#51402C] text-xs py-2 px-4 sm:px-6 lg:px-10 border-b border-[#EAD6B5]/80 transition-colors">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
            {/* Left credentials */}
            <div className="flex items-center gap-2 sm:gap-2.5 truncate">
              <span className="inline-flex items-center gap-1.5 font-bold tracking-wider uppercase text-[10.5px] sm:text-[11px] text-[#A16207] shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-[#EFAE32]" />
                MUN Coach · Educationist · Mentor
              </span>
              <span className="hidden md:inline text-[#51402C]/30">|</span>
              <span className="hidden md:inline text-[#51402C]/80 text-[11.5px] font-medium truncate">
                20+ Years Empowering Young Minds Across India & Abroad
              </span>
            </div>

            {/* Right direct contacts */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 text-[11.5px] font-medium">
              <a
                href={profileData.contact.callLink}
                className="inline-flex items-center gap-1.5 text-[#51402C] hover:text-[#A16207] transition-colors"
                aria-label={`Call ${profileData.contact.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#EFAE32]" />
                <span className="font-mono text-[11.5px]">{profileData.contact.phone}</span>
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="hidden lg:inline-flex items-center gap-1.5 text-[#51402C] hover:text-[#A16207] transition-colors"
                aria-label={`Email ${profileData.contact.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-[#EFAE32]" />
                <span>{profileData.contact.email}</span>
              </a>

              <a
                href={profileData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#25D366]/15 text-[#15803d] font-semibold text-[11px] hover:bg-[#25D366]/25 transition-colors border border-[#25D366]/30"
              >
                <MessageCircle className="w-3 h-3 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div
          className={`w-full bg-[#FFF9ED]/98 backdrop-blur-md transition-all duration-300 border-b ${
            isScrolled
              ? "py-3 shadow-md border-[#EAD6B5]"
              : "py-4 border-[#EAD6B5]/80"
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
            {/* Authentic Vector Logo — Transparent, prominently displayed with breathing room */}
            <Link
              href="/"
              className="shrink-0 block focus:outline-none transition-transform hover:opacity-95"
              aria-label="Nandita Speaks - Home"
            >
              <Image
                src="/images/logo.svg"
                alt="Nandita Speaks — Speak. Lead. Thrive."
                width={230}
                height={52}
                className="w-[175px] sm:w-[200px] md:w-[215px] lg:w-[230px] h-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Links — Title Case, Single Line (Never Wraps), Generous Spacing */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
              <Link
                href="/"
                className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-[13.5px] 2xl:text-[14px] font-medium tracking-normal transition-all ${
                  isActive("/")
                    ? "text-[#51402C] bg-[#EFAE32]/18 font-bold shadow-xs"
                    : "text-[#29251F]/85 hover:text-[#51402C] hover:bg-[#FFF3DC]"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-[13.5px] 2xl:text-[14px] font-medium tracking-normal transition-all ${
                  isActive("/about")
                    ? "text-[#51402C] bg-[#EFAE32]/18 font-bold shadow-xs"
                    : "text-[#29251F]/85 hover:text-[#51402C] hover:bg-[#FFF3DC]"
                }`}
              >
                About Nandita
              </Link>

              <Link
                href="/programs"
                className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-[13.5px] 2xl:text-[14px] font-medium tracking-normal transition-all ${
                  isActive("/programs")
                    ? "text-[#51402C] bg-[#EFAE32]/18 font-bold shadow-xs"
                    : "text-[#29251F]/85 hover:text-[#51402C] hover:bg-[#FFF3DC]"
                }`}
              >
                Programs &amp; Courses
              </Link>

              <Link
                href="/endorsements"
                className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-[13.5px] 2xl:text-[14px] font-medium tracking-normal transition-all ${
                  isActive("/endorsements")
                    ? "text-[#51402C] bg-[#EFAE32]/18 font-bold shadow-xs"
                    : "text-[#29251F]/85 hover:text-[#51402C] hover:bg-[#FFF3DC]"
                }`}
              >
                Endorsements
              </Link>

              {/* Media Dropdown — Works on both hover & click with zero gap and click-outside dismissal */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setIsMediaDropdownOpen((prev) => !prev)}
                  className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13.5px] 2xl:text-[14px] font-medium tracking-normal transition-all cursor-pointer select-none ${
                    isMediaActive
                      ? "text-[#51402C] bg-[#EFAE32]/18 font-bold shadow-xs"
                      : "text-[#29251F]/85 hover:text-[#51402C] hover:bg-[#FFF3DC]"
                  }`}
                  aria-expanded={isMediaDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Media menu"
                >
                  <span>Media</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isMediaDropdownOpen ? "rotate-180 text-[#EFAE32]" : "text-[#29251F]/60"
                    }`}
                  />
                </button>

                {/* Dropdown Menu Container with seamless hover bridge */}
                {isMediaDropdownOpen && (
                  <div className="absolute top-full left-0 pt-1.5 w-64 z-50">
                    <div className="bg-[#FFF9ED] rounded-xl shadow-2xl border border-[#EAD6B5] p-2 space-y-1">
                      <Link
                        href="/photo-gallery"
                        onClick={() => setIsMediaDropdownOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-lg text-xs font-medium tracking-wide transition-colors ${
                          pathname === "/photo-gallery"
                            ? "bg-[#EFAE32]/25 text-[#51402C] font-semibold"
                            : "text-[#29251F] hover:bg-[#FFF3DC]"
                        }`}
                      >
                        <div className="p-1.5 rounded-md bg-[#EFAE32]/20 text-[#A16207] shrink-0 mt-0.5">
                          <Camera className="w-4 h-4 text-[#A16207]" />
                        </div>
                        <div>
                          <span className="block font-semibold text-sm text-[#29251F]">Photo Gallery</span>
                          <span className="text-[11px] text-[#51402C]/70 leading-tight block">UN forums, school cohorts &amp; events</span>
                        </div>
                      </Link>

                      <Link
                        href="/video-gallery"
                        onClick={() => setIsMediaDropdownOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-lg text-xs font-medium tracking-wide transition-colors ${
                          pathname === "/video-gallery"
                            ? "bg-[#EFAE32]/25 text-[#51402C] font-semibold"
                            : "text-[#29251F] hover:bg-[#FFF3DC]"
                        }`}
                      >
                        <div className="p-1.5 rounded-md bg-[#EFAE32]/20 text-[#A16207] shrink-0 mt-0.5">
                          <Video className="w-4 h-4 text-[#A16207]" />
                        </div>
                        <div>
                          <span className="block font-semibold text-sm text-[#29251F]">Video Gallery</span>
                          <span className="text-[11px] text-[#51402C]/70 leading-tight block">Keynotes &amp; speech masterclasses</span>
                        </div>
                      </Link>

                      <Link
                        href="/programs-events"
                        onClick={() => setIsMediaDropdownOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-lg text-xs font-medium tracking-wide transition-colors ${
                          pathname === "/programs-events"
                            ? "bg-[#EFAE32]/25 text-[#51402C] font-semibold"
                            : "text-[#29251F] hover:bg-[#FFF3DC]"
                        }`}
                      >
                        <div className="p-1.5 rounded-md bg-[#EFAE32]/20 text-[#A16207] shrink-0 mt-0.5">
                          <Calendar className="w-4 h-4 text-[#A16207]" />
                        </div>
                        <div>
                          <span className="block font-semibold text-sm text-[#29251F]">Programs &amp; Events</span>
                          <span className="text-[11px] text-[#51402C]/70 leading-tight block">Timeline of past &amp; upcoming sessions</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/programs-events"
                className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-[13.5px] 2xl:text-[14px] font-medium tracking-normal transition-all ${
                  isActive("/programs-events")
                    ? "text-[#51402C] bg-[#EFAE32]/18 font-bold shadow-xs"
                    : "text-[#29251F]/85 hover:text-[#51402C] hover:bg-[#FFF3DC]"
                }`}
              >
                Programs &amp; Events
              </Link>

              <Link
                href="/contact"
                className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-[13.5px] 2xl:text-[14px] font-medium tracking-normal transition-all ${
                  isActive("/contact")
                    ? "text-[#51402C] bg-[#EFAE32]/18 font-bold shadow-xs"
                    : "text-[#29251F]/85 hover:text-[#51402C] hover:bg-[#FFF3DC]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="hidden md:inline-flex whitespace-nowrap items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#EFAE32] to-[#E99A38] text-white shadow-sm hover:shadow-md hover:from-[#d99824] hover:to-[#d08323] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile hamburger button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2 rounded-lg text-[#29251F] hover:bg-[#FFF3DC] hover:text-[#51402C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#EFAE32]"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
