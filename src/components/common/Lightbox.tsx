"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const currentImage = isOpen ? images[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % images.length;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIdx);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/90 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Background Overlay click to close */}
      <div
        className="absolute inset-0 cursor-zoom-out"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Top Controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-3">
        <span className="text-xs font-mono text-ivory-300 bg-charcoal-800/80 px-3 py-1.5 rounded-full border border-charcoal-700">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-charcoal-800/80 text-white hover:bg-amber hover:text-charcoal-900 transition-all border border-charcoal-700 focus:outline-none focus:ring-2 focus:ring-amber"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-charcoal-800/80 text-white hover:bg-amber hover:text-charcoal-900 transition-all border border-charcoal-700 focus:outline-none focus:ring-2 focus:ring-amber"
        aria-label="Previous image (Left Arrow)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-charcoal-800/80 text-white hover:bg-amber hover:text-charcoal-900 transition-all border border-charcoal-700 focus:outline-none focus:ring-2 focus:ring-amber"
        aria-label="Next image (Right Arrow)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Content Container */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="relative w-full h-[65vh] sm:h-[75vh] flex items-center justify-center pointer-events-auto">
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-3 text-center max-w-2xl px-4 pointer-events-auto">
          <h3 className="text-white font-serif text-lg sm:text-xl font-bold">
            {currentImage.title}
          </h3>
          <p className="text-ivory-300 text-xs sm:text-sm mt-1">
            {currentImage.description}
          </p>
          {(currentImage.location || currentImage.year) && (
            <div className="flex items-center justify-center gap-3 mt-1.5 text-[11px] text-gold-400 font-mono">
              {currentImage.location && <span>{currentImage.location}</span>}
              {currentImage.location && currentImage.year && <span>·</span>}
              {currentImage.year && <span>{currentImage.year}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

