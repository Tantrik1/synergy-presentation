import React from "react";

export function Slide01_Cover() {
  return (
    <div className="flex flex-col justify-center h-full max-w-4xl">
      <div className="space-y-6">
        <div className="flex items-center gap-4 text-metallic-blue tracking-widest text-sm font-semibold uppercase">
          <span>Prepared For</span>
          <div className="h-[1px] w-8 bg-metallic-blue/50" />
          <span>The Synergy CPA Professional Corporation</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
          Digital Growth & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-metallic-blue to-sky-200">
            Lead Generation Engine
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mt-6">
          A 12-month plan to make Synergy CPA the most visible, most trusted finance partner in Scarborough and the wider GTA — and to deliver qualified leads straight into your CRM.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-slate-700/50 mt-16">
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Prepared By</p>
            <p className="text-slate-200 font-medium">Marketrix Tech Nepal</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Date</p>
            <p className="text-slate-200 font-medium">August 2026</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Term</p>
            <p className="text-slate-200 font-medium">12-month growth plan</p>
          </div>
          <div>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Web</p>
            <p className="text-slate-200 font-medium">marketrixnepal.com.np</p>
          </div>
        </div>
      </div>
    </div>
  );
}
