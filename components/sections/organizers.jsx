"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import SpeakerCard from "@/components/speaker-card";

const organizersData = [
    {
        name: "Steve Yonkue",
        title: "AWS User Group Douala",
        image: "/en/speakers/1.png",
    },
    {
        name: "Ayoko Delia",
        title: "AWS User Group Bamenda",
        image: "/en/speakers/1.png",
    },
    {
        name: "Dinnyuy Fru Angu",
        title: "AWS User Group Douala",
        image: "/en/speakers/1.png",
    },
    {
        name: "Veliswa Boya",
        title: "AWS User Group Douala",
        image: "/en/speakers/1.png",
    },
];

const Organizers = () => (
   <section className="bg-primary">
       <div className="p-12 bg-primary w-full flex flex-col gap-5 text-center">
           <h2 data-aos="fade-up" className="text-4xl font-bold text-white mb-8">
               OUR <span className="text-secondary">Organizers</span>
           </h2>

           <div data-aos="fade-up" className="max-w-6xl mx-auto">
               <Swiper
                   modules={[Pagination]}
                   pagination={{
                       clickable: true,
                       el: ".custom-pagination",
                       bulletClass: "custom-bullet",
                       bulletActiveClass: "custom-bullet-active",
                   }}
                   spaceBetween={20}
                   slidesPerView={1}
                   breakpoints={{
                       640: { slidesPerView: 1 },
                       768: { slidesPerView: 2 },
                       1024: { slidesPerView: 4 },
                   }}
               >
                   {organizersData.map((organizer, idx) => (
                       <SwiperSlide key={idx}>
                           <SpeakerCard {...organizer} type="organizer" />
                       </SwiperSlide>
                   ))}
               </Swiper>

               {/* Custom Pagination Container */}
               <div className="custom-pagination mt-6 flex justify-center gap-3"></div>
           </div>


       </div>
       <hr className="border-gray-700 border" />
   </section>
);

export default Organizers;
