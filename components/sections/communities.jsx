"use client";

import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import OrganizingCommunity from "@/components/organizing-community";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";


const organizingCommunities = [
    {
        name: "AWS Cloud Club UBa",
        description: "Description for Community 1",
        image: "/en/organizing-communities/1.png",
    },
    {
        name: "AWS Cloud Club Douala",
        description: "Description for Community 2",
        image: "/en/organizing-communities/1.png",
    },
    {
        name: "AWS Cloud Club Buea",
        description: "Description for Community 3",
        image: "/en/organizing-communities/1.png",
    }
];

const Communities = ({dict}) => (
    <>
        <section className="md:p-12 p-6 bg-primary w-full mx-auto flex flex-col">
            <h2 data-aos="fade-up" className="md:text-4xl text-3xl font-bold md:text-center text-white mb-4 md:mb-12">
                {dict.organizingCommunities.title} <span className="text-secondary">{dict.organizingCommunities.subtitle}</span>
            </h2>

            <div data-aos="fade-up"  className="md:max-w-6xl max-w-lg md:mx-auto">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                        bulletClass: "custom-bullet",
                        bulletActiveClass: "custom-bullet-active",
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
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