"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    // Show button only after scrolling down 300px
    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed cursor-pointer bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-secondary shadow-lg hover:bg-secondary/90 transition-colors"
            style={{ boxShadow: "0 4px 10px rgb(0 0 0 / 0.25)" }}
        >
            <Image src="/scroll.png" alt="Scroll to top" width={24} height={24} />
        </button>
    );
};

export default ScrollToTop;
