"use client";
import { useState } from "react";

export function LangSelect() {
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ul
      className="list-none flex gap-2 px-1 py-2 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <li
        onClick={() => setSelectedLang("EN")}
        className={` transition-all duration-300 cursor-pointer 
                ${isHovered || selectedLang === "EN" ? "opacity-100" : "opacity-0"} 
                ${selectedLang === "EN" ? "font-bold" : ""}
                `}
        // ${!isHovered ? "translate-x-[calc(100%+--spacing(1))]" : "translate-x-0"}
      >
        EN
      </li>
      <li
        onClick={() => setSelectedLang("SE")}
        className={` transition-all duration-300 cursor-pointer 
                ${isHovered || selectedLang === "SE" ? "opacity-100" : "opacity-0"} 
                ${!isHovered ? "translate-x-[calc(-100%+--spacing(1))]" : "translate-x-0"}
                ${selectedLang === "SE" ? "font-bold" : ""}`}
      >
        SE
      </li>
      <li
        onClick={() => setSelectedLang("HU")}
        className={` transition-all duration-300 cursor-pointer
                ${isHovered || selectedLang === "HU" ? "opacity-100" : "opacity-0"}
                ${!isHovered ? "translate-x-[calc(-200%---spacing(1))]" : "translate-x-0"}
                ${selectedLang === "HU" ? "font-bold" : ""}`}
      >
        HU
      </li>
    </ul>
  );
}
