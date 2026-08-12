import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Video, Share2, Sparkles, Play, Volume2 } from "lucide-react";

export function Slide14_Pillar4_Video() {
  const highlights = [
    {
      title: "4 Short Video Reels Per Month",
      desc: "One quick monthly recording turned into 4 high-quality, professional video Reels.",
      icon: Video
    },
    {
      title: "Posted Across All Social Media",
      desc: "Published automatically across Instagram, Facebook, YouTube Shorts, and LinkedIn.",
      icon: Share2
    },
    {
      title: "Engaging & Brand-Consistent",
      desc: "Custom subtitles, sleek graphics, and tax insights that build instant client trust.",
      icon: Sparkles
    }
  ];

  return (
    <div className="flex flex-col h-full w-full py-4 justify-between">
      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-grow">

        {/* Left Column - Clean Wording & Highlights */}
        <div className="lg:col-span-8 flex flex-col justify-center gap-5">
          <div>
            <p className="text-cyan-400 tracking-widest text-xs font-semibold uppercase mb-2">Step 04 · Video Content Engine</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              4 Short Video Reels a Month, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
                Posted Across All Social Media
              </span>
            </h2>
            <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
              We produce engaging video content to maintain brand consistency, build client trust, and keep Synergy CPA top-of-mind.
            </p>
          </div>

          {/* 3 High-Impact Cards */}
          <div className="space-y-3">
            {highlights.map((item, i) => (
              <SkeuomorphicCard key={i} interactive className="p-4 flex gap-4 items-center border border-slate-700/60">
                <div className="w-10 h-10 rounded-xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center shrink-0 shadow-embossed">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-0.5">{item.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </SkeuomorphicCard>
            ))}
          </div>

          {/* Platforms Bar */}
          <div className="flex items-center gap-3 pt-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Distributed To:</span>
            <div className="flex flex-wrap gap-2">
              {["Instagram Reels", "YouTube Shorts", "Facebook", "LinkedIn", "Tiktok", "Twitter"].map((platform, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-cyan-400 text-xs font-medium">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Perfectly Proportioned & Centered iPhone */}
        <div className="lg:col-span-4 flex items-center justify-center py-2">
          {/* Authentic iPhone 16 Pro Ratio (210px x 380px) */}
          <div className="relative w-[240px] h-[500px] bg-slate-900 rounded-[38px] p-[6px] border-[4px] border-slate-600/80 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">

            {/* Inner Screen */}
            <div className="w-full h-full rounded-[32px] bg-slate-950 overflow-hidden relative flex flex-col justify-between p-3 border border-slate-800">

              {/* Dynamic Island Notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-18 h-4 bg-black rounded-full z-30 border border-slate-800/80" />

              {/* Ambient Glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Reel Header */}
              <div className="flex items-center justify-between z-10 pt-3">
                <div className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-slate-700/60">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-[8px]">
                    S
                  </div>
                  <span className="text-[10px] font-bold text-white">Synergy CPA</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-900/90 flex items-center justify-center border border-slate-700/60 text-cyan-400">
                  <Volume2 className="w-3 h-3" />
                </div>
              </div>

              {/* Center Play Button & Title */}
              <div className="flex flex-col items-center text-center z-10 my-auto">
                <div className="relative group cursor-pointer mb-3">
                  <div className="absolute -inset-1.5 bg-cyan-400/30 rounded-full blur-md animate-pulse" />
                  <div className="w-12 h-12 bg-slate-900/90 border-2 border-cyan-400 rounded-full flex items-center justify-center relative z-10 shadow-glass">
                    <Play className="w-5 h-5 text-cyan-400 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl border border-cyan-500/30">
                  <span className="text-[9px] font-extrabold text-cyan-400 uppercase tracking-widest block mb-1">
                    🔥 Monthly Reel
                  </span>
                  <h3 className="text-white font-bold text-xs leading-snug drop-shadow-md">
                    "3 Smart Tax Moves for Business Owners"
                  </h3>
                </div>
              </div>

              {/* Footer & iPhone Home Bar */}
              <div className="z-10 text-center pt-1 border-t border-slate-800/80">
                <p className="text-[9px] text-cyan-400 font-bold mb-1">
                  4 Video Reels / Month
                </p>
                <div className="w-20 h-1 bg-white/40 rounded-full mx-auto" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
