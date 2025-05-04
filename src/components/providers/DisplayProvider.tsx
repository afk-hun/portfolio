'use client';
import { createContext, useEffect, useState } from 'react';

type DisplayContextType = {
  display: 'desktop' | 'tablet' | 'mobile' | null;
};

export const DisplayContext = createContext<DisplayContextType>({
  display: null,
});

export function DisplayProvider({ children }: { children: React.ReactNode }) {
  const [size, setSize] = useState<'mobile' | 'tablet' | 'desktop' | null>(
    null
  );

  useEffect(() => {
    const updateSize = () => {
      const width = window.outerWidth;
      if (width <= 768) {
        setSize('mobile');
      } else if (width <= 1024) {
        setSize('tablet');
      } else {
        setSize('desktop');
      }
    };

    updateSize(); // Set initial size

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <DisplayContext.Provider value={{ display: size }}>
      {children}
    </DisplayContext.Provider>
  );
}
