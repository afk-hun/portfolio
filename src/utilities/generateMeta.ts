import type { Metadata } from 'next';

import type {
  Media,
  Project,
  Config,
  About,
  Portfolio,
} from '../payload-types';

import { mergeOpenGraph } from './mergeOpenGraph';
import { getServerSideURL } from './getURL';
import { Locale } from 'next-intl';

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL();

  let url = '/images/AFK-default-SEO-image.webp';

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url;

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url;
  }

  return url;
};

export const generateMeta = async (args: {
  doc: Partial<Project> | null;
  locale: Locale;
}): Promise<Metadata> => {
  const { doc, locale } = args;

  const ogImage = getImageURL(doc?.meta?.image);
  const serverUrl = getServerSideURL();

  const title = doc?.meta?.title ? doc?.meta?.title : 'AFK Portfolio Site';

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: doc?.slug
        ? `${serverUrl}/${locale}/projects/${doc.slug}`
        : `${serverUrl}/${locale}`,
    }),
    title,
  };
};
export const generateMetaForGlobal = async (args: {
  doc: Partial<Portfolio | About> | null;
  slug: string;
  locale: Locale;
}): Promise<Metadata> => {
  const { doc, slug, locale } = args;
  const serverUrl = getServerSideURL();

  const ogImage = getImageURL(doc?.meta?.image);

  const title = doc?.meta?.title ? doc?.meta?.title : 'AFK Portfolio Site';

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url:
        slug !== '/'
          ? `${serverUrl}/${locale}/${slug}`
          : `${serverUrl}/${locale}`,
    }),
    title,
  };
};
