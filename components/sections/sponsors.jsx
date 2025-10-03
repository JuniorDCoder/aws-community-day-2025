"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";
import { Crown, Award, Users, Star, ExternalLink } from 'lucide-react';

const Sponsors = ({ dict, sponsorsData, settingsData }) => {
    const sponsors = sponsorsData?.sponsors || [];

    // Group sponsors by type
    const sponsorCategories = [
        {
            category: dict?.ourSponsors?.gold || "Gold",
            type: "GOLD",
            priority: 1,
            icon: Crown,
            sponsors: sponsors.filter(sponsor => sponsor.type === "GOLD"),
        },
        {
            category: dict?.ourSponsors?.silver || "Silver",
            type: "SILVER",
            priority: 2,
            icon: Award,
            sponsors: sponsors.filter(sponsor => sponsor.type === "SILVER"),
        },
        {
            category: dict?.ourSponsors?.community || "Community",
            type: "COMMUNITY",
            priority: 3,
            icon: Users,
            sponsors: sponsors.filter(sponsor => sponsor.type === "COMMUNITY"),
        },
        {
            category: dict?.ourSponsors?.communityExhibitors || "Community Exhibitors",
            type: "COMMUNITY_EXHIBITOR",
            priority: 4,
            icon: Star,
            sponsors: sponsors.filter(sponsor => sponsor.type === "COMMUNITY_EXHIBITOR"),
        },
    ].filter(category => category.sponsors.length > 0);


    // Get size and styling based on priority
    const getSponsorStyle = (priority) => {
        switch (priority) {
            case 1: // Gold
                return {
                    container: "w-64 h-48 bg-gradient-to-br from-yellow-50 to-amber-100 border-2 border-yellow-300 shadow-lg",
                    glow: "shadow-yellow-400/30",
                    badge: "bg-yellow-500 text-white"
                };
            case 2: // Silver
                return {
                    container: "w-56 h-40 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 shadow-md",
                    glow: "shadow-gray-400/30",
                    badge: "bg-gray-500 text-white"
                };
            case 3: // Community
                return {
                    container: "w-48 h-36 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 shadow-sm",
                    glow: "shadow-blue-400/30",
                    badge: "bg-blue-500 text-white"
                };
            case 4: // Community Exhibitors
                return {
                    container: "w-40 h-32 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 shadow-sm",
                    glow: "shadow-green-400/30",
                    badge: "bg-green-500 text-white"
                };
            default:
                return {
                    container: "w-48 h-36 bg-white border border-gray-200 shadow-sm",
                    glow: "shadow-gray-400/20",
                    badge: "bg-gray-500 text-white"
                };
        }
    };

    // Fallback content when no sponsors
    if (sponsors.length === 0) {
        return (
            <section className="bg-[#FAFAFA] py-20 px-6 w-full">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-primary/20">
                        <Award className="w-6 h-6 text-primary" />
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                            Our Sponsors
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                        {dict?.ourSponsors?.our || "Our"} <span className="text-secondary">Sponsors</span>
                    </h2>

                    <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                        <Award className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            Sponsors Coming Soon
                        </h3>
                        <p className="text-gray-600 mb-8 text-lg">
                            We're currently building amazing partnerships with industry leaders.
                            Stay tuned for our incredible sponsor lineup!
                        </p>

                        {settingsData?.sponsorLink && (
                            <Link
                                href={settingsData.sponsorLink}
                                className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transform transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <Award className="w-5 h-5" />
                                {dict?.ourSponsors?.applyToBeSponsor || "Become a Sponsor"}
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#FAFAFA] py-16 md:py-20 px-6 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-primary/20">
                        <Award className="w-6 h-6 text-primary" />
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                            {dict?.ourSponsors?.partners || "Our Partners"}
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                        {dict?.ourSponsors?.our || "Our"} <span className="text-secondary">Sponsors</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {dict?.ourSponsors?.description || "We're grateful to our amazing sponsors who make this event possible"}
                    </p>
                </div>

                {/* Sponsor Categories */}
                <div className="space-y-16">
                    {sponsorCategories.map((categoryData, index) => {
                        const CategoryIcon = categoryData.icon;
                        const style = getSponsorStyle(categoryData.priority);

                        return (
                            <div key={categoryData.type} data-aos="fade-up" className="space-y-8">
                                {/* Category Header */}
                                <div className="text-center">
                                    <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
                                        <CategoryIcon className="w-5 h-5 text-secondary" />
                                        <h3 className="text-xl font-bold text-primary">
                                            {categoryData.category}
                                        </h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${style.badge}`}>
                                            {categoryData.sponsors.length}
                                        </span>
                                    </div>
                                </div>

                                {/* Sponsors Grid/Slider */}
                                {categoryData.sponsors.length <= 4 ? (
                                    <div className="flex flex-wrap justify-center gap-8">
                                        {categoryData.sponsors.map((sponsor) => (
                                            <Link
                                                href={sponsor.website || "#"}
                                                key={sponsor.id}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group relative ${style.container} rounded-2xl p-6 hover:scale-105 transform transition-all duration-500 hover:shadow-xl ${style.glow} flex items-center justify-center`}
                                            >
                                                {/* Sponsor Logo */}
                                                <div className="relative w-full h-full flex items-center justify-center">
                                                    <Image
                                                        src={sponsor.logoUrl || "/en/placeholder-sponsor.png"}
                                                        alt={sponsor.name}
                                                        width={200}
                                                        height={100}
                                                        className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    <ExternalLink className="w-4 h-4 text-gray-400 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>

                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-2xl transition-colors duration-300"></div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="max-w-6xl mx-auto">
                                        <Swiper
                                            modules={[Autoplay, EffectFade]}
                                            spaceBetween={40}
                                            slidesPerView={1}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            effect="fade"
                                            fadeEffect={{ crossFade: true }}
                                            loop={true}
                                            breakpoints={{
                                                320: { slidesPerView: 2 },
                                                640: { slidesPerView: 3 },
                                                768: { slidesPerView: 4 },
                                                1024: { slidesPerView: 5 },
                                                1280: { slidesPerView: 6 },
                                            }}
                                        >
                                            {categoryData.sponsors.map((sponsor) => (
                                                <SwiperSlide
                                                    key={sponsor.id}
                                                    className="flex justify-center items-center py-4"
                                                >
                                                    <Link
                                                        href={sponsor.website || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`group relative ${style.container} rounded-2xl p-6 hover:scale-105 transform transition-all duration-500 hover:shadow-xl ${style.glow} flex items-center justify-center`}
                                                    >
                                                        <div className="relative w-full h-full flex items-center justify-center">
                                                            <Image
                                                                src={sponsor.logoUrl || "/placeholder-sponsor.png"}
                                                                alt={sponsor.name}
                                                                width={160}
                                                                height={80}
                                                                className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                                                            />
                                                            <ExternalLink className="w-4 h-4 text-gray-400 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                        </div>
                                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-2xl transition-colors duration-300"></div>
                                                    </Link>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 pt-8 border-t border-gray-200">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-primary mb-6">
                            {dict?.ourSponsors?.joinThem || "Want to Join These Amazing Companies?"}
                        </h3>
                        <p className="text-gray-600 mb-8">
                            {dict?.ourSponsors?.ctaDescription || "Become a sponsor and showcase your brand to our vibrant community"}
                        </p>
                        {settingsData?.sponsorLink && (
                            <Link
                                href={settingsData.sponsorLink}
                                className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transform transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <Award className="w-5 h-5" />
                                {dict?.ourSponsors?.applyToBeSponsor || "Become a Sponsor"}
                            </Link>
                        )}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                            {sponsors.length}
                        </div>
                        <div className="text-gray-600 text-sm uppercase tracking-wide">
                            Total Sponsors
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                            {sponsorCategories.length}
                        </div>
                        <div className="text-gray-600 text-sm uppercase tracking-wide">
                            Tiers
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                            {sponsorCategories.find(cat => cat.type === "GOLD")?.sponsors.length || 0}
                        </div>
                        <div className="text-gray-600 text-sm uppercase tracking-wide">
                            {dict?.ourSponsors?.gold}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                            {new Set(sponsors.map(s => s.website).filter(Boolean)).size}
                        </div>
                        <div className="text-gray-600 text-sm uppercase tracking-wide">
                            Active Links
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;