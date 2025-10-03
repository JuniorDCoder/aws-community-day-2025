import React from 'react';
import Location from "@/components/sections/location";
import Communities from "@/components/sections/communities";
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";
import {getVenueData} from "@/lib/cms-data";

const Page = async (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;

    const [ venueData ] = await Promise.all([
        getVenueData()
    ])
return (
    <>
        <Communities dict={dict}/>
        <Location
            dict={dict}
            venueData={venueData}
        />
    </>
)};

export default Page;