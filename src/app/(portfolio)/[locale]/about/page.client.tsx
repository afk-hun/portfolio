'use client';
import { ProfileImage } from '@/components/molecules/ProfileImage/ProfileImage';
import { DisplayContext } from '@/components/providers/DisplayProvider';
import { About, Media } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';
import React, { useContext } from 'react';

interface PageClientProps {
  images: Media[];
  aboutMe: About['aboutMe'];
}

const PageClient: React.FC<PageClientProps> = ({ images, aboutMe }) => {
  const { display } = useContext(DisplayContext);

  return (
    <>
      {display !== null && (
        <div className='w-full flex flex-col md:flex-row md:space-between gap-4 rich-text'>
          <RichText data={aboutMe} />
          <div className='flex flex-row justify-center md:flex-col '>
            <ProfileImage images={images} />
          </div>
        </div>
      )}
    </>
  );
};

export default PageClient;
