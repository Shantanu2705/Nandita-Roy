"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Sparkles, Filter, ArrowRight, Tag } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { eventsData, EventItem } from "@/data/events";

export default function ProgramsEventsPage() {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const years = ["All", "2026", "2024", "2023", "2022", "2021"];

  const filteredEvents =
    selectedYear === "All"
      ? eventsData
      : eventsData.filter((e) => e.year.toString() === selectedYear);

  return (
    <div className="bg-ivory-100 min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-ivory-200/80 to-ivory-100 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Historical Events & Initiatives"
            title="Programs & Events Archive"
            subtitle="Documented history of youth webinars, Model UN delegations, humanitarian campaigns, and educational masterclasses conducted across the years."
          />

          {/* Year Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedYear === y
                    ? "bg-gradient-to-r from-amber to-brandOrange text-white shadow-md"
                    : "bg-ivory-50 text-charcoal-700 hover:bg-ivory-200 border border-ivory-border"
                }`}
              >
                {y === "All" ? "All Years" : `${y} Events`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Archive Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="group rounded-3xl overflow-hidden bg-ivory-50 border-2 border-ivory-border shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
              >
                {/* Event Photo */}
                <div className="relative h-56 w-full overflow-hidden bg-ivory-300">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/75 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-ivory-50/95 text-warmBrown border border-ivory-border shadow-sm">
                      {evt.badge || evt.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-mono font-medium text-white bg-charcoal-900/80 px-2.5 py-1 rounded backdrop-blur-sm">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{evt.date}</span>
                  </div>
                </div>

                {/* Event Body */}
                <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-warmBrown transition-colors leading-snug">
                      {evt.title}
                    </h2>
                    <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                      {evt.description}
                    </p>
                  </div>

                  {/* Highlights if any */}
                  {evt.highlights && evt.highlights.length > 0 && (
                    <div className="pt-2 border-t border-ivory-border space-y-1">
                      {evt.highlights.map((h, i) => (
                        <div key={i} className="text-[11px] text-charcoal-700 flex items-start gap-1.5">
                          <span className="text-amber font-bold">·</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-3 border-t border-ivory-border flex items-center justify-between text-xs text-charcoal-500 font-mono">
                    <span className="flex items-center gap-1 truncate max-w-[200px]">
                      <MapPin className="w-3.5 h-3.5 text-amber shrink-0" />
                      <span className="truncate">{evt.location}</span>
                    </span>
                    <span className="text-[11px] font-bold text-warmBrown">
                      {evt.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

