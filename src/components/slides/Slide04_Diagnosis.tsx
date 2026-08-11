import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { EyeOff, Star, PhoneOff, VideoOff, Activity, AlertCircle } from "lucide-react";

export function Slide04_Diagnosis() {
  const gaps = [
    { title: "No Google Business Profile", desc: "You are invisible in the map pack — where most local 'accountant near me' searches end.", icon: EyeOff, color: "text-red-400" },
    { title: "Zero public reviews", desc: "Strong testimonials exist on-site, but nothing third-party-verified that a stranger will trust.", icon: Star, color: "text-red-400" },
    { title: "No phone number on the site", desc: "The highest-intent action a visitor can take is blocked on every page.", icon: PhoneOff, color: "text-red-400" },
    { title: "No video presence anywhere", desc: "Three credentialed founders, and none of that trust is visible or moving.", icon: VideoOff, color: "text-red-400" },
    { title: "No conversion tracking", desc: "No GA4 goals, no pixels, no call tracking — spend today cannot be measured or defended.", icon: Activity, color: "text-red-400" },
    { title: "Thin pages, no schema", desc: "Service pages and blog are not structured for search engines or AI answer engines.", icon: AlertCircle, color: "text-red-400" },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Diagnosis</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Six gaps standing between you and inbound leads</h2>
        <p className="text-slate-400 text-lg">Every recommendation later in this deck traces back to one of these findings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {gaps.map((gap, index) => (
          <SkeuomorphicCard key={index} className="p-6 md:p-8 flex flex-col items-start gap-4">
            <div className={`w-12 h-12 rounded-full shadow-pressed bg-slate-800 flex items-center justify-center ${gap.color}`}>
              <gap.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{gap.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{gap.desc}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>
    </div>
  );
}
