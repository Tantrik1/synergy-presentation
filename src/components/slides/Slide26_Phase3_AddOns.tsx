import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Video, Film, FileText, Database, ShieldCheck } from "lucide-react";

export function Slide26_Phase3_AddOns() {
  const addons = [
    {
      title: "Signature Brand Video",
      price: "Rs. 30,000",
      unit: "per film shoot & edit",
      desc: "Single high-quality film introducing your founders, team expertise, and services — cut down into 3 short video assets for website, social media, and ads.",
      icon: Video,
      color: "text-amber-400",
      tagBg: "bg-amber-950/80 text-amber-400 border-amber-500/30"
    },
    {
      title: "Additional Short Video Reel",
      price: "Rs. 8,000",
      unit: "per extra Reel",
      desc: "Scripted, edited short-form video Reel created for Instagram, YouTube Shorts, Facebook, and LinkedIn beyond standard monthly retainer limits.",
      icon: Film,
      color: "text-cyan-400",
      tagBg: "bg-cyan-950/80 text-cyan-400 border-cyan-500/30"
    },
    {
      title: "Additional SEO Blog Post",
      price: "Rs. 2,000",
      unit: "per extra article",
      desc: "Fully researched, keyword-optimized Canadian tax & business blog article formatted for website SEO & Answer Engine Optimization (AEO).",
      icon: FileText,
      color: "text-emerald-400",
      tagBg: "bg-emerald-950/80 text-emerald-400 border-emerald-500/30"
    },
    {
      title: "Custom CRM Setup",
      price: "Rs. 30,000",
      unit: "one-time setup",
      desc: "Complete setup and configuration of HubSpot Free or Zoho CRM, including lead capture forms, lead routing rules, and instant team alert webhooks.",
      icon: Database,
      color: "text-sky-400",
      tagBg: "bg-sky-950/80 text-sky-400 border-sky-500/30"
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full py-6 max-w-7xl mx-auto relative">
      <div className="mb-6">
        <p className="text-cyan-400 tracking-widest text-xs font-semibold uppercase mb-2.5">Phase 3 · Custom Scope</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Optional Add-ons &amp; Transparent Rates</h2>
        <p className="text-slate-300 text-base max-w-4xl leading-relaxed">
          Need extra video content, blog articles, or custom CRM setup beyond your monthly retainer? Clear fixed pricing with zero hidden fees.
        </p>
      </div>

      {/* 4 Dark Glass Addon Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 items-stretch">
        {addons.map((addon, index) => (
          <SkeuomorphicCard key={index} interactive className="p-5 border border-slate-700/60 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${addon.tagBg}`}>
                  Add-on Option
                </span>
                <div className={`w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center ${addon.color}`}>
                  <addon.icon className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{addon.title}</h3>
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="text-2xl font-extrabold text-white">{addon.price}</span>
                <span className="text-[10px] text-slate-400 font-medium">{addon.unit}</span>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">{addon.desc}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>

      {/* Bottom Bar */}
      <SkeuomorphicCard className="border border-slate-700/80 p-4 flex items-center gap-4 mb-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-embossed">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-0.5">Paid Ad Boosting: 0% Agency Markup</h4>
          <p className="text-slate-300 text-xs leading-relaxed">
            Starting in Month 3+ upon agreed custom budget, ad boosting spend is paid directly to platforms by Synergy CPA with 0% agency markup.
          </p>
        </div>
      </SkeuomorphicCard>

      {/* Right-Aligned VAT Notice */}
      <div className="flex justify-end">
        <span className="text-[11px] text-slate-400 font-semibold italic bg-slate-900/60 border border-slate-800 px-3.5 py-1.5 rounded-xl">
          * All prices exclude 13% VAT
        </span>
      </div>
    </div>
  );
}
