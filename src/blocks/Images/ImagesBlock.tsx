import React from 'react';
import type { ImagesBlock as ImagesBlockProps, Media } from '@/payload-types';
import ImageGrid from '@/components/molecules/MasonsryGrid/MasonryGrid';

export const ImagesBlock: React.FC<ImagesBlockProps> = ({ images }) => {
  const pictures = images.map((image) => {
    return image.image as Media;
  });

  return (
    <div className=''>
      <ImageGrid images={pictures} />
    </div>
  );
};
