import React from 'react';
import Organizers from "@/components/sections/organizers";
import Volunteers from "@/components/sections/volunteers";
import {getEventData, getOrganizersData, getVolunteersData} from '@/lib/cms-data';
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";

const Page = async (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;

    // Fetch team data
    const [organizersData, volunteersData, eventData] = await Promise.all([
        getOrganizersData(),
        getVolunteersData(),
        getEventData(),
    ]);

    return (
        <>
            <Organizers
                dict={dict}
                organizersData={organizersData}
                settingsData={eventData?.settings}
                viewMode="grid"
            />
            <Volunteers
                dict={dict}
                volunteersData={volunteersData}
                settingsData={eventData?.settings}
                viewMode="grid"
            />
        </>
    );
};

export default Page;