"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Quote, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-ivory-100 relative overflow-hidden border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Authentic Endorsements"
          title="What People Say About Nandita"
          subtitle="Verbatim words of appreciation from corporate leaders, senior educators, parents, and former student delegates."
        />

        {/* Featured Big Quote Carousel */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-ivory-50 to-ivory-200/50 border-2 border-ivory-border shadow-card hover:shadow-cardHover transition-all">
            {/* Elegant Quotation Mark */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 text-amber/25 pointer-events-none select-none">
              <Quote className="w-16 h-16 sm:w-20 sm:h-20 rotate-180" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Highlight excerpt */}
              <div className="inline-flex items-center gap-1 text-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber stroke-amber" />
                ))}
                <span className="ml-2 text-xs font-mono font-bold uppercase tracking-wider text-warmBrown">
                  Verified Testimonial
                </span>
              </div>

              {/* Full Original Quote */}
              <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-charcoal-900 leading-relaxed font-normal">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author Info & Navigation Controls */}
              <div className="pt-6 border-t border-ivory-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-full bg-gradient-to-br from-gold-400 to-amber text-charcoal-900 font-serif font-bold text-lg flex items-center justify-center shrink-0 shadow-sm border-2 border-white">
                    {current.avatarPlaceholder}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-900">
                      {current.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-warmBrown font-medium">
                      {current.designation} · {current.organization}
                    </p>
                  </div>
                </div>

                {/* Carousel Arrows */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="p-2.5 rounded-full bg-ivory-100 hover:bg-amber hover:text-charcoal-900 text-charcoal-800 border border-ivory-border shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-charcoal-500 px-1">
                    {activeIndex + 1} / {testimonialsData.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="p-2.5 rounded-full bg-ivory-100 hover:bg-amber hover:text-charcoal-900 text-charcoal-800 border border-ivory-border shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Select Tabs for All 6 Testimonials */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {testimonialsData.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(i)}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  activeIndex === i
                    ? "bg-amber/15 border-amber text-warmBrown font-bold shadow-sm"
                    : "bg-ivory-50 border-ivory-border text-charcoal-600 hover:bg-ivory-200"
                }`}
              >
                <span className="font-serif text-xs font-semibold block truncate">
                  {t.name}
                </span>
                <span className="text-[10px] text-charcoal-500 block truncate">
                  {t.organization}
                </span>
              </button>
            ))}
          </div>

          {/* Link to dedicated Endorsements page */}
          <div className="mt-10 text-center">
            <Link
              href="/endorsements"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-warmBrown hover:text-amber-dark transition-colors"
            >
              <span>View All 6 Complete Testimonial Archives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

