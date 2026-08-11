import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check } from "lucide-react";

export function Slide25_Phase2_Retainer() {
  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Phase 2 · Monthly Retainer</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose the engine size</h2>
        <p className="text-slate-400 text-sm">Billed monthly in advance. Ad spend and tool subscriptions are separate and paid at cost.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
        {/* Starter */}
        <SkeuomorphicCard className="p-8 flex flex-col bg-slate-800 border border-slate-700/50">
          <div className="mb-6">
            <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-slate-700 text-slate-300 rounded-full shadow-embossed inline-block mb-6">Starter</span>
            <h3 className="text-2xl font-bold text-white mb-2">Foundation</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-metallic-blue">Rs. 55,000</span>
              <span className="text-slate-400 text-sm">/ month</span>
            </div>
            <p className="text-slate-400 text-sm h-12">A steady baseline of organic visibility and inbound enquiry.</p>
          </div>
          <ul className="space-y-4 flex-grow text-sm">
            {[
              "2 SEO blog posts per month",
              "Company LinkedIn page, 3× per week",
              "Email outreach — 500 verified contacts",
              "2 videos per month",
              "Reviews and profile management",
              "Monthly performance report"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-300 items-start">
                <Check className="w-5 h-5 text-metallic-blue shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SkeuomorphicCard>

        {/* Growth (Recommended) */}
        <SkeuomorphicCard className="p-8 flex flex-col bg-navy-900 border border-metallic-blue shadow-[0_0_15px_rgba(14,165,233,0.3)] relative -translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-metallic-blue text-white rounded-full shadow-embossed">Recommended</span>
          </div>
          <div className="mb-6 mt-4">
            <h3 className="text-3xl font-bold text-white mb-2">Growth</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold text-metallic-blue">Rs. 95,000</span>
              <span className="text-slate-400 text-sm">/ month</span>
            </div>
            <p className="text-slate-300 text-sm font-medium h-12">Full-funnel coverage. This is the package this plan is written for.</p>
          </div>
          
          <div className="text-sm font-bold text-white mb-4">Everything in Foundation, plus:</div>
          
          <ul className="space-y-4 flex-grow text-sm">
            {[
              "4 blog posts + quarterly cornerstone guide",
              "Founder-led LinkedIn across 3 profiles",
              "Snov.io outreach — 1,000–1,500 contacts",
              "4 videos per month → 16+ placements",
              "Landing page and CRO testing",
              "Bi-weekly reporting + strategy call"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-white items-start">
                <div className="w-5 h-5 rounded-full bg-metallic-blue shadow-[0_0_8px_rgba(14,165,233,0.8)] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-navy-900 font-bold" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SkeuomorphicCard>

        {/* Dominance */}
        <SkeuomorphicCard className="p-8 flex flex-col bg-slate-800 border border-slate-700/50">
          <div className="mb-6">
            <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-slate-700 text-slate-300 rounded-full shadow-embossed inline-block mb-6">Full Service</span>
            <h3 className="text-2xl font-bold text-white mb-2">Dominance</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-metallic-blue">Rs. 1,45,000</span>
              <span className="text-slate-400 text-sm">/ month</span>
            </div>
            <p className="text-slate-400 text-sm h-12">Everything running at once, including managed paid media.</p>
          </div>
          
          <div className="text-sm font-bold text-white mb-4">Everything in Growth, plus:</div>
          
          <ul className="space-y-4 flex-grow text-sm">
            {[
              "Facebook, Instagram & Google Ads",
              "Retargeting & lookalike audiences",
              "6 videos per month",
              "Outreach — 2,500–3,000 contacts",
              "Dedicated account manager",
              "Weekly reporting"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-300 items-start">
                <Check className="w-5 h-5 text-metallic-blue shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SkeuomorphicCard>
      </div>

      <div className="mt-8 text-center text-xs text-slate-500">
        All figures in Nepalese Rupees, exclusive of applicable taxes. Scope and volumes are customisable — this is a starting structure, not a fixed menu.
      </div>
    </div>
  );
}
