// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from "@payloadcms/plugin-seo";
import { Plugin } from "payload";
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

  // ...(process.env.IS_PRODUCTION === 'true') ? payloadCloudPlugin() : {},
];
