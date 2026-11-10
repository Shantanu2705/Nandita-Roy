import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Globe2, Sparkles, BookOpen, Mic2, Compass, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

export default function ExperienceRecognition() {
  const experiences = [
    {
      role: "United Nations RBHR Forum Moderator",
      entity: "UN Conference Centre (UNCC), Bangkok",
      year: "2024",
      description:
        "Moderated the session on 'Collaborative Pilot Towards Eliminating Silicosis in Artisanal Small-scale Mining' as Communication Lead for MLPC Trust.",
      image: "/images/conferences/un-rbhr-stage.jpg",
      badge: "Multilateral Diplomacy",
    },
    {
      role: "UN Headquarters Championship Mentor",
      entity: "IIMUN Conference, United Nations HQ, New York",
      year: "2017",
      description:
        "Mentored student delegation to clinch the prestigious Championship Conference trophy at the UN General Assembly Hall in New York.",
      image: "/images/conferences/un-escap-building.jpg",
      badge: "Global Accolade",
    },
    {
      role: "Award for Contribution to Student Development",
      entity: "International Education Awards, Gurgaon",
      year: "2022",
      description:
        "Conferred by Kiteskraft Productions at Hyatt Regency Gurgaon in honor of over two decades of transformative student mentorship.",
      image: "/images/awards/iea-gurgaon-award-2022.jpg",
      badge: "National Honor",
    },
    {
      role: "Theatre Director & Producer",
      entity: "Repertoire of Classic Productions",
      year: "Two Decades",
      description:
        "Directed acclaimed staged performances of Oliver Twist, My Fair Lady, The Sound of Music, The Taming of the Shrew, and The King and I.",
      image: "/images/students/aps-session.jpg",
      badge: "Theatrical Direction",
    },
    {
      role: "National Debate Escort & Trainer",
      entity: "ICAI & Assam Valley School, Tezpur",
      year: "Prestigious Circuits",
      description:
        "Prepared and escorted top youth debaters to the Institute of Chartered Accountants of India (ICAI) competitions and the East India Debate Contest.",
      image: "/images/students/speech-debate-practice.jpg",
      badge: "Competitive Oratory",
    },
    {
      role: "Social Impact Communication Lead",
      entity: "Mine Labour Protection Campaign (MLPC Trust)",
      year: "Ongoing",
      description:
        "Championing ethical transparency, worker health rights, and sustainable alternative livelihoods for silicosis-affected artisan families.",
      image: "/images/conferences/mlpc-un-booth.jpg",
      badge: "Ethical Advocacy",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory-200/50 relative overflow-hidden border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credibility & Recognition"
          title="Experience That Inspires Confidence"
          subtitle="Distinguished milestones spanning international diplomatic forums, national debating stages, and impactful grassroots advocacy."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-ivory-50 border border-ivory-border shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden bg-ivory-300">
                <Image
                  src={exp.image}
                  alt={exp.role}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-ivory-50/95 text-warmBrown border border-ivory-border shadow-sm">
                    {exp.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 text-xs font-mono font-bold text-gold-300 bg-charcoal-900/80 px-2 py-0.5 rounded">
                  {exp.year}
                </div>
              </div>

              <div className="p-6 space-y-2.5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-400 block font-semibold">
                    {exp.entity}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-warmBrown transition-colors mt-0.5">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

