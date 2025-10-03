import Hero from "@/components/sections/hero";
import Gallery from "@/components/sections/gallery";
import Banner from "@/components/sections/banner";
import Speakers from "@/components/sections/speakers";
import Agenda from "@/components/sections/agenda";
import Location from "@/components/sections/location";
import Sponsors from "@/components/sections/sponsors";
import Organizers from "@/components/sections/organizers";
import Volunteers from "@/components/sections/volunteers";
import BottomHero from "@/components/sections/bottom-hero";
import Communities from "@/components/sections/communities";
import {
    getEventData,
    getGalleryData,
    getSpeakersData,
    getAgendaData,
    getVenueData,
    getSponsorsData,
    getOrganizersData,
    getVolunteersData
} from '@/lib/cms-data';
import enDict from "@/dictionaries/en.json";
import frDict from "@/dictionaries/fr.json";

export default async function Home({ params }) {
    const parameters = await params;
    const lang = parameters?.lang || "en";
    const dict = lang === "fr" ? frDict : enDict;

    // Fetch all data in parallel for better performance
    const [
        eventData,
        galleryData,
        speakersData,
        agendaData,
        venueData,
        sponsorsData,
        organizersData,
        volunteersData
    ] = await Promise.all([
        getEventData(),
        getGalleryData(),
        getSpeakersData(),
        getAgendaData(),
        getVenueData(),
        getSponsorsData(),
        getOrganizersData(),
        getVolunteersData()
    ]);

    return (
        <>
            <main className="flex flex-col">
                <Hero
                    dict={dict}
                    eventData={eventData}
                />
                <Gallery
                    dict={dict}
                    lang={lang}
                    eventData={eventData}
                    galleryData={galleryData}
                />
                <Banner dict={dict} />
                <Speakers
                    viewMode="slider"
                    dict={dict}
                    speakersData={speakersData}
                    agendaData={agendaData}
                    linkToRsvp={eventData?.settings?.rsvpLink}
                />
                <Agenda
                    agendaData={agendaData}
                    settingsData={eventData}
                    dict={dict}
                    lang={lang}
                />
                <Location
                    dict={dict}
                    venueData={venueData}
                />
                <Sponsors
                    dict={dict}
                    sponsorsData={sponsorsData}
                    settingsData={eventData?.settings}
                />
                <Organizers
                    dict={dict}
                    organizersData={organizersData}
                    settingsData={eventData?.settings}
                    viewMode="slider"
                />
                <Volunteers
                    dict={dict}
                    volunteersData={volunteersData}
                    settingsData={eventData?.settings}
                    viewMode="grid"
                />
                <BottomHero dict={dict} />
                <Communities dict={dict} />
            </main>
        </>
    );
}