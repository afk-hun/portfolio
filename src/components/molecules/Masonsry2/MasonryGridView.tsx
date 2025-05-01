import { Media } from "@/payload-types";
import ImageWithSkeleton from "../Image/ImageWithSkeleton";

type ImageDataWithAspect = {
  image: Media;
  aspect: number;
}

type ImageDataWithColspan = {
  image: Media;
  colspan: number;
  aspectRatio?: string;
}

type MasonryGridViewProps = {
  images: Media[];
}

const getAspect = (image: Media) => {
  const [w, h] = [image.width || 300, image.height || 200];
  const ratio = h / w;
  
  console.log("getAspect", { w, h, ratio });

  if (ratio < 0.34) return 0.3; // panoramic
  if (ratio < 0.67) return 0.6; // landscape
  if (ratio == 1) return 1; // square or close
  return 1.5; // portrait
};

const getAspectClass = (aspect: [number, number]) => {
  return `aspect-[${aspect[0]}/${aspect[1]}]`;
};

function createPairs(first: ImageDataWithAspect, second: ImageDataWithAspect): ImageDataWithColspan[] {
  console.log("createPairs",  first.aspect, second.aspect );
  switch (first.aspect) {
    case 0.6:
      if (second.aspect === 0.6) {
        return [
          { image: first.image, colspan: 4.5, aspectRatio: "aspect-[3/2]" },
          { image: second.image, colspan: 4.5, aspectRatio: "aspect-[3/2]" },
        ];
      } else if (second.aspect === 1) {
        return [
          { image: first.image, colspan: 5, aspectRatio: "aspect-[5/4]" },
          { image: second.image, colspan: 4, aspectRatio: "aspect-[1/1]" },
        ];
      } else if (second.aspect === 1.5) {
        return [
          { image: first.image, colspan: 6, aspectRatio: "aspect-[6/4.5]" },
          { image: second.image, colspan: 3, aspectRatio: "aspect-[2/3]" },
        ];
      }
    case 1:
      if (second.aspect === 0.6) {
        return [
          { image: first.image, colspan: 4, aspectRatio: "aspect-[1/1]" },
          { image: second.image, colspan: 5, aspectRatio: "aspect-[5/4]" },
        ];
      } else if (second.aspect === 1) {
        return [
          { image: first.image, colspan: 4.5, aspectRatio: "aspect-[1/1]" },
          { image: second.image, colspan: 4.5, aspectRatio: "aspect-[1/1]" },
        ];
      } else if (second.aspect === 1.5) {
        return [
          { image: first.image, colspan: 5, aspectRatio: "aspect-[1/1]" },
          { image: second.image, colspan: 4, aspectRatio: "aspect-[4/5]" },
        ];
      }
    case 1.5:
      if (second.aspect === 0.6) {
        return [
          { image: first.image, colspan: 3, aspectRatio: "aspect-[2/3]" },
          { image: second.image, colspan: 6, aspectRatio: "aspect-[6/4.5]" },
        ];
      } else if (second.aspect === 1) {
        return [
          { image: first.image, colspan: 4, aspectRatio: "aspect-[4/5]" },
          { image: second.image, colspan: 5, aspectRatio: "aspect-[1/1]" },
        ];
      } else if (second.aspect === 1.5) {
        return [
          { image: first.image, colspan: 4.5, aspectRatio: "aspect-[2/3]" },
          { image: second.image, colspan: 4.5, aspectRatio: "aspect-[2/3]" },
        ];
      }    
    }

  return [] // todo dont let it be empty
}

export function MasonryGridView({ images }: MasonryGridViewProps) {
  const imageDataWithAspect: ImageDataWithAspect[] = images.map((img) => {
    const aspect = getAspect(img);
    return {
      image: img,
      aspect,
    };
  });

  let indx = 0;
  let pairs: ImageDataWithColspan[] = [];
  while (indx < imageDataWithAspect.length) {
    console.log('[while] begin', indx)
    if (imageDataWithAspect[indx].aspect === 0.3) {
      console.log('[while] 0.3 aspect', indx)
      pairs.push({
        image: imageDataWithAspect[indx].image,
        colspan: 9,
        aspectRatio: "aspect-[3/1]",
      });
      indx++;
    } else {
      if (indx < imageDataWithAspect.length) {
        console.log('[while] current inde is not the end', indx)
        if (indx + 1 < imageDataWithAspect.length) {
          console.log('[while] 0.6 or 1 or 1.5 aspect', indx)
          const row = createPairs(imageDataWithAspect[indx], imageDataWithAspect[indx + 1]);
          pairs.push(row[0]);
          pairs.push(row[1]);
          indx += 2;
        } else {
          console.log('[while] last image', indx)
          pairs.push({
            image: imageDataWithAspect[indx].image,
            colspan: imageDataWithAspect[indx].aspect === 0.6 ? 6 : 3,
            aspectRatio: imageDataWithAspect[indx].aspect === 0.6 ? "aspect-[3/2]" : "aspect-[2/3]",
          }); 
          indx++;
        }
      }   
    } 
  } 

    return (
        <div className="grid grid-cols-9 gap-2 w-full">
          {pairs.map((img, idx) => {
            // const aspectClass = getAspectClass([
            //   img.width || 300,
            //   img.height || 200,]);
            console.log(`[return] index: ${idx} image colspan: ${img.colspan} aspectRatio: ${img.aspectRatio}`);

            return (
              <div
                key={idx}
                className={`col-span-${img.colspan} bg-gray-200 overflow-hidden aspect-${img.aspectRatio}`} // ${aspectClass} 
              >
                <ImageWithSkeleton
                  src={img.image.url || ""}
                  alt={`image-${idx}`}
                  width={img.image.width || 300}
                  height={img.image.height || 200}
                  aspectRatio={img.aspectRatio || "1/1"}
                  //className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      );
}
