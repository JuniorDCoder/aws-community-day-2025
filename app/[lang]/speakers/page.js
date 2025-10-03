import React from 'react';
import Speakers from "@/components/sections/speakers";
import Agenda from "@/components/sections/agenda";
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";
import {getAgendaData, getEventData, getSettingsData, getSpeakersData} from "@/lib/cms-data";

const Page = async (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;

    const [speakersData, agendaData, eventData] = await Promise.all([
        getSpeakersData(),
        getAgendaData(),
        (await getEventData()).settings.rsvpLink
    ])

    console.log(eventData)
return (
    <>
        <Speakers agendaData={agendaData} linkToRsvp={eventData} speakersData={speakersData} dict={dict} />
    </>
)};

export default Page;