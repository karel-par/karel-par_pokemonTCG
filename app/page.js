"use client";

import { useSelector } from "react-redux";
import LoadingScreen from "@/components/LoadingScreen";
import Pokedex from "@/components/Pokedex";

export default function Home() {
  const phase = useSelector((state) => state.ui.phase);

  if (phase === "loading") return <LoadingScreen />;

  return <Pokedex />;
}