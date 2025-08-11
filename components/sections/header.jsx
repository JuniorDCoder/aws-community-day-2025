"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Button from "@/components/button";
import LanguageSwitcher from '@/components/language-switcher';

const Header = ({ lang, dict }) => {
    const pathname = usePathname();

    const navLinks = [
        { href: `/${lang}`, label: dict?.home || 'Home' },
        { href: `/${lang}/gallery`, label: dict?.gallery || 'Gallery' },
        { href: `/${lang}/speakers`, label: dict?.speakers || 'Speakers' },
        { href: `/${lang}/agenda`, label: dict?.agenda || 'Agenda' },
        { href: `/${lang}/sponsors`, label: dict?.sponsors || 'Sponsors' },
        { href: `/${lang}/team`, label: dict?.team || 'Team' },
        { href: `/${lang}/contact`, label: dict?.contact || 'Get To Us' },
    ];

    return (
        <header className="bg-primary py-5 px-20 w-full flex justify-between items-center border-b border-gray-500">
            <Link href={`/${lang}`}>
                <Image
                    src="/en/logo.png"
                    alt="AWS Community Day Cameroon 2025 Logo"
                    width={50}
                    height={38}
                    style={{ objectFit: "contain" }}
                />
            </Link>
            <nav className="flex gap-[36px] text-white items-center justify-center">
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
            <Button text={dict?.registerNow || "Register Now"} />
        </header>
    );
};

export default Header;