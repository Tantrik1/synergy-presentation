import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";

export function Slide09_Pillar1_SEO() {
  const points = [
    { num: "1", title: "Technical foundation", desc: "Core Web Vitals, crawl and indexation fixes, XML sitemap, and full schema markup — Organization, LocalBusiness, Person and FAQPage." },
    { num: "2", title: "On-page optimisation", desc: "All 11 service pages expanded to 600–900 words with process, FAQ and CTA. Unique titles and meta descriptions; duplicate H1s removed." },
    { num: "3", title: "Local search dominance", desc: "Dedicated geo landing pages for Scarborough and the GTA, plus citations across CPA Ontario, BBB, Clutch, chambers and newcomer organisations." },
    { num: "4", title: "Two content silos", desc: "Fractional CFO & advisory, and newcomer & cross-border tax — four supporting posts a month, interlinked back to pillar pages." },
    { num: "5", title: "Conversion layer", desc: "Click-to-call in the header, embedded booking calendar on Coffee & Clarity, and a persistent trust bar with credentials and reviews." },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Pillar 01 · Primary Channel</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Website SEO: the only channel that compounds</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 flex-grow">
        <div className="flex-1 space-y-8">
          {points.map((point, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full shadow-pressed bg-navy-900 flex items-center justify-center text-white font-bold shrink-0">
                {point.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <SkeuomorphicCard className="p-0 overflow-hidden border border-slate-700 bg-white">
            <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center gap-2">
              <div className="flex gap-1.5 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-navy-900 text-slate-400 text-xs px-4 py-1.5 rounded-full flex-grow text-center font-mono">
                thesynergycpa.com
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-navy-900 mb-6">Fractional CFO & Tax Advisory<br/>for Growing Canadian Businesses</h4>
              <div className="flex gap-4 mb-8">
                <div className="px-6 py-2 bg-metallic-blue text-white font-bold rounded-lg text-sm">Book a call</div>
                <div className="px-6 py-2 border border-slate-300 text-slate-700 font-bold rounded-lg text-sm">+1 (416) ••• ••••</div>
              </div>
              <div className="flex gap-4 mb-8 text-xs font-bold text-slate-500">
                <div className="px-4 py-2 bg-slate-100 rounded">CPA ONTARIO</div>
                <div className="px-4 py-2 bg-slate-100 rounded">★★★★★ GOOGLE</div>
                <div className="px-4 py-2 bg-slate-100 rounded">4 COUNTRIES</div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 w-full rounded" />
                <div className="h-4 bg-slate-200 w-5/6 rounded" />
                <div className="h-4 bg-slate-200 w-4/6 rounded" />
              </div>
            </div>
          </SkeuomorphicCard>

          <SkeuomorphicCard className="p-8 bg-navy-900 border border-slate-700 mt-auto">
            <h3 className="text-xl font-bold text-white mb-3">Why SEO leads this plan</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ads stop the day you stop paying. A ranked page, a schema-marked FAQ and a five-star profile keep working every month afterwards — which is why we build them before we spend a rupee on media.
            </p>
          </SkeuomorphicCard>
        </div>
      </div>
    </div>
  );
}
