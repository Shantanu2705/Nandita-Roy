"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Maximize2, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Lightbox from "@/components/common/Lightbox";
import { galleryData } from "@/data/gallery";

export default function GalleryPreview() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Take the 8 featured home images
  const homeImages = galleryData.filter((img) => img.featuredOnHome);

  return (
    <section className="py-20 lg:py-28 bg-ivory-100 relative overflow-hidden border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Photographic Narrative"
          title="Moments That Tell a Story"
          subtitle="Real, unvarnished glimpses of youth transformation, international diplomacy, classroom masterclasses, and prestigious educational milestones."
        />

        {/* Asymmetrical Masonry Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[240px]">
          {homeImages.map((img, i) => {
            // Asymmetrical spans for editorial feel
            let spanClass = "col-span-1 row-span-1";
            if (i === 0) spanClass = "sm:col-span-2 sm:row-span-2"; // Large hero image
            else if (i === 4) spanClass = "sm:col-span-2 sm:row-span-1"; // Wide horizontal
            else if (i === 2) spanClass = "sm:col-span-1 sm:row-span-2"; // Tall vertical

            return (
              <div
                key={img.id}
                onClick={() => setSelectedIdx(i)}
                className={`group relative rounded-2xl overflow-hidden bg-ivory-300 border-2 border-white shadow-card hover:shadow-cardHover cursor-pointer transition-all duration-300 ${spanClass}`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover overlay details */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-ivory-50/90 text-charcoal-900 backdrop-blur-sm shadow-md">
                      <Maximize2 className="w-4 h-4 text-amber" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gold-300 block mb-0.5">
                      {img.category}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm">
                      {img.title}
                    </h3>
                    {img.location && (
                      <p className="text-[11px] text-ivory-200 font-sans mt-0.5">
                        {img.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to Photo Gallery */}
        <div className="mt-12 text-center">
          <Link
            href="/photo-gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-card hover:shadow-cardHover hover:from-amber-dark hover:to-brandOrange-dark transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore All Photographs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={homeImages}
        currentIndex={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onNavigate={(idx) => setSelectedIdx(idx)}
      />
    </section>
  );
}

