'use client';

import Image from 'next/image';
import './Masonry.css';
import { useContext } from 'react';
import { useDisplaySize } from '@/hooks/display';
import { Media } from '@/payload-types';
import { ImagesContext } from '@/components/providers/ImageProvider';

interface MasonryProps {
  images: Media[];
}

const Masonry: React.FC<MasonryProps> = ({ images }) => {
  const size = useDisplaySize();
  const imageContext = useContext(ImagesContext);
  const delta = 13;

  return (
    <div className={'masonry'}>
      {images.map(({ id, url, width, height, alt }) => (
        <div
          key={id}
          className={'item'}
          style={{
            minWidth: `${size === 'mobile' ? 'unset' : `${(width ?? 100) / delta}px`}`,
            minHeight: `${(height ?? 100) / delta}px`,
          }}
        >
          <Image
            priority
            className={'image'}
            style={{
              cursor: size !== 'mobile' ? 'pointer' : 'default',
            }}
            sizes={size !== 'mobile' ? 'auto' : 'auto'}
            fill={size !== 'mobile'}
            width={size === 'mobile' ? width || 100 : undefined}
            height={size === 'mobile' ? height || 100 : undefined}
            src={url || ''}
            alt={alt || 'Image description not available'}
            onClick={() => {
              if (size !== 'mobile') {
                imageContext.setCurrentImageId(id);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Masonry;
