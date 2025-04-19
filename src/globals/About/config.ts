import type { GlobalConfig } from 'payload';
import { revalidateAbout } from './hooks/revalidateAbout';
import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields';

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },

  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
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
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateAbout],
  },
};
