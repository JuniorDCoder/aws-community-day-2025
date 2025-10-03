import React from 'react';
import Image from "next/image";
import Button from "@/components/button";

const Hero = async ({ dict, eventData }) => {
    // Use the eventData passed from the page
    const formatEventDate = () => {
        if (eventData?.settings?.eventDate) {
            const eventDate = new Date(eventData.settings.eventDate);
            return eventDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        return dict.hero?.dateLocation || "November 8, 2025 | Buea";
    };

    // Get RSVP link with fallback
    const getRsvpLink = () => {
        const link = eventData?.settings?.rsvpLink;
        return link || null;
    };

    const eventDate = formatEventDate();
    const rsvpLink = getRsvpLink();

    return (
        <section className="bg-primary min-h-screen relative flex flex-col items-center justify-start py-6">
            <div
                data-aos="fade-up"
                className="flex flex-col gap-4 items-center justify-center text-white text-center md:px-0 px-6 z-20 pt-40 md:pt-24"
            >
                {/* Main Logo/Banner */}
                <Image
                    src="/en/banner.svg"
                    alt="AWS Community Day Cameroon 2025 Logo"
                    width={800}
                    height={400}
                    className="drop-shadow-2xl"
                    priority
                />

                {/* Event Date */}
                <h3 className="text-xl">{eventDate}</h3>

                {/* CTA Button - only render if rsvpLink exists */}
                {rsvpLink ? (
                    <Button
                        text={dict.hero?.cta || "RSVP Now"}
                        url={rsvpLink}
                    />
                ) : (
                    <div className="bg-secondary rounded-md py-3 px-4 text-white opacity-50">
                        {dict.hero?.cta || "RSVP Coming Soon"}
                    </div>
                )}
            </div>

            {/* Decorative Images */}
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