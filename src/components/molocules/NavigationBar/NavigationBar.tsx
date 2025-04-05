"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { LangSelect } from "../LangSelect/LangSelect";
import AFK_LOGO from "../../../../public/images/afk-logo.svg";
import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link as IntlLink, usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "@/i18n/routing";
import { usePathname as useNextPathName } from "next/navigation";

type SocialMedia = {
  icon: "linkedin" | "github" | "youtube" | "instagram" | IconProp;
  url: string;
};

export type Project = {
  id: string;
  name: {
    en: string;
    se: string;
    hu: string;
  };
  url: {
    en: string;
    se: string;
    hu: string;
  };
};

interface NavigationBarProps {
  projects: Project[];
  socialMedia: SocialMedia[];
}

export function NavigationBar({ projects, socialMedia }: NavigationBarProps) {
  const locale = useLocale() as Locale;
  const path = usePathname();
  const pathSegments = path.split("/");
  const page = pathSegments[1];

  const realPath = useNextPathName();
  const realPathSegments = realPath.split("/");
  const slug = realPathSegments[3];

  const router = useRouter();

  const selectedProjectId = projects.find((project) => {
    return Object.values(project.url).some((url) => url === slug);
  })?.id;

  const [selectedMenu, setSelectedMenu] = useState(
    page === "projects" ? selectedProjectId : page === "" ? "portfolio" : page
  );
  const t = useTranslations("navbar");

  const mediaIcons: SocialMedia[] = socialMedia
    .map((social) => {
      switch (social.icon) {
        case "linkedin":
          return {
            icon: faLinkedinIn,
            url: social.url,
          } as SocialMedia;
        case "github":
          return {
            icon: faGithub,
            url: social.url,
          } as SocialMedia;
        case "youtube":
          return {
            icon: faYoutube,
            url: social.url,
          } as SocialMedia;
        case "instagram":
          return {
            icon: faInstagram,
            url: social.url,
          } as SocialMedia;
        default:
          return undefined;
      }
    })
    .filter((social): social is SocialMedia => social !== undefined);

  function handleLangChange(lang: string): void {
    if (selectedMenu === "portfolio") {
      router.push({ pathname: "/" }, { locale: lang });
    } else if (selectedMenu === "about") {
      router.push({ pathname: "/about" }, { locale: lang });
    } else {
      const projectSlug = projects.find(
        (project) => project.id === selectedMenu
      )?.url?.[lang as Locale];
      if (projectSlug) {
        router.push(
          { pathname: "/projects/[slug]", params: { slug: projectSlug } },
          { locale: lang }
        );
      }
      // todo if project does not exist need a fallback to 404 page
    }
  }

  return (
    <nav className="flex flex-col min-w-[200px] w-[200px] gap-4">
      <Link href={"/"} className="px-1 py-2">
        <Image
          style={{
            width: "125px",
            height: "auto",
          }}
          src={AFK_LOGO}
          width={100}
          height={100}
          alt="AFK Logo"
          priority
        />
      </Link>
      <ul className="flex flex-col gap-2 px-1 py-2">
        <li
          id="portfolio"
          className={`
            ${selectedMenu === "portfolio" ? "font-bold" : ""}
            hover:font-bold
            transition-all duration-300
          `}
          onClick={() => setSelectedMenu("portfolio")}
        >
          <IntlLink href="/" locale={locale}>
            {t("portfolio")}
          </IntlLink>
        </li>
        <li>
          {t("projects")}
          <ul className="flex flex-col gap-1 pl-4">
            {projects.map((project) => {
              return (
                <li
                  id={project.id}
                  key={project.id}
                  className={`
                    ${selectedMenu === project.id ? "font-bold" : ""}
                    hover:font-bold
                    transition-all duration-300
                  `}
                  onClick={() => {
                    setSelectedMenu(project.id);
                  }}
                >
                  <IntlLink
                    href={{
                      pathname: "/projects/[slug]",
                      params: {
                        slug: project.url?.[locale] ?? "Unnamed Project",
                      },
                    }}
                    locale={locale}
                  >
                    {project.name?.[locale]}
                  </IntlLink>
                </li>
              );
            })}
          </ul>
        </li>
        <li
          id="about"
          className={`
          ${selectedMenu === "about" ? "font-bold" : ""}
          hover:font-bold
          transition-all duration-300
        `}
          onClick={() => setSelectedMenu("about")}
        >
          <IntlLink href="/about" locale={locale}>
            {t("about")}
          </IntlLink>
        </li>
      </ul>
      <div className="flex flex-col gap-2">
        <LangSelect onLangChange={handleLangChange} />
        <div className="flex gap-2 px-1 py-2">
          {mediaIcons.map((social) => {
            return (
              <Link key={social.url} href={{ pathname: social.url }}>
                <FontAwesomeIcon icon={social.icon} />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
