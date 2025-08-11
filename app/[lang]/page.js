import Hero from "@/components/sections/hero";
import Gallery from "@/components/sections/gallery";
import Banner from "@/components/sections/banner";
import Speakers from "@/components/sections/speakers";
import Agenda from "@/components/sections/agenda";
import Location from "@/components/sections/location";
import Sponsors from "@/components/sections/sponsors";
import Organizers from "@/components/sections/organizers";
import Volunteers from "@/components/sections/volunteers";
import BottomHero from "@/components/sections/bottom-hero";
import Communities from "@/components/sections/communities";
import enDict from "@/dictionaries/en.json";
import frDict from "@/dictionaries/fr.json";

export default function Home({ params }) {
    const lang = params?.lang || "en";
    const dict = lang === "fr" ? frDict : enDict;
    return (
        <>
            <main className="flex flex-col">
                <Hero dict={dict} />
                <Gallery dict={dict} lang={lang} />
                <Banner dict={dict} />
                <Speakers dict={dict} />
                <Agenda dict={dict} />
                <Location dict={dict} />
                <Sponsors dict={dict} />
                <Organizers dict={dict} />
                <Volunteers dict={dict} />
                <BottomHero dict={dict} />
                <Communities dict={dict} />
            </main>
        </>
    );
}
