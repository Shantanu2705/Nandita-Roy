import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { profileData } from "@/data/profile";

export default function Expertise() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 relative overflow-hidden border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialized Disciplines"
          title="Empowering Voices. Developing Leaders."
          subtitle="A comprehensive spectrum of communicative, dramatic, and diplomatic training designed to cultivate well-rounded global thinkers."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.expertise.map((exp, idx) => (
            <div
              key={exp.id}
              className={`group relative rounded-2xl overflow-hidden bg-ivory-50 border border-ivory-border shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? "lg:col-span-2 md:col-span-2" : ""
              }`}
            >
              {/* Card Photo Header */}
              <div
                className={`relative w-full overflow-hidden bg-ivory-300 ${
                  idx === 0
                    ? "h-64 sm:h-80"
                    : "h-52 sm:h-56"
                }`}
              >
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes={idx === 0 ? "(max-width: 1024px) 100vw, 800px" : "(max-width: 768px) 100vw, 400px"}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

                {/* Subtitle pill on image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-50/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-charcoal-900 border border-white/60 shadow-sm">
                    <Sparkles className="w-3 h-3 text-amber" />
                    {exp.subtitle.split("&")[0].trim()}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
                <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Key Skills Tags */}
                <div className="pt-2 border-t border-ivory-border/80">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-warmBrown block mb-2 font-bold">
                    Key Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-ivory-200 text-charcoal-800 font-medium border border-ivory-border"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-warmBrown group-hover:text-amber-dark transition-colors"
                  >
                    <span>Learn About Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

