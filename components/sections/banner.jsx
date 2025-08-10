import React from 'react';
import Image from "next/image";

const Banner = (props) => (
    <>
        <div className="flex flex-col gap-4 bg-primary pb-6">
            <h2 className="text-5xl font-bold text-center mt-12 text-white">
                Community Day <span className="text-secondary">2025</span>
                <Image src="/banners/1.png" alt="Banner"
                width={1300} height={0} className="mx-auto mt-5"
                />
            </h2>
        </div>
    </>
);

export default Banner;