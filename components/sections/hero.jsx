import React from 'react';
import Image from "next/image";
import Button from "@/components/button";

const Hero = ({ dict }) => {
    // This will later come from API
    const eventDateLocation = dict.hero?.dateLocation || "November 8, 2025 | Buea";

    return (
        <section className="bg-primary min-h-screen relative flex flex-col items-center justify-center py-6">
            <div data-aos="fade-up" className="flex flex-col gap-4 items-center justify-center text-white text-center md:px-0 px-6 z-20 h-full w-full">
                <Image
                    src="/en/banner.svg"
                    alt="AWS Community Day Cameroon 2025 Logo"
                    width={800}
                    height={400}
                    className="mx-auto"
                />
                <h3 className="text-xl">{eventDateLocation}</h3>
                <Button
                    text={dict.hero?.cta || "RSVP for AWS Day now"}
                />
            </div>
            <Image
                src="/en/left-hero.png"
                alt="Left Hero Image"
                width={220}
                height={200}
                className="absolute left-0 bottom-0 z-10"
            />
            <Image
                src="/en/right-hero.png"
                alt="Right Hero Image"
                width={180}
                height={200}
                className="absolute right-0 -top-10 z-10"
            />
        </section>
    );
};

export default Hero;