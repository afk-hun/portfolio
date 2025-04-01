import type { GlobalAfterChangeHook } from "payload";

import { revalidateTag } from "next/cache";

export const revalidatePortfolio: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating Portfolio page...`);

    revalidateTag("global_portfolio");
  }

  return doc;
};
