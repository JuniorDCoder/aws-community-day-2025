import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import Button from "@/components/button";

const Header = (props) => (
    <>
        <header className="bg-primary py-5 px-20 w-full flex justify-between items-center border-b border-gray-500">
            <Image
                src="/logo.png"
                alt="AWS Community Day Cameroon 2025 Logo"
                width={50}
                height={38}
                objectFit="contain"
            />
            <div className="flex gap-[36px] text-white items-center justify-center">
                <Link href="/">About</Link>
                <Link href="/">Gallery</Link>
                <Link href="/">Speakers</Link>
                <Link href="/">Agenda</Link>
                <Link href="/">Sponsors</Link>
                <Link href="/">Team</Link>
                <Link href="/">Contact Us</Link>
                <span>Fr</span>
            </div>
            <Button
                text="Register Now"
            />
        </header>
    </>
);

export default Header;