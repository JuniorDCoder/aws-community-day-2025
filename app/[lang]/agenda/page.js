import React from 'react';
import Agenda from "@/components/sections/agenda";
import Banner from "@/components/sections/banner";
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";
import {getAgendaData, getEventData, getSettingsData} from "@/lib/cms-data";

const Page = async (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;

    const [agendaData, settingsData] = await Promise.all([
        getAgendaData(),
        getEventData()
    ])
    return (
        <>
            <Agenda agendaData={agendaData} settingsData={settingsData} dict={dict} />
            <Banner dict={dict} />
        </>
    )};

export default Page;