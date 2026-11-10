"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Phone, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";
import { profileData } from "@/data/profile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Nandita", href: "/about" },
    { label: "Programs & Courses", href: "/programs" },
    { label: "Endorsements", href: "/endorsements" },
    { label: "Photo Gallery", href: "/photo-gallery" },
    { label: "Video Gallery", href: "/video-gallery" },
    { label: "Programs & Events", href: "/programs-events" },
    { label: "Contact", href: "/contact" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#29251F]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FFF9ED] shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#EAD6B5]">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between p-5 border-b border-[#EAD6B5] bg-[#FFF3DC]/60">
            <Link href="/" onClick={onClose} className="block focus:outline-none">
              <Image
                src="/images/logo.svg"
                alt="Nandita Speaks"
                width={190}
                height={44}
                className="w-[170px] sm:w-[190px] h-auto object-contain"
                priority
              />
            </Link>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#29251F] hover:bg-[#F8E8C8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#EFAE32]"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#EFAE32]/15 text-[#51402C] font-semibold border-l-4 border-[#EFAE32]"
                      : "text-[#29251F] hover:bg-[#FFF3DC] hover:text-[#51402C]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 ${
                      isActive ? "text-[#EFAE32]" : "text-[#29251F]/40"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info & CTA */}
        <div className="p-5 border-t border-[#EAD6B5] bg-[#FFF3DC]/50 space-y-4">
          <div className="space-y-2 text-xs text-[#29251F]/80">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#EFAE32] shrink-0" />
              <a href={profileData.contact.callLink} className="hover:text-[#51402C]">
                {profileData.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#EFAE32] shrink-0" />
              <a href={`mailto:${profileData.contact.email}`} className="hover:text-[#51402C] truncate">
                {profileData.contact.email}
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#EFAE32] shrink-0 mt-0.5" />
              <span>{profileData.contact.address}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={profileData.contact.callLink}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold bg-[#29251F] text-[#FFF9ED] hover:bg-[#51402C] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href={profileData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
