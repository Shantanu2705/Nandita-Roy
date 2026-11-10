import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Quote, Star, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonialsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Endorsements & Testimonials | Words on Nandita Roy",
  description:
    "Read genuine testimonials and endorsements from corporate leaders, educators from DPS Siliguri, parents, and advocates regarding Nandita Roy's mentorship.",
  alternates: {
    canonical: "https://www.nanditaspeaks.com/endorsements",
  },
};

export default function EndorsementsPage() {
  return (
    <div className="bg-ivory-100 min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-ivory-200/80 to-ivory-100 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Authentic Feedback"
            title="Voices of Trust & Appreciation"
            subtitle="Original testimonials from school principals, department heads, corporate executives, and parents whose children have grown under Nandita Roy's guidance."
          />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((t, idx) => (
              <div
                key={t.id}
                className={`relative rounded-3xl p-8 sm:p-9 bg-ivory-50 border-2 border-ivory-border shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between ${
                  idx === 0 ? "lg:col-span-2 md:col-span-2 bg-gradient-to-br from-ivory-50 to-ivory-200/40" : ""
                }`}
              >
                <div>
                  {/* Top Quote Icon & Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-10 h-10 text-amber/35 rotate-180" />
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber stroke-amber" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="font-serif text-charcoal-800 text-base sm:text-lg leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-ivory-border flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-amber text-charcoal-900 font-serif font-bold text-base flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                    {t.avatarPlaceholder}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal-900">
                      {t.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-warmBrown font-medium">
                      {t.designation}
                    </p>
                    <span className="text-xs text-charcoal-500 block">
                      {t.organization}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography & Trust Section */}
      <section className="py-20 bg-ivory-200/50 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-amber font-bold">
                Decades of Integrity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
                A Legacy Built on Student Flourishing
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
                The greatest testament to Nandita&apos;s mentorship is the enduring success of her students—now leaders, debaters, advocates, and confident communicators navigating universities and professions across the globe.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-card hover:shadow-cardHover transition-all"
                >
                  <span>Connect With Nandita</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3]">
                <Image
                  src="/images/students/library-mentoring-wide.jpg"
                  alt="Students in library coaching"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3]">
                <Image
                  src="/images/students/aps-auditorium.jpg"
                  alt="Army Public School auditorium audience"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

