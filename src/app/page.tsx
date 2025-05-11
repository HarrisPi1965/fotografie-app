'use client';

import { useState } from "react";
import { Mountain, Moon, Camera, Smartphone, Bug, Building2, CloudRain, Globe, Aperture } from "lucide-react";

const data = [
  {
    category: "Landschaft",
    icon: <Mountain />,
    examples: [
      {
        title: "Klassische Landschaft",
        image: "/images/landschaft1.jpg",
        settings: {
          Abstand: "Fokussiere auf 1/3 der Szene",
          Objektiv: "16–24 mm",
          Blende: "f/8–f/11",
          Zeit: "1/125 s",
          ISO: "100–200",
          Fokus: "Hyperfokaldistanz",
          Tipp: "Maximale Schärfe vorne bis hinten"
        },
      },
      {
        title: "Morgennebel über den Feldern",
        image: "/images/morgennebel.jpg",
        settings: {
          Abstand: "10–30 m",
          Objektiv: "24 mm",
          Blende: "f/8",
          Zeit: "1/125 s",
          ISO: "200",
          Fokus: "mittlerer Bildbereich",
          Tipp: "Tolle Stimmung – Lichtstrahlen im Nebel suchen"
        },
      }
    ]
  },
  {
    category: "Nacht",
    icon: <Moon />,
    examples: [
      {
        title: "Milchstraße fotografieren",
        image: "/images/sternenhimmel.jpg",
        settings: {
          Abstand: "Unendlich",
          Objektiv: "14–24 mm",
          Blende: "f/2.8",
          Zeit: "20 s",
          ISO: "3200",
          Fokus: "Manuell auf Sterne",
          Tipp: "Stativ verwenden, dunkler Himmel nötig"
        },
      },
      {
        title: "Sternenspuren mit Langzeitbelichtung",
        image: "/images/sternenpfad.jpg",
        settings: {
          Abstand: "Unendlich",
          Objektiv: "14 mm",
          Blende: "f/2.8",
          Zeit: "30 s – 2 min",
          ISO: "1600",
          Fokus: "manuell auf Sterne",
          Tipp: "Stativ + Fernauslöser – keine Lichtverschmutzung"
        },
      }
    ]
  },
  {
    category: "Portrait",
    icon: <Camera />,
    examples: [
      {
        title: "Person vor Landschaft",
        image: "/images/portrait1.jpg",
        settings: {
          Abstand: "3–5 m",
          Objektiv: "35 mm",
          Blende: "f/8",
          Zeit: "1/200 s",
          ISO: "100–400",
          Fokus: "Gesicht",
          Tipp: "Person + Hintergrund scharf"
        },
      }
    ]
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
          Tipp: "Gutes Licht nutzen"
        },
      },
      {
        title: "Stadtlichter mit Smartphone",
        image: "/images/smartphone-city.jpg",
        settings: {
          Abstand: "5–10 m",
          Objektiv: "Weitwinkel",
          Blende: "automatisch",
          Zeit: "langsam (Nachtmodus)",
          ISO: "hoch",
          Fokus: "Szene",
          Tipp: "Smartphone aufstützen für ruhige Belichtung"
        },
      }
    ]
  },
  {
    category: "Makro",
    icon: <Bug />,
    examples: [
      {
        title: "Insekt auf Blatt",
        image: "/images/makro-insekt.jpg",
        settings: {
          Abstand: "0.2–0.5 m",
          Objektiv: "Makro 90 mm",
          Blende: "f/4–f/8",
          Zeit: "1/250 s",
          ISO: "200–400",
          Fokus: "manuell, exakt aufs Auge",
          Tipp: "Wind vermeiden, ruhige Umgebung suchen"
        }
      }
    ]
  },
  {
    category: "Street",
    icon: <Globe />,
    examples: [
      {
        title: "Mensch mit Regenschirm im Gegenlicht",
        image: "/images/street-schirm.jpg",
        settings: {
          Abstand: "5–10 m",
          Objektiv: "35 mm",
          Blende: "f/5.6",
          Zeit: "1/320 s",
          ISO: "400",
          Fokus: "Person",
          Tipp: "Licht/Schatten nutzen, schnell reagieren"
        }
      }
    ]
  },
  {
    category: "Regen",
    icon: <CloudRain />,
    examples: [
      {
        title: "Spiegelung in der Pfütze",
        image: "/images/regen-pfuetze.jpg",
        settings: {
          Abstand: "1–2 m",
          Objektiv: "50 mm",
          Blende: "f/2.8",
          Zeit: "1/100 s",
          ISO: "800",
          Fokus: "Spiegelung",
          Tipp: "Tiefe Perspektive einnehmen"
        }
      }
    ]
  },
  {
    category: "Reise",
    icon: <Aperture />,
    examples: [
      {
        title: "Straßenszene in Marrakesch",
        image: "/images/reise-strasse.jpg",
        settings: {
          Abstand: "5–10 m",
          Objektiv: "28–70 mm",
          Blende: "f/5.6",
          Zeit: "1/250 s",
          ISO: "200",
          Fokus: "Szene insgesamt",
          Tipp: "Licht und Schatten der Umgebung nutzen"
        }
      }
    ]
  },
  {
    category: "Architektur",
    icon: <Building2 />,
    examples: [
      {
        title: "Glasfassade im Gegenlicht",
        image: "/images/architektur-glas.jpg",
        settings: {
          Abstand: "Unendlich",
          Objektiv: "24 mm Tilt-Shift",
          Blende: "f/11",
          Zeit: "1/200 s",
          ISO: "100",
          Fokus: "komplette Fassade",
          Tipp: "Symmetrie + Linien bewusst einbauen"
        }
      }
    ]
  }
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
              <h2 className="text-xl font-bold mb-2">{ex.title}</h2>
              <ul className="text-sm space-y-1">
                {Object.entries(ex.settings).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-semibold">{key}:</span> {value}
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

