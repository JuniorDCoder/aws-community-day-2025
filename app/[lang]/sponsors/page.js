export const dynamic = 'force-dynamic';
export const revalidate = 0;


import React from 'react';
import Sponsors from "@/components/sections/sponsors";
import Communities from "@/components/sections/communities";
import { getSponsorsData, getEventData } from '@/lib/cms-data';
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";

const Page = async (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;

    // Fetch sponsors data
    const [sponsorsData, eventData] = await Promise.all([
        getSponsorsData(),
        getEventData()
    ]);

    return (
        <>
            <Sponsors
                dict={dict}
                sponsorsData={sponsorsData}
                settingsData={eventData?.settings}
            />
            <Communities dict={dict}/>
        </>
    );
};

export default Page;