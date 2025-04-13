'use client';
import { ImagesContext } from '@/components/providers/ImageProvider';
import { ImagesBlock, Media, RichTextBlock } from '@/payload-types';
import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { RenderBlocks } from '@/blocks/RenderBlocks';

interface PageClientProps {
  mainImage: Media;
  layout: (ImagesBlock | RichTextBlock)[];
}

const PageClient: React.FC<PageClientProps> = ({ mainImage, layout }) => {
  const { setImages, setCurrentImageId } = useContext(ImagesContext);

  useEffect(() => {
    const collectedImages = [mainImage];
    setCurrentImageId('');
    layout.map((block) => {
      if (block.blockType === 'images') {
        (block as ImagesBlock).images.forEach((image) => {
          collectedImages.push(image.image as Media);
        });
      }
    });
    setImages(collectedImages);
  }, [mainImage, layout, setImages, setCurrentImageId]);

  const handleMainImageClick = () => {
    setCurrentImageId(mainImage.id);
  };

  return (
    <>
      <Image
        className='self-center w-full h-auto aspect-[3/1] md:w-[80%] md:h-auto'
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          cursor: 'pointer',
        }}
        src={mainImage.url || ''}
        alt={mainImage.alt || ''}
        width={1000}
        height={500}
        onClick={handleMainImageClick}
      />

      {layout && <RenderBlocks blocks={layout} />}
    </>
  );
};

export default PageClient;
