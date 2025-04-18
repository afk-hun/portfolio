import { useEffect, useState } from 'react';

export function useDisplaySize() {
  const [size, setSize] = useState<'mobile' | 'tablet' | 'desktop' | null>(
    null
  );

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setSize('mobile');
      } else if (width <= 1024) {
        setSize('tablet');
      } else {
        setSize('desktop');
      }
    };

    // updateSize(); // Set initial size

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
