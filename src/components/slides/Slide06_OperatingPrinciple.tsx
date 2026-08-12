import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { CheckCircle2, Database } from "lucide-react";

export function Slide06_OperatingPrinciple() {
  const marketrixOwns = [
    "Website traffic, Google search setup, and clear articles",
    "LinkedIn posts and direct messages to local business owners",
    "Helpful email guides and automatic follow-up messages",
    "Short video creation, social posts, and 5-star Google reviews",
    "Collecting client requests and sending them to your team"
  ];

  const synergyOwns = [
    "Answering calls & emails",
    "Meeting new clients",
    "Sending price quotes",
    "Doing the accounting & tax work"
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">How We Work Together</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We bring interested clients. <br/>
            You talk to them and win the work.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-lg">
            A clear division of tasks so your team can focus 100% on serving accounting clients.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-emerald-400 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                What Marketrix Does
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
                What Synergy CPA Does
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
          
          <h3 className="text-3xl font-bold text-white mb-4">Leads arrive ready to talk</h3>
          <p className="text-slate-400 mb-8">
            Every interested business owner gets sent straight to your contact list or inbox with their name, phone number, and requested service attached.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-metallic-blue shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Automatic Delivery</h4>
                <p className="text-sm text-slate-400">Leads land instantly in your inbox without any manual copy-pasting.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-metallic-blue shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Instant Alerts</h4>
                <p className="text-sm text-slate-400">Receive an immediate email or WhatsApp alert when a lead requests a call.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-metallic-blue shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Clear Tracking</h4>
                <p className="text-sm text-slate-400">You can always see which page, video, or search term brought in each client.</p>
              </div>
            </div>
          </div>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
