import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Eye, Sparkles, Flame, PhoneCall, ArrowRight } from "lucide-react";

export function Slide18_LeadDelivery() {
  const aidaSteps = [
    {
      num: "01",
      stage: "Attention",
      subtitle: "Hooking Local Owners",
      desc: "Local business owners discover Synergy CPA through Google Maps, Search, LinkedIn, Reels, and targeted emails.",
      icon: Eye,
      tagBg: "bg-cyan-950/80 text-cyan-400 border-cyan-500/30",
      accentColor: "text-cyan-400"
    },
    {
      num: "02",
      stage: "Interest",
      subtitle: "Engaging Content",
      desc: "Holding owner interest with quick tax tips, founder video clips, and answers to common tax questions.",
      icon: Sparkles,
      tagBg: "bg-sky-950/80 text-sky-400 border-sky-500/30",
      accentColor: "text-sky-400"
    },
    {
      num: "03",
      stage: "Desire",
      subtitle: "Trust & Social Proof",
      desc: "Building strong desire through 5-star Google reviews, client success stories, and free 2026 Tax Guides.",
      icon: Flame,
      tagBg: "bg-emerald-950/80 text-emerald-400 border-emerald-500/30",
      accentColor: "text-emerald-400"
    },
    {
      num: "04",
      stage: "Action",
      subtitle: "Lead Consultation",
      desc: "Driving owners to act — tapping to call or submitting a consultation request delivered straight to your inbox.",
      icon: PhoneCall,
      tagBg: "bg-amber-950/80 text-amber-400 border-amber-500/30",
      accentColor: "text-amber-400"
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full py-6 max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <p className="text-cyan-400 tracking-widest text-xs font-semibold uppercase mb-3">The AIDA Marketing Funnel</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Attention, Interest, Desire &amp; Action</h2>
        <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
          Our proven 4-stage funnel guides local business owners step-by-step from discovering Synergy CPA to booking a consultation call.
        </p>
      </div>

      {/* Compact 4-Card Funnel Flow without empty space */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {aidaSteps.map((step, index) => (
          <SkeuomorphicCard key={index} interactive className="p-6 flex flex-col justify-between border border-slate-700/60 group h-full">
            <div>
              {/* Stage Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${step.tagBg}`}>
                  {step.num} · {step.stage}
                </span>
                <div className={`w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center ${step.accentColor}`}>
                  <step.icon className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{step.subtitle}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>
    </div>
  );
}
