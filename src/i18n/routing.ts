import { defineRouting } from "next-intl/routing";
//import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "se", "hu"],

  // Used when no locale matches
  defaultLocale: "en",
  localeDetection: true,
  pathnames: {
    "/": "/",
    "/about": {
      se: "/om",
      hu: "/rolam",
    },
    "/projects/[slug]": {
      se: "/projekt/[slug]",
      hu: "/projektek/[slug]",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
