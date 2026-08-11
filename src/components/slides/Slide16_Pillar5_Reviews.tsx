import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { CheckCircle2, Star } from "lucide-react";

export function Slide16_Pillar5_Reviews() {
  const trustAssets = [
    "Written quote",
    "Google review",
    "30-sec video clip",
    "Social proof post",
    "Ad creative"
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Pillar 05</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Profiles, reviews and proof that travels</h2>
        <p className="text-slate-400 text-lg max-w-4xl">You have satisfied clients and written testimonials. What you do not have is anything a stranger can independently verify.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <SkeuomorphicCard className="p-8 bg-white border-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border border-metallic-blue/20 bg-metallic-blue/5 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-metallic-blue" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900">Profiles we claim, verify and build</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Google Business Profile · Bing Places · LinkedIn company page · three founder profiles · Instagram · Facebook · YouTube · CPA Ontario directory · BBB · Clutch · local chambers of commerce
          </p>
        </SkeuomorphicCard>

        <SkeuomorphicCard className="p-8 bg-white border-none shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border border-metallic-blue/20 bg-metallic-blue/5 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-metallic-blue" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900">The review engine</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            A review request built into your offboarding — sent by SMS or email within 48 hours of a filed return, when satisfaction is highest. We draft the message, track who has been asked, and respond to every review within two days.
          </p>
        </SkeuomorphicCard>
      </div>

      <div className="mb-6">
        <p className="text-metallic-blue tracking-widest text-xs font-bold uppercase mb-4">The Testimonial Matrix — One Happy Client, Five Trust Assets</p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between">
          {trustAssets.map((asset, i) => (
            <React.Fragment key={i}>
              <SkeuomorphicCard className={`p-4 flex-1 text-center font-bold text-sm min-w-0 w-full md:w-auto ${i === trustAssets.length - 1 ? 'bg-navy-900 text-white border border-slate-700' : 'bg-white text-navy-900'}`}>
                {asset}
              </SkeuomorphicCard>
              {i < trustAssets.length - 1 && (
                <div className="text-metallic-blue hidden md:block">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex items-center gap-4">
          <span className="text-3xl font-bold text-navy-900 bg-white px-3 py-1 rounded">15–20</span>
          <span className="text-slate-400 text-sm font-medium">Google reviews in the first 90 days</span>
        </div>
        <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex items-center gap-4">
          <span className="text-3xl font-bold text-metallic-blue">3–5</span>
          <span className="text-slate-400 text-sm font-medium">new reviews every month after that</span>
        </div>
        <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex items-center gap-4">
          <span className="text-3xl font-bold text-slate-300">48h</span>
          <span className="text-slate-400 text-sm font-medium">maximum response time on every review</span>
        </div>
      </div>
    </div>
  );
}
