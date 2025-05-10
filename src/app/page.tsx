'use client';

import { useState } from "react";
import { Mountain, Moon, Camera, Smartphone } from "lucide-react";
import React from "react";

const data = [
  {
    category: "Landschaft",
    icon: <Mountain />,
    examples: [
      {
        title: "Klassische Landschaft",
        image: "/images/landschaft.jpg",
        settings: {
          Abstand: "Fokussiere auf 1/3 der Szene",
          Objektiv: "16–24 mm",
          Blende: "f/8–f/11",
          Zeit: "1/125 s",
          ISO: "100–200",
          Fokus: "Hyperfokaldistanz",
          Tipp: "Maximale Schärfe vorne bis hinten",
        },
      },
    ],
  },
  {
    category: "Nacht",
    icon: <Moon />,
    examples: [
      {
        title: "Milchstraße fotografieren",
        image: "/images/sternhimmel.jpg",
        settings: {
          Abstand: "Unendlich",
          Objektiv: "14–24 mm",
          Blende: "f/2.8",
          Zeit: "20 s",
          ISO: "3200",
          Fokus: "Manuell auf Sterne",
          Tipp: "Stativ verwenden, dunkler Himmel nötig",
        },
      },
    ],
  },
  {
    category: "Portrait",
    icon: <Camera />,
    examples: [
      {
        title: "Person vor Landschaft",
        image: "/images/portrait.jpg",
        settings: {
          Abstand: "3–5 m",
          Objektiv: "35 mm",
          Blende: "f/8",
          Zeit: "1/200 s",
          ISO: "100–400",
          Fokus: "Gesicht",
          Tipp: "Person + Hintergrund scharf",
        },
      },
    ],
  },
  {
    category: "Smartphone",
    icon: <Smartphone />,
    examples: [
      {
        title: "Porträt mit Unschärfe",
        image: "/images/smartphone.jpg",
        settings: {
          Abstand: "1–2 m",
          Objektiv: "Porträtmodus",
          Blende: "Automatisch",
          Zeit: "Automatisch",
          ISO: "Automatisch",
          Fokus: "Gesicht",
          Tipp: "Gutes Licht nutzen",
        },
      },
    ],
  },
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("Landschaft");
  const selected = data.find((d) => d.category === selectedCategory);

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">📸 Fotografie-Handbuch</h1>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {data.map((d) => (
          <button
            key={d.category}
            onClick={() => setSelectedCategory(d.category)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              selectedCategory === d.category ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {d.icon}
            {d.category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selected?.examples.map((ex, idx) => (
          <div key={idx} className="rounded-xl border shadow-md bg-white overflow-hidden">
            <img
              src={ex.image}
              alt={ex.title}
              className="w-full object-cover"
            />
            <div className="p-4 bg-white text-black">
              <h2 className="text-xl font-semibold mb-2">{ex.title}</h2>
              <ul className="text-sm space-y-1">
                {Object.entries(ex.settings).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
