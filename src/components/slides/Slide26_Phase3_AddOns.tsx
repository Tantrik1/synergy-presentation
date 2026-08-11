import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { PlusCircle } from "lucide-react";

export function Slide26_Phase3_AddOns() {
  const addons = [
    { title: "Paid Social Media Budget", desc: "Paid directly to Meta/Google by Synergy CPA. We recommend starting at $1,500/mo in Month 3.", icon: PlusCircle },
    { title: "Additional Video Shoots", desc: "Rs. 25,000 per half-day shoot if you want to stockpile content beyond the initial brand film and monthly remote recordings.", icon: PlusCircle },
    { title: "Custom Web Development", desc: "Billed at Rs. 2,500/hr if you require advanced calculators, client portals, or API integrations outside the standard scope.", icon: PlusCircle },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Phase 3</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Add-ons & Pass-through Costs</h2>
        <p className="text-slate-400 text-lg max-w-4xl">We believe in zero markup on media spend and clear boundaries on scope.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow mb-8">
        {addons.map((addon, index) => (
          <SkeuomorphicCard key={index} className="p-8 bg-white border border-slate-200 flex flex-col items-center text-center shadow-glass">
            <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-pressed">
              <addon.icon className="w-8 h-8 text-metallic-blue" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">{addon.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{addon.desc}</p>
          </SkeuomorphicCard>
        ))}
      </div>

      <SkeuomorphicCard className="bg-navy-900 border border-slate-700 p-8 shadow-embossed mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-white font-bold text-lg mb-2">Our policy on ad spend</h4>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Many agencies charge a percentage of your media spend as their management fee. We don't. Your retainer covers our management; you pay the platforms directly. It keeps our incentives aligned on efficiency, not volume.
            </p>
          </div>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
