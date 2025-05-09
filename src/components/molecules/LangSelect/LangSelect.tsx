'use client';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import type { MouseEvent } from 'react';

interface LangSelectProps {
  onLangChange: (lang: string) => void;
}

export function LangSelect({ onLangChange }: LangSelectProps) {
  const locale = useLocale();
  const [isHovered, setIsHovered] = useState(false);

  function langSelectHandler(event: MouseEvent<HTMLLIElement>): void {
    const lang = event.currentTarget.textContent?.toLocaleLowerCase() || '';

    onLangChange(lang);
  }

  return (
    <ul
      className='list-none flex gap-2 px-1 py-2 '
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <li
        onClick={langSelectHandler}
        className={` transition-all duration-300 cursor-pointer 
                ${isHovered || locale === 'en' ? 'opacity-100' : 'opacity-0'} 
                ${locale === 'en' ? 'font-normal' : 'font-extralight'}
                `}
      >
        EN
      </li>
      <li
        onClick={langSelectHandler}
        className={` transition-all duration-300 cursor-pointer 
                ${isHovered || locale === 'se' ? 'opacity-100' : 'opacity-0'} 
                ${!isHovered ? 'translate-x-[calc(-100%---spacing(2))]' : 'translate-x-0'}
                ${locale === 'se' ? 'font-normal' : 'font-extralight'}
                `}
      >
        SE
      </li>
      <li
        onClick={langSelectHandler}
        className={` transition-all duration-300 cursor-pointer
                ${isHovered || locale === 'hu' ? 'opacity-100' : 'opacity-0'}
                ${!isHovered ? 'translate-x-[calc(-200%---spacing(2))]' : 'translate-x-0'}
                ${locale === 'hu' ? 'font-normal' : 'font-extralight'}
                `}
      >
        HU
      </li>
    </ul>
  );
}
