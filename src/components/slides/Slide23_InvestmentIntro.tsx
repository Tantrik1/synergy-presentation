import React from "react";
import { CreditCard } from "lucide-react";

export function Slide23_InvestmentIntro() {
  return (
    <div className="flex flex-col justify-center h-full max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-8xl md:text-9xl font-bold text-slate-800/40 -ml-1">04</h1>
        
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase">Investment</p>
        
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
          Transparent pricing, <br />
          predictable billing
        </h2>
        
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mt-6">
          Setup, monthly retainer options, optional add-ons and the recurring payment schedule.
        </p>
      </div>

      <div className="absolute right-12 md:right-32 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-64 h-64 rounded-full bg-slate-800 shadow-embossed border border-slate-700/50">
        <CreditCard className="w-24 h-24 text-white" />
      </div>
    </div>
  );
}
