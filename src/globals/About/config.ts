import type { GlobalConfig } from 'payload';
import { revalidateAbout } from './hooks/revalidateAbout';
import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    {
      localized: true,
      name: 'aboutMe',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [...defaultFeatures, FixedToolbarFeature()];
        },
      }),
      label: 'Introduction',
    },
    {
      type: 'array',
      name: 'images',
      label: 'Images for About page',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          type: 'upload',
          name: 'image',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateAbout],
  },
};
