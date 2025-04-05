import type { Block } from "payload";

import {
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const RichTextBlock: Block = {
  slug: "richText",
  fields: [
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [...defaultFeatures, FixedToolbarFeature()];
        },
      }),
      label: false,
      required: true,
      localized: true,
    },
  ],
  interfaceName: "RichTextBlock",
};
