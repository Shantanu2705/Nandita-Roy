import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Award,
  BookOpen,
  Theater,
  HeartHandshake,
  CheckCircle2,
  Mic,
  ShieldCheck,
  Quote,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { profileData } from "@/data/profile";
import { testimonialsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Nandita Roy | MUN Coach, Educationist & Mentor",
  description:
    "Learn about Nandita Roy's 20+ years of experience in public speaking, Model United Nations coaching, theatre direction, and youth mentorship.",
  alternates: {
    canonical: "https://www.nanditaspeaks.com/about",
  },
};

export default function AboutPage() {
  const featuredTestimonial = testimonialsData[0]; // Amit De

  return (
    <div className="bg-ivory-100 min-h-screen">
      {/* Page Header / Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-ivory-200/80 to-ivory-100 border-b border-ivory-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Heading & Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber/15 text-warmBrown border border-amber/30 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber" />
                <span>Biography & Vision</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 tracking-tight leading-[1.12]">
                An Educator. A Mentor. <br />
                <span className="italic font-accent text-warmBrown font-normal">
                  A Voice for the Next Generation.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans max-w-2xl">
                {profileData.bio.lead}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-card hover:shadow-cardHover hover:from-amber-dark hover:to-brandOrange-dark transition-all transform hover:-translate-y-0.5"
                >
                  <span>Connect With Nandita</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-ivory-50 text-charcoal-800 border border-ivory-border hover:bg-ivory-200 transition-all"
                >
                  <span>Explore Programs</span>
                </Link>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-ivory-300 aspect-[3/4] w-full max-w-sm sm:max-w-md">
                <Image
                  src="/images/nandita/portrait-studio.jpg"
                  alt="Nandita Roy portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-ivory-50/90 backdrop-blur-md text-xs text-charcoal-800 border border-ivory-border">
                  <span className="font-serif font-bold text-charcoal-900 block text-sm">
                    Nandita Roy
                  </span>
                  Model United Nations Coach & Educationist
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="py-20 lg:py-24 border-b border-ivory-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Chapter 1: The Foundation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs uppercase font-mono tracking-widest text-amber font-bold block mb-1">
                Chapter 01
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                Two Decades of Impact
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-charcoal-700 leading-relaxed text-sm sm:text-base">
              <p>
                {profileData.bio.paragraphs[0]}
              </p>
              <p>
                {profileData.bio.paragraphs[1]}
              </p>
            </div>
          </div>

          <hr className="border-ivory-border" />

          {/* Chapter 2: Theatre & Expression with Photo */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs uppercase font-mono tracking-widest text-amber font-bold block mb-1">
                Chapter 02
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                Theatre & Dramatic Pedagogy
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-charcoal-700 leading-relaxed text-sm sm:text-base">
              <p>
                {profileData.bio.paragraphs[2]}
              </p>

              {/* Theatre Productions List */}
              <div className="p-5 rounded-2xl bg-ivory-200/60 border border-ivory-border space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-warmBrown font-bold block">
                  Directed Classic Staged Productions:
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {profileData.bio.theatrePlays.map((play, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-ivory-50 text-charcoal-800 border border-ivory-border"
                    >
                      {play}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-ivory-border" />

          {/* Chapter 3: Model United Nations & Global Accolades */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs uppercase font-mono tracking-widest text-amber font-bold block mb-1">
                Chapter 03
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                Diplomacy & UN Mentorship
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-charcoal-700 leading-relaxed text-sm sm:text-base">
              <p>
                {profileData.bio.paragraphs[3]}
              </p>

              {/* UN Highlight Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-charcoal-900 to-warmBrown text-white shadow-lg space-y-2">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-mono uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Championship Milestone · 2017</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  United Nations Headquarters, New York
                </h3>
                <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed">
                  Student teams trained by Nandita Roy clinched the prestigious Championship Conference organized by IIMUN at the UN Headquarters in New York, demonstrating world-class research, composure, and debate acumen.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-ivory-border" />

          {/* Chapter 4: Student Counseling & Ethical Advocacy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs uppercase font-mono tracking-widest text-amber font-bold block mb-1">
                Chapter 04
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                Counseling & Social Impact
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-charcoal-700 leading-relaxed text-sm sm:text-base">
              <p>
                {profileData.bio.paragraphs[4]}
              </p>
              <p>
                {profileData.bio.paragraphs[5]}
              </p>

              {/* Photo from UN Bangkok */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white bg-ivory-300 aspect-[16/9]">
                <Image
                  src="/images/conferences/un-panel-laptop.jpg"
                  alt="Nandita Roy moderating at UNCC Bangkok"
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-xs text-white font-medium">
                  Moderating at United Nations Conference Centre (UNCC), Bangkok (2024)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Endorsement Quote */}
      <section className="py-20 bg-ivory-200/60 border-b border-ivory-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Quote className="w-12 h-12 text-amber mx-auto rotate-180 opacity-60" />
          <blockquote className="font-serif text-xl sm:text-2xl text-charcoal-900 italic leading-relaxed">
            &ldquo;{featuredTestimonial.quote}&rdquo;
          </blockquote>
          <div>
            <span className="font-serif font-bold text-lg text-charcoal-900 block">
              {featuredTestimonial.name}
            </span>
            <span className="text-xs text-warmBrown font-medium">
              {featuredTestimonial.designation}, {featuredTestimonial.organization}
            </span>
          </div>

          <div className="pt-4">
            <Link
              href="/endorsements"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-warmBrown hover:text-amber-dark transition-colors"
            >
              <span>Read All Endorsements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-charcoal-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Connect With Nandita Roy
          </h2>
          <p className="text-sm sm:text-base text-ivory-300 leading-relaxed">
            Whether inquiring about student training cohorts, institutional delegations, or keynote engagements, take the first step today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-goldGlow hover:from-amber-dark hover:to-brandOrange-dark transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

