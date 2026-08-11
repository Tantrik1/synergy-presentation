import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";

export function Slide17_Pillar6_PaidSocial() {
  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Pillar 06</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Paid social starts in Month 3 — and not before</h2>
        <p className="text-slate-400 text-lg max-w-4xl">Sending paid traffic to an untracked page buys expensive data, not clients. Spend scales on proof, never on the calendar.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow items-center">
        {/* Chart representation */}
        <SkeuomorphicCard className="p-8 bg-white h-[400px] flex flex-col justify-end relative shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
          <p className="absolute top-8 left-1/2 -translate-x-1/2 font-bold text-navy-900 text-sm">Phased ad investment — Facebook & Instagram first</p>
          
          <div className="flex justify-between items-end h-[250px] w-full mt-auto relative z-10 px-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">0</span>
              <div className="w-10 md:w-16 h-0 bg-metallic-blue rounded-t" />
              <span className="text-xs font-bold text-slate-500">M1</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">0</span>
              <div className="w-10 md:w-16 h-0 bg-metallic-blue rounded-t" />
              <span className="text-xs font-bold text-slate-500">M2</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">40k</span>
              <div className="w-10 md:w-16 h-[80px] bg-metallic-blue rounded-t shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]" />
              <span className="text-xs font-bold text-slate-500">M3</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">50k</span>
              <div className="w-10 md:w-16 h-[100px] bg-metallic-blue rounded-t shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]" />
              <span className="text-xs font-bold text-slate-500">M4</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">65k</span>
              <div className="w-10 md:w-16 h-[130px] bg-metallic-blue rounded-t shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]" />
              <span className="text-xs font-bold text-slate-500">M5</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">80k</span>
              <div className="w-10 md:w-16 h-[160px] bg-metallic-blue rounded-t shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]" />
              <span className="text-xs font-bold text-slate-500">M6</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-400">110k</span>
              <div className="w-10 md:w-16 h-[220px] bg-metallic-blue rounded-t shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]" />
              <span className="text-xs font-bold text-slate-500">M7+</span>
            </div>
          </div>
          <div className="absolute bottom-[30px] left-8 right-8 border-b border-slate-200" />
        </SkeuomorphicCard>

        {/* Phase Details */}
        <div className="space-y-6">
          <SkeuomorphicCard className="p-6 bg-white border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-navy-900 text-sm">Months 1–2</h3>
              <span className="text-slate-500 font-bold text-sm">Zero paid spend</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">Foundation, tracking and creative only. Nothing to spend against yet.</p>
          </SkeuomorphicCard>
          
          <SkeuomorphicCard className="p-6 bg-white border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-metallic-blue text-sm">Months 3–4</h3>
              <span className="text-navy-900 font-bold text-sm">Facebook & Instagram launch</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">GTA geo-targeting, newcomer interest audiences, founder video as primary creative.</p>
          </SkeuomorphicCard>
          
          <SkeuomorphicCard className="p-6 bg-white border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-metallic-blue text-sm">Months 5–6</h3>
              <span className="text-navy-900 font-bold text-sm">Retargeting layer</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">Pixel audiences re-engaged; only organically proven video gets boosted.</p>
          </SkeuomorphicCard>
          
          <SkeuomorphicCard className="p-6 bg-white border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-navy-900 text-sm">Month 7+</h3>
              <span className="text-navy-900 font-bold text-sm">Google Search added</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">High-intent keyword campaigns, expanded once cost per lead holds steady.</p>
          </SkeuomorphicCard>
        </div>
      </div>

      <div className="mt-8 bg-navy-900 rounded-xl p-6 border border-slate-700 shadow-embossed">
        <p className="text-white text-sm font-semibold leading-relaxed">
          The gate: we only increase spend once the landing page converts at 3–5% and cost per qualified lead is known. Ad budget is paid directly to the platforms by Synergy CPA.
        </p>
      </div>
    </div>
  );
}
