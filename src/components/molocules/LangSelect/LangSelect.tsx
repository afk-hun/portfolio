"use client";
import { useState } from "react";
import type { MouseEvent } from "react";

interface LangSelectProps {
  onLangSelect: (lang: string) => void;
}

export function LangSelect({ onLangSelect }: LangSelectProps) {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isHovered, setIsHovered] = useState(false);

  function langSelectHandler(event: MouseEvent<HTMLLIElement>): void {
    const lang = event.currentTarget.textContent?.toLocaleLowerCase() || "en";
    setSelectedLang(lang);
    onLangSelect(lang);
  }

  return (
    <ul
      className="list-none flex gap-2 px-1 py-2 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <li
        onClick={langSelectHandler}
        className={` transition-all duration-300 cursor-pointer 
                ${isHovered || selectedLang === "en" ? "opacity-100" : "opacity-0"} 
                ${selectedLang === "en" ? "font-bold" : ""}
                `}
        // ${!isHovered ? "translate-x-[calc(100%+--spacing(1))]" : "translate-x-0"}
      >
        EN
      </li>
      <li
        onClick={langSelectHandler}
        className={` transition-all duration-300 cursor-pointer 
                ${isHovered || selectedLang === "se" ? "opacity-100" : "opacity-0"} 
                ${!isHovered ? "translate-x-[calc(-100%---spacing(2))]" : "translate-x-0"}
                ${selectedLang === "se" ? "font-bold" : ""}
                `}
      >
        SE
      </li>
      <li
        onClick={langSelectHandler}
        className={` transition-all duration-300 cursor-pointer
                ${isHovered || selectedLang === "hu" ? "opacity-100" : "opacity-0"}
                ${!isHovered ? "translate-x-[calc(-200%---spacing(2))]" : "translate-x-0"}
                ${selectedLang === "hu" ? "font-bold" : ""}
                `}
      >
        HU
      </li>
    </ul>
  );
}
