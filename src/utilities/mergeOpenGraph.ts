import type { Metadata } from 'next';
import { getServerSideURL } from './getURL';

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Welcome to the portfolio of AFK, a visual storyteller capturing the beauty of nature, travel, and emotion through timeless photography. Explore projects, prints, and passion behind the lens.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'AFK Portfolio Site',
  title: 'AFK Portfolio Site',
};

export const mergeOpenGraph = (
  og?: Metadata['openGraph']
): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
