import type { GlobalConfig } from 'payload';

import { revalidateSocial } from './hooks/revalidateSocial';

export const Social: GlobalConfig = {
  slug: 'social',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'array',
      name: 'socials',
      label: 'Socials',
      required: true,
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'socialList',
              type: 'select',
              options: [
                {
                  label: 'Github',
                  value: 'github',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin',
                },
                {
                  label: 'Instagram',
                  value: 'instagram',
                },
                {
                  label: 'Youtube',
                  value: 'youtube',
                },
              ],
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateSocial],
  },
};
