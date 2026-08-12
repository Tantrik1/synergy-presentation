import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { DollarSign, Layers, TrendingUp, CheckCircle, Search, Share2, Sparkles, BarChart2, ShieldCheck } from "lucide-react";

export function Slide17_Pillar6_PaidSocial() {
  return (
    <div className="flex flex-col h-full w-full py-8 justify-between">
      <div className="mb-8">
        <p className="text-cyan-400 tracking-widest text-sm font-semibold uppercase mb-3">Step 06 · Paid Ad Boosting</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Targeted Ad Boosting After Month 3</h2>
        <p className="text-slate-300 text-lg max-w-4xl">
          Starting in Month 3, we begin boosting high-performing content across LinkedIn, Google, and Meta (Facebook &amp; Instagram) based on an agreed custom extra budget.
        </p>
      </div>

      {/* 3 Main Strategy Cards with Intriguing Visual Graphics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow items-stretch my-auto">
        
        {/* Card 1: Months 1-2 Organic Testing */}
        <SkeuomorphicCard interactive className="p-7 flex flex-col justify-between border border-slate-700/60 group">
          <div>
            {/* Visual Graphic Element */}
            <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 p-4 mb-6 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                  Phase 01 · Validation
                </span>
                <span className="text-xs font-black text-emerald-400">$0 Ad Spend</span>
              </div>
              <div className="flex items-end gap-2 pt-2">
                <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                  <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[85%]" />
                </div>
                <span className="text-[11px] font-bold text-slate-300">Organic</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Months 1–2: Organic Testing</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zero initial ad spend. We set up profiles, publish organic posts, and identify which topics get the best engagement before spending a dollar.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Spend Gate:</span>
            <span className="text-cyan-400 font-semibold">100% Organic First</span>
          </div>
        </SkeuomorphicCard>

        {/* Card 2: Month 3+ Custom Agreed Budget */}
        <SkeuomorphicCard interactive className="p-7 flex flex-col justify-between border border-slate-700/60 group">
          <div>
            {/* Visual Graphic Element */}
            <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 p-4 mb-6 flex flex-col justify-between relative overflow-hidden group-hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  Phase 02 · Boosting
                </span>
                <span className="text-xs font-bold text-emerald-400">Month 3+</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-xl">
                <span className="text-xs text-slate-300 font-medium">Custom Ad Budget:</span>
                <span className="text-xs font-bold text-emerald-400">Agreed Amount</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Month 3+: Agreed Budget</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Starting in Month 3, upon your mutual agreement on an extra dollar budget, we launch paid boosting for maximum local reach.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Approval:</span>
            <span className="text-emerald-400 font-semibold">Mutual Agreement</span>
          </div>
        </SkeuomorphicCard>

        {/* Card 3: Proper Multi-Channel Distribution */}
        <SkeuomorphicCard interactive className="p-7 flex flex-col justify-between border border-slate-700/60 group">
          <div>
            {/* Visual Graphic Element */}
            <div className="w-full h-24 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 p-3.5 mb-6 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                  Phase 03 · Distribution
                </span>
                <span className="text-xs font-bold text-slate-300">3 Ad Platforms</span>
              </div>
              <div className="flex items-center justify-between gap-1.5 pt-1">
                <span className="flex-1 text-center py-1 rounded-lg bg-blue-950/80 border border-blue-500/40 text-[10px] font-bold text-blue-400">LinkedIn</span>
                <span className="flex-1 text-center py-1 rounded-lg bg-amber-950/80 border border-amber-500/40 text-[10px] font-bold text-amber-400">Google</span>
                <span className="flex-1 text-center py-1 rounded-lg bg-sky-950/80 border border-sky-500/40 text-[10px] font-bold text-sky-400">Meta</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Multi-Channel Distribution</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Budget is allocated properly across LinkedIn Ads (b2b owners), Google Ads (search intent), and Meta Ads (Facebook &amp; Instagram).
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Targeting:</span>
            <span className="text-cyan-400 font-semibold">Local Business Owners</span>
          </div>
        </SkeuomorphicCard>

      </div>

      {/* Platforms & Agreed Budget Bar */}
      <SkeuomorphicCard className="mt-8 p-6 flex flex-wrap justify-between gap-6 border border-slate-700/80 items-center">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-cyan-400">Month 3</span>
          <span className="text-slate-300 text-sm">boosting launch</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-emerald-400">Custom $</span>
          <span className="text-slate-300 text-sm">agreed extra budget</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-cyan-400">3 Platforms</span>
          <span className="text-slate-300 text-sm">LinkedIn · Google · Meta</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-cyan-400">Targeted</span>
          <span className="text-slate-300 text-sm">local owner reach</span>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
