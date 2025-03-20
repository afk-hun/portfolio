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

type SocialMedia = {
  icon: "linkedin" | "github" | "youtube" | "instagram" | IconProp;
  url: string;
};

type Project = {
  name: string;
  url: string;
};

interface NavigationBarProps {
  projects: Project[];
  socialMedia: SocialMedia[];
}

export function NavigationBar({ projects, socialMedia }: NavigationBarProps) {
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

  return (
    <nav className="flex flex-col h-full justify-between">
      <span className="px-1 py-2">Logo</span>
      <ul className="flex flex-col gap-2 px-1 py-2">
        <li>
          <Link href="/">Portfolio</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
          <ul className="flex flex-col gap-1 pl-4">
            {projects.map((project) => {
              return (
                <li key={project.url}>
                  <Link href={`/projects/${project.url}`}>{project.name}</Link>
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div className="flex flex-col gap-2">
        <LangSelect />
        <div className="flex gap-2 px-1 py-2">
          {mediaIcons.map((social) => {
            return (
              <Link key={social.url} href={social.url}>
                <FontAwesomeIcon icon={social.icon} />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
