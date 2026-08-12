import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check, Search, MapPin, Share2, Video } from "lucide-react";

export function Slide24_Phase1_Setup() {
  const steps = [
    {
      num: "01",
      week: "Week 1",
      category: "Website SEO, AEO & Meta Tags",
      icon: Search,
      color: "text-cyan-400",
      tagBg: "bg-cyan-950/80 text-cyan-400 border-cyan-500/30",
      items: [
        "Website SEO & Answer Engine Optimization (AEO)",
        "Meta tags, OpenGraph & schema markup setup",
        "Meta pixel, LinkedIn insight & GA4 tracking connected",
        "Initial SEO blog architecture setup"
      ]
    },
    {
      num: "02",
      week: "Week 2",
      category: "Google Business & Reviews Engine",
      icon: MapPin,
      color: "text-sky-400",
      tagBg: "bg-sky-950/80 text-sky-400 border-sky-500/30",
      items: [
        "Google Business Profile & Bing Places claim & optimization",
        "Automated Google Review request workflow active",
        "Local business directory citations setup"
      ]
    },
    {
      num: "03",
      week: "Week 3",
      category: "Social Media & LinkedIn Profiles",
      icon: Share2,
      color: "text-emerald-400",
      tagBg: "bg-emerald-950/80 text-emerald-400 border-emerald-500/30",
      items: [
        "Social media channels setup (IG, FB, YT Shorts)",
        "Founder LinkedIn profiles complete makeover",
        "Branded social graphic templates ready"
      ]
    },
    {
      num: "04",
      week: "Week 4",
      category: "Rs. 30,000 Signature Brand Video",
      icon: Video,
      color: "text-amber-400",
      tagBg: "bg-amber-950/80 text-amber-400 border-amber-500/30",
      items: [
        "Scripting, shoot & HD editing for Brand Film",
        "3 short cut-down video Reels created",
        "Featured on homepage, social media & ads"
      ]
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full py-6 max-w-7xl mx-auto relative">
      {/* Title and Price in ONE Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-800">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Phase 1 · Complete Setup</h2>
        </div>

        {/* Price Tag in Same Row */}
        <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-700/80 px-6 py-3.5 rounded-2xl shrink-0 shadow-glass">
          <div>
            <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">All-Inclusive Setup</p>
            <p className="text-3xl font-extrabold text-white">Rs. 1,40,000</p>
          </div>
          <div className="pl-4 border-l border-slate-800 text-[11px] text-slate-300">
            Includes <span className="text-amber-400 font-bold">Rs. 30k Brand Film</span>
          </div>
        </div>
      </div>

      <p className="text-slate-300 text-base max-w-5xl leading-relaxed mb-6">
        Complete setup covering website SEO, AEO, meta tags, pixels, Google Business Profile, social media, founder LinkedIn, and your Rs. 30k Signature Brand Video.
      </p>

      {/* 4 Equal Setup Cards in a Clean Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch mb-4">
        {steps.map((step, index) => (
          <SkeuomorphicCard key={index} interactive className="p-5 border border-slate-700/60 flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-3.5">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${step.tagBg}`}>
                  {step.week}
                </span>
                <div className={`w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-4 h-4" />
                </div>
              </div>

              <h4 className="font-bold text-white text-sm mb-2.5 flex items-center gap-1.5">
                <span className="text-slate-400 font-mono text-xs">{step.num}.</span>
                <span>{step.category}</span>
              </h4>

              <ul className="space-y-2">
                {step.items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                    <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${step.color}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-800 text-[10px] font-semibold text-slate-400 flex items-center justify-between">
              <span>Status:</span>
              <span className={step.color}>Ready by {step.week}</span>
            </div>
          </SkeuomorphicCard>
        ))}
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
