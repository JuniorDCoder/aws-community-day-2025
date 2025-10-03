"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SpeakerCard from "@/components/speaker-card";
import { Users, Crown, Award, ExternalLink, UserPlus, Calendar } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Organizers = ({ dict, organizersData, settingsData, viewMode = "slider" }) => {
    const organizers = organizersData?.organizers || [];
    const [selectedOrganizer, setSelectedOrganizer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Get organizer application link
    const organizerLink = settingsData?.organizerLink; // You might want to add this to your GeneralSetting model

    // Fallback data
    const fallbackOrganizers = [
        {
            id: 1,
            name: "Organizer Team",
            role: "Event Organizer",
            affiliation: "AWS Community Cameroon",
            photoUrl: "/placeholder-organizer.jpg",
        }
    ];

    const displayOrganizers = organizers.length > 0 ? organizers : fallbackOrganizers;

    const openOrganizerModal = (organizer) => {
        setSelectedOrganizer(organizer);
        setIsModalOpen(true);
    };

    const closeOrganizerModal = () => {
        setIsModalOpen(false);
        setSelectedOrganizer(null);
    };

    // Grid View for Organizers
    const GridView = () => (
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {displayOrganizers.map((organizer, idx) => (
                    <div
                        key={organizer.id || idx}
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-100 overflow-hidden"
                        onClick={() => openOrganizerModal(organizer)}
                    >
                        {/* Organizer Image */}
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={organizer.photoUrl || "/placeholder-organizer.jpg"}
                                alt={organizer.name}
                                width={300}
                                height={256}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Role Badge */}
                            <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                Organizer
                            </div>
                        </div>

                        {/* Organizer Info */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                {organizer.name}
                            </h3>
                            {organizer.role && (
                                <p className="text-gray-600 font-medium mb-2">
                                    {organizer.role}
                                </p>
                            )}
                            {organizer.affiliation && (
                                <p className="text-gray-500 text-sm mb-4">
                                    {organizer.affiliation}
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

    // Slider View for Organizers
    const SliderView = () => (
        <div className="md:max-w-6xl max-w-lg md:mx-auto relative">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
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
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={organizers.length > 3}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="pb-12"
            >
                {displayOrganizers.map((organizer, idx) => (
                    <SwiperSlide key={organizer.id || idx}>
                        <div
                            className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                            onClick={() => openOrganizerModal(organizer)}
                        >
                            <SpeakerCard
                                {...organizer}
                                type="organizer"
                                title={organizer.role}
                                affiliation={organizer.affiliation}
                            />
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
        <section className="bg-primary py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                        <Crown className="w-6 h-6 text-white" />
                        <span className="text-white font-semibold uppercase tracking-wider text-sm">
                            {dict?.organizers?.team || "Organizing Team"}
                        </span>
                    </div>

                    <h2 data-aos="fade-up" className="md:text-5xl text-4xl font-bold text-white mb-4">
                        {dict?.ourSpeakers?.our || "Our"} <span className="text-secondary">{dict?.organizers?.title || "Organizers"}</span>
                    </h2>
                    <p data-aos="fade-up" className="text-gray-300 text-lg max-w-2xl mx-auto">
                        {dict?.organizers?.description || "The amazing team behind AWS Community Day Cameroon"}
                    </p>
                </div>

                {/* Organizers Content */}
                {viewMode === "grid" ? <GridView /> : <SliderView />}

                {/* Call to Action Section */}
                {organizerLink && (
                    <div className="text-center mt-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {dict?.organizers?.joinTeam || "Want to Join Our Team?"}
                                    </h3>
                                    <p className="text-gray-300">
                                        {dict?.organizers?.ctaDescription || "Help us create amazing community events and gain valuable experience"}
                                    </p>
                                </div>
                                <Link
                                    href={organizerLink}
                                    className="inline-flex items-center gap-3 bg-secondary text-primary px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                                >
                                    <UserPlus className="w-5 h-5" />
                                    {dict?.organizers?.apply || "Become an Organizer"}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {organizers.length}
                        </div>
                        <div className="text-gray-300 text-sm uppercase tracking-wide">
                            Organizers
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {new Set(organizers.map(o => o.affiliation)).size}
                        </div>
                        <div className="text-gray-300 text-sm uppercase tracking-wide">
                            Communities
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {new Set(organizers.map(o => o.role)).size}
                        </div>
                        <div className="text-gray-300 text-sm uppercase tracking-wide">
                            Roles
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {organizers.year ? Math.max(...organizers.map(s => s.year)) : new Date().getFullYear()}
                        </div>
                        <div className="text-gray-300 text-sm uppercase tracking-wide">
                            Edition
                        </div>
                    </div>
                </div>
            </div>

            {/* Organizer Detail Modal */}
            {isModalOpen && selectedOrganizer && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeOrganizerModal}
                            className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10 transition-colors"
                        >
                            ×
                        </button>

                        {/* Modal Content */}
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                {/* Organizer Image */}
                                <div className="flex-shrink-0">
                                    <Image
                                        src={selectedOrganizer.photoUrl || "/placeholder-organizer.jpg"}
                                        alt={selectedOrganizer.name}
                                        width={200}
                                        height={200}
                                        className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl"
                                    />
                                </div>

                                {/* Organizer Details */}
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold text-primary mb-2">
                                        {selectedOrganizer.name}
                                    </h2>

                                    {selectedOrganizer.role && (
                                        <p className="text-xl text-secondary font-semibold mb-3">
                                            {selectedOrganizer.role}
                                        </p>
                                    )}

                                    {selectedOrganizer.affiliation && (
                                        <div className="bg-primary/10 rounded-xl p-4 mb-4 border border-primary/20">
                                            <div className="flex items-center gap-2 text-primary font-semibold">
                                                <Users className="w-4 h-4" />
                                                Affiliation
                                            </div>
                                            <p className="text-gray-700 mt-1">{selectedOrganizer.affiliation}</p>
                                        </div>
                                    )}

                                    <div className="flex gap-4">
                                        <button
                                            onClick={closeOrganizerModal}
                                            className="px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                                        >
                                            Close
                                        </button>
                                        {organizerLink && (
                                            <Link
                                                href={organizerLink}
                                                className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
                                            >
                                                <UserPlus className="w-4 h-4" />
                                                Join Team
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Organizers;