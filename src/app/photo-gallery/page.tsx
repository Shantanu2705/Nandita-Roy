"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles, Filter } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Lightbox from "@/components/common/Lightbox";
import { galleryData, GalleryImage } from "@/data/gallery";

const categories = [
  "All",
  "Diplomacy & UN",
  "Mentoring & Classrooms",
  "Keynotes & Events",
  "Honors & Credentials",
] as const;

type Category = (typeof categories)[number];

export default function PhotoGalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-ivory-100 min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-ivory-200/80 to-ivory-100 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Archive"
            title="Moments That Tell a Story"
            subtitle="An authentic photographic retrospective of student mentorship, United Nations conferences, staged theatre productions, and academic milestones."
          />

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-amber to-brandOrange text-white shadow-md"
                    : "bg-ivory-50 text-charcoal-700 hover:bg-ivory-200 border border-ivory-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-[240px]">
            {filteredImages.map((img, idx) => {
              // Asymmetrical masonry sizing based on image aspect ratio
              let spanClass = "col-span-1 row-span-1";
              if (img.aspect === "portrait") {
                spanClass = "col-span-1 row-span-2";
              } else if (img.aspect === "landscape" && (idx % 5 === 0)) {
                spanClass = "sm:col-span-2 row-span-1";
              }

              return (
                <div
                  key={img.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group relative rounded-2xl overflow-hidden bg-ivory-300 border-2 border-white shadow-card hover:shadow-cardHover cursor-pointer transition-all duration-300 ${spanClass}`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="flex justify-end">
                      <span className="p-2 rounded-full bg-ivory-50/90 text-charcoal-900 shadow-md">
                        <Maximize2 className="w-4 h-4 text-amber" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gold-300 block mb-0.5">
                        {img.category}
                      </span>
                      <h3 className="font-serif text-sm sm:text-base font-bold text-white drop-shadow-sm leading-snug">
                        {img.title}
                      </h3>
                      {img.location && (
                        <p className="text-[11px] text-ivory-200 mt-1">
                          {img.location} {img.year ? `· ${img.year}` : ""}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        currentIndex={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onNavigate={(newIdx) => setSelectedIdx(newIdx)}
      />
    </div>
  );
}

