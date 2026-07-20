"use client";
import { useMemo } from "react";
import { cn } from "../../lib/utils";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = useMemo(
    () =>
      Array.from({ length: number }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 0.6 + 0.2,
        duration: Math.random() * 8 + 2,
      })),
    [number]
  );

  return (
    <>
      {meteors.map((m) => (
        <span
          key={m.id}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "rotate-[0deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-px before:bg-linear-to-r before:from-accent before:to-transparent",
            className
          )}
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </>
  );
};
