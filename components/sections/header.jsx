"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/button";
import LanguageSwitcher from "@/components/language-switcher";
import { Menu, X } from "lucide-react";

const Header = ({ lang, dict }) => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: `/${lang}`, label: dict?.home || "Home" },
        { href: `/${lang}/gallery`, label: dict?.gallery || "Gallery" },
        { href: `/${lang}/speakers`, label: dict?.speakers || "Speakers" },
        { href: `/${lang}/agenda`, label: dict?.agenda || "Agenda" },
        { href: `/${lang}/sponsors`, label: dict?.sponsors || "Sponsors" },
        { href: `/${lang}/team`, label: dict?.team || "Team" },
        { href: `/${lang}/contact`, label: dict?.contact || "Get To Us" },
    ];

    return (
        <header className="bg-primary py-5 px-6 md:px-20 w-full flex justify-between items-center border-b border-gray-500 relative">
            {/* Logo */}
            <Link href={`/${lang}`}>
                <Image
                    src="/en/logo.png"
                    alt="AWS Community Day Cameroon 2025 Logo"
                    width={50}
                    height={38}
                    style={{ objectFit: "contain" }}
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-[36px] text-white items-center justify-center">
                {navLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={pathname === href ? "text-secondary" : ""}
                    >
                        {label}
                    </Link>
                ))}
                <LanguageSwitcher currentLang={lang} />
            </nav>

            {/* Desktop Button */}
            <Button
                className="md:flex hidden"
                text={dict?.registerNow || "Register Now"}
            />

            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-primary z-50 flex flex-col gap-8 items-center justify-start pt-24 overflow-y-auto">
                    {/* Close button in top-right */}
                    <button
                        className="absolute top-6 right-6 text-white"
                        onClick={() => setMenuOpen(false)}
                    >
                        <X size={28} />
                    </button>

                    {/* Nav Links */}
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-2xl font-medium hover:text-secondary transition-colors ${
                                pathname === href ? "text-secondary" : "text-white"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <LanguageSwitcher currentLang={lang} />

                    {/* Button */}
                    <Button
                        text={dict?.registerNow || "Register Now"}
                        onClick={() => setMenuOpen(false)}
                    />
                </div>
            )}

        </header>
    );
};

export default Header;
