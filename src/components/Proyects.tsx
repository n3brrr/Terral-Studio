"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

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
    thumbnail: "/photos/Villa/Villa-04.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-2",
    thumbnail: "/photos/Villa/Villa-02.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-2",
    thumbnail: "/photos/Villa/Villa-03.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: "/photos/Villa/Villa-07.webp",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-3",
    thumbnail: "/photos/Villa/Villa-01.webp",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: "/photos/Villa/Villa-05.webp",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-2",
    thumbnail: "/photos/Villa/Villa-06.webp",
  },
];

export default function Proyects() {
  return (
    <div className="h-full w-full bg-surface min-h-screen text-white">
      <h2 className="text-4xl sm:text-6xl font-bold md:text-8xl tracking-tighter px-6 md:px-12 pt-12">
        Proyectos
      </h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}
