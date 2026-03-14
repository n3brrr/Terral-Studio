"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils"; // Aquí apuntas a tu archivo utils

export const LayoutGrid = ({ cards }: { cards: any[] }) => {
  const [selected, setSelected] = useState<any | null>(null);
  const [lastSelected, setLastSelected] = useState<any | null>(null);

  const handleClick = (card: any) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "relative overflow-hidden")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "cursor-pointer overflow-hidden",
              selected?.id === card.id
                ? "absolute inset-0 z-50 cursor-default"
                : "relative h-full w-full",
            )}
          >
            {/* IMAGEN */}
            <img
              src={card.thumbnail}
              alt="thumbnail"
              className="object-cover w-full h-full rounded-xl"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};
