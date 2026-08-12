import React from "react";

interface LogoProps {
  className?: string;
  height?: number;
}

export function MarketrixLogo({ className = "", height = 44 }: LogoProps) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/marketrix-logo-tight.png"
        alt="Marketrix Tech Nepal Logo"
        style={{ height: `${height}px` }}
        className="w-auto object-contain drop-shadow-md"
      />
    </div>
  );
}
