import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  Users,
  Compass,
  Award,
  HelpCircle,
  GraduationCap,
  Shield,
  Layers,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { munFunBeyondProgram } from "@/data/programs";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Programs & Courses | MUN, FUN & BEYOND with Nandita Roy",
  description:
    "Explore the structured two-phase training pathway in public speaking, communication, and Model United Nations preparation led by Nandita Roy.",
  alternates: {
    canonical: "https://www.nanditaspeaks.com/programs",
  },
};

export default function ProgramsPage() {
  return (
    <div className="bg-ivory-100 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-ivory-200/80 to-ivory-100 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curriculum & Training Pathway"
            title="Empowering Voices. Developing Leaders."
            subtitle="A structured learning pathway aligned with the National Education Policy (NEP), taking students of Classes 8–12 from foundational vocal clarity to world-class diplomatic debate."
          />

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-card hover:shadow-cardHover hover:from-amber-dark hover:to-brandOrange-dark transition-all transform hover:-translate-y-0.5"
            >
              <span>Inquire for Upcoming Cohorts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship Program Overview: MUN, FUN & BEYOND */}
      <section className="py-20 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Mission & NEP Alignment */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-warmBrown border border-gold-400/40 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber" />
                <span>Flagship Learning Experience</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
                {munFunBeyondProgram.title}
              </h2>

              <p className="font-serif text-lg text-warmBrown italic leading-relaxed">
                {munFunBeyondProgram.subtitle}
              </p>

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
                {munFunBeyondProgram.overview}
              </p>

              {/* NEP Callout Box */}
              <div className="p-5 rounded-2xl bg-ivory-200/70 border border-ivory-border text-xs sm:text-sm text-charcoal-800 space-y-1.5">
                <span className="font-bold font-serif text-charcoal-900 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber" />
                  National Education Policy (NEP) Alignment
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {munFunBeyondProgram.nepAlignment}
                </p>
              </div>

              {/* Target Group */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-charcoal-800 font-medium">
                <Users className="w-4 h-4 text-amber" />
                <span>Target Learners: {munFunBeyondProgram.targetAudience}</span>
              </div>
            </div>

            {/* Right Column: Photo of Training Session */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-ivory-300 aspect-[16/11]">
                <Image
                  src="/images/students/aps-session.jpg"
                  alt="Student training session"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-xs text-white font-medium bg-charcoal-900/80 px-2.5 py-1 rounded backdrop-blur-sm">
                  Active Student Communication Masterclass
                </span>
              </div>

              {/* Secondary thumbnail pair */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white bg-ivory-200 aspect-[4/3]">
                  <Image
                    src="/images/students/library-mentoring-close.jpg"
                    alt="Speech coaching"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white bg-ivory-200 aspect-[4/3]">
                  <Image
                    src="/images/students/speech-debate-practice.jpg"
                    alt="Debate simulation"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Two-Phase Curriculum */}
      <section className="py-20 bg-ivory-200/50 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Structured Stages"
            title="Two-Tier Progressive Model"
            subtitle="Students first solidify foundational stage presence before advancing to high-stakes diplomatic simulations."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {munFunBeyondProgram.phases.map((phase) => (
              <div
                key={phase.phase}
                className="relative rounded-3xl p-8 sm:p-10 bg-ivory-50 border-2 border-ivory-border shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-400/20 text-warmBrown border border-gold-400/40">
                      {phase.badge}
                    </span>
                    <span className="font-serif text-3xl font-bold text-charcoal-300">
                      0{phase.phase}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 tracking-tight">
                    {phase.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 my-4 py-2 px-3.5 rounded-xl bg-ivory-200/80 text-xs font-medium text-charcoal-800">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber" />
                      {phase.duration}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber" />
                      {phase.sessions}
                    </span>
                    <span>·</span>
                    <span>{phase.frequency}</span>
                  </div>

                  <p className="text-sm text-charcoal-700 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-warmBrown block">
                      Curriculum Pillars
                    </span>
                    {phase.competencies.map((comp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800">
                        <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-ivory-border">
                  <div className="p-4 rounded-xl bg-ivory-200/60 text-xs text-charcoal-700 space-y-1">
                    <span className="font-bold text-charcoal-900 block">Assessment:</span>
                    <p>{phase.assessment}</p>
                    <p className="font-semibold text-warmBrown pt-1">{phase.progressionNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Implementation Model */}
      <section className="py-20 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="School & Campus Collaboration"
            title="Institutional Implementation Framework"
            subtitle="How schools and colleges integrate Nandita Roy's training to cultivate high-performing delegation teams."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-6">
            {munFunBeyondProgram.institutionalModel.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-ivory-50 border border-ivory-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-full bg-amber/20 text-warmBrown flex items-center justify-center text-xs font-bold font-mono mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-serif font-bold text-base text-charcoal-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment & Inquiries Notice */}
      <section className="py-16 bg-ivory-200/70 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <HelpCircle className="w-10 h-10 text-amber mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
            Admissions, Cohort Scheduling & Institutional Fees
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
            To ensure exceptional personalized attention and committed peer groups, entry into Phase 1 is conducted via diagnostic orientation. Institutional pricing, school delegation packages, and individual cohort schedules are customized per academic term.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber to-brandOrange text-white shadow-card hover:shadow-cardHover hover:from-amber-dark hover:to-brandOrange-dark transition-all"
            >
              <span>Submit Course Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

