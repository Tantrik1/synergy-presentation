import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Zap } from "lucide-react";

export function Slide05_Opportunity() {
  const assets = [
    { num: "3", title: "Credentialed founders", desc: "FCCA (UK) · CPA CGA (Canada) — visible expertise is the single strongest ranking and trust signal available to you." },
    { num: "4", title: "Countries of experience", desc: "Canada, UK, UAE and Nepal — a cross-border story no competitor in Scarborough can copy." },
    { num: "2", title: "High-value niches", desc: "Fractional CFO for growing businesses, and first-year tax for newcomers to Canada." },
    { num: "11", title: "Service pages ready", desc: "Already written and live — they simply are not optimised, structured or interlinked yet." },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8 justify-center">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">The Opportunity</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The raw material is already there</h2>
        <p className="text-slate-400 text-lg max-w-4xl">None of the gaps above are positioning problems. Synergy CPA already has assets most firms in the GTA spend years trying to build.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {assets.map((asset, index) => (
          <SkeuomorphicCard key={index} className="p-8">
            <h3 className="text-6xl font-bold text-metallic-blue mb-6 drop-shadow-md">{asset.num}</h3>
            <h4 className="text-xl font-bold text-white mb-3">{asset.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{asset.desc}</p>
          </SkeuomorphicCard>
        ))}
      </div>

      <SkeuomorphicCard className="p-8 border-l-4 border-l-metallic-blue flex gap-6 items-start">
        <div className="w-12 h-12 rounded-full bg-metallic-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
          <Zap className="w-6 h-6 text-metallic-blue" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">The problem is not what Synergy CPA is. It is that almost nobody can see it.</h3>
          <p className="text-slate-400">Our entire job is converting existing credibility into visible, searchable, shareable proof — then routing the demand it creates into your pipeline.</p>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
