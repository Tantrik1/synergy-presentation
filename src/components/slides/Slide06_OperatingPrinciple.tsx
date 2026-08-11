import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { CheckCircle2, Database } from "lucide-react";

export function Slide06_OperatingPrinciple() {
  const marketrixOwns = [
    "Traffic, content, SEO and AI-answer visibility",
    "LinkedIn presence and automated B2B outreach",
    "Email campaigns, sequences and nurture tracks",
    "Video production, social publishing and reviews",
    "Lead capture, qualification and CRM routing"
  ];

  const synergyOwns = [
    "Sales calls",
    "Proposals",
    "Closing",
    "Client delivery",
    "Compliance sign-off"
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Our Operating Principle</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We build and run the demand engine. <br/>
            You run the conversations.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-lg">
            Clear scope on day one prevents every awkward conversation in month six. Here is exactly where our responsibility starts and stops.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-emerald-400 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                Marketrix Owns
              </h3>
              <ul className="space-y-3">
                {marketrixOwns.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-4">
                Synergy CPA Owns
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-400 text-sm">
                {synergyOwns.map((item, i) => (
                  <span key={i} className="flex items-center">
                    {item}
                    {i < synergyOwns.length - 1 && <span className="mx-4 text-slate-600">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <SkeuomorphicCard className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-800 to-navy-900">
          <div className="w-16 h-16 rounded-2xl bg-metallic-blue shadow-embossed flex items-center justify-center mb-8">
            <Database className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">Leads arrive ready to work</h3>
          <p className="text-slate-400 mb-8">
            Every qualified lead lands in your existing CRM — or one we set up for you — with the channel, the campaign, the page they converted on and the full message history attached.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-metallic-blue shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">No spreadsheet handovers</h4>
                <p className="text-sm text-slate-400">Leads sync automatically, not in a monthly export.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-metallic-blue shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Instant alerts</h4>
                <p className="text-sm text-slate-400">Email and WhatsApp notification the moment a lead qualifies.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-metallic-blue shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Full attribution</h4>
                <p className="text-sm text-slate-400">You always know which channel paid for which client.</p>
              </div>
            </div>
          </div>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
