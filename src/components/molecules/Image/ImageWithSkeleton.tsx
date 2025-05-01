'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: string;
}

export default function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  aspectRatio,
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{ width, height }}
      className={'relative overflow-hidden'}
    >
      {!loaded && (
        <div className={`
        absolute 
        inset-0 
        animate-pulse  
        bg-gray-200
        z-10
        `
      } />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{width: 'auto', height: 'auto', objectFit: 'contain', aspectRatio}}
        className={
          `transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`
        }
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}


// @keyframes shimmer {
//   0% {
//     background-position: -100% 0;
//   }
//   100% {
//     background-position: 100% 0;
//   }
// }

// .bg-skeleton {
//   background-color: #e0e0e0;
//   background-image: linear-gradient(
//     90deg,
//     #e0e0e0 0%,
//     #f0f0f0 50%,
//     #e0e0e0 100%
//   );
//   background-size: 200% 100%;
// }

// .animate-shimmer {
//   animation: shimmer 1.5s infinite linear;
// }
