import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check } from "lucide-react";

export function Slide11_Pillar2_LinkedIn() {
  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Pillar 02 · Primary Channel</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">LinkedIn: authority above, outreach below</h2>
        <p className="text-slate-400 text-lg max-w-4xl">One channel, two layers running at the same time. Founders build the credibility; automation puts it in front of the right people at scale.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        <SkeuomorphicCard className="p-8 bg-white text-navy-900 border-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-500 font-bold text-xs uppercase tracking-widest rounded-full mb-6">Layer A</div>
          <h3 className="text-3xl font-bold mb-4">Founder-led authority</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            In advisory services, prospects hire people, not logos — especially newcomers, who need a named advisor they can trust.
          </p>
          
          <ul className="space-y-6">
            {[
              "Three founder profiles fully rebuilt — banner, headline, About, Featured",
              "12–16 founder posts a month: POV on Canadian tax news, anonymised client lessons, native video",
              "Company page posting three times a week",
              "Comment strategy on target-account posts to build familiarity before outreach lands"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-metallic-blue text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </SkeuomorphicCard>

        <SkeuomorphicCard className="p-8 bg-navy-900 border border-slate-700">
          <div className="inline-block px-4 py-1.5 bg-metallic-blue text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-embossed mb-6">Layer B</div>
          <h3 className="text-3xl font-bold text-white mb-4">Automated outreach via Snov.io</h3>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Targeted, human-sounding sequences to founders and finance leads across Ontario — sent on schedule, never blasted.
          </p>
          
          <ul className="space-y-6">
            {[
              "ICP targeting: Ontario founders and directors, 10–50 employees, growth-stage",
              "Connection request + three-touch follow-up, personalised per segment",
              "Replies scored and pushed straight into your CRM with full thread history",
              "Daily send limits respected — account safety over vanity volume"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-metallic-blue text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(14,165,233,0.5)]">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-300 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
