import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { Check } from "lucide-react";

export function Slide27_Commercials() {
  return (
    <div className="flex flex-col h-full w-full py-8">
      <div className="mb-12">
        <p className="text-metallic-blue tracking-widest text-sm font-semibold uppercase mb-4">Commercials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Payment schedule & terms</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
        <SkeuomorphicCard className="p-8 bg-white border border-slate-200">
          <h3 className="text-2xl font-bold text-navy-900 mb-8">Billing Cadence</h3>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-navy-900 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-lg mb-1">Project Kickoff</h4>
                <p className="text-slate-500 mb-2">Signature & onboarding</p>
                <p className="text-metallic-blue font-bold">50% of Setup Fee</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 font-bold flex items-center justify-center shrink-0 shadow-pressed">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-lg mb-1">Day 30</h4>
                <p className="text-slate-500 mb-2">Setup complete, engine launches</p>
                <p className="text-metallic-blue font-bold mb-1">50% of Setup Fee</p>
                <p className="text-metallic-blue font-bold">+ Month 1 Retainer</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 font-bold flex items-center justify-center shrink-0 shadow-pressed">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-lg mb-1">Day 60 and onward</h4>
                <p className="text-slate-500 mb-2">Steady-state execution</p>
                <p className="text-metallic-blue font-bold">Monthly Retainer</p>
              </div>
            </div>
          </div>
        </SkeuomorphicCard>

        <div className="space-y-6">
          <SkeuomorphicCard className="p-6 bg-navy-900 border border-slate-700">
            <h4 className="text-white font-bold mb-4">Terms & Conditions</h4>
            <ul className="space-y-3">
              {[
                "All prices quoted in NPR (exclusive of applicable taxes).",
                "Retainer agreements require a 30-day cancellation notice.",
                "Ad spend is billed directly to the client's credit card by the ad platforms.",
                "Invoices are due Net 15 from the date of issue."
              ].map((term, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="w-4 h-4 text-metallic-blue shrink-0 mt-1" />
                  <span className="text-slate-300 text-sm leading-relaxed">{term}</span>
                </li>
              ))}
            </ul>
          </SkeuomorphicCard>
          
          <SkeuomorphicCard className="p-6 bg-gradient-to-r from-metallic-blue to-sky-400 border border-sky-300">
            <h4 className="text-white font-bold mb-2">Our Guarantee</h4>
            <p className="text-white/90 text-sm leading-relaxed">
              If we miss any deliverable outlined in the monthly schedule, we pro-rate your retainer for that month. You pay for what gets done.
            </p>
          </SkeuomorphicCard>
        </div>
      </div>
    </div>
  );
}
