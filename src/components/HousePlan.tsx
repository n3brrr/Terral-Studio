"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SalonGlow from "../assets/photos/HousePlan/salon-glow.webp";
import CocinaGlow from "../assets/photos/HousePlan/cocina-glow.webp";
import DormitorioPrincipalGlow from "../assets/photos/HousePlan/dormitorio-principal-glow.webp";
import DormitorioInvitadosGlow from "../assets/photos/HousePlan/dormitorio-invitados-glow.webp";
import Baño1Glow from "../assets/photos/HousePlan/baño1-glow.webp";
import Baño2Glow from "../assets/photos/HousePlan/baño2-glow.webp";
import PasilloGlow from "../assets/photos/HousePlan/pasillo-glow.webp";
import LavanderiaGlow from "../assets/photos/HousePlan/lavanderia-glow.webp";
import ComedorGlow from "../assets/photos/HousePlan/comedor-glow.webp";

// 1. Definimos los datos de las estancias
const ESTANCIAS = [
  {
    id: "sala",
    name: "Sala de estar",
    size: "10m²",
    glow: SalonGlow,
  },
  {
    id: "comedor",
    name: "Comedor",
    size: "10m²",
    glow: ComedorGlow,
  },
  {
    id: "cocina",
    name: "Cocina",
    size: "20m²",
    glow: CocinaGlow,
  },
  {
    id: "salon",
    name: "Salón",
    size: "43m²",
    glow: SalonGlow,
  },
  {
    id: "principal",
    name: "Habitacion Principal",
    size: "60m²",
    glow: DormitorioPrincipalGlow,
  },
  {
    id: "invitados",
    name: "Habitacion de invitados",
    size: "10m²",
    glow: DormitorioInvitadosGlow,
  },
  {
    id: "bano1",
    name: "Baño 1",
    size: "10m²",
    glow: Baño1Glow,
  },
  {
    id: "bano2",
    name: "Baño 2",
    size: "10m²",
    glow: Baño2Glow,
  },
  {
    id: "pasillo",
    name: "Pasillo y armario",
    size: "10m²",
    glow: PasilloGlow,
  },
  {
    id: "lavanderia",
    name: "Lavanderia",
    size: "10m²",
    glow: LavanderiaGlow,
  },
];

export default function HousePlan() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Precarga de imágenes para evitar parpadeos
  useEffect(() => {
    ESTANCIAS.forEach((estancia) => {
      const img = new Image();
      img.src = estancia.glow;
    });
  }, []);

  return (
    <section className="text-white py-20" id="houseplan">
      <h2 className="text-6xl font-bold px-10 md:text-8xl tracking-tighter">
        Planos de la casa
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 mt-10 items-start">
        {/* COLUMNA IZQUIERDA: LISTA */}
        <div className="flex flex-col">
          <p className="text-2xl font-light text-white/70 mb-8 underline decoration-accent/30 underline-offset-8">
            El área total es de{" "}
            <span className="text-white font-bold">150m²</span>
          </p>

          <ul className="flex flex-col">
            {ESTANCIAS.map((estancia) => (
              <li
                key={estancia.id}
                onMouseEnter={() => setActiveId(estancia.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`
                  flex justify-between p-4 border-b border-white/10 transition-all duration-300 cursor-default
                  ${activeId === estancia.id ? "bg-white/5 pl-8 border-accent" : "hover:bg-white/2"}
                `}
              >
                <p
                  className={`text-lg transition-colors ${activeId === estancia.id ? "text-accent font-bold" : "text-white/80"}`}
                >
                  {estancia.name}
                </p>
                <p className="font-mono text-white/40">{estancia.size}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMNA DERECHA: PLANO INTERACTIVO */}
        <div className="relative top-24 rounded-3xl overflow-hidden bg-black/20 border border-white/5 aspect-square shadow-2xl max-h-screen">
          {/* Imagen Base */}
          <img
            src="/photos/HousePlan/HousePlan.webp"
            alt="Plano base"
            className="absolute inset-0 w-full h-full object-contain p-4"
          />

          {/* Capas de Luz (Glow) */}
          <AnimatePresence>
            {ESTANCIAS.map(
              (estancia) =>
                activeId === estancia.id && (
                  <motion.img
                    key={estancia.id}
                    src={estancia.glow.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-contain p-4 mix-blend-screen pointer-events-none"
                  />
                ),
            )}
          </AnimatePresence>

          {/* Sutil gradiente para dar profundidad al contenedor */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
    </section>
  );
}
