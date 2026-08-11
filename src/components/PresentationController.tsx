"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PresentationControllerProps {
  children: React.ReactNode[];
}

export function PresentationController({ children }: PresentationControllerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
      className="relative w-full h-screen overflow-hidden bg-navy-900"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="w-8 h-8 rounded-lg bg-metallic-blue flex items-center justify-center font-bold text-white shadow-embossed">
            M
          </div>
          <span className="font-semibold text-slate-200 tracking-wider text-sm hidden sm:block">
            MARKETRIX TECH NEPAL
          </span>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex gap-2 pointer-events-auto">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentSlide === i 
                  ? "bg-metallic-blue shadow-[0_0_10px_rgba(14,165,233,0.7)]" 
                  : "bg-slate-700 hover:bg-slate-600 shadow-pressed"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 pointer-events-none bg-slate-800/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/5 shadow-glass">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="pointer-events-auto text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-slate-300 font-medium text-sm tabular-nums">
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

      {/* Slides Container */}
      <div 
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div 
            key={index} 
            className="w-full h-full flex-shrink-0 flex items-center justify-center p-6 sm:p-12 md:p-24 overflow-y-auto"
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
