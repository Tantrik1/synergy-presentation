import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check, Play } from "lucide-react";

export function Slide15_SignatureAsset_BrandFilm() {
  const includes = [
    "Concept, script and shot list developed with the founders",
    "Remote direction for the shoot, or coordination with a local GTA videographer",
    "Full edit, colour grade, licensed music, captions and subtitles",
    "Three cut-downs — 60s, 30s and 15s — for ads and social",
    "Vertical and horizontal masters, delivered in source quality"
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <SkeuomorphicCard className="w-full aspect-[16/9] bg-gradient-to-br from-slate-800 to-navy-900 border border-slate-700/50 flex flex-col items-center justify-center relative overflow-hidden mb-12">
            <div className="w-20 h-20 bg-metallic-blue rounded-full shadow-embossed flex items-center justify-center cursor-pointer hover:bg-sky-400 transition-colors z-10 ml-2">
              <Play className="w-8 h-8 text-white fill-current" />
            </div>
            <p className="absolute bottom-6 text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Synergy CPA <span className="mx-2">·</span> Brand Film
            </p>
          </SkeuomorphicCard>

          <div>
            <p className="text-slate-400 text-sm mb-2">One-time investment</p>
            <h2 className="text-5xl font-bold text-white mb-4">Rs. 30,000</h2>
            <p className="text-metallic-blue text-sm">2–4 minutes <span className="text-slate-500 mx-2">·</span> delivered within 30 days</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center bg-white rounded-3xl p-10 md:p-12 shadow-glass border border-white/20">
          <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Signature Asset</p>
          <h2 className="text-4xl font-bold text-navy-900 mb-6">The brand film that carries every channel</h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            A single two-to-four minute film introducing the founders, the philosophy and who Synergy CPA serves best — then cut down into the assets every other pillar needs.
          </p>

          <p className="text-slate-400 tracking-widest text-xs font-bold uppercase mb-6">What is included</p>
          <ul className="space-y-5 mb-10">
            {includes.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-metallic-blue text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-700">Placed on:</span> homepage hero · Google Business Profile · LinkedIn Featured · YouTube · ad creative
          </div>
        </div>
      </div>
    </div>
  );
}
