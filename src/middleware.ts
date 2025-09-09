import { NextResponse, type NextRequest } from 'next/server';
import { i18n } from '@/i18n.config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // If the request is for the root, redirect to the default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${i18n.defaultLocale}`, request.url));
  }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If it's not the root and missing a locale, it might be an asset, let it pass
  if (pathnameIsMissingLocale && pathname !== '/') {
    // This allows assets like images, fonts, etc., to be served correctly.
    // However, if it's a page that's missing a locale, it will result in a 404, which is the correct behavior.
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
