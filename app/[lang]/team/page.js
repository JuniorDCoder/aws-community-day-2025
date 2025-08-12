import React from 'react';
import Organizers from "@/components/sections/organizers";
import Volunteers from "@/components/sections/volunteers";
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";

const Page = (props) => {
    const lang = props?.params?.lang === "fr" ? "fr" : "en";
    const dict = lang === "fr" ? frDict : enDict;
    return (
       <>
           <Organizers dict={dict} />
           <Volunteers dict={dict}/>
       </>

    );
};

export default Page;