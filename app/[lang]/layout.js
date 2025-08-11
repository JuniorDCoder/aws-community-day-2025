import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LayoutContent from "../../components/layout-content";
import { locales } from '../../lib/i18n'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "AWS Community Day Cameroon 2025",
    description: "Official website for AWS Community Day Cameroon 2025. Join us for talks, workshops, and networking with AWS enthusiasts.",
};

// Generate static params for all locales
export async function generateStaticParams() {
    return locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({ children, params }) {
    // Await params to fix the async warning
    const { lang } = await params

    return (
        <html lang={lang} suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutContent lang={lang}>
            {children}
        </LayoutContent>
        </body>
        </html>
    );
}