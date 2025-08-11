import React from 'react';
import Gallery from "@/components/sections/gallery";
import enDict from "@/dictionaries/en.json";
import frDict from "@/dictionaries/fr.json";

const Page = (props) => {

    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;
    return (
        <Gallery dict={dict} lang={lang} />
    );
}

export default Page;