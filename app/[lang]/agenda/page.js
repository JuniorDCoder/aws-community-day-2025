import React from 'react';
import Agenda from "@/components/sections/agenda";
import Banner from "@/components/sections/banner";
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";

const Page = (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;
    return (
        <>
            <Banner dict={dict} />
            <Agenda dict={dict} />
        </>
    )};

export default Page;