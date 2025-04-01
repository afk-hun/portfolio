import type { Config } from "../payload-types";

import configPromise from "@payload-config";
import { getPayload } from "payload";
import { unstable_cache } from "next/cache";

type Global = keyof Config["globals"];

async function getGlobal(slug: Global, locale: Config["locale"], depth = 0) {
  const payload = await getPayload({ config: configPromise });

  const global = await payload.findGlobal({
    slug,
    depth,
    locale: locale,
  });

  return global;
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (
  slug: Global,
  locale: Config["locale"],
  depth = 0
) => {
  console.log("getCachedGlobal", slug, locale, depth);
  return unstable_cache(async () => getGlobal(slug, locale, depth), [slug], {
    tags: [`global_${slug}`],
  });
};
