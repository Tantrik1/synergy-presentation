import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { ArrowUpRight, FileText } from "lucide-react";

export function Slide22_Measurement() {
  const kpis = [
    { label: "New Consultation Requests", value: "15+", change: "+45%" },
    { label: "Phone & Form Conversion", value: "8.4%", change: "+3.2%" },
    { label: "Google Maps Local Views", value: "4.8k", change: "+60%" },
    { label: "Social Video Views", value: "25k+", change: "+120%" },
    { label: "Verified Email Open Rate", value: "45%", change: "+15%" },
    { label: "Verified 5-Star Reviews", value: "15-20", change: "Target" },
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full py-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <p className="text-cyan-400 tracking-widest text-xs font-semibold uppercase mb-2.5">Bi-Weekly Reports &amp; KPIs</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">The Numbers We Track &amp; Measure</h2>
        <p className="text-slate-300 text-base max-w-4xl leading-relaxed">
          We focus on real business growth metrics — phone calls, form messages, and booked consultations. Receive clear, bi-weekly progress reports detailing your campaign performance.
        </p>
      </div>

      {/* 6 Compact KPI Cards without empty vertical space */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {kpis.map((kpi, index) => (
          <SkeuomorphicCard key={index} interactive className="p-5 border border-slate-700/60">
            <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">{kpi.label}</h4>
            <div className="flex justify-between items-end">
              <span className="text-3xl font-extrabold text-white">{kpi.value}</span>
              <div className="flex items-center gap-1 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-400">{kpi.change}</span>
              </div>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>

      {/* Bi-Weekly Reports Bottom Bar */}
      <SkeuomorphicCard className="border border-slate-700/80 p-5 flex items-center gap-5">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-embossed">
          <FileText className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-0.5">Bi-Weekly Progress Reports &amp; Strategy Reviews</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Delivered every 2 weeks — tracking calls, form inquiries, email campaign performance, and social reach with 100% transparency.
          </p>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
