import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Award, Users, Globe2, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory-100 to-ivory-200/60 pt-8 sm:pt-14 pb-16 lg:pb-24 border-b border-ivory-border">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brandOrange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & Editorial Credentials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-ivory-200 border border-ivory-border shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-warmBrown uppercase font-sans">
                {profileData.heroEyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-6.5xl font-bold text-charcoal-900 tracking-tight leading-[1.12]">
              Find Your Voice. <br />
              <span className="italic font-accent text-warmBrown font-normal">Shape Your Presence.</span> <br />
              <span className="bg-gradient-to-r from-warmBrown via-amber-dark to-brandOrange bg-clip-text text-transparent">
                Inspire Your World.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-charcoal-700 leading-relaxed max-w-2xl font-sans">
              {profileData.heroDescription}
            </p>

            {/* Mini Brand Note: Meet Nandita Roy */}
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-ivory-50/90 border border-ivory-border/80 shadow-sm max-w-xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-amber flex items-center justify-center text-charcoal-900 shrink-0 font-serif font-bold text-lg shadow-sm">
                N
              </div>
              <div className="text-xs sm:text-sm text-charcoal-700 leading-snug">
                <span className="font-bold text-charcoal-900 font-serif text-sm sm:text-base block">
                  Meet Nandita Roy
                </span>
                Championing youth articulate leadership across schools, state debaters, and UN delegations.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-card hover:shadow-cardHover hover:from-amber-dark hover:to-brandOrange-dark transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-ivory-50 text-charcoal-800 border border-ivory-border hover:bg-ivory-200 hover:text-warmBrown transition-all shadow-sm"
              >
                <span>Connect With Nandita</span>
              </Link>
            </div>

            {/* Supporting Credentials Pills */}
            <div className="pt-4 border-t border-ivory-border/80 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="space-y-0.5">
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal-900 block">
                  20+
                </span>
                <span className="text-[11px] sm:text-xs text-charcoal-600 font-medium leading-tight block">
                  Years of Experience
                </span>
              </div>
              <div className="space-y-0.5 border-l border-ivory-border/80 pl-3 sm:pl-6">
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal-900 block">
                  8,000+
                </span>
                <span className="text-[11px] sm:text-xs text-charcoal-600 font-medium leading-tight block">
                  Students Impacted
                </span>
              </div>
              <div className="space-y-0.5 border-l border-ivory-border/80 pl-3 sm:pl-6">
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal-900 block">
                  100+
                </span>
                <span className="text-[11px] sm:text-xs text-charcoal-600 font-medium leading-tight block">
                  MUN Conferences
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photograph Composition (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Editorial Frame with subtle gold borders */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Outer decorative golden offset frame */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-amber/35 transform translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-ivory-300 border-4 border-white aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]">
                <Image
                  src="/images/nandita/portrait-studio.jpg"
                  alt="Nandita Roy — Educationist, MUN Coach & Public Speaking Mentor"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover object-top hover:scale-102 transition-transform duration-700"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption badge on image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-ivory-50/95 backdrop-blur-md border border-ivory-border shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-serif text-sm sm:text-base font-bold text-charcoal-900 block">
                        Nandita Roy
                      </span>
                      <span className="text-[10px] sm:text-xs text-warmBrown font-medium block">
                        UN Delegate Mentor · Educationist
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold-400/20 text-warmBrown border border-gold-400/40">
                      <Sparkles className="w-3 h-3 text-amber" />
                      Siliguri, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-gradient-to-br from-gold-400 to-amber text-charcoal-900 p-3 sm:p-3.5 rounded-xl shadow-lg border border-white flex items-center gap-2">
                <Award className="w-5 h-5 text-charcoal-900" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider font-sans leading-none">
                  UN HQ Awardee <br />
                  <span className="font-normal lowercase text-[10px]">Mentorship 2017</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

