import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/sections/header";
import ClientLayout from "../components/client-layout";
import Footer from "@/components/sections/footer";
import ScrollToTop from "@/components/scroll-to-top";
import Timer from "@/components/sections/timer";
import React from "react";

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

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
        </ClientLayout>
        </body>
        </html>
    );
}