import RichText from '@/components/RichText';
import { Locale } from '@/i18n/routing';
import type { About, Media } from '@/payload-types';
import { getLocale, setRequestLocale } from 'next-intl/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { ProfileImage } from '@/components/molecules/ProfileImage/ProfileImage';
import { generateMetaForGlobal } from '@/utilities/generateMeta';
import type { Metadata } from 'next';

type Args = {
  params: Promise<{
    locale: Locale;
    slug?: string;
  }>;
};

export default async function About() {
  const locale = await getLocale();

  const payload = await getPayload({ config: configPromise });

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
    <>
      {global.id && (
        <div className='w-full flex flex-col md:flex-row md:space-between gap-4'>
          <RichText data={aboutMe} />

          <div className='flex flex-row md:flex-col '>
            <ProfileImage images={images} />
          </div>
        </div>
      )}
    </>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const paramsProps = await paramsPromise;

  const locale = paramsProps.locale;
  const slug = 'about';

  const payload = await getPayload({ config: configPromise });

  const page = await payload.findGlobal({
    slug: 'about',
    depth: 1,
    locale: locale as Locale,
  });

  return generateMetaForGlobal({ doc: page, locale, slug });
}
