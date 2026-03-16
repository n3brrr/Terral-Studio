"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ESTANCIAS = [
  {
    id: "sala",
    name: "Sala de estar",
    size: "10m²",
    img: "/photos/HousePlan/salon-glow.webp",
  },
  {
    id: "comedor",
    name: "Comedor",
    size: "10m²",
    img: "/photos/HousePlan/comedor-glow.webp",
  },
  {
    id: "cocina",
    name: "Cocina",
    size: "20m²",
    img: "/photos/HousePlan/cocina-glow.webp",
  },
  {
    id: "salon",
    name: "Salón",
    size: "43m²",
    img: "/photos/HousePlan/salon-glow.webp",
  },
  {
    id: "principal",
    name: "Habitacion Principal",
    size: "60m²",
    img: "/photos/HousePlan/dormitorio-principal-glow.webp",
  },
  {
    id: "invitados",
    name: "Habitacion de invitados",
    size: "10m²",
    img: "/photos/HousePlan/dormitorio-invitados-glow.webp",
  },
  {
    id: "baño1",
    name: "Baño 1",
    size: "10m²",
    img: "/photos/HousePlan/baño1-glow.webp",
  },
  {
    id: "baño2",
    name: "Baño 2",
    size: "10m²",
    img: "/photos/HousePlan/baño2-glow.webp",
  },
  {
    id: "pasillo",
    name: "Pasillo y armario",
    size: "10m²",
    img: "/photos/HousePlan/pasillo-glow.webp",
  },
  {
    id: "lavanderia",
    name: "Lavanderia",
    size: "10m²",
    img: "/photos/HousePlan/lavanderia-glow.webp",
  },
];

export default function HousePlan() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="text-white py-20" id="houseplan">
      <h2 className="text-4xl sm:text-6xl font-bold px-6 md:px-10 md:text-8xl tracking-tighter mb-10">
        Planos de la casa
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6 md:px-10 items-start">
        {/* COLUMNA IZQUIERDA: LISTA */}
        <div className="flex flex-col">
          <ul className="flex flex-col border-t border-white/10">
            {ESTANCIAS.map((estancia) => (
              <li
                key={estancia.id}
                onClick={() =>
                  setActiveId(activeId === estancia.id ? null : estancia.id)
                }
                className={`
                  flex justify-between p-6 border-b border-white/10 transition-all duration-300 cursor-pointer
                  ${activeId === estancia.id ? "bg-white/10 border-accent" : "hover:bg-white/5"}
                `}
              >
                <p
                  className={`text-lg font-medium transition-colors ${activeId === estancia.id ? "text-accent" : "text-white/80"}`}
                >
                  {estancia.name}
                </p>
                <span className="text-white/30 font-mono">{estancia.size}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMNA DERECHA: PLANO INTERACTIVO (EL CAMBIO) */}
        <div className="relative rounded-2xl overflow-hidden bg-black/20 aspect-square shadow-2xl flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeId || "HousePlan"}
              src={
                activeId
                  ? ESTANCIAS.find((e) => e.id === activeId)?.img
                  : "/photos/HousePlan/HousePlan.webp"
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-contain"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
