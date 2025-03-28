import Masonry from "@/components/molocules/MasonryGrid/MasonryGrid";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  //const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: locale + " title",
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const images = [
    {
      id: 1,
      src: "https://picsum.photos/id/237/2000/3000",
      width: 2000,
      height: 3000,
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://picsum.photos/id/238/3000/2000",
      width: 3000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 3,
      src: "https://picsum.photos/id/236/4000/1500",
      width: 4000,
      height: 1500,
      alt: "Image 1",
    },
    {
      id: 4,
      src: "https://picsum.photos/id/235/2000/2000",
      width: 2000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 5,
      src: "https://picsum.photos/id/233/3000/2000",
      width: 3000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 6,
      src: "https://picsum.photos/id/234/4000/1500",
      width: 4000,
      height: 1500,
      alt: "Image 1",
    },
    {
      id: 7,
      src: "https://picsum.photos/id/232/2000/2000",
      width: 2000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 8,
      src: "https://picsum.photos/id/231/3000/2000",
      width: 3000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 9,
      src: "https://picsum.photos/id/230/2000/3000",
      width: 2000,
      height: 3000,
      alt: "Image 1",
    },
    {
      id: 10,
      src: "https://picsum.photos/id/239/2000/2000",
      width: 2000,
      height: 2000,
      alt: "Image 1",
    },

    // Add more images as needed
  ];

  return (
    <main className="w-auto">
      <Masonry images={images} />
    </main>
  );
}
