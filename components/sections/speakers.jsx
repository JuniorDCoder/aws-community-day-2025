"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import SpeakerCard from "../speaker-card";
import Button from "@/components/button";

const speakersData = [
    {
        name: "Veliswa Boya",
        title: "Senior Developer Advocate, AWS",
        image: "/en/speakers/1.png",
        tag: "Key note",
        tagColor: "#F59E0B",
    },
    {
        name: "Veliswa Boya",
        title: "Senior Developer Advocate, AWS",
        image: "/en/speakers/1.png",
        tag: "Speaker",
        tagColor: "#1E293B",
    },
    {
        name: "Veliswa Boya",
        title: "Senior Developer Advocate, AWS",
        image: "/en/speakers/1.png",
        tag: "Speaker",
        tagColor: "#F59E0B",
    },
    {
        name: "Veliswa Boya",
        title: "Senior Developer Advocate, AWS",
        image: "/en/speakers/1.png",
        tag: "Speaker",
        tagColor: "#1E293B",
    },
    {
        name: "Veliswa Boya",
        title: "Senior Developer Advocate, AWS",
        image: "/en/speakers/1.png",
        tag: "Speaker",
        tagColor: "#F59E0B",
    },
];

const Speakers = ({dict}) => {
    return (
        <section className="py-12 bg-primary text-center">
            <h2 data-aos="fade-up"  className="md:text-4xl text-3xl font-bold text-white mb-8">
                {dict.ourSpeakers.our} <span className="text-secondary">{dict.ourSpeakers.title}</span>
            </h2>

            <div data-aos="fade-up"  className="md:max-w-6xl max-w-lg md:mx-auto">
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
                    {speakersData.map((speaker, idx) => (
                        <SwiperSlide key={idx}>
                            <SpeakerCard {...speaker} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Container */}
                <div className="custom-pagination mt-6 flex justify-center gap-3"></div>


                {/* Reserve Button */}
                <div className="mt-8">
                    <Button text={dict.ourSpeakers.reserve} />
                </div>
            </div>
        </section>
    );
};

export default Speakers;
