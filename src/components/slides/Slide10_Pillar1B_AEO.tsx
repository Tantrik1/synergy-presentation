import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { MessageSquare, RefreshCcw, Search, Cpu, CheckCircle2 } from "lucide-react";

export function Slide10_Pillar1B_AEO() {
  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Step 01B · AI Assistant Visibility</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Getting Recommended by AI Search Tools</h2>
        <p className="text-slate-400 text-lg max-w-4xl">Many business owners ask ChatGPT or Google AI for advice like 'Who is the best accountant in Scarborough?' We make sure AI recommends Synergy CPA.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { name: "ChatGPT", icon: MessageSquare },
          { name: "Google AI", icon: Search },
          { name: "Perplexity AI", icon: RefreshCcw },
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
            How we format web pages for AI
          </h3>
          <ul className="space-y-5">
            {[
              "Direct Answers First — 2 clear sentences at the top of every page so AI can quote you",
              "Common Questions — simple Question & Answer sections on every service page",
              "Founder Qualifications — showing your CPA degree clearly on every page",
              "Matching Contact Info — keeping name, address, and phone number identical across the web"
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
          <h3 className="text-xl font-bold text-white mb-4">Monthly AI Recommendation Check</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Every month we test common questions inside ChatGPT and Google AI — like 'best part-time CFO in Scarborough' or 'tax help for newcomers to Canada' — to check if Synergy CPA gets recommended.
          </p>
          <p className="text-metallic-blue font-bold text-sm">
            If an AI tool does not recommend Synergy CPA, we update the page until it does.
          </p>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
