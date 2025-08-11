import React from 'react';
import Button from "@/components/button";
import Timer from "@/components/sections/timer";

const Gallery = ({ dict, lang = "en" }) => {
    return (
        <>
            <section data-aos="fade-up" className="bg-[#FAFAFA] px-6 md:px-16 py-9">
                <Timer dict={dict} data-aos="fade-up" targetDate="2025-11-08T00:00:00"/>

                <div className="flex flex-col gap-4">
                    <h2 className="md:text-5xl text-3xl font-bold md:text-center mt-7 md:mt-12 text-primary">
                        {dict?.galleryTitle || `${dict.community} Day`} <span className="text-secondary">{dict.gallery || "Gallery"}</span>
                    </h2>

                    <div className="md:grid flex flex-col grid-cols-3 gap-4 w-full md:mt-8 auto-rows-[200px] grid-flow-dense">
                        <img src="/en/gallery/7.png" alt="Gallery 1" className="rounded-xl shadow-lg object-cover w-full h-full" />
                        <img src="/en/gallery/1.png" alt="Gallery 2" className="rounded-xl shadow-lg object-cover w-full h-full col-span-1 row-span-2" />
                        <img src="/en/gallery/6.png" alt="Gallery 7" className="rounded-xl shadow-lg object-cover w-full h-full row-span-2" />
                        <img src="/en/gallery/3.png" alt="Gallery 4" className="rounded-xl shadow-lg object-cover w-full h-full col-span-1 row-span-2" />
                        <img src="/en/gallery/2.png" alt="Gallery 6" className="rounded-xl shadow-lg object-cover w-full h-full col-span-1 row-span-2" />
                        <img src="/en/gallery/5.png" alt="Gallery 3" className="rounded-xl shadow-lg object-cover w-full h-full col-span-1 row-span-2" />
                        <img src="/en/gallery/4.png" alt="Gallery 5" className="rounded-xl shadow-lg object-cover w-full h-full" />
                    </div>

                    <div className="flex justify-center mt-6">
                        <Button
                            text={dict.galleryButton || "View Full Gallery"}
                            className="px-6 py-2"
                        />
                    </div>
                </div>

            </section>
        </>
    );
}
export default Gallery;