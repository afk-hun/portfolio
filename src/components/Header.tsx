'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import useDarkMode from '@/hooks/useDarkMode';

export default function Header() {
  const { theme } = useDarkMode();
  const isDark = theme === 'dark';

  return (
    <header className='w-full py-4 px-6 flex items-center justify-between'>
      {/* Left side - Logo */}
      <div className='flex items-center'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/file.svg'
            alt='AFK Logo'
            width={32}
            height={32}
            className='mr-2'
          />
        </Link>
      </div>

      {/* Middle - Title */}
      <div className='text-3xl text-color-primary font-semibold text-center'>
        <h1>AFK Portfolio</h1>
      </div>

      {/* Right side - GitHub link and Theme Toggle */}
      <div className='flex items-center space-x-4 '>
        <Link
          href='https://github.com/afk-hun/portfolio'
          target='_blank'
          rel='noopener noreferrer'
          className={`flex items-center justify-center 
			rounded-4xl 
			bg-secondary/50 p-2
			${!isDark ? 'border-1 border-color-primary' : 'border-none'}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-color-secondary hover:text-color-primary transition-colors'
          >
            <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
          </svg>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
