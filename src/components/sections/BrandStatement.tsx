import React from "react";
import Image from "next/image";
import { Quote, Sparkles, Compass, Lightbulb, ShieldCheck } from "lucide-react";

export default function BrandStatement() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-200/50 relative overflow-hidden border-b border-ivory-border">
      {/* Editorial Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none opacity-[0.03] text-charcoal-900 pointer-events-none font-serif text-[18vw] leading-none whitespace-nowrap">
        NANDITA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Photographic Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-ivory-300 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/conferences/un-escap-building.jpg"
                alt="Nandita Roy at the United Nations ESCAP Landmark"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-ivory-50/90 backdrop-blur-sm text-xs text-charcoal-800">
                <span className="font-semibold text-charcoal-900 block font-serif">
                  Global Perspective, Grounded Pedagogy
                </span>
                Representing community voice & ethical advocacy on the international stage.
              </div>
            </div>

            {/* Overlapping Floating Quote Card */}
            <div className="hidden sm:flex absolute -bottom-8 -right-6 p-4 rounded-xl bg-charcoal-800 text-white shadow-xl max-w-xs border border-charcoal-700 items-start gap-3">
              <Quote className="w-6 h-6 text-gold-400 shrink-0 mt-0.5 rotate-180" />
              <p className="text-xs text-ivory-200 font-accent italic leading-relaxed">
                &ldquo;Speech is not merely sound; it is the architecture of thought, character, and diplomacy.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Statement & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber/15 text-warmBrown border border-amber/30 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              <span>Core Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight leading-[1.16]">
              Beyond Words. <br />
              <span className="italic font-accent text-warmBrown font-normal">Beyond Boundaries.</span>
            </h2>

            <div className="relative pl-5 border-l-2 border-amber">
              <p className="font-serif text-lg sm:text-xl text-charcoal-800 italic leading-relaxed">
                &ldquo;Every confident voice begins with the courage to speak. Every great leader begins with the ability to listen, understand and inspire.&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
              True communication is more than eloquent vocabulary or polished stage presence. It is the capacity to process intricate global crises, distill them with empathy, engage with dissenting viewpoints diplomatically, and champion ethical solutions that elevate humanity.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-border shadow-sm">
                <Compass className="w-5 h-5 text-amber mb-2" />
                <h3 className="font-serif font-bold text-charcoal-900 text-sm">Clarity of Mind</h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-snug">
                  Structuring complex thoughts into lucid, persuasive spoken ideas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-border shadow-sm">
                <Lightbulb className="w-5 h-5 text-amber mb-2" />
                <h3 className="font-serif font-bold text-charcoal-900 text-sm">Diplomatic Tact</h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-snug">
                  Active listening, consensus negotiation, and respect in debate.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-border shadow-sm">
                <ShieldCheck className="w-5 h-5 text-amber mb-2" />
                <h3 className="font-serif font-bold text-charcoal-900 text-sm">Ethical Courage</h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-snug">
                  Standing tall for causes that matter with empathy and composure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

