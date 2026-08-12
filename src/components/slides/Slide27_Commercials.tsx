import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check, ShieldCheck, Sparkles, Lock } from "lucide-react";

export function Slide27_Commercials() {
  const steps = [
    {
      num: "01",
      when: "Project Kickoff (Day 01)",
      title: "Initial Setup Deposit",
      price: "50% of Setup Fee (Rs. 70,000)",
      what: "Onboarding, technical audit, SEO, profiles & brand film production begins."
    },
    {
      num: "02",
      when: "End of Month 1 (Day 30)",
      title: "Setup Launch Balance",
      price: "Remaining 50% of Setup (Rs. 70,000)",
      what: "Setup complete! Brand film delivered & campaign engine actively launches."
    },
    {
      num: "03",
      when: "End of Month 2 (Day 60)",
      title: "Month 2 Retainer",
      price: "Agreed Package Price",
      what: "Billed at the end of Month 2 based on your selected monthly retainer tier."
    },
    {
      num: "04",
      when: "Month 3+ Onward",
      title: "Ongoing Monthly Billing",
      price: "Agreed Package + Boost / Add-ons",
      what: "Selected package retainer + optional agreed ad boosting / add-ons billed at month end."
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full py-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="mb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Simple Payment Schedule</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Billing Timeline &amp; Commercial Terms</h2>
        <p className="text-slate-300 text-base max-w-4xl leading-relaxed">
          Setup is split into 2 milestones, followed by your agreed package price billed at month end.
        </p>
      </div>

      {/* 4 Glassmorphed Horizontal Step Rows */}
      <div className="space-y-3 mb-5">
        {steps.map((step, index) => (
          <SkeuomorphicCard key={index} interactive className="p-4 border border-slate-700/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Step Number & Timing */}
            <div className="flex items-center gap-4 min-w-[240px]">
              <span className="text-xs font-extrabold tracking-widest px-3 py-1 rounded-full border border-slate-700 bg-slate-900/90 text-cyan-400 shrink-0">
                STEP {step.num}
              </span>
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{step.when}</p>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
              </div>
            </div>

            {/* Price Tag */}
            <div className="md:px-5 py-1 md:border-l md:border-slate-800 shrink-0 min-w-[280px]">
              <p className="text-lg font-black text-cyan-400">{step.price}</p>
            </div>

            {/* Description */}
            <div className="md:px-5 py-1 md:border-l md:border-slate-800 flex-1">
              <p className="text-slate-300 text-xs font-medium leading-relaxed">{step.what}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>

      {/* Glassmorphed Trust Badges & Bottom Right VAT */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 w-full">
          <SkeuomorphicCard className="p-3 border border-slate-700/70 flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs font-semibold text-white">0% Hidden Fees</span>
          </SkeuomorphicCard>

          <SkeuomorphicCard className="p-3 border border-slate-700/70 flex items-center gap-3">
            <Check className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs font-semibold text-white">Billed After Work Delivered</span>
          </SkeuomorphicCard>

          <SkeuomorphicCard className="p-3 border border-slate-700/70 flex items-center gap-3">
            <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs font-semibold text-white">30-Day Flexible Terms</span>
          </SkeuomorphicCard>
        </div>

        <span className="text-[11px] text-slate-400 font-semibold italic bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-xl shrink-0">
          * All prices exclude 13% VAT
        </span>
      </div>
    </div>
  );
}
