"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const LayoutGrid = ({ cards }: { cards: any[] }) => {
  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "relative overflow-hidden")}>
          <motion.div
            className={cn(
              "cursor-pointer overflow-hidden relative h-full w-full",
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
