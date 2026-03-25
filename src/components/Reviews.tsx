"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { REVIEWS } from "../lib/reviews";

// Componente individual de cada tarjeta
const ReviewCard = ({ name, role, body, img }: any) => (
  <div className="w-[350px] md:w-[450px] shrink-0 mx-4 p-8 rounded-[32px] bg-white/3 border border-white/10 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white/6 hover:border-white/20 flex flex-col gap-4">
    <p className="text-white/80 text-lg font-light leading-relaxed italic font-display text-balance">
      "{body}"
    </p>

    <div className="flex items-center gap-4 mt-4">
      {/* Contenedor del Avatar */}
      <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10 bg-neutral-800">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          width="48"
          height="48"
        />
      </div>
      <div className="overflow-hidden">
        <p className="font-bold text-white/90 text-lg tracking-tight truncate">
          {name}
        </p>
        <p className="text-accent/60 text-[10px] uppercase tracking-[0.2em] font-medium truncate">
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
    <section
      className="py-24 bg-background relative overflow-hidden"
      id="reviews"
    >
      {/* Título fuera de la máscara para que sea siempre visible */}
      <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-12 md:mb-20 tracking-tighter px-6 md:px-10">
        Opiniones
      </h2>

      {/* Máscaras laterales solo en el carrusel */}
      <div
        className="relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex flex-col gap-6">
          <VelocityRow baseVelocity={-0.2}>
            {REVIEWS.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                role={review.role}
                body={review.body}
                img={review.img}
              />
            ))}
          </VelocityRow>
          <VelocityRow baseVelocity={0.2}>
            {REVIEWS.map((review) => (
              <ReviewCard
                key={`rev-2-${review.id}`}
                name={review.name}
                role={review.role}
                body={review.body}
                img={review.img}
              />
            ))}
          </VelocityRow>
        </div>
      </div>
    </section>
  );
}
