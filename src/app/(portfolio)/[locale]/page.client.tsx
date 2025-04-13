'use client';
import { ImagesContext } from '@/components/providers/ImageProvider';
import { Media } from '@/payload-types';
import React, { useContext, useEffect } from 'react';

interface PageClientProps {
  images: Media[];
}

const PageClient: React.FC<PageClientProps> = ({ images }) => {
  const { setImages } = useContext(ImagesContext);

  useEffect(() => {
    setImages(images);
  }, [images, setImages]);

  return <></>;
};

export default PageClient;
