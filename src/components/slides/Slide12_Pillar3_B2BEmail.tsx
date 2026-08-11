import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Filter, ShieldAlert, Send, Bookmark } from "lucide-react";

export function Slide12_Pillar3_B2BEmail() {
  const blocks = [
    { title: "List building & verification", desc: "Snov.io email finder against a defined ICP, then multi-tier verification. We hold bounce rate under 3% — above that, domains get burned.", icon: Filter },
    { title: "Domain & mailbox warm-up", desc: "A dedicated sending domain with SPF, DKIM and DMARC configured, warmed over two weeks before a single prospect is contacted.", icon: ShieldAlert },
    { title: "Five-touch sequences", desc: "Separate tracks for fractional CFO, newcomer tax and year-end compliance — each ending with a soft Coffee & Clarity invitation.", icon: Send },
    { title: "Lead magnet & nurture", desc: "The 2026 Tax & Cash Flow Playbook as the gated hook, followed by an automated nurture track for everyone who downloads.", icon: Bookmark },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Pillar 03</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">B2B email that reaches the inbox</h2>
        <p className="text-slate-400 text-lg max-w-4xl">Cold email fails on deliverability far more often than on copy. We treat the technical setup as the campaign.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow mb-8">
        {blocks.map((block, i) => (
          <SkeuomorphicCard key={i} className="p-8 flex gap-6 items-start bg-white border border-slate-200 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]">
            <div className="w-12 h-12 rounded-full border border-metallic-blue/20 bg-metallic-blue/5 flex items-center justify-center shrink-0">
              <block.icon className="w-5 h-5 text-metallic-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{block.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{block.desc}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>

      <div className="bg-navy-900 rounded-xl p-6 flex flex-wrap justify-between gap-6 border border-slate-700 shadow-embossed items-center">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-metallic-blue">1,000–1,500</span>
          <span className="text-slate-400 text-sm">verified contacts / month</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-metallic-blue">5</span>
          <span className="text-slate-400 text-sm">touches per sequence</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-metallic-blue">&lt;3%</span>
          <span className="text-slate-400 text-sm">bounce rate ceiling</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-metallic-blue">24h</span>
          <span className="text-slate-400 text-sm">reply-to-CRM routing</span>
        </div>
      </div>
    </div>
  );
}
