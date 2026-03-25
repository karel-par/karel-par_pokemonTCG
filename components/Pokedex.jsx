"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TYPES } from "@/src/constants/types";

export default function Pokedex() {
  const router = useRouter();
  const [active, setActive] = useState(null);

  // ✅ THIS is where it belongs
  const handleClick = (typeName) => {
    setActive(typeName); // triggers animation

setTimeout(() => {
  router.push(`/type/${typeName}`);
}, 1100);
  };

  return (
    <div className="pokedex-container">
      
      {/* 🔥 pink transition overlay */}
      <div className={`transition-overlay ${active ? "expand" : ""}`} />

      <h1 className="pokedex-title">
        POKEMON ENERGY TYPES
      </h1>

      <div className="type-grid">
        {TYPES.map((type) => (
          <div
            key={type.name}
            className={`type-tile ${
              active === type.name ? "open" : ""
            }`}
            onClick={() => handleClick(type.name)} // 👈 triggers it
          >
            <img src={type.icon} alt={type.name} />
          </div>
        ))}
      </div>
    </div>
  );
}