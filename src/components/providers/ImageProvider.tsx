'use client';
import { Media } from '@/payload-types';
import { createContext, useEffect, useRef, useState } from 'react';
import Portal from '@/components/Portal/Portal';

import { CSSTransition } from 'react-transition-group';
import { ImageModal } from '../molecules/ImageModal/ImageModal';

interface ImagesContextType {
  setCurrentImageId: (index: string) => void;
  setImages: (images: Media[]) => void;
}

export const ImagesContext = createContext<ImagesContextType>({
  setCurrentImageId: () => {},
  setImages: () => {},
});

interface ImagesProviderProps {
  children: React.ReactNode;
}

export const ImagesProvider: React.FC<ImagesProviderProps> = ({ children }) => {
  const [images, setImages] = useState<Media[]>([]);
  const [currentImageId, setCurrentImageId] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nodeRef = useRef(null);

  useEffect(() => {
    if (currentImageId) {
      const index = images.findIndex((image) => image.id === currentImageId);
      if (index !== -1) {
        setActiveImage(index);
        setIsOpen(true);
      }
    }
  }, [currentImageId, images]);

  return (
    <ImagesContext.Provider
      value={{
        setCurrentImageId,
        setImages,
      }}
    >
      <>
        <Portal>
          <CSSTransition
            in={isOpen}
            nodeRef={nodeRef}
            timeout={300}
            classNames='modal'
            unmountOnExit
          >
            {images.length > 0 && (
              <ImageModal
                ref={nodeRef}
                src={images[activeImage].url || ''}
                alt={
                  images[activeImage].alt || 'Image description not available'
                }
                hasMany={images.length > 1}
                onLeftClick={function (): void {
                  setActiveImage((prev) => {
                    if (prev === 0) {
                      return images.length - 1;
                    }
                    return prev - 1;
                  });
                }}
                onRightClick={function (): void {
                  setActiveImage((prev) => {
                    if (prev === images.length - 1) {
                      return 0;
                    }
                    return prev + 1;
                  });
                }}
                onClose={function (): void {
                  setIsOpen(false);
                  setCurrentImageId('');
                }}
              />
            )}
          </CSSTransition>
        </Portal>
        {children}
      </>
    </ImagesContext.Provider>
  );
};
