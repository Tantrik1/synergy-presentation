"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MarketrixLogo } from "@/components/ui/MarketrixLogo";
import { SynergyLogo } from "@/components/ui/SynergyLogo";

interface PresentationControllerProps {
  children: React.ReactNode[];
}

export function PresentationController({ children }: PresentationControllerProps) {
  const totalSlides = React.Children.count(children);

  // Lazy initializer to read hash/localStorage synchronously before first render
  const [currentSlide, setCurrentSlide] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    
    // 1. Check URL Hash (e.g. #slide-5)
    const hash = window.location.hash;
    if (hash && hash.startsWith("#slide-")) {
      const slideNum = parseInt(hash.replace("#slide-", ""), 10) - 1;
      if (!isNaN(slideNum) && slideNum >= 0) {
        return slideNum;
      }
    }
    
    // 2. Check localStorage
    try {
      const saved = localStorage.getItem("synergy_presentation_slide");
      if (saved !== null) {
        const slideNum = parseInt(saved, 10);
        if (!isNaN(slideNum) && slideNum >= 0) {
          return slideNum;
        }
      }
    } catch {
      // ignore SSR / storage errors
    }
    
    return 0;
  });

  const touchStartX = useRef<number | null>(null);

  // Keep state bound within valid slide index range if totalSlides changes
  useEffect(() => {
    if (currentSlide >= totalSlides && totalSlides > 0) {
      setCurrentSlide(totalSlides - 1);
    }
  }, [totalSlides, currentSlide]);

  // Sync currentSlide to localStorage and URL Hash
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("synergy_presentation_slide", currentSlide.toString());
      window.history.replaceState(null, "", `#slide-${currentSlide + 1}`);
    } catch {
      // ignore
    }
  }, [currentSlide]);

  // Handle browser Hash change (e.g. back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#slide-")) {
        const slideNum = parseInt(hash.replace("#slide-", ""), 10) - 1;
        if (!isNaN(slideNum) && slideNum >= 0 && slideNum < totalSlides) {
          setCurrentSlide(slideNum);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-navy-900 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Fixed Header with Larger Original Logos Left and Right */}
      <nav className="fixed top-0 left-0 w-full p-4 sm:p-6 flex justify-between items-center z-50 pointer-events-none">
        <div className="pointer-events-auto flex items-center bg-black/90 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-slate-800 shadow-glass">
          <MarketrixLogo height={56} />
        </div>
        <div className="pointer-events-auto flex items-center bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-glass border border-slate-200">
          <SynergyLogo height={46} />
        </div>
      </nav>

      {/* Bottom Fixed Progress Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 pointer-events-none bg-slate-950/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-800 shadow-glass">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="pointer-events-auto text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-slate-200 font-bold text-sm tabular-nums tracking-widest">
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="pointer-events-auto text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slides Viewport Container */}
      <div
        className="w-full h-full flex transition-transform duration-500 ease-out will-change-transform"
        style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="w-full min-w-full shrink-0 h-full flex items-center justify-center p-6 sm:p-12 md:p-16 pt-24 pb-24 overflow-y-auto"
            style={{
              visibility: Math.abs(index - currentSlide) <= 1 ? "visible" : "hidden"
            }}
          >
            <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
              {child}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
