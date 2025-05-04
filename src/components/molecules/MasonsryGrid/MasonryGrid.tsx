'use client';

import { Media } from '@/payload-types';
import ImageWithSkeleton from '../Image/ImageWithSkeleton';
import { useContext } from 'react';
import { ImagesContext } from '@/components/providers/ImageProvider';
import { DisplayContext } from '@/components/providers/DisplayProvider';

type ImageGridProps = {
  images: Media[];
  columns?: number;
};

function splitIntoColumns<T>(arr: T[], columns: number): T[][] {
  return arr.reduce<T[][]>(
    (acc, item, index) => {
      acc[index % columns].push(item);
      return acc;
    },
    Array.from({ length: columns }, () => [] as T[])
  );
}

export default function ImageGrid({ images }: ImageGridProps) {
  const { display } = useContext(DisplayContext);
  const imageContext = useContext(ImagesContext);
  const columns = display === 'mobile' ? 1 : display === 'tablet' ? 2 : 3;
  const columnData = splitIntoColumns(images, columns);

  return (
    <>
      {display !== null && (
        <div className='flex gap-2'>
          {columnData.map((col, colIndex) => (
            <div key={colIndex} className='flex flex-col gap-2 flex-1'>
              {col.map(({ id, alt, url, width, height }, i) => (
                <div
                  key={i}
                  className='relative w-full rounded overflow-hidden'
                  style={{ aspectRatio: `${width}/${height}` }}
                >
                  <ImageWithSkeleton
                    src={url || ''}
                    alt={alt || `Image ${i}`}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover'
                    style={{
                      cursor: display !== 'mobile' ? 'pointer' : 'default',
                    }}
                    onClick={() => {
                      if (display !== 'mobile') {
                        imageContext.setCurrentImageId(id);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
