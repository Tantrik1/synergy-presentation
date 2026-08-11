import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";

export function Slide24_Phase1_Setup() {
  const tasks = [
    { category: "Strategy", items: ["Kickoff & goal alignment", "ICP definition & messaging matrix", "Keyword research & content calendar"] },
    { category: "Infrastructure", items: ["Snov.io workspace setup", "Cold email domain warmup", "CRM / HubSpot integrations"] },
    { category: "Digital Assets", items: ["Website technical audit & fixes", "Google Business Profile optimization", "LinkedIn profile makeovers (3x founders)"] },
    { category: "Creative", items: ["Brand film shoot & edit", "First batch of social graphics", "Email sequence copywriting"] }
  ];

  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="flex flex-col lg:flex-row gap-12 h-full">
        <div className="flex-1 flex flex-col">
          <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Phase 1</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Setup & Engine Build</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            The first 30 days are dedicated exclusively to building the foundation. We don't launch outreach or publish content until the infrastructure is perfect.
          </p>

          <SkeuomorphicCard className="p-8 bg-navy-900 border border-slate-700 mt-auto">
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">One-time investment</p>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-5xl font-bold text-white">Rs. 1,40,000</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 mb-4 shadow-pressed">
              <div className="bg-metallic-blue h-3 rounded-full w-1/2"></div>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
              <span>50% at signing</span>
              <span>50% at day 30</span>
            </div>
          </SkeuomorphicCard>
        </div>

        <div className="flex-[1.2] flex flex-col">
          <SkeuomorphicCard className="h-full bg-white p-8 overflow-y-auto">
            <h3 className="text-2xl font-bold text-navy-900 mb-8">The 30-Day Build</h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {tasks.map((task, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-slate-200 text-slate-500 group-[.is-active]:bg-metallic-blue group-[.is-active]:text-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Card */}
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-5 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                    <h4 className="font-bold text-navy-900 mb-3">{task.category}</h4>
                    <ul className="space-y-2">
                      {task.items.map((item, i) => (
                         <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                           <span className="text-metallic-blue mt-0.5">•</span>
                           <span>{item}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </SkeuomorphicCard>
        </div>
      </div>
    </div>
  );
}
