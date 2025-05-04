'use client';
import { ImagesContext } from '@/components/providers/ImageProvider';
import { ImagesBlock, Media, RichTextBlock } from '@/payload-types';
import React, { useContext, useEffect } from 'react';
import { RenderBlocks } from '@/blocks/RenderBlocks';
import { DisplayContext } from '@/components/providers/DisplayProvider';
import ImageWithSkeleton from '@/components/molecules/Image/ImageWithSkeleton';

interface PageClientProps {
  mainImage: Media;
  layout: (ImagesBlock | RichTextBlock)[];
}

const PageClient: React.FC<PageClientProps> = ({ mainImage, layout }) => {
  const { setImages, setCurrentImageId } = useContext(ImagesContext);
  const { display } = useContext(DisplayContext);

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
      {display !== null && (
        <>
          <ImageWithSkeleton
            className='self-center w-full h-auto aspect-[3/1] md:w-[90%] md:h-auto rounded'
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              cursor: display !== 'mobile' ? 'pointer' : 'default',
            }}
            src={mainImage.url || ''}
            alt={mainImage.alt || ''}
            width={1000}
            height={500}
            onClick={() => {
              if (display !== 'mobile') {
                handleMainImageClick();
              }
            }}
          />
          {layout && <RenderBlocks blocks={layout} />}
        </>
      )}
    </>
  );
};

export default PageClient;
