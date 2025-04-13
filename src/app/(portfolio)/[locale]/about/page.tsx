import RichText from '@/components/RichText';
import { Locale } from '@/i18n/routing';
import type { About, Media } from '@/payload-types';
import { getLocale, setRequestLocale } from 'next-intl/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { ProfileImage } from '@/components/molecules/ProfileImage/ProfileImage';

export default async function About() {
  const payload = await getPayload({ config: configPromise });
  const locale = await getLocale();

  const global = await payload.findGlobal({
    slug: 'about',
    depth: 1,
    locale: locale as Locale,
  });

  const aboutMe = global?.aboutMe as About['aboutMe'];
  const rawImages = global?.images as Omit<About['images'], 'id'>;
  const images = rawImages.map((item) => {
    return item.image as Media;
  });

  setRequestLocale(locale);

  return (
    <div className='w-full flex flex-col  md:flex-row md:space-between gap-4'>
      <RichText data={aboutMe} />

      <div className='flex flex-row align-center justify-center md:flex-col justify-center'>
        <ProfileImage images={images} />
      </div>
    </div>
  );
}
