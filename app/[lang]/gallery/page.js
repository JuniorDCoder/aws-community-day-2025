import React from 'react';
import Gallery from "@/components/sections/gallery";
import { getEventData, getGalleryData } from '@/lib/cms-data';
import enDict from "@/dictionaries/en.json";
import frDict from "@/dictionaries/fr.json";

const Page = async (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;

    // Fetch both event data and gallery data in parallel
    const [eventData, galleryData] = await Promise.all([
        getEventData(),
        getGalleryData()
    ]);

    return (
        <Gallery
            dict={dict}
            lang={lang}
            eventData={eventData}
            galleryData={galleryData}
        />
    );
}

export default Page;