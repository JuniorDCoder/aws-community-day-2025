"use client";

import React, { useState, useEffect } from "react";

const Timer = ({ targetDate, highlightColor = "primary", classsName, dict }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState({
        days: "--",
        hours: "--",
        minutes: "--",
        seconds: "--",
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, mounted]);

    if (!mounted) {
        return null;
    }

    // Choose color class based on highlightColor prop
    const highlightClass =
        highlightColor === "secondary" ? "text-white" : "text-primary";

    // Get time labels from dictionary with fallbacks
    const timeLabels = [
        {
            label: dict?.timer?.days || "Days",
            value: timeLeft.days
        },
        {
            label: dict?.timer?.hours || "Hours",
            value: timeLeft.hours
        },
        {
            label: dict?.timer?.minutes || "Minutes",
            value: timeLeft.minutes
        },
        {
            label: dict?.timer?.seconds || "Seconds",
            value: timeLeft.seconds
        },
    ];

    return (
        <div
            className={`flex flex-col md:flex-row items-center md:gap-0 gap-4 md:justify-between md:py-6 ${classsName}`}
        >
            <h4 data-aos="fade-up" className={`font-bold w-full md:w-3/5 text-3xl md:text-5xl ${highlightClass}`}>
                {dict?.timer?.dontMiss || "Don't miss this"}{" "}
                <span className="text-secondary">{dict?.timer?.year || "year's"} </span>
                {dict?.timer?.community || "Community"} <span className="text-secondary">{dict?.timer?.day || "Day"}!</span>
            </h4>
            <div data-aos="fade-up" className="flex items-center gap-2">
                {timeLabels.map((item, index) => (
                    <React.Fragment key={item.label}>
                        <div className="bg-[#EAEDED] py-3 px-3 md:px-5 rounded-md flex items-center justify-center flex-col gap-1">
                            <h4 className="text-primary font-bold md:text-4xl">
                                {item.value.toString().padStart(2, "0")}
                            </h4>
                            <p className="text-xs font-semibold text-secondary">
                                {item.label}
                            </p>
                        </div>
                        {index < 3 && (
                            <span className="text-primary md:text-4xl font-bold">:</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Timer;