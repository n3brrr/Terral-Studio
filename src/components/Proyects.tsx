"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import imagen1 from "../assets/photos/Villa-01.webp";
import imagen2 from "../assets/photos/Villa-02.webp";
import imagen3 from "../assets/photos/Villa-03.webp";
import imagen4 from "../assets/photos/Villa-04.webp";
import imagen5 from "../assets/photos/Villa-05.webp";
import imagen6 from "../assets/photos/Villa-06.webp";
import imagen7 from "../assets/photos/Villa-07.webp";

const SkeletonOne = () => (
  <div className="flex flex-col justify-end p-4">
    <p className="font-bold text-white text-xl">Villa Brisa</p>
    <p className="text-white/70">Reforma integral en Pedregalejo.</p>
  </div>
);

const SkeletonTwo = () => (
  <div className="flex flex-col justify-end p-4">
    <p className="font-bold text-white text-xl">Villa Brisa</p>
    <p className="text-white/70">Reforma integral en Pedregalejo.</p>
  </div>
);

const SkeletonThree = () => (
  <div className="flex flex-col justify-end p-4">
    <p className="font-bold text-white text-xl">Villa Brisa</p>
    <p className="text-white/70">Reforma integral en Pedregalejo.</p>
  </div>
);

const SkeletonFour = () => (
  <div className="flex flex-col justify-end p-4">
    <p className="font-bold text-white text-xl">Villa Brisa</p>
    <p className="text-white/70">Reforma integral en Pedregalejo.</p>
  </div>
);

const SkeletonFive = () => (
  <div className="flex flex-col justify-end p-4">
    <p className="font-bold text-white text-xl">Villa Brisa</p>
    <p className="text-white/70">Reforma integral en Pedregalejo.</p>
  </div>
);

const SkeletonSix = () => (
  <div className="flex flex-col justify-end p-4">
    <p className="font-bold text-white text-xl">Villa Brisa</p>
    <p className="text-white/70">Reforma integral en Pedregalejo.</p>
  </div>
);

const SkeletonSeven = () => (
  <div className="flex flex-col justify-end p-4">
    <p className="font-bold text-white text-xl">Villa Brisa</p>
    <p className="text-white/70">Reforma integral en Pedregalejo.</p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: imagen4.src,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-2",
    thumbnail: imagen2.src,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-2",
    thumbnail: imagen3.src,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: imagen7.src,
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-3",
    thumbnail: imagen1.src,
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: imagen5.src,
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-2",
    thumbnail: imagen6.src,
  },
];

export default function Proyects() {
  return (
    <div className="h-full w-full bg-surface min-h-screen text-white">
      <h2 className="text-6xl font-bold md:text-8xl tracking-tighter px-12 pt-12">
        Proyectos
      </h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}
