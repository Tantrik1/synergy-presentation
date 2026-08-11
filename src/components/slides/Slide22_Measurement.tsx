import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { ArrowUpRight, ArrowDownRight, Minus, Activity } from "lucide-react";

export function Slide22_Measurement() {
  const kpis = [
    { label: "New qualified leads", value: "24", trend: "up", change: "+12%" },
    { label: "Cost per lead (CPL)", value: "$185", trend: "down", change: "-5%" },
    { label: "Organic traffic", value: "3.2k", trend: "up", change: "+8%" },
    { label: "LinkedIn impressions", value: "45k", trend: "up", change: "+22%" },
    { label: "Email open rate", value: "42%", trend: "flat", change: "0%" },
    { label: "Meetings booked", value: "8", trend: "up", change: "+2" },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <ArrowUpRight className="w-4 h-4 text-emerald-500" />;
      case "down": return <ArrowDownRight className="w-4 h-4 text-emerald-500" />;
      case "flat": return <Minus className="w-4 h-4 text-slate-400" />;
      default: return null;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up": return "text-emerald-500";
      case "down": return "text-emerald-500";
      case "flat": return "text-slate-400";
      default: return "text-slate-400";
    }
  };

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Measurement</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The numbers we are judged on</h2>
        <p className="text-slate-400 text-lg max-w-4xl">Vanity metrics are useful for diagnostics, but we only report on pipeline. You have a live dashboard and a monthly strategy call.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow mb-8">
        {kpis.map((kpi, index) => (
          <SkeuomorphicCard key={index} className="p-6 bg-white border border-slate-200">
            <h4 className="text-slate-500 text-sm font-semibold mb-4 uppercase tracking-wider">{kpi.label}</h4>
            <div className="flex justify-between items-end">
              <span className="text-4xl font-bold text-navy-900">{kpi.value}</span>
              <div className="flex items-center gap-1 mb-1">
                {getTrendIcon(kpi.trend)}
                <span className={`text-sm font-bold ${getTrendColor(kpi.trend)}`}>{kpi.change}</span>
              </div>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>

      <SkeuomorphicCard className="bg-navy-900 border border-slate-700 p-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-auto shadow-embossed">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-slate-800 shadow-pressed flex items-center justify-center shrink-0">
            <Activity className="w-8 h-8 text-metallic-blue" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Live reporting dashboard</h3>
            <p className="text-slate-400 text-sm">Always on, pulling directly from HubSpot, Google Analytics, LinkedIn and Snov.io. No hiding behind PDFs.</p>
          </div>
        </div>
        <div className="shrink-0">
          <div className="px-6 py-3 bg-slate-800 text-slate-300 font-bold rounded-lg border border-slate-700 shadow-glass text-sm">
            View Example Dashboard
          </div>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
