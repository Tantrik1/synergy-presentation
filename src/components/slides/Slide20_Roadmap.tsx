import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";

export function Slide20_Roadmap() {
  const phases = [
    {
      month: "Month 1",
      title: "Foundation Setup",
      subtitle: "Audit & Profiles",
      items: [
        "Website & SEO optimization setup",
        "Google Maps & Bing Places verified",
        "Analytics & call tracking connected",
        "Email domain security & 300 list setup",
        "Brand film scripted & scheduled"
      ]
    },
    {
      month: "Month 2",
      title: "Activation",
      subtitle: "Content Launch",
      items: [
        "4 Video Reels published across platforms",
        "6 Founder LinkedIn posts launched",
        "First 300 email campaigns delivered",
        "Google Review request workflow active",
        "Brand film delivered & featured"
      ]
    },
    {
      month: "Months 3–4",
      title: "Amplification",
      subtitle: "Ad Boosting & Scale",
      items: [
        "Custom ad boosting launched (agreed budget)",
        "LinkedIn, Google & Meta ads live",
        "Google Maps ranking improvements",
        "15–20 public 5-star Google reviews",
        "Email list volume gradually increased"
      ]
    },
    {
      month: "Months 5–12",
      title: "Compounding Growth",
      subtitle: "Ongoing Success",
      items: [
        "Continuous video & LinkedIn content",
        "Targeted ad boosting scaled on ROI",
        "Ongoing Google Review collection",
        "Bi-weekly reporting & strategy updates",
        "Steady inbound consultation calls"
      ]
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full py-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <p className="text-cyan-400 tracking-widest text-xs font-semibold uppercase mb-2.5">12-Month Execution Plan</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Foundation, Activation, Amplification &amp; Growth</h2>
        <p className="text-slate-300 text-base max-w-4xl leading-relaxed">
          A clear, step-by-step roadmap showing what gets built when and how your client pipeline scales over the 12-month period.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {phases.map((phase, index) => (
          <SkeuomorphicCard key={index} interactive className="p-6 border border-slate-700/60 h-full flex flex-col justify-between">
            <div>
              <div className="mb-4 pb-3 border-b border-slate-700/60">
                <span className="text-cyan-400 font-bold text-[10px] tracking-widest uppercase bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  {phase.month}
                </span>
                <h3 className="text-lg font-bold text-white mb-0.5">{phase.title}</h3>
                <p className="text-xs text-slate-400 font-medium">{phase.subtitle}</p>
              </div>

              <ul className="space-y-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
                    <span>{item}</span>
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
