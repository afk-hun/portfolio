'use client';

import { useEffect, useState } from 'react';
import './ThemeToggle.css';
import useDarkMode from '@/hooks/useDarkMode';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();
  const isDark = theme === 'dark';
  const [animationClass, setAnimationClass] = useState(
    isDark ? 'animate-to-right' : 'animate-to-left'
  );

  useEffect(() => {
    setAnimationClass(isDark ? 'animate-to-right' : 'animate-to-left');
  }, [isDark]);

  return (
    <>
      {theme && (
        <div className='flex items-center '>
          <button
            type='button'
            onClick={toggleTheme}
            className={`relative inline-flex h-10 w-20 
        items-center rounded-full transition-colors 
        bg-secondary/50
        ${!isDark ? 'border-1 border-color-primary' : 'border-none'}`}
            // focus:outline-none focus:ring-1 focus:ring-color-primary
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {/* Sun icon (left position) */}
            <div className='absolute left-1.75'>
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
                className='text-color-primary/60'
              >
                <circle cx='12' cy='12' r='5'></circle>
                <line x1='12' y1='1' x2='12' y2='3'></line>
                <line x1='12' y1='21' x2='12' y2='23'></line>
                <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                <line x1='1' y1='12' x2='3' y2='12'></line>
                <line x1='21' y1='12' x2='23' y2='12'></line>
                <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
              </svg>
            </div>

            {/* Moon icon (right position) */}
            <div className='absolute right-1.5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 00 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-color-secondary'
              >
                <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
              </svg>
            </div>

            {/* Knob with active theme icon */}
            <span
              className={`absolute flex items-center justify-center h-8 w-8 rounded-full shadow-md ${animationClass}`}
              style={{
                backgroundColor: isDark ? '#1a202c' : '#ffffff', // TODO it would be good if I define this color in theme
              }}
            >
              {isDark ? (
                // Moon icon on knob in dark mode
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
                  className='text-color-secondary icon-fade-in'
                >
                  <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                </svg>
              ) : (
                // Sun icon on knob in light mode
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
                  className='text-yellow-500 icon-fade-in'
                >
                  <circle cx='12' cy='12' r='5'></circle>
                  <line x1='12' y1='1' x2='12' y2='3'></line>
                  <line x1='12' y1='21' x2='12' y2='23'></line>
                  <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                  <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                  <line x1='1' y1='12' x2='3' y2='12'></line>
                  <line x1='21' y1='12' x2='23' y2='12'></line>
                  <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                  <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
                </svg>
              )}
            </span>
          </button>
        </div>
      )}
    </>
  );
}
