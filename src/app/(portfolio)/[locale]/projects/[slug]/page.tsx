import type { Metadata } from "next";

import configPromise from "@payload-config";
import { getPayload, type RequiredDataFromCollectionSlug } from "payload";
import { draftMode } from "next/headers";
import React, { cache } from "react";

import { RenderBlocks } from "@/blocks/RenderBlocks";
import { generateMeta } from "@/utilities/generateMeta";
import { Locale } from "@/i18n/routing";
// import PageClient from "./page.client";
// import { LivePreviewListener } from "@/components/LivePreviewListener";

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: "project",
    draft: false,
    limit: 1000,
    locale: "all",
    overrideAccess: false,
    pagination: false,
  });

  const params = pages.docs.flatMap(({ slug }) => {
    if (!slug || typeof slug !== "object") return [];

    return Object.entries(slug).map(([locale, localizedSlug]) => {
      return {
        locale,
        slug: localizedSlug,
      };
    });
  });
  return params;
}

type Args = {
  params: Promise<{
    locale: Locale;
    slug?: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const paramsProps = await paramsPromise;

  const locale = paramsProps.locale;
  const slug = paramsProps.slug || "home";
  const url = "/" + slug;

  const page: RequiredDataFromCollectionSlug<"project"> | null =
    await queryProjectBySlug({
      slug,
      locale,
    });

  //   // Remove this code once your website is seeded
  //   if (!page && slug === "home") {
  //     page = homeStatic;
  //   }

  const { layout } = page;

  return (
    <article className="pt-16 pb-24">
      {/* <PageClient /> */}
      {/* Allows redirects for valid pages too */}
      {/* <PayloadRedirects disableNotFound url={url} /> */}

      {/* {draft && <LivePreviewListener />} */}

      <h1 className="text-4xl font-bold text-center mb-8">{page?.title}</h1>
      {layout && <RenderBlocks blocks={layout} />}
    </article>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const paramsProps = await paramsPromise;

  const locale = paramsProps.locale;
  const slug = paramsProps.slug ?? "home";

  // const { slugs = "home", locale } = await paramsPromise;
  // const page = await queryProjectBySlug({
  //   slug,
  //   locale,
  // });

  // return generateMeta({ doc: page });
  return {};
}

const queryProjectBySlug = cache(
  async ({ slug, locale }: { slug: string; locale: Locale }) => {
    // const { isEnabled: draft } = await draftMode();

    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
      collection: "project",
      // draft,
      limit: 1,
      locale,
      pagination: false,
      // overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    return result.docs?.[0] || null;
  }
);
