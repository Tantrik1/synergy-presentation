import React from "react";

interface LogoProps {
  className?: string;
  height?: number;
}

export function MarketrixLogo({ className = "", height = 44 }: LogoProps) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/marketrix-logo-cropped.png"
        alt="Marketrix Tech Nepal Logo"
        style={{ height: `${height}px` }}
        className="w-auto object-contain rounded-lg drop-shadow-md"
      />
    </div>
  );
}
