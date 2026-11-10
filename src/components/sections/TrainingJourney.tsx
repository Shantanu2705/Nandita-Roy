import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Layers,
  HelpCircle,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { munFunBeyondProgram } from "@/data/programs";

export default function TrainingJourney() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 relative overflow-hidden border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pedagogical Blueprint"
          title="The Two-Phase Training Journey"
          subtitle="A progressive, verified curriculum designed for Classes 8–12. Building from foundational stage presence to elite multilateral diplomacy."
        />

        {/* Timeline Architecture Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 relative">
          {/* Phase 1 Card */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-ivory-50 border-2 border-ivory-border shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between">
            {/* Top Stage Tag */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-400/20 text-warmBrown border border-gold-400/40">
                  {munFunBeyondProgram.phases[0].badge}
                </span>
                <span className="font-serif text-2xl font-bold text-charcoal-400">
                  01
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 tracking-tight">
                {munFunBeyondProgram.phases[0].title}
              </h3>

              {/* Session Meta */}
              <div className="flex flex-wrap items-center gap-4 my-5 py-3 px-4 rounded-xl bg-ivory-200/70 border border-ivory-border text-xs text-charcoal-800">
                <div className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-amber" />
                  <span>{munFunBeyondProgram.phases[0].duration}</span>
                </div>
                <span className="text-charcoal-300">·</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-amber" />
                  <span>{munFunBeyondProgram.phases[0].sessions}</span>
                </div>
                <span className="text-charcoal-300">·</span>
                <span>1 hr/week</span>
              </div>

              <p className="text-sm text-charcoal-700 leading-relaxed">
                {munFunBeyondProgram.phases[0].description}
              </p>

              {/* Competencies */}
              <div className="mt-6 space-y-2.5">
                <span className="text-[11px] uppercase tracking-wider font-mono text-warmBrown font-bold block">
                  Core Competencies Developed
                </span>
                {munFunBeyondProgram.phases[0].competencies.map((comp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800">
                    <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Note */}
            <div className="mt-8 pt-6 border-t border-ivory-border/80">
              <div className="p-4 rounded-xl bg-ivory-200/50 border border-ivory-border text-xs text-charcoal-700">
                <span className="font-bold text-charcoal-900 block mb-1">
                  Evaluation & Progression Criteria:
                </span>
                {munFunBeyondProgram.phases[0].assessment}
                <p className="mt-1.5 font-medium text-warmBrown text-[11px]">
                  {munFunBeyondProgram.phases[0].progressionNote}
                </p>
              </div>
            </div>
          </div>

          {/* Phase 2 Card */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-ivory-50 border-2 border-ivory-border shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between">
            {/* Top Stage Tag */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brandOrange/15 text-warmBrown border border-brandOrange/30">
                  {munFunBeyondProgram.phases[1].badge}
                </span>
                <span className="font-serif text-2xl font-bold text-charcoal-400">
                  02
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 tracking-tight">
                {munFunBeyondProgram.phases[1].title}
              </h3>

              {/* Session Meta */}
              <div className="flex flex-wrap items-center gap-4 my-5 py-3 px-4 rounded-xl bg-ivory-200/70 border border-ivory-border text-xs text-charcoal-800">
                <div className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-amber" />
                  <span>{munFunBeyondProgram.phases[1].duration}</span>
                </div>
                <span className="text-charcoal-300">·</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-amber" />
                  <span>{munFunBeyondProgram.phases[1].sessions}</span>
                </div>
                <span className="text-charcoal-300">·</span>
                <span>1 hr/week</span>
              </div>

              <p className="text-sm text-charcoal-700 leading-relaxed">
                {munFunBeyondProgram.phases[1].description}
              </p>

              {/* Competencies */}
              <div className="mt-6 space-y-2.5">
                <span className="text-[11px] uppercase tracking-wider font-mono text-warmBrown font-bold block">
                  Specialized Focus Areas
                </span>
                {munFunBeyondProgram.phases[1].competencies.map((comp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800">
                    <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Note */}
            <div className="mt-8 pt-6 border-t border-ivory-border/80">
              <div className="p-4 rounded-xl bg-ivory-200/50 border border-ivory-border text-xs text-charcoal-700">
                <span className="font-bold text-charcoal-900 block mb-1">
                  Capstone Evaluation & Outcome:
                </span>
                {munFunBeyondProgram.phases[1].assessment}
                <p className="mt-1.5 font-medium text-warmBrown text-[11px]">
                  {munFunBeyondProgram.phases[1].progressionNote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification & Inquiry Notice (strictly adhering to user prompt) */}
        <div className="mt-12 p-6 rounded-2xl bg-ivory-200/80 border border-ivory-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <HelpCircle className="w-5 h-5 text-amber shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-charcoal-700">
              <span className="font-bold text-charcoal-900 font-serif text-sm sm:text-base block">
                Enrollment & Institutional Scheduling Inquiries
              </span>
              Admission into upcoming student cohorts and school delegations requires prior diagnostic screening. Contact directly for current schedules, seat availability, and institutional partnership details.
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-charcoal-900 text-white hover:bg-warmBrown transition-colors shadow-sm"
          >
            <span>Request Program Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

