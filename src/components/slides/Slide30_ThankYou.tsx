import React from "react";
import { SkeuomorphicCard } from "../ui/SkeuomorphicCard";
import { MarketrixLogo } from "../ui/MarketrixLogo";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

export function Slide30_ThankYou() {
  const contactInfo = [
    {
      title: "Phone",
      value: "+977 9840175421",
      sub: "Mon–Fri 9AM–6PM NPT",
      icon: Phone,
      color: "text-cyan-400"
    },
    {
      title: "Email",
      value: "info@marketrixnepal.com.np",
      sub: "We reply within 24 hours",
      icon: Mail,
      color: "text-emerald-400"
    },
    {
      title: "Location",
      value: "Nepal",
      sub: "Remote-first company",
      icon: MapPin,
      color: "text-amber-400"
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full py-6 max-w-7xl mx-auto">
      {/* Header with Prominent Marketrix Original Logo */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="bg-black/90 backdrop-blur-md px-8 py-4 rounded-3xl border border-slate-800 shadow-glass mb-6">
          <MarketrixLogo height={76} />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Thank You — Let's Build Your Growth</h2>
        <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
          Reach out through any of these channels. Our team is ready to help you succeed.
        </p>
      </div>

      {/* 3 Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-stretch">
        {contactInfo.map((info, index) => (
          <SkeuomorphicCard key={index} interactive className="p-7 flex flex-col justify-between border border-slate-700/60 text-center group">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-5 shadow-embossed">
                <info.icon className={`w-7 h-7 ${info.color}`} />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{info.title}</p>
              <h3 className="text-lg font-extrabold text-white mb-1.5 break-all">{info.value}</h3>
              <p className="text-xs text-slate-300 font-medium">{info.sub}</p>
            </div>
          </SkeuomorphicCard>
        ))}
      </div>

      {/* Mission Footer Banner */}
      <SkeuomorphicCard className="p-6 border border-slate-700/80 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center text-center">
        <div className="flex items-center gap-3 max-w-3xl">
          <Sparkles className="w-6 h-6 text-cyan-400 shrink-0" />
          <p className="text-sm font-semibold text-slate-200 leading-relaxed">
            Transforming businesses with cutting-edge technology solutions and innovative digital strategies. <span className="text-cyan-400 font-bold">Your partner in digital excellence.</span>
          </p>
        </div>
      </SkeuomorphicCard>
    </div>
  );
}
