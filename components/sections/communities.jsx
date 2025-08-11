"use client";

import React from 'react';
import Timer from "@/components/sections/timer";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import SpeakerCard from "@/components/speaker-card";
import Button from "@/components/button";
import OrganizingCommunity from "@/components/organizing-community";

const organizingCommunities = [
    {
        name: "AWS Cloud Clubs UBa",
        description: "Description for Community 1",
        image: "/en/organizing-communities/1.png",
    },
    {
        name: "AWS Cloud Clubs UBa",
        description: "Description for Community 2",
        image: "/en/organizing-communities/1.png",
    },
    {
        name: "AWS Cloud Clubs UBa",
        description: "Description for Community 3",
        image: "/en/organizing-communities/1.png",
    }
];

const Communities = (props) => (
    <>
        <section className="p-12 bg-primary w-full mx-auto flex flex-col">
            <h2 data-aos="fade-up"  className="text-4xl font-bold text-center text-white mb-12">
                OUR ORGANIZING <span className="text-secondary">COMMUNITIES </span>
            </h2>

            <div data-aos="fade-up"  className="max-w-6xl mx-auto">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, el: ".custom-pagination", bulletClass: "custom-bullet", bulletActiveClass: "custom-bullet-active" }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {organizingCommunities.map((organizingCommunitee, idx) => (
                        <SwiperSlide key={idx}>
                            <OrganizingCommunity {...organizingCommunitee} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Container */}
                <div className="custom-pagination mt-6 flex justify-center gap-3"></div>

            </div>

        </section>

    </>
);

export default Communities;