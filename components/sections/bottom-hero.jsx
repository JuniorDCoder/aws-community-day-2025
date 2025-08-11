import React from 'react';
import Image from "next/image";
import Button from "@/components/button";

const BottomHero = (props) => (
    <>
        <section className="bg-primary min-h-[600px] relative flex flex-col items-center justify-start py-6">

            <div data-aos="fade-up" className="flex flex-col gap-4 items-center justify-center text-white text-center z-20 pt-8">
                <Image
                    src="/en/bottom-banner.svg"
                    alt="AWS Community Day Cameroon 2025 Logo"
                    width={800}
                    height={400}
                />

            </div>
            <Image
                src="/en/bottom-hero-left.png"
                alt="Left Hero Image"
                width={250}
                height={200}
                className="absolute left-0 bottom-0 z-10"
            />
            <Image
                src="/en/bottom-hero-right.png"
                alt="Right Hero Image"
                width={240}
                height={200}
                className="absolute right-0 -top-10 z-10"
            />
        </section>
    </>
);

export default BottomHero;