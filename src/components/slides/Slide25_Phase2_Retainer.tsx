import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check, Sparkles } from "lucide-react";

export function Slide25_Phase2_Retainer() {
  return (
    <div className="flex flex-col justify-center h-full w-full py-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <p className="text-cyan-400 tracking-widest text-xs font-semibold uppercase mb-2">Phase 2 · Monthly Retainer</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Choose Your Monthly Growth Tier</h2>
        <p className="text-slate-300 text-base leading-relaxed">
          Predictable monthly investment covering content creation, SEO, outreach, and bi-weekly reporting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-4">
        
        {/* Starter Plan */}
        <SkeuomorphicCard interactive className="p-7 flex flex-col justify-between border border-slate-700/60">
          <div>
            <div className="mb-5 pb-4 border-b border-slate-700/60">
              <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-slate-800 text-slate-300 border border-slate-700 rounded-full inline-block mb-3">
                Starter Tier
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Foundation</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">Rs. 55,000</span>
                <span className="text-slate-400 text-xs font-medium">/ month</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              {[
                "2 Short Video Reels / month",
                "2 SEO Blog Posts / month",
                "3 Founder LinkedIn posts / month",
                "Up to 50 LinkedIn connection requests / month",
                "150 Legal B2B emails / month",
                "Google Business & review requests",
                "Monthly progress report"
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SkeuomorphicCard>

        {/* Growth Plan (Recommended) */}
        <SkeuomorphicCard interactive className="p-7 flex flex-col justify-between border-2 border-cyan-500 bg-gradient-to-b from-cyan-950/40 via-slate-900 to-slate-950 relative shadow-2xl">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1 text-[10px] font-black tracking-widest uppercase bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 rounded-full shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-slate-950" />
              Recommended Growth Plan
            </span>
          </div>

          <div>
            <div className="mb-5 pb-4 border-b border-slate-700/60 pt-2">
              <h3 className="text-2xl font-bold text-white mb-2">Growth Engine</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-cyan-400">Rs. 95,000</span>
                <span className="text-slate-400 text-xs font-medium">/ month</span>
              </div>
              <p className="text-xs text-cyan-300/90 font-medium mt-2">Designed specifically for Synergy CPA's growth objectives.</p>
            </div>

            <ul className="space-y-3 text-xs text-white">
              {[
                "4 Short Video Reels / month (IG, FB, YT, LinkedIn)",
                "4 SEO Blog Posts / month (Canadian tax & business)",
                "6 Founder LinkedIn posts / month + engagement",
                "Up to 100 new LinkedIn connection & email requests / month",
                "LinkedIn DM tracking & instant lead alert routing",
                "300 Legal B2B emails / month (gradual scaling)",
                "Google Business & automated review requests",
                "Bi-Weekly Progress Reports & Strategy Calls"
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start font-medium">
                  <div className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SkeuomorphicCard>

        {/* Dominance Plan */}
        <SkeuomorphicCard interactive className="p-7 flex flex-col justify-between border border-slate-700/60">
          <div>
            <div className="mb-5 pb-4 border-b border-slate-700/60">
              <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-slate-800 text-slate-300 border border-slate-700 rounded-full inline-block mb-3">
                Full Service Tier
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Dominance</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">Rs. 1,45,000</span>
                <span className="text-slate-400 text-xs font-medium">/ month</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              {[
                "6 Short Video Reels / month",
                "6 SEO Blog Posts / month",
                "10 Founder LinkedIn posts / month",
                "Up to 200+ LinkedIn connection & email requests / month",
                "LinkedIn DM tracking & custom response routing",
                "500+ Legal B2B emails / month",
                "Managed ad boosting optimization (LinkedIn/Google/Meta)",
                "Weekly progress updates & priority support"
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SkeuomorphicCard>

      </div>

      {/* Bottom Right VAT Notice */}
      <div className="flex justify-end pt-2">
        <span className="text-[11px] text-slate-400 font-semibold italic bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-lg">
          * All prices exclude 13% VAT
        </span>
      </div>
    </div>
  );
}
