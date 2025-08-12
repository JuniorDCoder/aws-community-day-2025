import React from "react";
import Image from "next/image";
import Link from "next/link";

const SpeakerCard = ({ image, name, title, tag, tagColor, type = "speaker" }) => {
    const isSpeaker = type === "speaker";
    const isOrganizer = type === "organizer";
    const isVolunteer = type === "volunteer";

    const Wrapper = (props) =>
        isSpeaker || isOrganizer ? (
            <Link href="/" data-aos="fade-up" className="relative block rounded-lg overflow-hidden shadow-lg">
                {props.children}
            </Link>
        ) : (
            <div data-aos="fade-up" className="relative block rounded-lg overflow-hidden shadow-lg">
                {props.children}
            </div>
        );

    return (
        <Wrapper>
            {/* Tag (only for speaker) */}
            {isSpeaker && tag && (
                <span
                    className="absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-md z-10"
                    style={{ backgroundColor: tagColor || "#F59E0B" }}
                >
                    {tag}
                </span>
            )}

            {/* Image */}
            <Image
                src={image}
                alt={name}
                width={400}
                height={500}
                className="object-cover w-full h-64 sm:h-80 md:h-96 border border-gray-700"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,36,61,0)_35.6%] to-[#1B243D]"></div>

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                <h3
                    className={`text-white font-bold ${
                        isSpeaker ? "text-3xl" : "text-xl"
                    }`}
                >
                    {name}
                </h3>
                <p
                    className={`text-gray-200 ${
                        isSpeaker ? "text-xl" : "text-sm"
                    }`}
                >
                    {title}
                </p>

                {/* Short line for organizer */}
                {isOrganizer && (
                    <div className="mt-1 ml-[44%] md:ml-24 w-12 h-1 bg-secondary rounded"></div>
                )}
            </div>
        </Wrapper>
    );
};

export default SpeakerCard;