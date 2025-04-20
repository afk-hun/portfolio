// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { gcsStorage } from '@payloadcms/storage-gcs';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { Plugin } from 'payload';
// import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'

// import { Page, Post } from '@/payload-types'
// import { getServerSideURL } from '@/utilities/getURL'

// const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
//   return doc?.title ? `${doc.title} | Payload Website Template` : 'Payload Website Template'
// }

// const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
//   const url = getServerSideURL()

//   return doc?.slug ? `${url}/${doc.slug}` : url
// }

export const plugins: Plugin[] = [
  seoPlugin({
    // generateTitle,
    // generateURL,
  }),
  gcsStorage({
    collections: {
      media: true,
    },
    bucket: process.env.GCS_BUCKET || '',
    options: {
      // apiEndpoint: process.env.GCS_ENDPOINT,
      projectId: process.env.GCS_PROJECT_ID,
      credentials: JSON.parse(process.env.GCP_SERVICE_ACCOUNT || '{}'),
    },
  }),

  // ...(process.env.IS_PRODUCTION === 'true') ? payloadCloudPlugin() : {},
];
