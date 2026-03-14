"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { REVIEWS } from "../lib/reviews.ts";
import { cn } from "../lib/utils.ts";

// Componente individual de cada tarjeta
const ReviewCard = ({
  name,
  role,
  body,
  img,
}: {
  name: string;
  role: string;
  body: string;
  img: string;
}) => (
  <div className="w-[350px] md:w-[450px] p-8 rounded-[32px] bg-surface border border-white/10 flex flex-col gap-4 shrink-0 mx-4">
    <p className="text-white/90 text-lg font-light leading-relaxed italic">
      "{body}"
    </p>
    <div className="flex items-center gap-4 mt-4">
      <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-bold text-white text-sm">{name}</p>
        <p className="text-white/40 text-xs uppercase tracking-widest">
          {role}
        </p>
      </div>
    </div>
  </div>
);

// Fila con movimiento de velocidad basado en scroll
function VelocityRow({
  children,
  baseVelocity = 50,
}: {
  children: React.ReactNode;
  baseVelocity: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const isHovered = useRef(false);

  useAnimationFrame((t, delta) => {
    if (isHovered.current) return;

    let moveBy = baseVelocity * (delta / 1000);
    moveBy += moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);

    if (baseX.get() <= -50) {
      baseX.set(0);
    } else if (baseX.get() > 0) {
      baseX.set(-50);
    }
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div
      className="flex overflow-hidden whitespace-nowrap"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <motion.div
        style={{ x } as any}
        className="flex flex-nowrap py-4 will-change-transform"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Máscaras laterales para un efecto elegante */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      />
      <h2 className="text-6xl md:text-8xl font-bold text-white mb-20 tracking-tighter px-10">
        Opiniones
      </h2>

      <div className="flex flex-col gap-6 ">
        <VelocityRow baseVelocity={-0.3}>
          {REVIEWS.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              role={review.role}
              body={review.body}
              img={review.img.src}
            />
          ))}
        </VelocityRow>
        <VelocityRow baseVelocity={0.4}>
          {REVIEWS.map((review) => (
            <ReviewCard
              key={`rev-2-${review.id}`}
              name={review.name}
              role={review.role}
              body={review.body}
              img={review.img.src}
            />
          ))}
        </VelocityRow>
      </div>
    </section>
  );
}
