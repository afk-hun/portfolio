import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: [
    "/((?!admin|api|trpc|_next|_vercel|.*\\..*).*)",
    "/",
    "/(en|hu|se)/:path*",
  ],

  // '/((?!admin|next/preview|api|_next/static|_next/image|favicon.*|android-chrome.*|manifest.*).*)',
  //       '/',
  //       '/(ba|bg|cz|de|en|es|fr|hr|hu|it|lt|mk|pl|ro|rs|ru|sk|tr|ua)/:path*',],
};
