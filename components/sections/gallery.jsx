import React from 'react';
import Button from "@/components/button";
import Timer from "@/components/sections/timer";

const Gallery = (props) => (
    <>
        <section data-aos="fade-up" className="bg-[#FAFAFA] px-16 py-9">
            <Timer targetDate="2025-11-08T00:00:00" />

            <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-bold text-center mt-12 text-primary">
                    Community Day <span className="text-secondary">Gallery</span>
                </h2>

                <div className="grid grid-cols-3 gap-4 w-full mt-8 auto-rows-[200px] grid-flow-dense">
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
                        text="View Full Gallery"
                        className="px-6 py-2"
                    />
                </div>
            </div>

        </section>
    </>
);

export default Gallery;