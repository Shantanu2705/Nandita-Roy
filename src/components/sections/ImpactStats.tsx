"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, Calendar, Award, Globe, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

interface StatItemProps {
  numeric: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  isTriggered: boolean;
  isYear?: boolean;
}

function StatCounter({ numeric, suffix, label, description, icon, isTriggered, isYear }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;

    let start = isYear ? numeric - 15 : 0;
    const end = numeric;
    const duration = 1800;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easedProgress);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isTriggered, numeric, isYear]);

  return (
    <div className="relative group p-6 sm:p-8 rounded-2xl bg-ivory-50/90 border border-ivory-border hover:border-amber/50 shadow-card hover:shadow-cardHover transition-all duration-300">
      {/* Top golden accent bar on hover */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-gold-400 via-amber to-brandOrange rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-amber/15 text-warmBrown flex items-center justify-center border border-amber/25 group-hover:bg-amber group-hover:text-charcoal-900 transition-colors">
          {icon}
        </div>
        <span className="text-xs font-mono uppercase tracking-wider text-charcoal-400">
          Impact Metric
        </span>
      </div>

      <div className="space-y-1">
        <div className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-charcoal-900 tracking-tight flex items-baseline gap-0.5">
          <span>{isTriggered ? count.toLocaleString() : (isYear ? numeric : 0)}</span>
          <span className="text-amber font-sans font-bold">{suffix}</span>
        </div>
        <h3 className="text-base sm:text-lg font-serif font-bold text-warmBrown">
          {label}
        </h3>
      </div>

      <p className="mt-3 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
}

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-ivory-200/60 relative overflow-hidden border-b border-ivory-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Milestones of Excellence"
          title="A Journey of Impact and Influence"
          subtitle="Measurable outcomes from two decades of mentoring, student championship triumphs, and nationwide educational leadership."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <StatCounter
            numeric={8000}
            suffix="+"
            label="Students Trained"
            description="Mentored in speech clarity, competitive debate, and holistic confidence across India."
            icon={<Users className="w-6 h-6" />}
            isTriggered={isVisible}
          />

          <StatCounter
            numeric={20}
            suffix="+"
            label="Years of Experience"
            description="Dedicated decades as an educationist, theatre director, editor, and youth mentor."
            icon={<Calendar className="w-6 h-6" />}
            isTriggered={isVisible}
          />

          <StatCounter
            numeric={100}
            suffix="+"
            label="MUN Conferences Mentored"
            description="Guiding delegations through IIMUN, Ivy League, inter-school, and international simulations."
            icon={<Globe className="w-6 h-6" />}
            isTriggered={isVisible}
          />

          <StatCounter
            numeric={2017}
            suffix=""
            label="UN HQ New York Championship"
            description="Students won the Championship Conference at the United Nations Headquarters, New York under her tutelage."
            icon={<Award className="w-6 h-6" />}
            isTriggered={isVisible}
            isYear={true}
          />
        </div>
      </div>
    </section>
  );
}

