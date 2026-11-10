import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Heart,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#1E1B17] text-[#FFF9ED] border-t border-[#383229]">
      {/* Top Banner / Brand Showcase */}
      <div className="border-b border-[#2D2720] bg-[#171411] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Authentic Vector White Logo with Transparent Background — No redundant text or boxes */}
          <Link
            href="/"
            className="inline-block transition-opacity hover:opacity-95 focus:outline-none"
            aria-label="Nandita Speaks - Home"
          >
            <Image
              src="/images/logo-white.svg"
              alt="Nandita Speaks — Speak. Lead. Thrive."
              width={280}
              height={64}
              className="w-[220px] sm:w-[250px] md:w-[280px] h-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#EFAE32] to-[#E99A38] text-white shadow-goldGlow hover:from-[#d99824] hover:to-[#d08323] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Connect With Nandita</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#F4C84A]/30 pb-2 inline-block">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm text-[#FFF9ED]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4C84A] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-xs sm:text-sm text-[#FFF9ED]/80">
                  {profileData.contact.address}, {profileData.contact.city} {profileData.contact.pincode}, West Bengal, India
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4C84A] shrink-0" />
                <a
                  href={profileData.contact.callLink}
                  className="hover:text-[#F4C84A] transition-colors text-xs sm:text-sm font-mono"
                >
                  {profileData.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4C84A] shrink-0" />
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="hover:text-[#F4C84A] transition-colors text-xs sm:text-sm"
                >
                  {profileData.contact.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h5 className="text-xs uppercase tracking-wider text-[#FFF9ED]/60 mb-2.5">
                Connect on Social Media
              </h5>
              <div className="flex items-center gap-2.5">
                {profileData.socialLinks.map((s) => {
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.name}
                      aria-label={s.name}
                      className="w-8 h-8 rounded-full bg-[#29251F] flex items-center justify-center text-[#FFF9ED]/80 hover:text-white hover:bg-[#EFAE32] transition-all transform hover:-translate-y-0.5"
                    >
                      {s.icon === "facebook" && <Facebook className="w-4 h-4" />}
                      {s.icon === "instagram" && <Instagram className="w-4 h-4" />}
                      {s.icon === "youtube" && <Youtube className="w-4 h-4" />}
                      {s.icon === "twitter" && <Twitter className="w-4 h-4" />}
                      {s.icon === "linkedin" && <Linkedin className="w-4 h-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#F4C84A]/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF9ED]/85">
              <li>
                <Link href="/" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> About Nandita
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> Programs & Courses
                </Link>
              </li>
              <li>
                <Link href="/endorsements" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> Endorsements
                </Link>
              </li>
              <li>
                <Link href="/programs-events" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> Programs & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Media & Policies */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#F4C84A]/30 pb-2 inline-block">
              Media & Policies
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF9ED]/85">
              <li>
                <Link href="/photo-gallery" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/video-gallery" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#F4C84A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#F4C84A]">›</span> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#F4C84A]/30 pb-2 inline-block">
              Office Hours
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#FFF9ED]/85">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#F4C84A] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {profileData.contact.officeHours.map((oh, i) => (
                    <div key={i} className="flex justify-between gap-4 text-xs">
                      <span className="text-[#FFF9ED]/60">{oh.days}:</span>
                      <span className="font-medium text-white">{oh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-[#29251F] border border-[#383229] text-[11px] leading-relaxed text-[#FFF9ED]/75">
                <span className="text-[#F4C84A] font-semibold block mb-0.5">Audition & Mentoring Inquiries</span>
                Prior appointment recommended for student counseling & school cohort scheduling.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#2D2720] py-6 px-4 sm:px-6 lg:px-8 bg-[#12100E] text-xs text-[#FFF9ED]/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            &copy; 2026 <span className="text-white font-medium">Nandita Speaks</span>. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Empowering Voices with Purpose & Integrity
          </p>
        </div>
      </div>
    </footer>
  );
}
