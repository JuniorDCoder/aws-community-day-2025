import { NextRequest } from 'next/server'

const locales = ['en', 'fr']
const defaultLocale = 'en'

function getLocale(request) {
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
    if (pathnameHasLocale) return

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
    const { pathname } = request.nextUrl
    // Exclude /admin from locale redirect
    if (pathname.startsWith('/admin')) return

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
    if (pathnameHasLocale) return

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`

    return Response.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/((?!_next|api|favicon.ico|admin).*)',
    ],
}