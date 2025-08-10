"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Button from "@/components/button";

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/speakers', label: 'Speakers' },
    { href: '/agenda', label: 'Agenda' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact Us' },
];

const Header = (props) => {
    const pathname = usePathname();

    return (
        <header className="bg-primary py-5 px-20 w-full flex justify-between items-center border-b border-gray-500">
            <Image
                src="/logo.png"
                alt="AWS Community Day Cameroon 2025 Logo"
                width={50}
                height={38}
                style={{ objectFit: "contain" }}
            />
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
                <span>Fr</span>
            </nav>
            <Button text="Register Now" />
        </header>
    );
};

export default Header;
