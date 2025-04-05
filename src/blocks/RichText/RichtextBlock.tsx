import React from "react";
import type { RichTextBlock as RichtextBlockProps } from "@/payload-types";
import RichText from "@/components/RichText";

export const RichTextBlock: React.FC<RichtextBlockProps> = ({ content }) => {
  return (
    <div className="my-16">
      <RichText data={content} />
    </div>
  );
};
