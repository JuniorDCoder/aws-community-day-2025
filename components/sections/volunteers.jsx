"use client";
import React, { useState } from "react";
import SpeakerCard from "@/components/speaker-card";
import { Users, Heart, Award, ExternalLink, UserPlus, HandHeart } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Volunteers = ({ dict, volunteersData, settingsData, viewMode = "grid" }) => {
    const volunteers = volunteersData?.volunteers || [];
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Get volunteer application link
    const volunteerLink = settingsData?.volunteerLink;

    // Fallback data
    const fallbackVolunteers = [
        {
            id: 1,
            name: "Volunteer Team",
            role: "Event Volunteer",
            photoUrl: "/placeholder-volunteer.jpg",
        }
    ];

    const displayVolunteers = volunteers.length > 0 ? volunteers : fallbackVolunteers;

    const openVolunteerModal = (volunteer) => {
        setSelectedVolunteer(volunteer);
        setIsModalOpen(true);
    };

    const closeVolunteerModal = () => {
        setIsModalOpen(false);
        setSelectedVolunteer(null);
    };

    // Grid View for Volunteers (default)
    const GridView = () => (
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {displayVolunteers.map((volunteer, idx) => (
                    <div
                        key={volunteer.id || idx}
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-100 overflow-hidden"
                        onClick={() => openVolunteerModal(volunteer)}
                    >
                        {/* Volunteer Image */}
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={volunteer.photoUrl || "/placeholder-volunteer.jpg"}
                                alt={volunteer.name}
                                width={200}
                                height={192}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Volunteer Badge */}
                            <div className="absolute top-3 left-3 bg-secondary text-primary px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                Volunteer
                            </div>
                        </div>

                        {/* Volunteer Info */}
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                                {volunteer.name}
                            </h3>
                            {volunteer.role && (
                                <p className="text-gray-600 text-sm mb-2">
                                    {volunteer.role}
                                </p>
                            )}

                            {/* View Details CTA */}
                            <div className="flex items-center justify-between">
                                <span className="text-secondary text-xs font-semibold">
                                    View Details
                                </span>
                                <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-secondary transition-colors" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="bg-primary py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                        <Heart className="w-6 h-6 text-white" />
                        <span className="text-white font-semibold uppercase tracking-wider text-sm">
                            {dict?.volunteers?.team || "Volunteer Team"}
                        </span>
                    </div>

                    <h2 data-aos="fade-up" className="md:text-5xl text-4xl font-bold text-white mb-4">
                        {dict?.ourSpeakers?.our || "Our"} <span className="text-secondary">{dict?.volunteers?.title || "Volunteers"}</span>
                    </h2>
                    <p data-aos="fade-up" className="text-gray-300 text-lg max-w-2xl mx-auto">
                        {dict?.volunteers?.description || "The incredible volunteers who make this event possible"}
                    </p>
                </div>

                {/* Volunteers Content */}
                <GridView />

                {/* Call to Action Section */}
                {volunteerLink && (
                    <div className="text-center mt-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {dict?.volunteers?.joinTeam || "Want to Make a Difference?"}
                                    </h3>
                                    <p className="text-gray-300">
                                        {dict?.volunteers?.ctaDescription || "Join our volunteer team and help create an amazing experience for the community"}
                                    </p>
                                </div>
                                <Link
                                    href={volunteerLink}
                                    className="inline-flex items-center gap-3 bg-secondary text-primary px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                                >
                                    <HandHeart className="w-5 h-5" />
                                    {dict?.volunteers?.apply || "Become a Volunteer"}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {volunteers.length}
                        </div>
                        <div className="text-gray-300 text-sm uppercase tracking-wide">
                            {dict?.volunteers?.title || "Volunteers"}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {new Set(volunteers.map(v => v.role)).size}
                        </div>
                        <div className="text-gray-300 text-sm uppercase tracking-wide">
                            Roles
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            100%
                        </div>
                        <div className="text-gray-300 text-sm uppercase tracking-wide">
                            Dedication
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {volunteers.year ? Math.max(...volunteers.map(s => s.year)) : new Date().getFullYear()}
                        </div>
                        <div className="text-gray-300 text-sm uppercase tracking-wide">
                            Edition
                        </div>
                    </div>
                </div>
            </div>

            {/* Volunteer Detail Modal */}
            {isModalOpen && selectedVolunteer && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div
                        className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeVolunteerModal}
                            className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10 transition-colors"
                        >
                            ×
                        </button>

                        {/* Modal Content */}
                        <div className="p-8 text-center">
                            {/* Volunteer Image */}
                            <div className="mb-6">
                                <Image
                                    src={selectedVolunteer.photoUrl || "/placeholder-volunteer.jpg"}
                                    alt={selectedVolunteer.name}
                                    width={150}
                                    height={150}
                                    className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-secondary"
                                />
                            </div>

                            {/* Volunteer Details */}
                            <h2 className="text-2xl font-bold text-primary mb-2">
                                {selectedVolunteer.name}
                            </h2>

                            {selectedVolunteer.role && (
                                <p className="text-lg text-secondary font-semibold mb-4">
                                    {selectedVolunteer.role}
                                </p>
                            )}

                            <div className="bg-primary/10 rounded-xl p-4 mb-6 border border-primary/20">
                                <div className="flex items-center gap-2 text-primary font-semibold justify-center">
                                    <Heart className="w-4 h-4" />
                                    Event Volunteer
                                </div>
                                <p className="text-gray-700 mt-2 text-sm">
                                    Thank you for your dedication and support in making this event a success!
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={closeVolunteerModal}
                                    className="px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    Close
                                </button>
                                {volunteerLink && (
                                    <Link
                                        href={volunteerLink}
                                        className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
                                    >
                                        <HandHeart className="w-4 h-4" />
                                        Join as Volunteer
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Volunteers;