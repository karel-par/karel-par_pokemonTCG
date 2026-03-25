"use client";

import { useParams, useRouter } from "next/navigation";
import { useGetCardsByTypeQuery } from "@/src/lib/services/pokemonApi";

export default function TypePage() {
  const { type } = useParams();
  const router = useRouter();

  const { data, isLoading } = useGetCardsByTypeQuery(type);

  return (
    <div className="cards-container">
      
      {/* REMOVE the old back button */}
      {/* <button onClick={() => router.push("/")}>← Back</button> */}

      <h2 className="card-title">{type.toUpperCase()} CARDS</h2>

{isLoading && (
  <div className="page-loader">
    <div className="loader-line"></div>
    <div className="mini-pokeball"></div>
  </div>
)}

      <div className="cards-grid">
        {data?.data?.map((card) => (
          <img key={card.id} src={card.images.small} alt={card.name} />
        ))}
      </div>

      {/* ✅ PUT IT HERE (BOTTOM OF PAGE) */}
      <button
        className="pokeball-btn"
        onClick={() => router.push("/")}
      ></button>

    </div>
  );
}