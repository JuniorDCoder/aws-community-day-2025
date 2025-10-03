import React from 'react';
import Button from "@/components/button";
import Timer from "@/components/sections/timer";
import Image from "next/image";

const Gallery = ({ dict, lang = "en", eventData, galleryData }) => {
    const { galleryImages = [] } = galleryData || {};

    // Function to determine grid layout based on image index
    const getImageClass = (index) => {
        const positions = [
            '', // normal
            'col-span-1 row-span-2', // tall
            'row-span-2', // tall
            'col-span-1 row-span-2', // tall
            'col-span-1 row-span-2', // tall
            'col-span-1 row-span-2', // tall
            '' // normal
        ];
        return positions[index % positions.length];
    };

    // If no gallery images from API, fallback to static images
    const imagesToDisplay = galleryImages.length > 0
        ? galleryImages
        : [];

    return (
        <>
            <section data-aos="fade-up" className="bg-[#FAFAFA] px-6 md:px-16 py-9">
                <Timer eventData={eventData} dict={dict} data-aos="fade-up" targetDate="2025-11-08T00:00:00"/>

                <div className="flex flex-col gap-4">
                    <h2 className="md:text-5xl text-3xl font-bold md:text-center mt-7 md:mt-12 text-primary">
                        {dict?.galleryTitle || `${dict.community} Day`} <span className="text-secondary">{dict.gallery || "Gallery"}</span>
                    </h2>

                    <div className="md:grid flex flex-col grid-cols-3 gap-4 w-full md:mt-8 auto-rows-[200px] grid-flow-dense">
                        {imagesToDisplay.map((image, index) => (
                            <div
                                key={image.id || index}
                                className={`rounded-xl shadow-lg overflow-hidden ${getImageClass(index)}`}
                            >
                                <Image
                                    src={image.imageUrl}
                                    alt={image.alt || `Gallery image ${index + 1}`}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    priority={index < 3} // Prioritize loading first 3 images
                                />
                            </div>
                        ))}
                    </div>

                    {galleryImages.length > 0 && (
                        <div className="flex justify-center mt-6">
                            <Button
                                text={dict.galleryButton || "View Full Gallery"}
                                className="px-6 py-2"
                                url="/gallery"
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Gallery;