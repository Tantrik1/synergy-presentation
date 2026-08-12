import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";

export function Slide21_Deliverables() {
  const deliverables = [
    { stream: "Website & Local SEO", output: "Technical SEO fixes · Google Maps profile management · local business schema upkeep", channel: "Google Search & Maps" },
    { stream: "LinkedIn Authority & Direct Reach", output: "6 founder posts / month · up to 100 new connection & email requests / month · LinkedIn DM tracking & lead routing", channel: "LinkedIn" },
    { stream: "Legal B2B Email", output: "Legal opt-in collection · 300 verified contacts/month start · gradual safe scaling", channel: "Primary Email Inbox" },
    { stream: "Short Video Reels", output: "4 short video Reels / month · posted across all social media channels", channel: "IG Reels · YT Shorts · FB · LinkedIn" },
    { stream: "Reviews & Trust Engine", output: "Automated review requests after return filing · 48h response on all Google reviews", channel: "Google Business Profile" },
    { stream: "Signature Brand Film", output: "1-time production · 2–4 min HD film + 3 short cut-down video clips for ads & site", channel: "Website · Socials · Ads" },
    { stream: "Targeted Ad Boosting (M3+)", output: "Custom agreed budget · targeted boosting on LinkedIn, Google & Meta ads", channel: "LinkedIn · Google · Meta" },
    { stream: "Bi-Weekly Progress Reports", output: "Bi-weekly campaign report · strategy review call · complete lead tracking", channel: "Bi-Weekly Delivery" }
  ];

  return (
    <div className="flex flex-col h-full w-full py-8 justify-between">
      <div className="mb-8">
        <p className="text-cyan-400 tracking-widest text-sm font-semibold uppercase mb-3">Monthly Deliverables</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">What We Deliver Every Single Month</h2>
        <p className="text-slate-300 text-lg max-w-4xl">
          A clear summary of all monthly marketing outputs, content deliverables, and optimization work performed for Synergy CPA.
        </p>
      </div>

      {/* Dark Glass Table */}
      <SkeuomorphicCard className="w-full border border-slate-700/60 overflow-hidden my-auto">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
            <thead className="bg-slate-950/80 text-cyan-400 font-bold tracking-widest uppercase text-[11px] border-b border-slate-700/60">
              <tr>
                <th className="p-5 w-1/4">Workstream</th>
                <th className="p-5 w-1/2">Monthly Deliverable</th>
                <th className="p-5 w-1/4">Channel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {deliverables.map((item, index) => (
                <tr key={index} className="hover:bg-slate-700/40 transition-colors">
                  <td className="p-5 font-bold text-white text-sm">{item.stream}</td>
                  <td className="p-5 text-slate-300 text-xs leading-relaxed">{item.output}</td>
                  <td className="p-5 text-cyan-400 text-xs font-semibold">{item.channel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
