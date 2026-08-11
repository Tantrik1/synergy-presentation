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
  glass = false,
  interactive = false,
  ...props
}: SkeuomorphicCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        glass ? "bg-white/5 backdrop-blur-md border border-white/10 shadow-glass" : "bg-slate-800",
        !glass && (pressed ? "shadow-pressed" : "shadow-embossed"),
        interactive && !pressed && "hover:shadow-pressed cursor-pointer hover:bg-slate-700/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
