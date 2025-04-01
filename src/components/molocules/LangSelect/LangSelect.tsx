"use client";
import { redirect, usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "@/i18n/routing";
import { useState } from "react";
import type { MouseEvent } from "react";

interface LangSelectProps {
  locale: Locale;
}

export function LangSelect({ locale }: LangSelectProps) {
  // const locale = useLocale();
  // console.log("[LangSelect] locale", locale);
  // const [selectedLang, setSelectedLang] = useState(locale);
  // console.log("[LangSelect] selectedLang", selectedLang);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname.split("/");
  const slug = pathSegments[1] === "projects" ? pathSegments[2] : null;

  function langSelectHandler(event: MouseEvent<HTMLLIElement>): void {
    const lang = event.currentTarget.textContent?.toLocaleLowerCase() || "en";
    console.log("[LangSelect] lang", lang);
    // setSelectedLang(lang);
    // redirect({
    //   href:
    //     pathname === "/projects/[slug]" && slug
    //       ? { pathname: "/projects/[slug]", params: { slug } }
    //       : { pathname: pathname as "/" | "/about" },
    //   locale: lang,
    // });

    // const localizedPath =
    // pathname === "/projects/[slug]" && slug
    //   ? `/projects/${slug}`
    //   : pathname;

    router.push(
      pathname === "/projects/[slug]" && slug
        ? { pathname: "/projects/[slug]", params: { slug } }
        : { pathname: pathname as "/" | "/about" },
      { locale: lang }
    );
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
                ${isHovered || locale === "en" ? "opacity-100" : "opacity-0"} 
                ${locale === "en" ? "font-bold" : ""}
                `}
      >
        EN
      </li>
      <li
        onClick={langSelectHandler}
        className={` transition-all duration-300 cursor-pointer 
                ${isHovered || locale === "se" ? "opacity-100" : "opacity-0"} 
                ${!isHovered ? "translate-x-[calc(-100%---spacing(2))]" : "translate-x-0"}
                ${locale === "se" ? "font-bold" : ""}
                `}
      >
        SE
      </li>
      <li
        onClick={langSelectHandler}
        className={` transition-all duration-300 cursor-pointer
                ${isHovered || locale === "hu" ? "opacity-100" : "opacity-0"}
                ${!isHovered ? "translate-x-[calc(-200%---spacing(2))]" : "translate-x-0"}
                ${locale === "hu" ? "font-bold" : ""}
                `}
      >
        HU
      </li>
    </ul>
  );
}
