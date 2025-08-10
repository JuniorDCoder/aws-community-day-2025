import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Banner = (props) => (
    <>
        <Link href="/" className="flex flex-col gap-4 bg-primary pb-6">
            <h2 data-aos="fade-up"  className="text-5xl font-bold text-center mt-12 text-white">
                Community Day <span className="text-secondary">2025</span>
                <Image src="/banners/1.png" alt="Banner"
                width={1300} height={0} className="mx-auto mt-5"
                />
            </h2>
        </Link>
    </>
);

export default Banner;