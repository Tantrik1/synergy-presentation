import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Search, ShieldCheck, Flame, Repeat, Target, Database, ArrowRight, Lock } from "lucide-react";

export function Slide13_AutomationStack() {
  const steps = [
    { num: "01", title: "Find", desc: "Finding local business owners who need accounting advice", icon: Search },
    { num: "02", title: "Clean", desc: "Checking email addresses so messages reach real people", icon: ShieldCheck },
    { num: "03", title: "Prepare", desc: "Warming up email accounts so messages land in main inboxes", icon: Flame },
    { num: "04", title: "Send", desc: "Sending friendly emails and LinkedIn notes on schedule", icon: Repeat },
    { num: "05", title: "Check", desc: "Seeing who reads, clicks, or asks for more information", icon: Target },
    { num: "06", title: "Deliver", desc: "Forwarding interested clients straight to your team", icon: Database, primary: true },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">The 6-Step System</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Turn Local Contacts into Consultation Calls</h2>
        <p className="text-slate-400 text-lg max-w-4xl">A clear 6-step process that works quietly in the background to connect with local business leaders.</p>
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
          <h3 className="text-lg font-bold text-white mb-2">You Own Everything 100%</h3>
          <p className="text-slate-400 text-sm">All setup, contact lists, email domains, and accounts are 100% owned by Synergy CPA. Everything stays with you permanently.</p>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
