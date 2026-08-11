import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Mic, Clock, MessageCircle, Users, Play, Smartphone, PlaySquare, Briefcase, Globe } from "lucide-react";

export function Slide14_Pillar4_Video() {
  const formats = [
    { title: "Ask the CPA", desc: "A founder answers one real client question in plain language.", icon: Mic },
    { title: "Deadline & compliance", desc: "CRA dates, filing changes, what it means for a business owner.", icon: Clock },
    { title: "Myth-buster / client story", desc: "An anonymised lesson from a real engagement.", icon: MessageCircle },
    { title: "Newcomer focus", desc: "First-year Canada questions, spoken to the community directly.", icon: Users },
  ];

  const channels = [
    { title: "Instagram + Facebook Reel", icon: Smartphone },
    { title: "YouTube Short", icon: PlaySquare },
    { title: "LinkedIn native video", icon: Briefcase },
    { title: "Website FAQ / blog entry", icon: Globe },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Pillar 04</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Four videos a month, sixteen-plus placements</h2>
        <p className="text-slate-400 text-lg max-w-4xl">One short recording session per week produces a month of content across every channel. Consistency beats production polish in this format.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-grow">
        {/* Left Column */}
        <div className="col-span-1 lg:col-span-1 flex flex-col gap-4">
          <p className="text-metallic-blue tracking-widest text-xs font-bold uppercase mb-2">The Monthly Slate</p>
          {formats.map((format, i) => (
            <SkeuomorphicCard key={i} className="p-5 flex gap-4 items-center bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-full border border-metallic-blue/20 bg-metallic-blue/5 flex items-center justify-center shrink-0">
                <format.icon className="w-5 h-5 text-metallic-blue" />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-1">{format.title}</h4>
                <p className="text-slate-500 text-xs">{format.desc}</p>
              </div>
            </SkeuomorphicCard>
          ))}
        </div>

        {/* Center Phone Mockup */}
        <div className="col-span-1 flex items-center justify-center py-4">
          <div className="w-[280px] h-[580px] bg-navy-900 rounded-[40px] border-[12px] border-slate-800 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),_0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col">
            <div className="absolute top-0 w-full h-8 flex justify-center pt-2 z-10">
              <div className="w-24 h-4 bg-slate-800 rounded-full" />
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-slate-800 to-navy-900 flex flex-col items-center justify-center p-6 relative">
              <div className="w-16 h-16 bg-metallic-blue rounded-full shadow-embossed flex items-center justify-center mb-8 ml-2 cursor-pointer hover:bg-sky-400 transition-colors">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              
              <div className="text-center w-full">
                <p className="text-metallic-blue text-[10px] font-bold tracking-widest uppercase mb-2">Ask the CPA</p>
                <h3 className="text-white font-bold text-xl leading-tight">"Do I really need<br/>a CFO yet?"</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1 flex flex-col justify-center gap-8">
          <div>
            <p className="text-metallic-blue tracking-widest text-xs font-bold uppercase mb-4">Every Video Becomes</p>
            <div className="space-y-6">
              {channels.map((ch, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shadow-pressed shrink-0">
                    <ch.icon className="w-4 h-4 text-metallic-blue" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{ch.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <SkeuomorphicCard className="p-6 bg-navy-900 border border-slate-700 flex items-center gap-6">
            <div className="text-4xl font-bold text-metallic-blue drop-shadow-md">16+</div>
            <div className="text-sm text-slate-300">placements a month<br/>from 4 recordings</div>
          </SkeuomorphicCard>
        </div>
      </div>
      
      <div className="mt-8 text-sm font-semibold text-slate-300 bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700/50">
        <span className="text-slate-400">Steady-state cadence: </span> 
        LinkedIn 3–4× / week <span className="mx-2 text-slate-600">·</span> 
        Reels 2–3× / week <span className="mx-2 text-slate-600">·</span> 
        Blog + newsletter every two weeks
      </div>
    </div>
  );
}
