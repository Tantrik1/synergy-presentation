import React from "react";
import { cn } from "@/lib/utils";

interface SkeuomorphicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function SkeuomorphicButton({
  children,
  className,
  variant = "secondary",
  ...props
}: SkeuomorphicButtonProps) {
  return (
    <button
      className={cn(
        "relative px-6 py-3 rounded-xl font-medium transition-all duration-200",
        "active:shadow-pressed active:translate-y-0.5",
        "focus:outline-none focus:ring-2 focus:ring-metallic-blue focus:ring-offset-2 focus:ring-offset-navy-900",
        variant === "primary"
          ? "bg-metallic-blue text-white shadow-embossed hover:bg-sky-400"
          : "bg-slate-700 text-slate-100 shadow-embossed hover:bg-slate-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
