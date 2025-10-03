import React from 'react';
import Image from "next/image";
import { MapPin, Navigation, Users, Globe, Phone, Clock } from 'lucide-react';

const Location = ({ dict, venueData }) => {
    const venue = venueData?.venue;

    // Fallback images if no venue images
    const fallbackImages = [
        "/en/location/1.png",
        "/en/location/2.png",
        "/en/location/3.png",
        "/en/location/4.png",
        "/en/location/5.png"
    ];

    const imagesToUse = venue?.images && venue.images.length > 0 ? venue.images : fallbackImages;

    return (
        <section className="bg-[#FAFAFA] py-12 md:py-16 px-6 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 data-aos="fade-up" className="md:text-5xl text-4xl font-bold text-primary mb-4">
                        {dict?.location?.day || "Community"} <span className="text-secondary">{dict?.location?.title || "Location"}</span>
                    </h2>
                    <p data-aos="fade-up" className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {dict?.location?.description || "Join us at our amazing venue for an unforgettable experience"}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Images Grid */}
                    <div data-aos="fade-up" className="space-y-4">
                        {/* Main Large Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={imagesToUse[0] || "/en/location/1.png"}
                                alt={venue?.name || "Event Venue"}
                                width={800}
                                height={500}
                                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                <h3 className="text-white text-xl md:text-2xl font-bold">
                                    {venue?.name || "University of Buea"}
                                </h3>
                                <p className="text-gray-200 text-sm md:text-base">
                                    {venue?.city || "Buea"}, {venue?.region || "Southwest Region"}
                                </p>
                            </div>
                        </div>

                        {/* Thumbnail Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {imagesToUse.slice(1, 5).map((image, index) => (
                                <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
                                    <Image
                                        src={image}
                                        alt={`Venue view ${index + 2}`}
                                        width={400}
                                        height={250}
                                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Venue Details */}
                    <div data-aos="fade-up" className="space-y-6">
                        {/* Venue Information Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                                <MapPin className="w-6 h-6 text-secondary" />
                                {dict?.location?.venueDetails || "Venue Details"}
                            </h3>

                            <div className="space-y-4">
                                {/* Address */}
                                {venue?.address && (
                                    <div className="flex items-start gap-3">
                                        <Navigation className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-800">{venue.address}</p>
                                            <p className="text-gray-600 text-sm">
                                                {venue.city}, {venue.region}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Capacity */}
                                {venue?.capacity && (
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-800">
                                                {venue.capacity.toLocaleString()}+ {dict?.location?.capacity || "Capacity"}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Contact Info */}
                                {venue?.contactInfo && (
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        <p className="text-gray-800">{venue.contactInfo}</p>
                                    </div>
                                )}

                                {/* Website */}
                                {venue?.website && (
                                    <div className="flex items-center gap-3">
                                        <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        <a
                                            href={venue.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary hover:text-orange-600 font-semibold transition-colors"
                                        >
                                            {dict?.location?.visitWebsite || "Visit Website"}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Description Card */}
                        {venue?.description && (
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-secondary" />
                                    {dict?.location?.aboutVenue || "About the Venue"}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {venue.description}
                                </p>
                            </div>
                        )}

                        {/* Map Link */}
                        {(venue?.mapUrl || venue?.latitude) && (
                            <div className="bg-gradient-to-r from-primary to-blue-900 rounded-2xl p-6 text-white">
                                <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                    {dict?.location?.findUs || "Find Us"}
                                </h4>
                                <p className="text-gray-200 mb-4">
                                    {dict?.location?.mapDescription || "Get directions to the venue"}
                                </p>
                                <a
                                    href={venue?.mapUrl || `https://maps.google.com/?q=${venue.latitude},${venue.longitude}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg"
                                >
                                    <Navigation className="w-4 h-4" />
                                    {dict?.location?.openMap || "Open in Maps"}
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Info */}
                <div data-aos="fade-up" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
                        <h4 className="font-bold text-primary mb-2">{dict?.location?.accessible || "Easily Accessible"}</h4>
                        <p className="text-gray-600 text-sm">
                            {dict?.location?.accessibleDesc || "Convenient location with multiple transportation options"}
                        </p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                        <h4 className="font-bold text-primary mb-2">{dict?.location?.spacious || "Spacious Venue"}</h4>
                        <p className="text-gray-600 text-sm">
                            {dict?.location?.spaciousDesc || "Comfortable seating and networking areas"}
                        </p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <Globe className="w-8 h-8 text-secondary mx-auto mb-3" />
                        <h4 className="font-bold text-primary mb-2">{dict?.location?.modern || "Modern Facilities"}</h4>
                        <p className="text-gray-600 text-sm">
                            {dict?.location?.modernDesc || "State-of-the-art amenities and technology"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;