import type { GlobalAfterChangeHook } from 'payload';

import { revalidateTag } from 'next/cache';

export const revalidateSocial: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating Social globals...`);

    revalidateTag('global_social');
  }

  return doc;
};
