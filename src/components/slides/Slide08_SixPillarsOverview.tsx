import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Globe, Briefcase, Mail, Video, Star, Megaphone } from "lucide-react";

export function Slide08_SixPillarsOverview() {
  const pillars = [
    { num: "01", title: "Website SEO & AEO", desc: "Technical fixes, 11 optimised service pages, schema, local landing pages and AI-answer formatting.", icon: Globe, primary: true },
    { num: "02", title: "LinkedIn Authority", desc: "Founder-led posting plus automated, targeted outreach to GTA decision-makers via Snov.io.", icon: Briefcase, primary: true },
    { num: "03", title: "B2B Email Outreach", desc: "Verified ICP lists, warmed domains and five-touch sequences that book consults, not opens.", icon: Mail, primary: false },
    { num: "04", title: "Social & Video", desc: "Four videos every month, each cut into Reels, Shorts, LinkedIn native and quote graphics.", icon: Video, primary: false },
    { num: "05", title: "Reviews & Trust", desc: "GBP, Bing Places, directories, review workflow and a testimonial engine that travels.", icon: Star, primary: false },
    { num: "06", title: "Paid Social — Month 3+", desc: "Facebook and Instagram targeting, launched only once tracking proves the funnel converts.", icon: Megaphone, primary: false },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">The Engine</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Six pillars, two of them carrying the weight</h2>
        <p className="text-slate-400 text-lg max-w-4xl">Website SEO and LinkedIn are the primary growth channels. Everything else feeds, proves or amplifies them.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <SkeuomorphicCard 
            key={index} 
            className={`p-6 md:p-8 flex flex-col relative overflow-hidden ${pillar.primary ? 'bg-slate-800 border border-slate-700' : 'bg-slate-800/80'}`}
          >
            <div className="flex justify-between items-start mb-8">
              <div className={`w-12 h-12 rounded-full shadow-pressed flex items-center justify-center ${pillar.primary ? 'bg-navy-900 text-metallic-blue' : 'bg-slate-700 text-slate-400'}`}>
                <pillar.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-4xl font-bold text-slate-700/50">{pillar.num}</span>
                {pillar.primary && (
                  <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-metallic-blue text-white rounded-full shadow-embossed">
                    Primary
                  </span>
                )}
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>
    </div>
  );
}
