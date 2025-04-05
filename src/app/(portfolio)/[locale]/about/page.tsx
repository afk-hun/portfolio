import RichText from "@/components/RichText";
import { Locale } from "@/i18n/routing";
import type { About, Media } from "@/payload-types";
import { getLocale, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function About() {
  const payload = await getPayload({ config: configPromise });
  const locale = await getLocale();

  const global = await payload.findGlobal({
    slug: "about",
    depth: 1,
    locale: locale as Locale,
  });

  const aboutMe = global?.aboutMe as About["aboutMe"];
  const images = global?.images as About["images"];

  setRequestLocale(locale);

  return (
    <div className="w-full flex flex-col  md:flex-row md:space-between gap-4">
      <RichText data={aboutMe} />
      {images &&
        images.map((image) => {
          const img = image.image as Media;
          return (
            <div
              key={image.id}
              className="flex flex-row align-center justify-center md:flex-col justify-center"
            >
              <Image
                src={img.url || "https://picsum.photos/id/237/1920/1080"}
                width={300}
                height={900}
                alt={img.alt || "missing alt"}
              />
            </div>
          );
        })}
    </div>
  );
}
