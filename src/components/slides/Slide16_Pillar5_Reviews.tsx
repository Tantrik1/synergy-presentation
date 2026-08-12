import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { CheckCircle2, Star } from "lucide-react";

export function Slide16_Pillar5_Reviews() {
  const trustAssets = [
    "Written Quote",
    "Google 5-Star Review",
    "30-Sec Video Clip",
    "Social Proof Post",
    "Ad Creative"
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-10">
        <p className="text-cyan-400 tracking-widest text-sm font-semibold uppercase mb-3">Step 05 · Trust &amp; Reviews</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Profiles, Reviews &amp; Social Proof That Build Trust</h2>
        <p className="text-slate-300 text-lg max-w-4xl">You already have happy clients. We turn their satisfaction into 5-star public Google reviews that build instant trust with new prospects.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <SkeuomorphicCard className="p-8 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center shrink-0 shadow-embossed">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Directory &amp; Profile Setup</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Claiming and fully optimizing your presence across: <br />
              <span className="text-white font-medium">Google Business Profile · Bing Places · LinkedIn Company Page · 3 Founder Profiles · Facebook · Instagram · CPA Ontario Directory · BBB · Chamber of Commerce</span>
            </p>
          </div>
        </SkeuomorphicCard>

        <SkeuomorphicCard className="p-8 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl border border-amber-500/30 bg-amber-500/10 flex items-center justify-center shrink-0 shadow-embossed">
                <Star className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">The Review Engine</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Automated review requests sent via SMS or email right after completing tax or advisory work. We draft friendly messages, track who received them, and respond to every Google review within 48 hours.
            </p>
          </div>
        </SkeuomorphicCard>
      </div>

      <div className="mb-6">
        <p className="text-cyan-400 tracking-widest text-xs font-bold uppercase mb-4">1 Happy Client = 5 Marketing Assets</p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between">
          {trustAssets.map((asset, i) => (
            <React.Fragment key={i}>
              <SkeuomorphicCard className="p-4 flex-1 text-center font-bold text-sm min-w-0 w-full md:w-auto text-white border border-slate-700/60">
                {asset}
              </SkeuomorphicCard>
              {i < trustAssets.length - 1 && (
                <div className="text-cyan-400 hidden md:block font-bold">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkeuomorphicCard className="p-5 border border-slate-700/60 flex items-center gap-4">
          <span className="text-2xl font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-xl">15–20</span>
          <span className="text-slate-300 text-xs font-medium">Google reviews in first 90 days</span>
        </SkeuomorphicCard>
        <SkeuomorphicCard className="p-5 border border-slate-700/60 flex items-center gap-4">
          <span className="text-2xl font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-xl">3–5</span>
          <span className="text-slate-300 text-xs font-medium">New 5-star reviews every month after</span>
        </SkeuomorphicCard>
        <SkeuomorphicCard className="p-5 border border-slate-700/60 flex items-center gap-4">
          <span className="text-2xl font-bold text-amber-400 bg-amber-950/80 border border-amber-500/30 px-3 py-1 rounded-xl">48h</span>
          <span className="text-slate-300 text-xs font-medium">Fast response time on every review</span>
        </SkeuomorphicCard>
      </div>
    </div>
  );
}
