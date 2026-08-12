import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { CheckSquare, FileSignature, CreditCard, Rocket, HeartHandshake, Sparkles } from "lucide-react";

export function Slide29_NextSteps() {
  const steps = [
    {
      num: "01",
      title: "Finalize Needed Package",
      desc: "Choose the retainer tier and custom add-on options tailored for your growth goals.",
      time: "This Week",
      icon: CheckSquare,
      color: "text-cyan-400",
      tagBg: "bg-cyan-950/80 text-cyan-400 border-cyan-500/30"
    },
    {
      num: "02",
      title: "Fill Onboarding Form & Contract",
      desc: "Complete the simple onboarding questionnaire and sign the service agreement.",
      time: "Within 3 Days",
      icon: FileSignature,
      color: "text-sky-400",
      tagBg: "bg-sky-950/80 text-sky-400 border-sky-500/30"
    },
    {
      num: "03",
      title: "Pay Advance",
      desc: "Release the initial setup deposit (50%) so production & technical build begins immediately.",
      time: "Days 1–3",
      icon: CreditCard,
      color: "text-emerald-400",
      tagBg: "bg-emerald-950/80 text-emerald-400 border-emerald-500/30"
    },
    {
      num: "04",
      title: "Watch Your Company Grow Digitally",
      desc: "Sit back while we build your engine, launch active campaigns, drive qualified leads, and scale your firm!",
      time: "Day 30 & Onward",
      icon: Rocket,
      color: "text-amber-400",
      tagBg: "bg-amber-950/80 text-amber-400 border-amber-500/30"
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next Steps</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Four Simple Steps to Launch Your Growth Engine</h2>
        <p className="text-slate-300 text-base max-w-4xl leading-relaxed">
          Everything is structured to ensure a smooth, effortless kickoff for the Synergy CPA team.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6 items-stretch">
        {steps.map((step, index) => (
          <SkeuomorphicCard key={index} interactive className="p-6 border border-slate-700/60 flex flex-col justify-between group">
            <div>
              {/* Step Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${step.tagBg}`}>
                  Step {step.num}
                </span>
                <div className={`w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Timeline:</span>
              <span className={`font-semibold ${step.color}`}>{step.time}</span>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>

      {/* Thank You Bottom Banner */}
      <SkeuomorphicCard className="p-6 border border-slate-700/80 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center text-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-embossed">
            <HeartHandshake className="w-5 h-5 text-cyan-400" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Thank you — we are excited to partner with Synergy CPA.
          </h3>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
