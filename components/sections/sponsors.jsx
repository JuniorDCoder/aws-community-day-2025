"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const Sponsors = () => {
    const sponsorCategories = [
        {
            category: "Gold",
            priority: 1,
            sponsors: [
                { id: 1, logo: "/en/sponsors/aws.png" },
                { id: 2, logo: "/en/sponsors/olioapps.png" },
                { id: 3, logo: "/en/sponsors/aws.png" },
            ],
        },
        {
            category: "Silver",
            priority: 2,
            sponsors: [{ id: 4, logo: "/en/sponsors/guru.png" }],
        },
        {
            category: "Community",
            priority: 3,
            sponsors: [
                { id: 5, logo: "/en/sponsors/training.png" },
                { id: 6, logo: "/en/sponsors/traitz.png" },
                { id: 7, logo: "/en/sponsors/cloud.png" },
                { id: 8, logo: "/en/sponsors/kola.png" },
                { id: 9, logo: "/en/sponsors/django.png" },
                { id: 10, logo: "/en/sponsors/light.png" },
            ],
        },
        {
            category: "Community Exhibitors",
            priority: 4,
            sponsors: [
                { id: 11, logo: "/en/sponsors/kola.png" },
                { id: 12, logo: "/en/sponsors/django.png" },
                { id: 13, logo: "/en/sponsors/light.png" },
            ],
        },
    ];

    // Get size based on priority
    const getContainerSize = (priority) => {
        switch (priority) {
            case 1: // Gold
                return { width: "220px", height: "160px" };
            case 2: // Silver
                return { width: "190px", height: "140px" };
            case 3: // Community
                return { width: "170px", height: "130px" };
            case 4: // Community Exhibitors
                return { width: "150px", height: "110px" };
            default:
                return { width: "180px", height: "130px" };
        }
    };

    return (
        <div
            className="bg-[#FAFAFA] flex flex-col items-center justify-center gap-8 p-12 w-full mx-auto"
        >
            <h2 data-aos="fade-up"  className="text-5xl font-bold text-center mt-12 text-primary">
                Our <span className="text-secondary">Sponsors</span>
            </h2>

            {sponsorCategories.map((categoryData, index) => {
                const size = getContainerSize(categoryData.priority);

                return (
                    <div data-aos="fade-up"  key={index} className="w-full">
                        <h4 className="text-[#879196] font-mono text-xl text-center mb-6">
                            {categoryData.category}
                        </h4>

                        {categoryData.sponsors.length <= 4 ? (
                            <div className="flex flex-wrap justify-center gap-6">
                                {categoryData.sponsors.map((sponsor) => (
                                    <Link
                                        href={`/`}
                                        key={sponsor.id}
                                        className="flex cursor-pointer items-center justify-center p-6 bg-white rounded-md shadow-md border border-[#AAB7B8]"
                                        style={size}
                                    >
                                        <img
                                            src={sponsor.logo}
                                            alt={`${categoryData.category} Sponsor`}
                                            className="object-contain"
                                        />
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="max-w-5xl mx-auto">
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        640: { slidesPerView: 2 },
                                        768: { slidesPerView: 3 },
                                        1024: { slidesPerView: 4 },
                                    }}
                                >
                                    {categoryData.sponsors.map((sponsor) => (
                                        <SwiperSlide
                                            key={sponsor.id}
                                            className="flex justify-center items-center"
                                        >
                                            <div
                                                className="flex items-center justify-center p-6 bg-white rounded-md shadow-md border border-[#AAB7B8]"
                                                style={size}
                                            >
                                                <img
                                                    src={sponsor.logo}
                                                    alt={`${categoryData.category} Sponsor`}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                    </div>
                );
            })}

            <p className="text-primary text-2xl font-bold text-center mt-9">Interested in becoming a sponsor? <Link href="/" className="text-secondary underline">Apply here</Link></p>
        </div>
    );
};

export default Sponsors;
