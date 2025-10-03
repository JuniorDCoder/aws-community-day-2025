import React from 'react';
import Link from "next/link";
import { Calendar, Clock, MapPin, Users, Mic, Coffee, Network, Award } from 'lucide-react';

const Agenda = ({ dict, agendaData, settingsData, lang }) => {
    // Extract agenda items from the data
    const agendaItems = agendaData?.agenda || [];

    // Group agenda items by time slots and add enhanced data
    const enhancedAgenda = agendaItems.map(item => {
        const startTime = new Date(item.startTime);
        const endTime = new Date(item.endTime);

        // Safe duration calculation
        const durationMs = endTime.getTime() - startTime.getTime();
        const durationMinutes = Math.max(0, Math.round(durationMs / (1000 * 60))); // Ensure non-negative

        // Get type icon and color using brand colors
        const getTypeDetails = (type) => {
            switch (type?.toLowerCase()) {
                case 'keynote':
                    return {
                        icon: Award,
                        color: 'bg-secondary',
                        textColor: 'text-primary',
                        borderColor: 'border-secondary'
                    };
                case 'session':
                    return {
                        icon: Mic,
                        color: 'bg-primary',
                        textColor: 'text-white',
                        borderColor: 'border-primary'
                    };
                case 'break':
                    return {
                        icon: Coffee,
                        color: 'bg-gray-600',
                        textColor: 'text-white',
                        borderColor: 'border-gray-500'
                    };
                case 'networking':
                    return {
                        icon: Network,
                        color: 'bg-gray-700',
                        textColor: 'text-white',
                        borderColor: 'border-gray-600'
                    };
                default:
                    return {
                        icon: Calendar,
                        color: 'bg-gray-600',
                        textColor: 'text-white',
                        borderColor: 'border-gray-500'
                    };
            }
        };

        const typeDetails = getTypeDetails(item.type);

        // Get localized content based on language
        const getLocalizedContent = () => {
            if (lang === 'fr') {
                return {
                    title: item.titleFr || item.titleEn, // Use French title if available, fallback to English
                    description: item.descriptionFr || item.descriptionEn // Use French description if available
                };
            }
            return {
                title: item.titleEn,
                description: item.descriptionEn
            };
        };

        const localizedContent = getLocalizedContent();

        return {
            ...item,
            startTime,
            endTime,
            duration: durationMinutes,
            typeDetails,
            formattedStart: startTime.toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: lang !== 'fr' // Use 12-hour format for English, 24-hour for French
            }),
            formattedEnd: endTime.toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: lang !== 'fr'
            }),
            title: localizedContent.title,
            description: localizedContent.description
        };
    }).sort((a, b) => a.startTime - b.startTime);

    // Group by time for better visualization
    const timeSlots = enhancedAgenda.reduce((slots, item) => {
        const timeKey = item.formattedStart;
        if (!slots[timeKey]) {
            slots[timeKey] = [];
        }
        slots[timeKey].push(item);
        return slots;
    }, {});

    // Get links from settings
    const rsvpLink = settingsData?.settings?.rsvpLink;
    const speakerLink = settingsData?.settings?.speakerLink;
    const sponsorLink = settingsData?.settings?.sponsorLink;

    // Calculate total duration safely
    const calculateTotalDuration = () => {
        const totalMinutes = enhancedAgenda.reduce((total, item) => {
            return total + (item.duration || 0);
        }, 0);

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        // Format based on duration and language
        if (hours === 0) {
            return lang === 'fr' ? `${minutes}min` : `${minutes}m`;
        } else if (minutes === 0) {
            return lang === 'fr' ? `${hours}h` : `${hours}h`;
        } else {
            return lang === 'fr' ? `${hours}h ${minutes}min` : `${hours}h ${minutes}m`;
        }
    };

    // Count unique speakers safely
    const countUniqueSpeakers = () => {
        const speakerIds = enhancedAgenda
            .filter(item => item.speaker && item.speaker.id)
            .map(item => item.speaker.id);
        return new Set(speakerIds).size;
    };

    // Get event status safely with localization
    const getEventStatus = () => {
        if (enhancedAgenda.length === 0) {
            return lang === 'fr' ? 'Aucun horaire' : 'No Schedule';
        }

        const lastEndTime = Math.max(...enhancedAgenda.map(item => item.endTime.getTime()));
        if (lastEndTime > new Date().getTime()) {
            return lang === 'fr' ? 'À venir' : 'Upcoming';
        } else {
            return lang === 'fr' ? 'Terminé' : 'Completed';
        }
    };

    const totalDuration = calculateTotalDuration();
    const uniqueSpeakers = countUniqueSpeakers();
    const eventStatus = getEventStatus();

    // Localized strings for the component
    const localizedStrings = {
        sessions: lang === 'fr' ? 'Sessions' : 'Sessions',
        speakers: lang === 'fr' ? 'Intervenants' : 'Speakers',
        status: lang === 'fr' ? 'Statut' : 'Status',
        totalDuration: lang === 'fr' ? 'Durée totale' : 'Total Duration',
        eventSchedule: lang === 'fr' ? 'Horaire de l\'événement' : 'Event Schedule',
        agendaDescription: lang === 'fr' ? 'Rejoignez-nous pour une journée remplie de conférences inspirantes, d\'opportunités de networking et d\'expériences inoubliables.' : 'Join us for a day filled with inspiring talks, networking opportunities, and unforgettable experiences.',
        joinUs: lang === 'fr' ? 'Prêt à nous rejoindre ?' : 'Ready to Join?',
        rsvpNow: lang === 'fr' ? 'Réserver maintenant' : 'RSVP Now',
        becomeSpeaker: lang === 'fr' ? 'Devenir Intervenant' : 'Become a Speaker',
        becomeSponsor: lang === 'fr' ? 'Devenir Sponsor' : 'Become a Sponsor',
        agendaComingSoon: lang === 'fr' ? 'Notre programme incroyable est en cours de préparation. Restez à l\'écoute pour une expérience inoubliable !' : 'Our amazing agenda is being crafted with care. Stay tuned for an unforgettable experience!'
    };

    // Fallback content when no agenda items
    if (enhancedAgenda.length === 0) {
        return (
            <section className="relative py-20 bg-primary overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-secondary rounded-full"></div>
                    <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
                    <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-secondary rounded-full"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <Calendar className="w-20 h-20 text-white mx-auto mb-6 opacity-80" />
                        <h2 className="text-5xl font-bold text-white mb-6">
                            {dict?.agenda || localizedStrings.eventSchedule}
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            {dict?.agendaComingSoon || localizedStrings.agendaComingSoon}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {rsvpLink && (
                                <Link
                                    href={rsvpLink}
                                    className="bg-secondary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transform transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    {dict?.rsvpNow || localizedStrings.rsvpNow}
                                </Link>
                            )}
                            {speakerLink && (
                                <Link
                                    href={speakerLink}
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                                >
                                    {dict?.becomeSpeaker || localizedStrings.becomeSpeaker}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-20 bg-primary overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 px-6 mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                        <Calendar className="w-6 h-6 text-white" />
                        <span className="text-white font-semibold uppercase tracking-wider text-sm">
                            {dict?.eventSchedule || localizedStrings.eventSchedule}
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        {dict?.agenda || localizedStrings.eventSchedule}
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        {dict?.agendaDescription || localizedStrings.agendaDescription}
                    </p>
                </div>

                {/* Agenda Timeline */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {Object.entries(timeSlots).map(([timeKey, items], timeIndex) => (
                            <div key={timeKey} className="space-y-6">
                                {/* Time Header */}
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                                        <Clock className="w-4 h-4 text-white" />
                                        <span className="text-white font-bold text-lg">
                                            {timeKey}
                                        </span>
                                    </div>
                                    <div className="flex-1 h-0.5 bg-white/20 rounded-full"></div>
                                </div>

                                {/* Agenda Items for this time slot */}
                                {items.map((item, itemIndex) => {
                                    const TypeIcon = item.typeDetails.icon;
                                    return (
                                        <div
                                            key={item.id}
                                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl mt-5 p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                            style={{
                                                animationDelay: `${(timeIndex * 100) + (itemIndex * 50)}ms`
                                            }}
                                        >
                                            {/* Type Badge */}
                                            <div className={`inline-flex items-center gap-2 ${item.typeDetails.color} ${item.typeDetails.textColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 border ${item.typeDetails.borderColor}`}>
                                                <TypeIcon className="w-3 h-3" />
                                                {item.type}
                                            </div>

                                            {/* Title and Description */}
                                            <h3 className="text-white text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
                                                {item.title}
                                            </h3>

                                            {item.description && (
                                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                                    {item.description}
                                                </p>
                                            )}

                                            {/* Meta Information */}
                                            <div className="space-y-2">
                                                {/* Time and Duration */}
                                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{item.formattedStart} - {item.formattedEnd}</span>
                                                    </div>
                                                    <span className="text-white/40">•</span>
                                                    <span>
                                                        {item.duration}{lang === 'fr' ? 'min' : 'min'}
                                                    </span>
                                                </div>

                                                {/* Location */}
                                                {item.location && (
                                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{item.location}</span>
                                                    </div>
                                                )}

                                                {/* Speaker */}
                                                {item.speaker && (
                                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                                        <Users className="w-4 h-4" />
                                                        <span>{item.speaker.name}</span>
                                                        {item.speaker.title && (
                                                            <span className="text-white/60">• {item.speaker.title}</span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Hover Effect Border */}
                                            <div className={`absolute inset-0 rounded-2xl border-2 ${item.typeDetails.borderColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`}></div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="text-center mt-16 pt-8 border-t border-white/20">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            {dict?.joinUs || localizedStrings.joinUs}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {rsvpLink && (
                                <Link
                                    href={rsvpLink}
                                    className="group bg-secondary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                                >
                                    <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    {dict?.rsvpNow || localizedStrings.rsvpNow}
                                </Link>
                            )}
                            {speakerLink && (
                                <Link
                                    href={speakerLink}
                                    className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-3"
                                >
                                    <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    {dict?.becomeSpeaker || localizedStrings.becomeSpeaker}
                                </Link>
                            )}
                            {sponsorLink && (
                                <Link
                                    href={sponsorLink}
                                    className="group border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-secondary hover:text-primary transition-all duration-300 flex items-center gap-3"
                                >
                                    <Award className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    {dict?.becomeSponsor || localizedStrings.becomeSponsor}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {enhancedAgenda.length}
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">
                            {dict?.sessions || localizedStrings.sessions}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {uniqueSpeakers}
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">
                            {dict?.speakers || localizedStrings.speakers}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {eventStatus}
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">
                            {dict?.status || localizedStrings.status}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                            {totalDuration}
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">
                            {dict?.totalDuration || localizedStrings.totalDuration}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agenda;