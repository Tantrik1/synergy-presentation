import React from "react";
import { Building2, Sparkles } from "lucide-react";

export function Slide01_Cover() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center py-8 px-4 sm:px-8">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Centered */}
      <div className="my-auto space-y-8 max-w-4xl flex flex-col items-center">
        <div className="space-y-4 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Prepared for</span>
            <span className="text-white font-semibold">The Synergy CPA Professional Corporation</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15]">
            How to Grow Synergy CPA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
              & Get New Clients Online
            </span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
          A step-by-step plan to help local business owners and newcomers easily find Synergy CPA, trust your service, and become long-term clients.
        </p>
      </div>

      {/* Footer Metadata Grid Centered */}
      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-800 text-center">
        <div>
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Prepared By</p>
          <p className="text-slate-200 font-medium text-sm">Marketrix Tech Nepal</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Target Area</p>
          <p className="text-slate-200 font-medium text-sm">Scarborough &amp; GTA</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Time Plan</p>
          <p className="text-slate-200 font-medium text-sm">12 Months</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Website</p>
          <p className="text-cyan-400 font-medium text-sm">marketrixnepal.com.np</p>
        </div>
      </div>
    </div>
  );
}


