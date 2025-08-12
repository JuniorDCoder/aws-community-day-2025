import React from 'react';
import Location from "@/components/sections/location";
import Communities from "@/components/sections/communities";
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";

const Page = (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;
return (
    <>
        <Communities dict={dict}/>
        <Location dict={dict} />
    </>
)};

export default Page;