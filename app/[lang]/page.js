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

export default function Home() {
    return (
        <>
            <main className="flex flex-col">
                <Hero />
                <Gallery />
                <Banner />
                <Speakers />
                <Agenda />
                <Location />
                <Sponsors />
                <Organizers/>
                <Volunteers/>
                <BottomHero/>
                <Communities/>
            </main>
        </>
    );
}
