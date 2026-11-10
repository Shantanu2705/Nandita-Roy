import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase",
            light
              ? "bg-gold-400/20 text-gold-300 border border-gold-400/30"
              : "bg-amber/15 text-warmBrown border border-amber/30"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18]",
          light ? "text-white" : "text-charcoal-900"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-sans",
            light ? "text-ivory-200" : "text-charcoal-600"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Subtle editorial divider line */}
      <div
        className={cn(
          "h-0.5 w-16 mt-5 bg-gradient-to-r from-amber to-gold-400 rounded-full",
          isCenter ? "mx-auto" : "mr-auto"
        )}
      />
    </div>
  );
}

