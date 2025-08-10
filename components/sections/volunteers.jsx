import React from 'react';
import SpeakerCard from "@/components/speaker-card";

const volunteersData = [
    {
        name: "Steve Yonkue",
        title: "AWS User Group Douala",
        image: "/speakers/1.png",
    },
    {
        name: "Ayoko Delia",
        title: "AWS User Group Bamenda",
        image: "/speakers/1.png",
    },
    {
        name: "Dinnyuy Fru Angu",
        title: "AWS User Group Douala",
        image: "/speakers/1.png",
    },
    {
        name: "Veliswa Boya",
        title: "AWS User Group Douala",
        image: "/speakers/1.png",
    },
    {
        name: "Veliswa Boya",
        title: "AWS User Group Douala",
        image: "/speakers/1.png",
    },
    {
        name: "Veliswa Boya",
        title: "AWS User Group Douala",
        image: "/speakers/1.png",
    },
    {
        name: "Veliswa Boya",
        title: "AWS User Group Douala",
        image: "/speakers/1.png",
    },
];

const Volunteers = () => (
    <section className="bg-primary">
        <div className="p-12 bg-primary text-center">
            <h2 data-aos="fade-up" className="text-4xl font-bold text-white mb-8">
                VOLUNTEERS
            </h2>

            <div
                data-aos="fade-up"
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
                {volunteersData.map((volunteer, idx) => (
                    <SpeakerCard key={idx} {...volunteer} type="volunteer" />
                ))}
            </div>
        </div>
    </section>
);

export default Volunteers;
