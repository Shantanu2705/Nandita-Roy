import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, MapPin, Tag } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { eventsData } from "@/data/events";

export default function ProgramsPreview() {
  // Specifically feature the historical events from the existing platform
  const featuredIds = ["webinar-mun-2022", "train-yourself-mun-2021", "find-a-bed-2021"];
  const featuredEvents = eventsData.filter((e) => featuredIds.includes(e.id));

  return (
    <section className="py-20 lg:py-28 bg-ivory-200/50 relative overflow-hidden border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Historical Archive"
          title="Celebrating Progress, Participation & Purpose"
          subtitle="A documented archive of signature webinars, student training cohorts, and humanitarian civic initiatives led by Nandita Roy."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((evt) => (
            <div
              key={evt.id}
              className="group rounded-2xl overflow-hidden bg-ivory-50 border border-ivory-border shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden bg-ivory-300">
                <Image
                  src={evt.image}
                  alt={evt.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent pointer-events-none" />

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

              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-warmBrown transition-colors leading-snug">
                    {evt.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed font-sans">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-ivory-border/80 flex items-center justify-between text-xs">
                  <span className="text-charcoal-500 font-mono flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber" />
                    <span className="truncate max-w-[180px]">{evt.location}</span>
                  </span>
                  <Link
                    href="/programs-events"
                    className="font-bold uppercase tracking-wider text-warmBrown hover:text-amber-dark transition-colors inline-flex items-center gap-1"
                  >
                    <span>Archive</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to complete programs & events archive */}
        <div className="mt-12 text-center">
          <Link
            href="/programs-events"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-charcoal-900 text-white hover:bg-warmBrown shadow-card transition-all"
          >
            <span>Explore Complete Programs & Events Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

