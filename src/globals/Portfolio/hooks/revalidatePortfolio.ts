import type { GlobalAfterChangeHook } from 'payload';

import { revalidatePath } from 'next/cache';

export const revalidatePortfolio: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating Portfolio page...`);

    revalidatePath('/en');
    revalidatePath('/hu');
    revalidatePath('/se');
  }

  return doc;
};
