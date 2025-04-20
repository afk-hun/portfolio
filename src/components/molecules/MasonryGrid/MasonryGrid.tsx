'use client';

import Image from 'next/image';
import './Masonry.css';
import { useContext } from 'react';
import { useDisplaySize } from '@/hooks/display';
import { Media } from '@/payload-types';
import { ImagesContext } from '@/components/providers/ImageProvider';
import { shimmer, toBase64 } from '@/utilities/shimmer';

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
            position: 'relative',
            minWidth: `${size === 'mobile' ? 'unset' : `${(width ?? 100) / delta}px`}`,
            minHeight: `${(height ?? 100) / delta}px`,
          }}
        >
          <div
            key={id}
            className={'item'}
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '66.66%', // 3:2
            }}
          >
            <Image
              priority
              className={'image'}
              style={{
                objectFit: 'cover',
                cursor: size !== 'mobile' ? 'pointer' : 'default',
              }}
              sizes='100vw'
              fill
              src={url || ''}
              alt={alt || 'Image description not available'}
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 200))}`}
              onClick={() => {
                if (size !== 'mobile') {
                  imageContext.setCurrentImageId(id);
                }
              }}
            />
          </div>

          {/* <div
            key={id}
            className={'item'}
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '66.66%', // 3:2 aspect ratio
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
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width || 100, height || 100))}`}
              onClick={() => {
                if (size !== 'mobile') {
                  imageContext.setCurrentImageId(id);
                }
              }}
            />
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
