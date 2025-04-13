'use client';
import { Media } from '@/payload-types';
import Image from 'next/image';
import { useState } from 'react';

const TRANSITION_DURATION = 300;

interface ProfileImageProps {
  images: Media[];
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ images }) => {
  const [main, ...others] = images;
  console.log('others', others);
  const [currentImage, setCurrentImage] = useState(others.length - 1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center justify-center relative`}
      onMouseEnter={() => {
        setIsHovered(true);
        setCurrentImage((prev) => (prev === others.length - 1 ? 0 : prev + 1));
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: '2/3',
          objectFit: 'cover',
        }}
        src={main.url || ''}
        alt={main.alt || 'Image description not available'}
        width={300}
        height={200}
      />
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 
          ${isHovered ? 'opacity-100' : 'opacity-0'} 
          transition-opacity duration-${TRANSITION_DURATION} `}
      >
        {others.length !== 0 && (
          <Image
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '2/3',
              objectFit: 'cover',
            }}
            src={others[currentImage].url || ''}
            alt={others[currentImage].alt || 'Image description not available'}
            width={300}
            height={200}
          />
        )}
      </div>
    </div>
  );
};
