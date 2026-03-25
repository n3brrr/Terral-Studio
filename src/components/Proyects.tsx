("use client");
import { LayoutGrid } from "./ui/layout-grid";

// Un solo componente para todos los contenidos
const CardContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col justify-end p-4 h-full w-full">
    <p className="font-bold text-white text-xl md:text-2xl">{title}</p>
    <p className="text-white/70 text-sm md:text-base">{description}</p>
  </div>
);

const cards = [
  {
    id: 1,
    content: (
      <CardContent
        title="Villa Brisa"
        description="Reforma integral en Pedregalejo."
      />
    ),
    className: "md:col-span-1 ",
    thumbnail: "/photos/Villa/Villa-04.webp",
  },
  {
    id: 2,
    content: (
      <CardContent
        title="Villa Brisa"
        description="Diseño de interiores moderno."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/photos/Villa/Villa-02.webp",
  },
  {
    id: 3,
    content: (
      <CardContent
        title="Villa Brisa"
        description="Reforma integral en Pedregalejo."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/photos/Villa/Villa-03.webp",
  },
  {
    id: 4,
    content: (
      <CardContent
        title="Villa Brisa"
        description="Reforma integral en Pedregalejo."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/photos/Villa/Villa-07.webp",
  },
  {
    id: 5,
    content: (
      <CardContent title="Villa Brisa" description="Proyecto destacado." />
    ),
    className: "md:col-span-3", // La más grande
    thumbnail: "/photos/Villa/Villa-01.webp",
  },
  {
    id: 6,
    content: (
      <CardContent
        title="Villa Brisa"
        description="Reforma integral en Pedregalejo."
      />
    ),
    className: "md:col-span-1",
    thumbnail: "/photos/Villa/Villa-05.webp",
  },
  {
    id: 7,
    content: (
      <CardContent
        title="Villa Brisa"
        description="Reforma integral en Pedregalejo."
      />
    ),
    className: "md:col-span-2",
    thumbnail: "/photos/Villa/Villa-06.webp",
  },
];

export default function Proyects() {
  return (
    <section
      className="h-full w-full bg-surface min-h-screen text-white py-20 pointer-events-none"
      id="proyectos"
    >
      <h2 className="text-4xl sm:text-6xl font-bold md:text-8xl tracking-tighter px-6 md:px-12 mb-10">
        Proyectos
      </h2>

      <div className="w-full">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}
