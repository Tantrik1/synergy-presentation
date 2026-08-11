import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check } from "lucide-react";

export function Slide28_WhyMarketrix() {
  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Partner Selection</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Marketrix?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        <SkeuomorphicCard className="p-8 bg-white border border-slate-200">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6 shadow-pressed">
            <span className="text-xl font-bold text-navy-900">1</span>
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Specialists, not generalists</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            We don't build ecommerce sites for sneaker brands on Tuesday and CPA firms on Wednesday. We understand the regulatory environment you operate in, the difference between bookkeeping and advisory, and what your ideal client actually cares about.
          </p>
        </SkeuomorphicCard>

        <SkeuomorphicCard className="p-8 bg-white border border-slate-200">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6 shadow-pressed">
            <span className="text-xl font-bold text-navy-900">2</span>
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">A complete ecosystem</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Most agencies sell you the one thing they are good at — SEO, or ads, or email. But an email without a credible LinkedIn profile fails. An ad sending traffic to a slow website fails. We build the entire engine because these pieces only work together.
          </p>
        </SkeuomorphicCard>

        <SkeuomorphicCard className="p-8 bg-white border border-slate-200">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6 shadow-pressed">
            <span className="text-xl font-bold text-navy-900">3</span>
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-4">No vanity metrics</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            We won't send you a report celebrating "impressions" if the phone didn't ring. We measure our success on one metric: qualified conversations generated for your partners.
          </p>
        </SkeuomorphicCard>

        <SkeuomorphicCard className="p-8 bg-navy-900 border border-slate-700 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-full bg-metallic-blue flex items-center justify-center mb-6 shadow-embossed">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Ready to build?</h3>
          <p className="text-slate-400">Move to the final slide to schedule your kickoff.</p>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
