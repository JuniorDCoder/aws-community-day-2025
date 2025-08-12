import React from 'react';
import Sponsors from "@/components/sections/sponsors";
import Communities from "@/components/sections/communities";
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";

const Page = () => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;
    return (
        <>
            <Sponsors dict={dict}/>
            <Communities dict={dict}/>
        </>
    );
};

export default Page;