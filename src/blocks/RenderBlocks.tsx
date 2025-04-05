import React, { Fragment } from "react";

import type { Project } from "@/payload-types";

import { RichTextBlock } from "./RichText/RichtextBlock";
import { ImagesBlock } from "./Images/ImagesBlock";

const blockComponents = {
  richText: RichTextBlock,
  images: ImagesBlock,
};

export const RenderBlocks: React.FC<{
  blocks: Project["layout"][0][];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <div className="" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
