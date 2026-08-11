import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";

export function Slide20_Roadmap() {
  const phases = [
    {
      month: "Month 1",
      title: "Foundation",
      items: [
        "Full technical and content audit",
        "GBP and Bing Places claimed and verified",
        "GA4, GTM, pixels and call tracking live",
        "Technical SEO fixes and schema deployed",
        "Snov.io infrastructure and domain warm-up",
        "Brand film scripted and shot"
      ]
    },
    {
      month: "Month 2",
      title: "Activation",
      items: [
        "Four videos live across all channels",
        "Founder LinkedIn posting begins",
        "First outreach sequences go out",
        "Review request workflow switched on",
        "First four SEO blog posts published",
        "Brand film delivered and placed"
      ]
    },
    {
      month: "Months 3–4",
      title: "Amplification",
      items: [
        "Facebook and Instagram ads launch",
        "Two dedicated landing pages shipped",
        "Retargeting audiences built from pixel data",
        "First keyword ranking movement",
        "15–20 Google reviews reached",
        "Conversion rate gate reviewed"
      ]
    },
    {
      month: "Months 5–12",
      title: "Compounding",
      items: [
        "Ad spend scaled against proven cost per lead",
        "Google Search campaigns introduced",
        "ICP and keyword clusters expanded",
        "Cornerstone AEO guides published quarterly",
        "Monthly reporting and strategy cadence",
        "Full attribution by channel"
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Roadmap</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Foundation, activation, amplification, compounding</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
        {phases.map((phase, index) => (
          <SkeuomorphicCard key={index} className="flex flex-col overflow-hidden">
            <div className="p-6 bg-navy-900 border-b border-slate-700">
              <p className="text-metallic-blue font-bold text-sm tracking-widest uppercase mb-2">{phase.month}</p>
              <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
            </div>
            <div className="p-6 bg-slate-800 flex-grow">
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-metallic-blue mt-1.5 shadow-[0_0_8px_rgba(14,165,233,0.6)] shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>
    </div>
  );
}
