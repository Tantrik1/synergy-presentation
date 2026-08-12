import React from "react";
import { cn } from "@/lib/utils";

interface SkeuomorphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pressed?: boolean;
  glass?: boolean;
  interactive?: boolean;
}

export function SkeuomorphicCard({
  children,
  className,
  pressed = false,
  glass = true,
  interactive = false,
  ...props
}: SkeuomorphicCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300 relative overflow-hidden",
        "bg-slate-800/65 backdrop-blur-xl border border-slate-700/60",
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.4),_inset_0_1px_1px_0_rgba(255,255,255,0.1)]",
        interactive && "hover:border-cyan-500/50 hover:bg-slate-800/85 hover:-translate-y-1 hover:shadow-[0_12px_40px_0_rgba(14,165,233,0.15)] cursor-pointer",
        pressed && "shadow-pressed border-slate-700/80 bg-slate-900/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
