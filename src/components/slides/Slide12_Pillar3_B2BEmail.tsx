import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { UserCheck, MailCheck, TrendingUp, Send } from "lucide-react";

export function Slide12_Pillar3_B2BEmail() {
  const blocks = [
    {
      title: "Legal Lead Capture",
      desc: "Collecting emails legally through website signup forms, blog subscriptions, newsletter forms, and tax guide downloads.",
      icon: UserCheck
    },
    {
      title: "Targeted Business Sourcing",
      desc: "Finding and verifying email addresses of local business owners across Ontario using reliable B2B data tools.",
      icon: MailCheck
    },
    {
      title: "Safe 300/mo Start & Scaling",
      desc: "Starting with 300 emails in Month 1 to protect your domain safety, then gradually scaling up as sender reputation builds.",
      icon: TrendingUp
    },
    {
      title: "Helpful Content & Offers",
      desc: "Sending practical tax advice, business finance tips, and friendly invitations for a free consultation call.",
      icon: Send
    },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-10">
        <p className="text-cyan-400 tracking-widest text-sm font-semibold uppercase mb-3">Step 03</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Legal &amp; Targeted Email Marketing</h2>
        <p className="text-slate-300 text-lg max-w-4xl">We collect verified emails legally, start with a safe volume of 300 emails a month, and gradually scale up to bring you consistent client inquiries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow mb-8">
        {blocks.map((block, i) => (
          <SkeuomorphicCard key={i} interactive className="p-8 flex gap-6 items-start border border-slate-700/60">
            <div className="w-12 h-12 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center shrink-0 shadow-embossed">
              <block.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{block.title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm">{block.desc}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>

      <SkeuomorphicCard className="p-6 flex flex-wrap justify-between gap-6 border border-slate-700/80 items-center">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-cyan-400">300 / mo</span>
          <span className="text-slate-300 text-sm">start volume in Month 1</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-cyan-400">Gradual</span>
          <span className="text-slate-300 text-sm">monthly scaling</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-cyan-400">100% Legal</span>
          <span className="text-slate-300 text-sm">opt-in &amp; verified contacts</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-cyan-400">Primary</span>
          <span className="text-slate-300 text-sm">inbox delivery</span>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
