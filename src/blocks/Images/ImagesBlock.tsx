import React from "react";
import type { ImagesBlock as ImagesBlockProps, Media } from "@/payload-types";
import Masonry from "@/components/molocules/MasonryGrid/MasonryGrid";

export const ImagesBlock: React.FC<ImagesBlockProps> = ({ images }) => {
  const pictures = images.map((image) => {
    return image.image as Media;
  });

  return (
    <div className="">
      <Masonry images={pictures} />
    </div>
  );
};
