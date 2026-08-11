import React from "react";
import { Layers } from "lucide-react";

export function Slide07_EngineIntro() {
  return (
    <div className="flex flex-col justify-center h-full max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-8xl md:text-9xl font-bold text-slate-800/40 -ml-1">02</h1>
        
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase">The Growth Engine</p>
        
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
          Six pillars, built <br />
          in sequence
        </h2>
        
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mt-6">
          Foundations first, distribution second, paid spend last — and only once the numbers earn it.
        </p>
      </div>

      <div className="absolute right-12 md:right-32 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-64 h-64 rounded-full bg-slate-800 shadow-embossed border border-slate-700/50">
        <Layers className="w-24 h-24 text-metallic-blue" />
      </div>
    </div>
  );
}
