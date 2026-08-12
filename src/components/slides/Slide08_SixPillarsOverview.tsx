import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Globe, Briefcase, Mail, Video, Star, Megaphone } from "lucide-react";

export function Slide08_SixPillarsOverview() {
  const pillars = [
    { num: "01", title: "Google Search & AI Answers", desc: "Updating web pages so people find you first on Google and ChatGPT.", icon: Globe, primary: true },
    { num: "02", title: "LinkedIn Posts & Messages", desc: "Sharing expert advice and sending friendly messages to local business owners.", icon: Briefcase, primary: true },
    { num: "03", title: "Helpful Email Outreach", desc: "Sending verified, friendly email messages to business owners to book calls.", icon: Mail, primary: false },
    { num: "04", title: "Videos & Social Media", desc: "4 short videos every month shared on Reels, Shorts, and social channels.", icon: Video, primary: false },
    { num: "05", title: "5-Star Reviews & Trust", desc: "Setting up Google reviews so prospective clients trust your team instantly.", icon: Star, primary: false },
    { num: "06", title: "Online Ads (Month 3+)", desc: "Facebook and Instagram ads launched once we confirm the website converts well.", icon: Megaphone, primary: false },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">The Growth Steps</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">6 simple steps to get more clients</h2>
        <p className="text-slate-400 text-lg max-w-4xl">Google Search and LinkedIn bring in the most inquiries. The other 4 steps support and grow them.</p>
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
                    Main Step
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
