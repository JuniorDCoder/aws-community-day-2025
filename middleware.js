import { NextRequest } from 'next/server'

const locales = ['en', 'fr']
const defaultLocale = 'en'

// Get the preferred locale
function getLocale(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Check the Accept-Language header
    const acceptLanguage = request.headers.get('Accept-Language')
    if (acceptLanguage) {
        for (const locale of locales) {
            if (acceptLanguage.toLowerCase().includes(locale.toLowerCase())) {
                return locale
            }
        }
    }

    return defaultLocale
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`

    return Response.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}