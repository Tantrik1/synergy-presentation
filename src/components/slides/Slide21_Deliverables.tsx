import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";

export function Slide21_Deliverables() {
  const deliverables = [
    { stream: "Website SEO & AEO", output: "4 blog posts · 2 service pages optimised · technical audit · schema upkeep · backlink outreach", channel: "Google · AI engines" },
    { stream: "LinkedIn authority", output: "12–16 founder posts · 12 company posts · comment strategy on target accounts", channel: "LinkedIn" },
    { stream: "LinkedIn outreach", output: "400–600 targeted connections · 3-touch sequences · replies routed to CRM", channel: "LinkedIn · Snov.io" },
    { stream: "B2B email", output: "1,000–1,500 verified contacts · 5-touch sequences · A/B tested subject lines", channel: "Email · Snov.io" },
    { stream: "Video & social", output: "4 videos → 16+ placements · 12 quote graphics · full publishing calendar", channel: "IG · FB · YT · LinkedIn" },
    { stream: "Reviews & trust", output: "Review requests sent · every review answered · all profiles kept current", channel: "Google · Bing · directories" },
    { stream: "Paid media (M3+)", output: "Campaign build · creative refresh · weekly optimisation · retargeting", channel: "Facebook · Instagram" },
    { stream: "Reporting", output: "Bi-weekly dashboard · monthly strategy call · full channel attribution", channel: "Shared live dashboard" }
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Deliverables</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What lands every single month</h2>
        <p className="text-slate-400 text-lg max-w-4xl">Reflects the recommended Growth package. Volumes scale up or down with the package selected.</p>
      </div>

      <SkeuomorphicCard className="w-full bg-white overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
            <thead className="bg-navy-900 text-white font-bold tracking-widest uppercase text-[10px]">
              <tr>
                <th className="p-6 w-1/4">Workstream</th>
                <th className="p-6 w-1/2">Monthly Output</th>
                <th className="p-6 w-1/4">Channel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {deliverables.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-bold text-navy-900">{item.stream}</td>
                  <td className="p-6 text-slate-600">{item.output}</td>
                  <td className="p-6 text-slate-500 italic">{item.channel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
