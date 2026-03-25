"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPhase } from "@/src/lib/features/uiSlice";

export default function LoadingScreen() {
  const dispatch = useDispatch();

  const [expand, setExpand] = useState(false);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    // Pokeball opens first
    const openTimer = setTimeout(() => {
      setOpening(true);
    }, 3500);

    // Then expansion starts
    const expandTimer = setTimeout(() => {
      setExpand(true);
    }, 4000);

    // Then go to main screen
    const endTimer = setTimeout(() => {
      dispatch(setPhase("main"));
    }, 6500);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(expandTimer);
      clearTimeout(endTimer);
    };
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="top-text big-text">POKEDEX</div>

      <div className={`line ${expand ? "expand" : ""}`} />

      {/* Pokeball */}
      <div className={`pokeball ${opening ? "opening" : ""}`}>
        <div className="top-half"></div>
        <div className="bottom-half"></div>
        <div className="center-button"></div>
      </div>

      <div className="bottom-text big-text">LOADING</div>
    </div>
  );
}