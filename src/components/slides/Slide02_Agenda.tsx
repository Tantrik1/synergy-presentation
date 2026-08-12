import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Search, Layers, Database, Calendar, BarChart2, CreditCard } from "lucide-react";

export function Slide02_Agenda() {
  const agendaItems = [
    { num: "01", title: "Where You Are Today", desc: "What we found on your website, what is missing, and the big growth opportunity.", icon: Search },
    { num: "02", title: "The 6 Growth Steps", desc: "Google search, LinkedIn, helpful emails, short videos, reviews, and smart ads.", icon: Layers },
    { num: "03", title: "How You Get Leads", desc: "How interested business owners get sent straight to your team with zero extra work.", icon: Database },
    { num: "04", title: "Month-by-Month Plan", desc: "A clear 12-month timeline showing what we deliver for you every single month.", icon: Calendar },
    { num: "05", title: "Checking Our Success", desc: "Simple numbers we track together, like website visitors, leads, and booked calls.", icon: BarChart2 },
    { num: "06", title: "Simple Pricing", desc: "Clear monthly packages and setup options so you always know your costs.", icon: CreditCard },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Agenda</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">What we will cover together</h2>
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
