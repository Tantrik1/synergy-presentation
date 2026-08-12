import React from "react";

export function Slide03_SituationIntro() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-center py-8 px-4 max-w-6xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-6 flex flex-col items-center z-10 w-full">

        {/* Big Number Accent with Subtle Ring */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-cyan-950/40 border border-cyan-500/20 absolute -z-10 blur-sm" />
          <span className="text-7xl sm:text-8xl font-black text-slate-700/50 tracking-widest select-none">
            01
          </span>
        </div>

        {/* Centered Question Headline - Sentence 1 strictly on 1 row */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] w-full">
          <span className="block whitespace-normal sm:whitespace-nowrap">
            What is stopping Synergy CPA
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 mt-2">
            from digital growth today?
          </span>
        </h1>

        {/* Clean Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed pt-2">
          We reviewed your website, Google search rankings, and social channels to unlock the 6 easiest marketing wins for your accounting firm.
        </p>
      </div>
    </div>
  );
}
