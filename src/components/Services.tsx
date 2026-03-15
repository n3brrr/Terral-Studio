"use client";
import React, { useState, useRef, useEffect, type RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "framer-motion";
import { button } from "framer-motion/client";

const SERVICES_DATA = [
  {
    id: 1,
    category: "Arquitectura",
    title: "Arquitectura Conceptual",
    desc: "Transformamos tus ideas en espacios únicos y funcionales.",
    img: "/photos/OurServices/OurServices-01.webp",
  },
  {
    id: 2,
    category: "Interiorismo",
    title: "Interiorismo Cálido",
    desc: "Creamos atmósferas acogedoras que reflejan tu estilo de vida.",
    img: "/photos/OurServices/OurServices-02.webp",
  },
  {
    id: 3,
    category: "Paisajismo",
    title: "Paisajismo y Entorno",
    desc: "Integramos tu hogar con la naturaleza para crear oasis privados.",
    img: "/photos/OurServices/OurServices-03.webp",
  },
  {
    id: 4,
    category: "Gestión de Obra",
    title: "Gestión Integral de Obra",
    desc: "Nos encargamos de cada detalle para que disfrutes del proceso sin preocupaciones.",
    img: "/photos/OurServices/OurServices-04.webp",
  },
  {
    id: 5,
    category: "Visualización 360°",
    title: "Visualización 360°",
    desc: "Recorre tus espacios soñados antes de construirlos.",
    img: "/photos/OurServices/OurServices-05.webp",
  },
  {
    id: 6,
    category: "Consultoría",
    title: "Consultoría de Espacios",
    desc: "Asesoramiento experto para sacar el máximo partido a cada rincón.",
    img: "/photos/OurServices/OurServices-06.webp",
  },
];

// --- 1. HOOK: Para cerrar la tarjeta al hacer clic fuera ---
function useOutsideClick(ref: RefObject<HTMLDivElement>, callback: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      callback(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}
export default function OutServices() {
  const [activeCard, setActiveCard] = useState<
    (typeof SERVICES_DATA)[0] | null
  >(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null!);

  useOutsideClick(modalRef, () => setActiveCard(null));

  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (activeCard) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [activeCard]);

  // Manejar el clic en los números del 1 al 6
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveIndex(index);
    }
  };

  // Detectar el scroll para actualizar el número activo automáticamente
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.children[0].clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };
  // Función para mover el carrusel con las flechas
  const scrollByArrow = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    // Calculamos más o menos el ancho de una tarjeta para que el salto sea lógico
    const scrollAmount = window.innerWidth > 768 ? 600 : 300;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative w-full min-h-screen bg-black py-24 overflow-hidden"
      id="outservices"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
          Nuestros Servicios.
        </h2>
      </div>

      {/* CARRUSEL HORIZONTAL */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-20 pb-10 gap-6 border"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {SERVICES_DATA.map((card, index) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            onClick={() => setActiveCard(card)}
            className="snap-start shrink-0 w-[85vw] md:w-[600px] h-[500px] rounded-3xl overflow-hidden cursor-pointer relative group"
          >
            {/* Imagen de fondo de la tarjeta */}
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradiente oscuro para que el texto sea legible */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Contenido de la tarjeta */}
            <div className="absolute bottom-0 left-0 p-8 flex flex-col justify-end w-full">
              <span className="text-accent font-mono mb-2">
                0{card.id} — {card.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {card.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CONTROLES FLOTANTES (Abajo a la izquierda) */}
      <div className="absolute bottom-10 left-6 md:left-20 flex flex-col gap-6 z-40">
        {/* Selector del 1 al 6 */}
        <div className="flex gap-4 bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/10">
          {SERVICES_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`text-sm font-mono transition-all w-8 h-8 rounded-full flex items-center justify-center
                ${activeIndex === idx ? "bg-white text-black font-bold" : "text-white/40 hover:text-white hover:bg-white/10"}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
      {/* Flechas */}
      <div className="absolute bottom-10 right-6 md:right-20 z-40 flex gap-4">
        {/* Flecha Izquierda */}
        <button
          onClick={() => scrollByArrow("left")}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all active:scale-95"
        >
          ←
        </button>
        {/* Flecha Derecha */}
        <button
          onClick={() => scrollByArrow("right")}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all active:scale-95"
        >
          →
        </button>
      </div>

      {/* MODAL EXPANSIVO (El efecto Apple) */}
      <AnimatePresence>
        {activeCard && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div
              layoutId={`card-${activeCard.id}`}
              ref={modalRef}
              className="bg-neutral-900 w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-y-auto hidden-scrollbar flex flex-col"
            >
              {/* Cabecera del modal con imagen */}
              <div className="relative w-full h-[40vh] md:h-[50vh] shrink-0">
                <img
                  src={activeCard.img}
                  alt={activeCard.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveCard(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Contenido del modal */}
              <div className="p-8 md:p-14 bg-black/50 backdrop-blur-md flex-1">
                <span className="text-accent font-mono">
                  0{activeCard.id} — {activeCard.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
                  {activeCard.title}
                </h3>

                <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
                  {activeCard.desc}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
