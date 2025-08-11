import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Timer from "@/components/sections/timer";
import frDict from "@/dictionaries/fr.json";
import enDict from "@/dictionaries/en.json";


const Footer = ({ lang = "en" }) => {
    const dict = lang === "fr" ? frDict : enDict;
    return (
        <>
            <section className="bg-primary">
                <Timer dict={dict} data-aos="fade-up" classsName="p-12 py-16" highlightColor="secondary" targetDate="2025-11-08T00:00:00" />
                <div className="border-2 mb-4 border-gray-700 flex px-12 items-center gap-12 justify-center">
                    <Link href="/" className="border-r-2 border-r-gray-700">
                        <Image
                            src="/banner.svg"
                            alt="AWS Community Day Cameroon 2025 Logo"
                            width={300}
                            height={300}
                            className="p-6 py-12"
                        />
                    </Link>
                    <div className="border-r-2 flex self-stretch pr-6 py-12 flex-col border-r-gray-700">
                        <h4 className="text-white text-sm">
                            Follow us for more updates
                        </h4>
                        <div className="flex gap-3 mt-2 items-center">
                            <Link href="/"
                                  className="bg-[#8791961A] h-10 w-10 rounded-full"
                            />
                            <Link href="/"
                                  className="bg-[#8791961A] h-10 w-10 rounded-full"
                            />
                            <Link href="/"
                                  className="bg-[#8791961A] h-10 w-10 rounded-full"
                            />
                            <Link href="/"
                                  className="bg-[#8791961A] h-10 w-10 rounded-full"
                            />
                        </div>
                    </div>
                    <div className="text-sm text-white w-1/5">
                        <p>You can mail us for any
                            questions or proposal at <Link className="text-secondary" href="mailto:awsugdouala@gmail.com">awsugdouala@gmail.com</Link>
                        </p>
                    </div>
                </div>
                <p className="text-white text-sm text-center pb-3">© { new Date().getFullYear() } Copyright  AWS Community Day Cameroon. All Rights Reserved | Built by <Link className="text-secondary" target="_blank" href="https://traitz.tech">Traitz Tech</Link></p>
            </section>
        </>
    );
};

export default Footer;