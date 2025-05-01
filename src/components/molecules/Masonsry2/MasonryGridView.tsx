import { Media } from "@/payload-types";
import ImageWithSkeleton from "../Image/ImageWithSkeleton";

// type ImageData = {
//     src: string;
//     aspect: [number, number]; // [width, height]
//   };

type MasonryGridViewProps = {
  images: Media[];
}

const getColSpan = (aspect: [number, number]) => {
  const [w, h] = aspect;
  const ratio = w / h;

  if (ratio > 2.5) return 9; // panoramic
  if (ratio >= 1.5) return 6; // landscape
  if (ratio > 0.8) return 4.5; // square or close
  return 3; // portrait
};

const getAspectClass = (aspect: [number, number]) => {
  return `aspect-[${aspect[0]}/${aspect[1]}]`;
};

export function MasonryGridView({ images }: MasonryGridViewProps) {
    return (
        <div className="grid grid-cols-9 gap-2">
          {images.map((img, idx) => {
            const colSpan = getColSpan([img.width || 300, img.height || 200]);
            const aspectClass = getAspectClass([
              img.width || 300,
              img.height || 200,]);
    
            return (
              <div
                key={idx}
                className={`col-span-[${colSpan}] ${aspectClass} bg-gray-200 overflow-hidden`}
              >
                <ImageWithSkeleton
                  src={img.url || ""}
                  alt={`image-${idx}`}
                  width={img.width || 300}
                  height={img.height || 200}
                  //className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      );
}
