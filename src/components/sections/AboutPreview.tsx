import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles, BookOpen, Mic, HeartHandshake, Theater } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { profileData } from "@/data/profile";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 relative overflow-hidden border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet Nandita Roy"
          title="An Educator. A Mentor. A Voice for the Next Generation."
          subtitle="Two decades of transforming young lives through classical elocution, theatrical expression, and global diplomatic simulations."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic Dual Photography (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative space-y-4">
              {/* Primary Photo: Nandita at UN Chair */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-ivory-300 aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/images/nandita/portrait-un-chair.jpg"
                  alt="Nandita Roy — Seasoned Educationist and MUN Coach"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-ivory-50/90 backdrop-blur-sm text-xs text-charcoal-800">
                  <span className="font-semibold text-charcoal-900 block font-serif">
                    Nandita Roy (Nandita Roy Baul)
                  </span>
                  Seasoned Educationist, MUN Coach & Academic Editor
                </div>
              </div>

              {/* Overlapping Secondary Card: School Mentoring */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-ivory-200">
                <Image
                  src="/images/students/library-mentoring-close.jpg"
                  alt="Nandita Roy mentoring school students"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Facts (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-4 text-charcoal-700 leading-relaxed text-sm sm:text-base">
              <p className="font-serif text-lg sm:text-xl text-charcoal-900 leading-relaxed font-semibold">
                Nandita is a seasoned educationist with over 20 years of experience as a Model United Nations (MUN) coach, editor, and mentor, having impacted the lives of more than 8,000 students.
              </p>

              <p>
                She possesses a deep passion for public speaking across various formats, including debate, elocution, and drama, and has trained students for inter-school, state, and national competitions. Notably, she has prepared and escorted teams to prestigious contests such as the <strong>Institute of Chartered Accountants of India (ICAI)</strong> debate competitions and the <strong>East India debate contest at Assam Valley School, Tezpur</strong>.
              </p>

              <p>
                For two decades, she has been deeply involved in training young people aged 12 to 20 for MUN conferences held under renowned platforms like <strong>India&apos;s International Movement to United Nations (IIMUN)</strong> and Ivy League. Her tutelage helped student delegations secure major accolades, including winning the <strong>Championship Conference organized by IIMUN at the United Nations headquarters in New York in 2017</strong>.
              </p>

              <p>
                Beyond public speaking, Nandita serves as a valued counselor to countless students, helping them overcome anxiety, depression, and self-doubt. Additionally, she serves as the Communication Lead for the <strong>Mine Labour Protection Campaign Trust (MLPC)</strong>, reflecting her dedication to ethical advocacy and community impact.
              </p>
            </div>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded-lg bg-ivory-200/80 border border-ivory-border text-center">
                <Mic className="w-4 h-4 text-amber mx-auto mb-1.5" />
                <span className="text-xs font-bold text-charcoal-800 block">MUN & Oratory</span>
                <span className="text-[10px] text-charcoal-500">20+ Years</span>
              </div>

              <div className="p-3 rounded-lg bg-ivory-200/80 border border-ivory-border text-center">
                <Theater className="w-4 h-4 text-amber mx-auto mb-1.5" />
                <span className="text-xs font-bold text-charcoal-800 block">Theatre Director</span>
                <span className="text-[10px] text-charcoal-500">Major Plays</span>
              </div>

              <div className="p-3 rounded-lg bg-ivory-200/80 border border-ivory-border text-center">
                <HeartHandshake className="w-4 h-4 text-amber mx-auto mb-1.5" />
                <span className="text-xs font-bold text-charcoal-800 block">Youth Counselor</span>
                <span className="text-[10px] text-charcoal-500">Holistic Care</span>
              </div>

              <div className="p-3 rounded-lg bg-ivory-200/80 border border-ivory-border text-center">
                <BookOpen className="w-4 h-4 text-amber mx-auto mb-1.5" />
                <span className="text-xs font-bold text-charcoal-800 block">MLPC Trust</span>
                <span className="text-[10px] text-charcoal-500">Advocacy Lead</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-card hover:shadow-cardHover hover:from-amber-dark hover:to-brandOrange-dark transition-all transform hover:-translate-y-0.5"
              >
                <span>Discover Her Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

