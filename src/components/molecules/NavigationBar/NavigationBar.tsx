'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { LangSelect } from '../LangSelect/LangSelect';
import AFK_LOGO from '../../../../public/images/afk-logo.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link as IntlLink, usePathname, useRouter } from '@/i18n/navigation';
import { Locale } from '@/i18n/routing';
import { usePathname as useNextPathName } from 'next/navigation';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { useDisplaySize } from '@/hooks/display';

export type SocialIconType = 'linkedin' | 'github' | 'youtube' | 'instagram';

type SocialMedia = {
  icon: SocialIconType | IconProp;
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
  const pathSegments = path.split('/');
  const page = pathSegments[1];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const display = useDisplaySize();

  const realPath = useNextPathName();
  const realPathSegments = realPath.split('/');
  const slug = realPathSegments[3];

  const router = useRouter();

  useEffect(() => {
    if (display !== 'mobile') {
      setIsMenuOpen(false);
    }
  }, [display]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [display, router]);

  const selectedProjectId = projects.find((project) => {
    return Object.values(project.url).some((url) => url === slug);
  })?.id;

  const [selectedMenu, setSelectedMenu] = useState(
    page === 'projects' ? selectedProjectId : page === '' ? 'portfolio' : page
  );
  const t = useTranslations('navbar');

  const mediaIcons: SocialMedia[] = socialMedia
    .map((social) => {
      switch (social.icon) {
        case 'linkedin':
          return {
            icon: faLinkedinIn,
            url: social.url,
          } as SocialMedia;
        case 'github':
          return {
            icon: faGithub,
            url: social.url,
          } as SocialMedia;
        case 'youtube':
          return {
            icon: faYoutube,
            url: social.url,
          } as SocialMedia;
        case 'instagram':
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
    if (selectedMenu === 'portfolio') {
      router.push({ pathname: '/' }, { locale: lang });
    } else if (selectedMenu === 'about') {
      router.push({ pathname: '/about' }, { locale: lang });
    } else {
      const projectSlug = projects.find(
        (project) => project.id === selectedMenu
      )?.url?.[lang as Locale];
      if (projectSlug) {
        router.push(
          { pathname: '/projects/[slug]', params: { slug: projectSlug } },
          { locale: lang }
        );
      }
      // todo if project does not exist need a fallback to 404 page
    }
  }

  return (
    <nav
      className={`flex flex-col w-full  md:min-w-[200px] md:w-[200px] gap-4 sticky md:top-14 lg:top-20`}
    >
      <div className='flex flex-col gap-4'>
        <div className='w flex justify-between items-center'>
          <IntlLink href={'/'} locale={locale} className='px-1 py-2'>
            <Image
              style={{
                width: display === 'mobile' ? '80px' : '125px',
                height: 'auto',
              }}
              src={AFK_LOGO}
              width={100}
              height={100}
              alt='AFK Logo'
              priority
            />
          </IntlLink>
          <FontAwesomeIcon
            className={`p-4 transition-all duration-300 ${isMenuOpen ? 'rotate-0' : 'rotate-180'}`}
            style={{
              display: display === 'mobile' ? 'block' : 'none',
            }}
            size='lg'
            icon={faAnglesUp}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
        <div
          className={`flex flex-col transition-all duration-300
            px-10 md:px-0 
            ${
              display === 'mobile'
                ? isMenuOpen
                  ? 'h-[240px]'
                  : 'h-0'
                : 'h-auto'
            }
            overflow-hidden`}
        >
          <ul className='flex flex-col gap-2 px-1 py-2 '>
            <li id='portfolio' onClick={() => setSelectedMenu('portfolio')}>
              <IntlLink
                className={`
                ${selectedMenu === 'portfolio' ? 'font-medium' : 'font-light'}
                hover:font-medium
                transition-all duration-300
              `}
                href='/'
                locale={locale}
              >
                {t('portfolio')}
              </IntlLink>
            </li>
            <li>
              <p className='font-light'>{t('projects')}</p>
              <ul className='flex flex-col gap-1 pl-4'>
                {projects.map((project) => {
                  return (
                    <li
                      id={project.id}
                      key={project.id}
                      className={`
                    ${selectedMenu === project.id ? 'font-medium' : 'font-light'}
                    hover:font-medium
                    transition-all duration-300
                  `}
                      onClick={() => {
                        setSelectedMenu(project.id);
                      }}
                    >
                      <IntlLink
                        href={{
                          pathname: '/projects/[slug]',
                          params: {
                            slug: project.url?.[locale] ?? 'Unnamed Project',
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
            <li id='about' onClick={() => setSelectedMenu('about')}>
              <IntlLink
                className={`
                ${selectedMenu === 'about' ? 'font-medium' : 'font-light'}
                hover:font-medium
                transition-all duration-300`}
                href='/about'
                locale={locale}
              >
                {t('about')}
              </IntlLink>
            </li>
          </ul>
          <div className='flex flex-col gap-2'>
            <LangSelect onLangChange={handleLangChange} />
            <div className='flex gap-2 px-1 py-2'>
              {mediaIcons.map((social) => {
                return (
                  <Link key={social.url} href={{ pathname: social.url }}>
                    <FontAwesomeIcon icon={social.icon} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
