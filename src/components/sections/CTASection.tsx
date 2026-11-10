import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, MessageSquare, PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-warmBrown text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Begin Your Transformation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18]">
              Your Voice Has the Power <br />
              <span className="italic font-accent text-gold-300 font-normal">to Make a Difference.</span>
            </h2>

            <p className="text-base sm:text-lg text-ivory-200 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
              Take the first step towards confident communication, meaningful leadership and a stronger future. Whether for individual student mentoring, school delegations, or keynote sessions—reach out directly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-gold-400 to-amber text-charcoal-900 shadow-goldGlow hover:from-gold-300 hover:to-amber-dark transition-all transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-charcoal-900" />
                <span>Connect With Nandita</span>
              </Link>

              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Supporting Photo Column (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-400/30 bg-charcoal-800 aspect-[4/3] sm:aspect-[16/11] w-full max-w-md">
              <Image
                src="/images/conferences/un-escap-building.jpg"
                alt="Nandita Roy at United Nations ESCAP"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-xs">
                <span className="font-serif font-bold text-white block">
                  Speak. Lead. Thrive.
                </span>
                <span className="text-gold-300 text-[11px]">
                  Guided by 20+ years of educational & diplomatic mentoring.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

