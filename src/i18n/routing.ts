import { defineRouting } from "next-intl/routing";
//import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "se", "hu"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      se: "/om",
      hu: "/rolam",
    },
    "/projects/[slug]": {
      en: "/projects/[slug]",
      se: "/projekt/[slug]",
      hu: "/projektek/[slug]",
    },
  },
});
