import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Search, ShieldCheck, Flame, Repeat, Target, Database, ArrowRight, Lock } from "lucide-react";

export function Slide13_AutomationStack() {
  const steps = [
    { num: "01", title: "Find", desc: "ICP search and email finder builds the target list", icon: Search },
    { num: "02", title: "Verify", desc: "Multi-tier verification strips invalid and risky addresses", icon: ShieldCheck },
    { num: "03", title: "Warm", desc: "Domain and mailbox warm-up protects deliverability", icon: Flame },
    { num: "04", title: "Sequence", desc: "Email and LinkedIn touches fire on one shared schedule", icon: Repeat },
    { num: "05", title: "Score", desc: "Opens, clicks and replies scored against intent signals", icon: Target },
    { num: "06", title: "Route", desc: "Qualified lead pushed to your CRM with full context", icon: Database, primary: true },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">The Automation Stack</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How Snov.io turns a name into a booked conversation</h2>
        <p className="text-slate-400 text-lg max-w-4xl">One platform runs LinkedIn outreach and email sequencing side by side, so a prospect gets a coherent sequence rather than two disconnected pitches.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between flex-grow mb-8 overflow-x-auto pb-4 custom-scrollbar">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <SkeuomorphicCard 
              className={`p-6 min-w-[200px] flex-1 flex flex-col items-center text-center ${step.primary ? 'bg-navy-900 border border-slate-700' : 'bg-slate-800'}`}
            >
              <span className="text-metallic-blue font-bold text-sm mb-6">{step.num}</span>
              <div className="w-16 h-16 rounded-full shadow-pressed bg-slate-700 flex items-center justify-center text-white mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </SkeuomorphicCard>
            
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-slate-600 hidden lg:block flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      <SkeuomorphicCard className="p-6 flex items-start gap-6 bg-slate-800/50">
        <div className="w-12 h-12 rounded-full shadow-pressed bg-slate-700 flex items-center justify-center flex-shrink-0">
          <Lock className="w-5 h-5 text-metallic-blue" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Your data, your accounts</h3>
          <p className="text-slate-400 text-sm">Every tool is provisioned under Synergy CPA ownership. If we ever part ways, the domains, sequences, lists and CRM data stay with you — nothing is held hostage in an agency account.</p>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
