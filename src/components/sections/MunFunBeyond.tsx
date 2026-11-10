import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Globe, Users2, Shield, Compass } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

export default function MunFunBeyond() {
  const highlights = [
    {
      title: "Confidence & Presence",
      desc: "Transforming natural hesitation into poise, vocal resonance, and confident body language.",
    },
    {
      title: "Global Diplomacy",
      desc: "Mastering parliamentary procedures, country caucus alliances, and resolution consensus.",
    },
    {
      title: "Critical Inquisitiveness",
      desc: "Digging beneath sensational headlines to analyze treaties, geopolitical policy, and economics.",
    },
    {
      title: "Leadership in Action",
      desc: "Collaborative problem-solving that nurtures empathetic, future-ready global citizens.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-ivory-200/70 to-ivory-100 relative overflow-hidden border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Signature Training Banner"
          title="MUN, FUN & BEYOND"
          subtitle="A structured learning experience designed to help young minds develop confidence, diplomacy, critical thinking and leadership skills."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Descriptive Highlights & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-border shadow-sm space-y-3">
              <span className="text-xs uppercase font-mono tracking-wider text-warmBrown font-bold">
                Program Mission
              </span>
              <p className="font-serif text-lg text-charcoal-900 italic leading-relaxed">
                &ldquo;MUN should not be an intimidating barrier. Under the MUN, FUN & BEYOND banner, students discover the joy of articulation, international debate, and diplomatic camaraderie.&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
              Developed through two decades of coaching school delegates from their first nervous speech to winning international championships at the United Nations Headquarters, this program demystifies global affairs, equips students with concrete research tools, and makes parliamentary debate exhilarating and accessible.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-50 border border-ivory-border/80">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-sm text-charcoal-900">
                      {h.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 mt-0.5 leading-snug">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-card hover:shadow-cardHover hover:from-amber-dark hover:to-brandOrange-dark transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Training Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-ivory-50 text-charcoal-800 border border-ivory-border hover:bg-ivory-200 transition-all"
              >
                <span>Inquire for Institution</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Rich Multi-Image Mosaic from Real Student Sessions (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {/* Image 1: APS Seminar Stage */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white bg-ivory-300 aspect-[4/3]">
                <Image
                  src="/images/students/aps-seminar.jpg"
                  alt="Students participating in interactive seminar"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium bg-charcoal-900/70 px-2 py-0.5 rounded">
                  Live Seminar
                </span>
              </div>

              {/* Image 2: Library Coaching */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white bg-ivory-300 aspect-[3/4]">
                <Image
                  src="/images/students/library-mentoring-close.jpg"
                  alt="Nandita Roy coaching delegates in library"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium bg-charcoal-900/70 px-2 py-0.5 rounded">
                  Speech Evaluation
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              {/* Image 3: Classroom Debate Practice */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white bg-ivory-300 aspect-[3/4]">
                <Image
                  src="/images/students/speech-debate-practice.jpg"
                  alt="Students practicing debate"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium bg-charcoal-900/70 px-2 py-0.5 rounded">
                  Debate Practice
                </span>
              </div>

              {/* Image 4: UN Panel Speaking */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white bg-ivory-300 aspect-[4/3]">
                <Image
                  src="/images/conferences/un-panel-speaking.jpg"
                  alt="UN Conference Room 4 panel"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium bg-charcoal-900/70 px-2 py-0.5 rounded">
                  UN Simulation Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

