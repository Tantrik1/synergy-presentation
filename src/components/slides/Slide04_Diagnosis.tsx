import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { MapPin, Sparkles, PhoneCall, Video, TrendingUp, Bot } from "lucide-react";

export function Slide04_Diagnosis() {
  const opportunities = [
    {
      title: "Unclaimed Google Maps Spot",
      desc: "Currently missing from the local map pack — claiming and optimizing your profile puts you first when local business owners search 'accountant near me'.",
      icon: MapPin,
      color: "text-emerald-400"
    },
    {
      title: "Hidden 5-Star Reviews",
      desc: "You have happy clients, but no public 5-star Google reviews yet — building a simple review flow creates instant trust with newcomers and business owners.",
      icon: Sparkles,
      color: "text-cyan-400"
    },
    {
      title: "Missing 1-Tap Phone Access",
      desc: "Visitors cannot easily tap to call from mobile — adding prominent 1-tap phone buttons lets interested clients reach your team in just 1 click.",
      icon: PhoneCall,
      color: "text-emerald-400"
    },
    {
      title: "Untapped Founder Videos",
      desc: "Your 3 expert founders are not on video yet — creating short, friendly video clips showcases your global credentials and Canadian tax authority.",
      icon: Video,
      color: "text-cyan-400"
    },
    {
      title: "Untracked Marketing Results",
      desc: "Currently no live system to count calls or inquiries — connecting simple dashboards lets you watch every phone call and consultation request live.",
      icon: TrendingUp,
      color: "text-emerald-400"
    },
    {
      title: "Unformatted AI Answers",
      desc: "Service pages need clear Question & Answer formatting so ChatGPT and Google AI recommend Synergy CPA as Scarborough’s top accounting firm.",
      icon: Bot,
      color: "text-cyan-400"
    },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-relaxed">
          6 High-Impact Opportunities Missing From Your Digital Footprint Today
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {opportunities.map((item, index) => (
          <SkeuomorphicCard key={index} className="p-6 md:p-8 flex flex-col items-start gap-4 border border-slate-700/60 hover:border-cyan-500/40 transition-all duration-300">
            <div className={`w-12 h-12 rounded-2xl shadow-embossed bg-slate-800 flex items-center justify-center ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>
    </div>
  );
}
