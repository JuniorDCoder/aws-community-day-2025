"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SpeakerCard from "../speaker-card";
import Button from "@/components/button";
import { X, ExternalLink, Calendar, MapPin, Award } from 'lucide-react';
import Image from "next/image";

const Speakers = ({ dict, speakersData, linkToRsvp, viewMode = "slider" }) => {
    const speakers = speakersData?.speakers || [];
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fallback speakers when none available
    const fallbackSpeakers = [
        {
            id: 1,
            name: "Coming Soon",
            title: "Featured Speaker",
            bio: "Our amazing lineup of speakers will be announced soon. Stay tuned for industry leaders and experts who will share their insights and experiences.",
            photoUrl: "/placeholder-speaker.jpg",
            keyNote: "Exciting topics covering cloud computing, AI, and community building"
        }
    ];

    const displaySpeakers = speakers.length > 0 ? speakers : fallbackSpeakers;

    const openSpeakerModal = (speaker) => {
        setSelectedSpeaker(speaker);
        setIsModalOpen(true);
    };

    const closeSpeakerModal = () => {
        setIsModalOpen(false);
        setSelectedSpeaker(null);
    };

    // Grid View Component
    const GridView = () => (
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {displaySpeakers.map((speaker, idx) => (
                    <div
                        key={speaker.id || idx}
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-100 overflow-hidden"
                        onClick={() => openSpeakerModal(speaker)}
                    >
                        {/* Speaker Image */}
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={speaker.photoUrl || "/placeholder-speaker.jpg"}
                                alt={speaker.name}
                                width={300}
                                height={256}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Keynote Badge */}
                            {speaker.keyNote && (
                                <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Keynote
                                </div>
                            )}
                        </div>

                        {/* Speaker Info */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                {speaker.name}
                            </h3>
                            {speaker.title && (
                                <p className="text-gray-600 font-medium mb-3">
                                    {speaker.title}
                                </p>
                            )}
                            {speaker.bio && (
                                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                    {speaker.bio}
                                </p>
                            )}

                            {/* View Details CTA */}
                            <div className="flex items-center justify-between">
                                <span className="text-secondary text-sm font-semibold">
                                    View Details
                                </span>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-secondary transition-colors" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // Slider View Component
    const SliderView = () => (
        <div className="md:max-w-6xl max-w-lg md:mx-auto relative">
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                    bulletClass: "custom-bullet",
                    bulletActiveClass: "custom-bullet-active"
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="pb-12"
            >
                {displaySpeakers.map((speaker, idx) => (
                    <SwiperSlide key={speaker.id || idx}>
                        <div
                            className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                            onClick={() => openSpeakerModal(speaker)}
                        >
                            <SpeakerCard {...speaker} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
                <button className="swiper-button-prev w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                    ←
                </button>

                {/* Custom Pagination */}
                <div className="custom-pagination flex justify-center gap-3"></div>

                <button className="swiper-button-next w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                    →
                </button>
            </div>
        </div>
    );

    return (
        <section className="py-16 bg-primary text-center">
            {/* Header */}
            <div className="mb-12">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                    <Award className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold uppercase tracking-wider text-sm">
                        {dict?.ourSpeakers?.featured || "Featured Speakers"}
                    </span>
                </div>

                <h2 data-aos="fade-up" className="md:text-5xl text-4xl font-bold text-white mb-4">
                    {dict?.ourSpeakers?.our || "Our"} <span className="text-secondary">{dict?.ourSpeakers?.title || "Speakers"}</span>
                </h2>
                <p data-aos="fade-up" className="text-gray-300 text-lg max-w-2xl mx-auto">
                    {dict?.ourSpeakers?.description || "Learn from industry experts and thought leaders shaping the future of technology"}
                </p>
            </div>

            {/* Speakers Content */}
            {viewMode === "grid" ? <GridView /> : <SliderView />}

            {/* CTA Section */}
            {speakers.length > 0 && linkToRsvp && (
                <div className="mt-12 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {dict?.ourSpeakers?.joinEvent || "Join These Amazing Speakers"}
                        </h3>
                        <p className="text-gray-300 mb-6">
                            {dict?.ourSpeakers?.ctaDescription || "Don't miss this opportunity to learn from the best in the industry"}
                        </p>
                        <Button
                            text={dict?.ourSpeakers?.reserve || "Reserve Your Spot"}
                            url={linkToRsvp}
                            className="bg-secondary text-primary hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                        />
                    </div>
                </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20 max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                        {speakers.length}
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wide">
                        {dict.ourSpeakers.title}
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                        {speakers.filter(s => s.keyNote).length}
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wide">
                        Keynotes
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                        {new Set(speakers.map(s => s.title)).size}
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wide">
                        Roles
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                        {speakers.year ? Math.max(...speakers.map(s => s.year)) : new Date().getFullYear()}
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wide">
                        Edition
                    </div>
                </div>
            </div>

            {/* Speaker Detail Modal */}
            {isModalOpen && selectedSpeaker && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div
                        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeSpeakerModal}
                            className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10 transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Modal Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Speaker Image */}
                            <div className="lg:col-span-1 relative">
                                <Image
                                    src={selectedSpeaker.photoUrl || "/placeholder-speaker.jpg"}
                                    alt={selectedSpeaker.name}
                                    width={400}
                                    height={500}
                                    className="w-full h-64 lg:h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                                />
                                {selectedSpeaker.keyNote && (
                                    <div className="absolute top-4 left-4 bg-secondary text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                                        Keynote Speaker
                                    </div>
                                )}
                            </div>

                            {/* Speaker Details */}
                            <div className="lg:col-span-2 p-8">
                                <h2 className="text-3xl font-bold text-primary mb-2">
                                    {selectedSpeaker.name}
                                </h2>

                                {selectedSpeaker.title && (
                                    <p className="text-xl text-secondary font-semibold mb-6">
                                        {selectedSpeaker.title}
                                    </p>
                                )}

                                {selectedSpeaker.keyNote && (
                                    <div className="bg-primary/10 rounded-xl p-4 mb-6 border border-primary/20">
                                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                            <Calendar className="w-4 h-4" />
                                            Keynote Session
                                        </div>
                                        <p className="text-gray-700">{selectedSpeaker.keyNote}</p>
                                    </div>
                                )}

                                {selectedSpeaker.bio && (
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-primary mb-3">About</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            {selectedSpeaker.bio}
                                        </p>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    {linkToRsvp && (
                                        <Button
                                            text="Reserve Your Spot"
                                            url={linkToRsvp}
                                            className="bg-secondary text-primary hover:bg-orange-600 hover:text-white"
                                        />
                                    )}
                                    {/*<button*/}
                                    {/*    onClick={closeSpeakerModal}*/}
                                    {/*    className="px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"*/}
                                    {/*>*/}
                                    {/*    Close*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Speakers;