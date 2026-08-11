import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { MessageSquare, RefreshCcw, Search, Cpu, CheckCircle2 } from "lucide-react";

export function Slide10_Pillar1B_AEO() {
  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Pillar 01B · Answer Engine Optimisation</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Being the answer, not just a result</h2>
        <p className="text-slate-400 text-lg max-w-4xl">A growing share of "should I hire a fractional CFO?" research now happens inside AI chat, never touching a search results page. Content has to be written to be quoted.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { name: "ChatGPT", icon: MessageSquare },
          { name: "Google AI Overviews", icon: Search },
          { name: "Perplexity", icon: RefreshCcw },
          { name: "Microsoft Copilot", icon: Cpu }
        ].map((engine, i) => (
          <SkeuomorphicCard key={i} className="p-6 flex items-center justify-center gap-3">
            <engine.icon className="w-5 h-5 text-metallic-blue" />
            <span className="font-bold text-white text-sm">{engine.name}</span>
          </SkeuomorphicCard>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <SkeuomorphicCard className="p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-700 shadow-pressed flex items-center justify-center">
              <span className="text-metallic-blue">✍️</span>
            </div>
            How we write for AI answers
          </h3>
          <ul className="space-y-5">
            {[
              "Answer-first format — a direct two-sentence answer, then the detail",
              "FAQ blocks with FAQPage schema on every service page and cornerstone post",
              "CPA credentials shown under every byline, not just on the Team page",
              "Identical name, address, phone and services across web, GBP, Bing and LinkedIn"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-slate-300 items-start">
                <CheckCircle2 className="w-5 h-5 text-metallic-blue shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </SkeuomorphicCard>

        <SkeuomorphicCard className="p-8 bg-gradient-to-br from-slate-800 to-navy-900 flex flex-col justify-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-700 shadow-embossed flex items-center justify-center mb-6">
            <RefreshCcw className="w-8 h-8 text-metallic-blue" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">The monthly AI visibility audit</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Every month we ask all four engines the questions your buyers actually ask — "best fractional CFO in Scarborough", "first year tax filing new to Canada" — and record whether Synergy CPA is named, cited or absent.
          </p>
          <p className="text-metallic-blue font-bold text-sm">
            Content that is not surfacing gets rewritten that month. It is a measurable channel, not a buzzword.
          </p>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
