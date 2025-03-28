"use client";
import { redirect, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import type { MouseEvent } from "react";

export function LangSelect() {
  const locale = useLocale();
  const [selectedLang, setSelectedLang] = useState(locale);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const pathSegments = pathname.split("/");
  const slug = pathSegments[1] === "projects" ? pathSegments[2] : null;

  function langSelectHandler(event: MouseEvent<HTMLLIElement>): void {
    const lang = event.currentTarget.textContent?.toLocaleLowerCase() || "en";
    setSelectedLang(lang);
    redirect({
      href:
        pathname === "/projects/[slug]" && slug
          ? { pathname: "/projects/[slug]", params: { slug } }
          : { pathname: pathname as "/" | "/about" },
      locale: lang,
    });
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
