import React from 'react';
import Image from "next/image";

const Location = (props) => (
    <>
        <div className="bg-[#FAFAFA] pb-4 p-12 w-full mx-auto" >
            <h2 data-aos="fade-up" className="text-4xl text-center font-bold text-primary mb-9">AWS DAY  <span className="text-secondary">LOCATION</span></h2>

            <div data-aos="fade-up" className="grid grid-cols-2 w-full mt-8 gap-2">
                {/* Large image on the left */}
                <Image
                    src="/en/location/1.png"
                    alt="University of Buea"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-lg object-cover w-full h-full row-span-2"
                />

                {/* 2x2 grid on the right */}
                <div className="grid grid-cols-2 grid-rows-1 gap-2 h-full">
                    <Image
                        src="/en/location/2.png"
                        alt="Location 2"
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg object-cover w-full h-full"
                    />
                    <Image
                        src="/en/location/3.png"
                        alt="Location 3"
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg object-cover w-full h-full"
                    />
                    <Image
                        src="/en/location/4.png"
                        alt="Mount Cameroon National Park"
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg object-cover w-full h-full"
                    />
                    <Image
                        src="/en/location/5.png"
                        alt="Location 5"
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    </>
);

export default Location;