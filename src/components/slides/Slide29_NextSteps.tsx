"use client";

import React, { useState } from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { SkeuomorphicButton } from "../ui/SkeuomorphicButton";
import { Send, X } from "lucide-react";

export function Slide29_NextSteps() {
  const [showModal, setShowModal] = useState(false);

  const steps = [
    { num: "01", title: "Confirm scope & package", desc: "Pick a retainer tier and any add-ons. We adjust volumes to fit your budget.", time: "This week" },
    { num: "02", title: "Sign and release advance", desc: "Agreement signed, 50% of the setup fee released.", time: "Within 3 days" },
    { num: "03", title: "Kickoff & access handover", desc: "Website, domain, analytics and social access. One 60-minute onboarding call.", time: "Day 1–3" },
    { num: "04", title: "Foundation live", desc: "Profiles, tracking, SEO fixes and outreach infrastructure all running.", time: "Day 30" },
  ];

  return (
    <div className="flex flex-col h-full w-full py-8 relative">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Next Steps</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Four steps to a live growth engine</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow mb-12">
        {steps.map((step, index) => (
          <SkeuomorphicCard key={index} className="p-8 flex flex-col bg-slate-800">
            <span className="text-metallic-blue font-bold text-xl mb-6">{step.num}</span>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-grow">{step.desc}</p>
            <p className="text-metallic-blue font-semibold text-sm mt-6">{step.time}</p>
          </SkeuomorphicCard>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-gradient-to-r from-navy-900 to-slate-800 border border-slate-700/50 shadow-embossed">
        <h3 className="text-2xl font-bold text-white text-center md:text-left">
          Thank you — we would like to build this with you.
        </h3>
        <SkeuomorphicButton 
          variant="primary" 
          className="whitespace-nowrap flex items-center gap-2"
          onClick={() => setShowModal(true)}
        >
          Confirm Scope & Schedule Kickoff
          <Send className="w-4 h-4 ml-2" />
        </SkeuomorphicButton>
      </div>

      {/* Interactive Contact Modal */}
      {showModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <SkeuomorphicCard className="w-full max-w-lg p-8 relative z-10 bg-slate-800 shadow-glass border-slate-600">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white shadow-pressed transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-2">Let's build this together</h3>
            <p className="text-slate-400 mb-6 text-sm">Fill out the details below and we will send over the formal agreement to get started.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full bg-navy-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-metallic-blue shadow-pressed" placeholder="Jane Doe" required />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full bg-navy-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-metallic-blue shadow-pressed" placeholder="jane@synergycpa.ca" required />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1">Package Selection</label>
                <select className="w-full bg-navy-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-metallic-blue shadow-pressed">
                  <option>Growth (Rs. 95,000 / mo)</option>
                  <option>Starter (Rs. 55,000 / mo)</option>
                  <option>Dominance (Rs. 1,45,000 / mo)</option>
                </select>
              </div>
              <SkeuomorphicButton type="submit" variant="primary" className="w-full mt-4 py-4">
                Send Request
              </SkeuomorphicButton>
            </form>
          </SkeuomorphicCard>
        </div>
      )}
    </div>
  );
}
