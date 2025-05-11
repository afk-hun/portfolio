'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
// import clsx from 'clsx';

type ImageWithSkeletonProps = ImageProps;

export default function ImageWithSkeleton({
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const { className, ...rest } = props;
  // @ts-expect-error: 'aspectRatio' is not a valid property of ImageProps and needs to be removed dynamically
  delete rest.aspectRatio;

  return (
    <div
      className={
        'relative w-full h-full break-inside-avoid rounded overflow-hidden flex items-center justify-center'
      }
    >
      {!isLoaded && (
        <div
          className={'absolute inset-0 animate-pulse bg-gray-100 bg-gray-300'}
        />
      )}
      <Image
        {...rest}
        alt={props.alt || ''}
        onLoad={() => setIsLoaded(true)}
        className={
          `transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}` +
          (className ? ` ${className}` : '')
        }
        priority
      />
    </div>
  );
}
