import type { GlobalConfig } from "payload";

import { revalidatePortfolio } from "./hooks/revalidatePortfolio";

export const Portfolio: GlobalConfig = {
  slug: "portfolio",
  access: {
    read: () => true,
  },
  fields: [
    {
      dbName: "portfolio",
      type: "array",
      name: "portfolio",
      label: "Images for Portfolio page",
      required: true,
      minRows: 1,
      fields: [
        {
          type: "upload",
          name: "image",
          label: "Image",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidatePortfolio],
  },
};
