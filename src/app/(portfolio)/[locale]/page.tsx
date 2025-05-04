import { Media, Portfolio } from '@/payload-types';
import { getCachedGlobal } from '@/utilities/getGlobals';
import { setRequestLocale } from 'next-intl/server';
import PageClient from './page.client';
import { Locale } from '@/i18n/routing';
import { Metadata } from 'next';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { generateMetaForGlobal } from '@/utilities/generateMeta';
import ImageGrid from '@/components/molecules/MasonsryGrid/MasonryGrid';

type Args = {
  params: Promise<{
    locale: Locale;
    slug?: string;
  }>;
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const portfolioData = (await getCachedGlobal('portfolio', 1)()) as Portfolio;
  // Enable static rendering
  setRequestLocale(locale);

  const images =
    portfolioData?.portfolio.map((image) => {
      return image.image as Media;
    }) || [];
  return (
    <main className='w-auto'>
      <PageClient images={images} />
      <ImageGrid images={images} />
    </main>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const paramsProps = await paramsPromise;

  const locale = paramsProps.locale;
  const slug = '/';

  const payload = await getPayload({ config: configPromise });

  const page = await payload.findGlobal({
    slug: 'portfolio',
    depth: 1,
    locale: locale as Locale,
  });

  return generateMetaForGlobal({ doc: page, locale, slug });
}
