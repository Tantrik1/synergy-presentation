import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Zap } from "lucide-react";

export function Slide05_Opportunity() {
  const assets = [
    { num: "3", title: "Certified Founders", desc: "Qualified in Canada & UK — top accounting degrees that give clients total confidence." },
    { num: "4", title: "Countries of Experience", desc: "Canada, UK, UAE, and Nepal — real global experience no competitor in Scarborough can match." },
    { num: "2", title: "Special Focus Groups", desc: "Part-time CFO advice for growing businesses, and tax help for newcomers to Canada." },
    { num: "11", title: "Live Service Pages", desc: "Your web pages are already published — we will format them so Google ranks them higher." },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8 justify-center">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">The Opportunity</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">You already have great strengths</h2>
        <p className="text-slate-400 text-lg max-w-4xl">Synergy CPA already has amazing credentials that most accounting firms take years to build.</p>
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
          <h3 className="text-xl font-bold text-white mb-2">You have a great business. We just need to make sure everyone sees it.</h3>
          <p className="text-slate-400">Our job is to put your experience on Google, social media, and YouTube so new clients discover you and call your team.</p>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
