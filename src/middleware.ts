import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!admin|api|test|trpc|_next|_vercel|images/AFK-default-SEO-image.webp|.*\\..*).*)',
    '/',
    '/(en|se|hu)/:path*',
  ],
};
