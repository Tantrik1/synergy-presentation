import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check, ShieldCheck, Layers, Target } from "lucide-react";

export function Slide28_WhyMarketrix() {
  return (
    <div className="flex flex-col h-full w-full py-8 justify-between">
      <div className="mb-8">
        <p className="text-cyan-400 tracking-widest text-sm font-semibold uppercase mb-3">Partner Selection</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Why Work With Marketrix Tech Nepal?</h2>
        <p className="text-slate-300 text-lg max-w-4xl">
          We combine local market execution with international digital growth standards to build a reliable client pipeline for Synergy CPA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow items-stretch my-auto">
        <SkeuomorphicCard interactive className="p-8 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold flex items-center justify-center mb-6 shadow-embossed">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Accounting Industry Specialists</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              We understand accounting, tax advisory, and Canadian business client expectations. We know what your ideal client cares about and how to communicate your expertise with total authority.
            </p>
          </div>
        </SkeuomorphicCard>

        <SkeuomorphicCard interactive className="p-8 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold flex items-center justify-center mb-6 shadow-embossed">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">A Complete Growth System</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              General agencies sell isolated services (just SEO or just emails). We build the entire integrated growth engine — SEO, LinkedIn, Video Reels, Reviews, and Email outreach — working together seamlessly.
            </p>
          </div>
        </SkeuomorphicCard>

        <SkeuomorphicCard interactive className="p-8 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold flex items-center justify-center mb-6 shadow-embossed">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Real Business Results</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              No vanity metrics or hiding behind impressions. We track and report on real pipeline growth: phone calls, form messages, and qualified consultation meetings booked for your founders.
            </p>
          </div>
        </SkeuomorphicCard>

        <SkeuomorphicCard className="p-8 border border-cyan-500/40 bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mb-6 shadow-embossed">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Ready to Grow?</h3>
          <p className="text-slate-300 text-sm">Move to the next slide to review our 3 simple onboarding steps.</p>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
