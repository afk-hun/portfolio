import type { Block } from "payload";

export const ImagesBlock: Block = {
  slug: "images",
  fields: [
    {
      name: "images",
      type: "array",
      label: "Images",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Image",
        },
      ],
    },
  ],
  interfaceName: "ImagesBlock",
};
