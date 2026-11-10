import React from "react";
import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import AboutPreview from "@/components/sections/AboutPreview";
import ImpactStats from "@/components/sections/ImpactStats";
import Expertise from "@/components/sections/Expertise";
import MunFunBeyond from "@/components/sections/MunFunBeyond";
import TrainingJourney from "@/components/sections/TrainingJourney";
import ExperienceRecognition from "@/components/sections/ExperienceRecognition";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MediaPreview from "@/components/sections/MediaPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Introduction / Brand Statement */}
      <BrandStatement />

      {/* Section 3: Meet Nandita Roy */}
      <AboutPreview />

      {/* Section 4: Impact and Achievements */}
      <ImpactStats />

      {/* Section 5: Areas of Expertise */}
      <Expertise />

      {/* Section 6: MUN, FUN & BEYOND */}
      <MunFunBeyond />

      {/* Section 7: Training Journey */}
      <TrainingJourney />

      {/* Section 8: Experience & Recognition */}
      <ExperienceRecognition />

      {/* Section 9: Testimonials / Endorsements */}
      <TestimonialsSection />

      {/* Section 10: Media and Interviews */}
      <MediaPreview />

      {/* Section 11: Photo Gallery Preview */}
      <GalleryPreview />

      {/* Section 12: Programs & Events Preview */}
      <ProgramsPreview />

      {/* Section 13: Final Call to Action */}
      <CTASection />
    </>
  );
}

