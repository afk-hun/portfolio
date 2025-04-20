import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Ref } from 'react';

interface ImageModalProps {
  ref?: Ref<HTMLDivElement>;
  src: string;
  alt: string;
  hasMany: boolean;
  onLeftClick: () => void;
  onRightClick: () => void;
  onClose: () => void;
}

export function ImageModal({
  ref,
  src,
  alt,
  hasMany,
  onLeftClick,
  onRightClick,
  onClose,
}: ImageModalProps) {
  return (
    <div
      ref={ref}
      className={`
			fixed
			top-0
			left-0
			w-[100vw]
			h-[100vh]
			z-50
			
		`}
    >
      <div
        className={`
		fixed
		top-[-5rem]
		left-[-5rem]
		w-[120vw]
		h-[120vh]
		bg-[#4c4c4cb0]
		backdrop-blur-xs 
	`}
      />
      <button
        type='button'
        className={`
				absolute 
				top-10 
				right-4 
				transform 
				-translate-y-1/2
				bg-[rgba(0,0,0,0.5)]
				text-white
				rounded-full
				w-12
				h-12
				flex
				justify-center
				items-center
				p-4
				z-150
				hover:bg-[rgba(0,0,0,0.6)]
				active:bg-[rgba(0,0,0,0.7)]
				transition-all duration-300 cursor-pointer
				`}
        onClick={onClose}
      >
        <FontAwesomeIcon width={'1rem'} height={'1rem'} icon={faXmark} />
      </button>
      <div
        // absolute
        className={`
			relative
				top-0
				left-0
				flex
				justify-center
				items-center
				z-50
				w-[100vw]
				h-[100vh]
			`}
      >
        {hasMany && (
          <button
            type='button'
            className={`
				absolute 
				top-1/2 
				left-4 
				transform 
				-translate-y-1/2
				bg-[rgba(0,0,0,0.5)]
				text-white
				rounded-full
				w-12
				h-12
				flex
				justify-center
				items-center
				p-4
				z-50
				hover:bg-[rgba(0,0,0,0.6)]
				active:bg-[rgba(0,0,0,0.7)]
				transition-all duration-300 cursor-pointer
				`}
            onClick={onLeftClick}
          >
            <FontAwesomeIcon
              width={'1rem'}
              height={'1rem'}
              icon={faChevronLeft}
            />
          </button>
        )}
        <Image
          style={{
            objectFit: 'contain',
            padding: '5rem',
            transition: 'all 300ms',
            filter: 'drop-shadow(0 0 1rem rgba(0, 0, 0, 0.7))',
          }}
          src={src}
          alt={alt}
          fill
          priority
        />
        {hasMany && (
          <button
            type='button'
            className={`
				absolute 
				top-1/2 
				right-4 
				transform 
				-translate-y-1/2
				bg-[rgba(0,0,0,0.5)]
				text-white
				rounded-full
				w-12
				h-12
				flex
				justify-center
				items-center
				p-4
				z-50
				hover:bg-[rgba(0,0,0,0.6)]
				active:bg-[rgba(0,0,0,0.7)]
				transition-all duration-300 cursor-pointer
				`}
            onClick={onRightClick}
          >
            <FontAwesomeIcon
              width={'1rem'}
              height={'1rem'}
              icon={faChevronRight}
            />
          </button>
        )}
      </div>
    </div>
  );
}
