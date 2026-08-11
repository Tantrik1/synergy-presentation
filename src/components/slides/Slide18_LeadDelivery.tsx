import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Target, Filter, CheckSquare, Database, Bell, ArrowRight, Handshake } from "lucide-react";

export function Slide18_LeadDelivery() {
  const steps = [
    { num: "01", title: "Attract", desc: "SEO · LinkedIn · Email · Video · Ads", icon: Target },
    { num: "02", title: "Capture", desc: "Forms · Booking calendar · Click-to-call · DM · Reply", icon: Filter },
    { num: "03", title: "Qualify", desc: "Scored on ICP fit and intent signal", icon: CheckSquare },
    { num: "04", title: "Route", desc: "Pushed into your CRM with full context", icon: Database },
    { num: "05", title: "Notify", desc: "Instant email and WhatsApp alert to your team", icon: Bell },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Lead Delivery</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From stranger to CRM record, in five steps</h2>
        <p className="text-slate-400 text-lg max-w-4xl">This is the handover point. Everything left of the line is ours; everything right of it is your sales conversation.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-12 flex-grow overflow-x-auto pb-4 custom-scrollbar">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <SkeuomorphicCard className="p-6 min-w-[200px] flex-1 flex flex-col items-start bg-slate-800 h-full">
              <div className="flex justify-between items-center w-full mb-6">
                <span className="text-metallic-blue font-bold text-sm">{step.num}</span>
                <div className="w-12 h-12 rounded-full shadow-pressed bg-slate-700 flex items-center justify-center text-metallic-blue">
                  <step.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </SkeuomorphicCard>
            
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-metallic-blue hidden lg:block flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkeuomorphicCard className="p-8 bg-navy-900 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <Database className="w-6 h-6 text-white" />
            Works with your CRM, or we set one up
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            We integrate with whatever Synergy CPA already uses. If there is no CRM in place yet, we will configure HubSpot Free or Zoho at no licence cost and hand you the keys — set up once, owned by you permanently.
          </p>
        </SkeuomorphicCard>
        
        <SkeuomorphicCard className="p-8 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
          <h3 className="text-xl font-bold text-amber-500 mb-4 flex items-center gap-3">
            <Handshake className="w-6 h-6 text-amber-500" />
            Where our scope ends
          </h3>
          <p className="text-amber-500/80 leading-relaxed text-sm">
            Marketrix does not make sales calls, send proposals, negotiate fees or close engagements. We deliver a qualified, contextualised lead into your pipeline — your team owns the conversation from there.
          </p>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
