"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, Sparkles, Video as VideoIcon, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { videosData } from "@/data/videos";

export default function VideoGalleryPage() {
  const [activeVideo, setActiveVideo] = useState<(typeof videosData)[0] | null>(null);

  return (
    <div className="bg-ivory-100 min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-ivory-200/80 to-ivory-100 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Media Archive"
            title="Video Gallery & Literary Dialogues"
            subtitle="Author interviews, webinars, and coaching highlights exploring youth empowerment, self-expression, and communication mastery."
          />
        </div>
      </section>

      {/* Main Video Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosData.map((v) => (
              <div
                key={v.id}
                className="group rounded-3xl overflow-hidden bg-ivory-50 border-2 border-ivory-border shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div className="relative h-60 w-full overflow-hidden bg-charcoal-900">
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/30 group-hover:bg-charcoal-950/10 transition-colors" />

                  {/* Play Button */}
                  <button
                    onClick={() => setActiveVideo(v)}
                    className="absolute inset-0 flex items-center justify-center focus:outline-none"
                    aria-label={`Watch ${v.title}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-amber/95 text-charcoal-900 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-charcoal-900 stroke-transparent translate-x-0.5" />
                    </div>
                  </button>

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

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-warmBrown font-bold uppercase tracking-wider block mb-1">
                      {v.guestOrTopic}
                    </span>
                    <h2 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-warmBrown transition-colors leading-snug">
                      {v.title}
                    </h2>
                    <p className="mt-2.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                      {v.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-ivory-border flex items-center justify-between">
                    <button
                      onClick={() => setActiveVideo(v)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-warmBrown hover:text-amber-dark transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-warmBrown stroke-transparent" />
                      <span>Watch Video</span>
                    </button>

                    {v.youtubeUrl && (
                      <a
                        href={v.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-charcoal-500 hover:text-charcoal-800 transition-colors inline-flex items-center gap-1 font-mono"
                      >
                        <span>YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/90 backdrop-blur-md p-4 sm:p-6"
        >
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setActiveVideo(null)}
          />

          <div className="relative z-10 w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-charcoal-700">
            <div className="flex items-center justify-between p-4 bg-charcoal-900 border-b border-charcoal-800 text-white">
              <span className="font-serif text-sm sm:text-base font-semibold truncate pr-4">
                {activeVideo.title}
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-full text-ivory-300 hover:text-white hover:bg-charcoal-800 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-video bg-black">
              {activeVideo.localVideoUrl ? (
                <video
                  src={activeVideo.localVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

