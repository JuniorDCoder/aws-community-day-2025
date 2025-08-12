import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Banner = ({dict}) => (
    <>
        <Link href="/" className="flex flex-col md:px-0 px-6 gap-4 bg-primary pb-6">
            <h2 data-aos="fade-up"  className="md:text-5xl text-3xl font-bold md:text-center mt-12 text-white">
                {dict.banner.title} <span className="text-secondary">{dict.banner.year}</span>
                <Image src="/en/banners/1.png"
                width={1300} height={0} className="mx-auto mt-5" alt="Banner"
                />
            </h2>
        </Link>
    </>
);

export default Banner;