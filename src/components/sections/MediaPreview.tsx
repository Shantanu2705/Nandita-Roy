"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight, Video, X } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { videosData } from "@/data/videos";

export default function MediaPreview() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-ivory-200/50 relative overflow-hidden border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Conversations & Dialogues"
          title="Conversations, Ideas & Inspiration"
          subtitle="Engaging literary and educational dialogues, author interviews, and highlights reflecting Nandita's perspective on human fulfillment and youth mentorship."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((v) => (
            <div
              key={v.id}
              className="group rounded-2xl overflow-hidden bg-ivory-50 border border-ivory-border shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-charcoal-900">
                <Image
                  src={v.thumbnail}
                  alt={v.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-charcoal-950/30 group-hover:bg-charcoal-950/10 transition-colors" />

                {/* Play Button Overlay */}
                <button
                  onClick={() => setActiveVideoId(v.youtubeId || "local")}
                  className="absolute inset-0 flex items-center justify-center focus:outline-none"
                  aria-label={`Play ${v.title}`}
                >
                  <div className="w-14 h-14 rounded-full bg-amber/90 group-hover:bg-amber text-charcoal-900 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-charcoal-900 stroke-transparent translate-x-0.5" />
                  </div>
                </button>

                {/* Category & Duration Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                  <span className="bg-charcoal-900/80 backdrop-blur-sm px-2.5 py-1 rounded font-medium">
                    {v.category}
                  </span>
                  {v.duration && (
                    <span className="bg-charcoal-900/80 backdrop-blur-sm px-2 py-0.5 rounded font-mono">
                      {v.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-warmBrown font-bold uppercase tracking-wider block mb-1">
                    {v.guestOrTopic}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-warmBrown transition-colors leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed">
                    {v.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-ivory-border/80">
                  <button
                    onClick={() => setActiveVideoId(v.youtubeId || "local")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-warmBrown hover:text-amber-dark transition-colors"
                  >
                    <span>Watch Recording</span>
                    <Play className="w-3.5 h-3.5 fill-warmBrown stroke-transparent" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Video Gallery */}
        <div className="mt-12 text-center">
          <Link
            href="/video-gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase bg-charcoal-900 text-white hover:bg-warmBrown shadow-card transition-all"
          >
            <span>Explore All Media & Recordings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideoId && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/90 backdrop-blur-md p-4 sm:p-6"
        >
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setActiveVideoId(null)}
          />

          <div className="relative z-10 w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-charcoal-700">
            <div className="flex items-center justify-between p-4 bg-charcoal-900 border-b border-charcoal-800 text-white">
              <span className="font-serif text-sm font-semibold truncate">
                Video Player
              </span>
              <button
                onClick={() => setActiveVideoId(null)}
                className="p-1 rounded-full text-ivory-300 hover:text-white hover:bg-charcoal-800 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-video bg-black">
              {activeVideoId === "local" ? (
                <video
                  src="/videos/nandita-speaking-highlight.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

