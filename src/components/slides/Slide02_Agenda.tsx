import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Search, Layers, Database, Calendar, BarChart2, CreditCard } from "lucide-react";

export function Slide02_Agenda() {
  const agendaItems = [
    { num: "01", title: "The Situation", desc: "What our audit of thesynergycpa.com found — and the opportunity sitting underneath it.", icon: Search },
    { num: "02", title: "The Growth Engine", desc: "Six pillars: SEO, LinkedIn, B2B email, video, trust and paid — built in sequence.", icon: Layers },
    { num: "03", title: "Lead Delivery", desc: "How every qualified lead reaches your CRM, and exactly where our scope ends.", icon: Database },
    { num: "04", title: "Execution & Timeline", desc: "A 12-month roadmap with monthly deliverables you can hold us to.", icon: Calendar },
    { num: "05", title: "Measurement", desc: "The KPIs we report on and the numbers that gate every budget increase.", icon: BarChart2 },
    { num: "06", title: "Investment & Terms", desc: "Setup, retainer options, add-ons and the recurring payment plan.", icon: CreditCard },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Agenda</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">What we will cover in the next 20 minutes</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {agendaItems.map((item, index) => (
          <SkeuomorphicCard key={index} className="p-8 flex flex-col justify-between" interactive>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-700 shadow-pressed flex items-center justify-center text-metallic-blue">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-4xl font-bold text-slate-700/50">{item.num}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>
    </div>
  );
}
