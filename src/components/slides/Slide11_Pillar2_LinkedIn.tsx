import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check } from "lucide-react";

export function Slide11_Pillar2_LinkedIn() {
  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-10">
        <p className="text-cyan-400 tracking-widest text-sm font-semibold uppercase mb-3">Step 02 · Main Channel</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">LinkedIn: Building Trust &amp; Connecting with Owners</h2>
        <p className="text-slate-300 text-lg max-w-4xl">Founders post helpful tax tips publicly, while friendly messages reach local business owners directly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        {/* Part 1 Glass Card */}
        <SkeuomorphicCard className="p-8 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="inline-block px-4 py-1.5 bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Part 1
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Helpful Founder Posts</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              People hire accountants they know and trust. We make your founder profiles look professional and trustworthy.
            </p>

            <ul className="space-y-5">
              {[
                "3 Founder Profiles Redesigned — new photo banners, clear titles, and bio details",
                "6 Founder Posts a Month — easy tax tips, client success stories, and short videos",
                "Company Page Active — posting updates 3 times every week",
                "Friendly Community Comments — liking and commenting on local business posts"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 shadow-embossed">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-200 leading-relaxed text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SkeuomorphicCard>

        {/* Part 2 Glass Card */}
        <SkeuomorphicCard className="p-8 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="inline-block px-4 py-1.5 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Part 2
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Direct Friendly Messages</h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Personalized, friendly introduction messages sent directly to business owners across Ontario.
            </p>

            <ul className="space-y-5">
              {[
                "Targeted Local Owners — reaching founders of growing Ontario businesses",
                "Connection Request & 3 Follow-ups — short, friendly messages that start conversations",
                "Replies Forwarded to You — responses go straight to your email inbox",
                "Safe Message Speeds — sending at natural, safe daily speeds to protect accounts"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-embossed">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-200 leading-relaxed text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
