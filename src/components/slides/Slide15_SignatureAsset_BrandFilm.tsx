import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check, Play } from "lucide-react";

export function Slide15_SignatureAsset_BrandFilm() {
  const includes = [
    "Script, outline, and shot list developed with your 3 founders",
    "Remote direction or local GTA videographer coordination",
    "Full editing, color correction, licensed background music & captions",
    "3 Short cut-down video clips (60s, 30s, 15s) for ads & social media",
    "High-definition vertical & horizontal video files for all channels"
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
        {/* Left Side Video Card with User's Thumbnail */}
        <div className="flex flex-col justify-center">
          <a
            href="https://drive.google.com/file/d/13q0icdFs2-n727h1osey35OJKdq8XWW8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full cursor-pointer mb-8"
          >
            <SkeuomorphicCard className="w-full aspect-[16/9] border border-slate-700/60 flex flex-col items-center justify-center relative overflow-hidden interactive group shadow-glass">
              {/* User Thumbnail Image */}
              <img
                src="/images/brand-film-thumbnail.jpg"
                alt="Synergy CPA Brand Film Preview"
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Play Button */}
              <div className="relative group z-10">
                <div className="absolute -inset-2 bg-cyan-400/30 rounded-full blur-md group-hover:bg-cyan-400/50 transition-all duration-300 animate-pulse" />
                <div className="w-20 h-20 bg-slate-900/90 border-2 border-cyan-400 rounded-full shadow-glass flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-cyan-400 fill-current ml-1" />
                </div>
              </div>

              <p className="absolute bottom-5 text-sm font-semibold tracking-[0.2em] text-white uppercase z-10 drop-shadow-md flex items-center gap-2">
                <span>Reference For </span>
                <span className="text-cyan-400 font-bold">·</span>
                <span>Brand Film</span>
              </p>
            </SkeuomorphicCard>
          </a>

          <SkeuomorphicCard className="p-6 border border-slate-700/60">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">One-Time Production Investment</p>
            <h2 className="text-4xl font-bold text-white mb-2">Rs. 30,000</h2>
            <p className="text-cyan-400 text-sm">2–4 Minute HD Video <span className="text-slate-500 mx-2">·</span> Delivered in 30 Days</p>
          </SkeuomorphicCard>
        </div>

        {/* Right Side Glass Card */}
        <SkeuomorphicCard className="p-8 md:p-10 border border-slate-700/60 flex flex-col justify-center">
          <p className="text-cyan-400 tracking-widest text-xs font-semibold uppercase mb-3">Signature Asset</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">The Brand Film That Powers Every Marketing Channel</h2>
          <p className="text-slate-300 text-base mb-8 leading-relaxed">
            A single high-quality film introducing your founders, global expertise, and tax services — then cut down into short video assets for website, social, and ads.
          </p>

          <p className="text-slate-400 tracking-widest text-xs font-bold uppercase mb-4">What Is Included</p>
          <ul className="space-y-4 mb-8">
            {includes.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 shadow-embossed">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-200 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-200">Featured On:</span> Website Homepage · Google Business Profile · LinkedIn Featured · YouTube · Social Ads
          </div>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
