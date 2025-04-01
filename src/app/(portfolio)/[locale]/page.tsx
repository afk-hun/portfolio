import Masonry from "@/components/molocules/MasonryGrid/MasonryGrid";
import { Media, Portfolio } from "@/payload-types";
import { getCachedGlobal } from "@/utilities/getGlobals";
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

  const portfolioData = (await getCachedGlobal("portfolio", 1)()) as Portfolio;
  // Enable static rendering
  setRequestLocale(locale);

  const images =
    portfolioData?.portfolio.map((image) => {
      return image.image as Media;
    }) || [];
  return (
    <main className="w-auto">
      <Masonry images={images} />
    </main>
  );
}
