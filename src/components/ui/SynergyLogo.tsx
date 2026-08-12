import React from "react";

interface LogoProps {
  className?: string;
  height?: number;
}

export function SynergyLogo({ className = "", height = 44 }: LogoProps) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/synergy-logo-transparent.png"
        alt="Synergy CPA Professional Corp Logo"
        style={{ height: `${height}px` }}
        className="w-auto object-contain drop-shadow-md"
      />
    </div>
  );
}
