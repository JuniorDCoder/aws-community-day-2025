import React from 'react';
import Speakers from "@/components/sections/speakers";
import Agenda from "@/components/sections/agenda";
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";

const Page = (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;

return (
    <>
        <Speakers dict={dict} />
        <Agenda dict={dict} />
    </>
)};

export default Page;