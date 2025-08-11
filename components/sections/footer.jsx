import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Timer from "@/components/sections/timer";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = ({ dict }) => (
    <>
        <section className="bg-primary">
            <Timer dict={dict} data-aos="fade-up" classsName="md:p-12 p-6 py-16" highlightColor="secondary" targetDate="2025-11-08T00:00:00" />
            <div className="border-2 md:pt-0 pt-8 mb-4 border-gray-700 flex flex-col md:flex-row md:px-12 items-center gap-6 md:gap-12 justify-center">
                <Link href="/" className="border-b-2 self-stretch md:border-b-0 md:border-r-2 border-gray-700 w-full md:w-auto flex justify-center">
                    <Image
                        src="/banner.svg"
                        alt="AWS Community Day Cameroon 2025 Logo"
                        width={280}
                        height={280}
                        className="p-4 py-8"
                    />
                </Link>
                <div className="border-b-2 md:border-b-0 md:border-r-2 flex self-stretch pr-0 md:pr-6 py-8 flex-col border-gray-700 w-full md:w-auto items-center md:items-start">
                    <h4 className="text-white text-sm text-center md:text-left">
                        {dict.footer.followUs}
                    </h4>
                    <div className="flex gap-3 mt-2 items-center justify-center md:justify-start">
                        <Link href="https://linkedin.com" target="_blank" className="bg-[#8791961A] h-10 w-10 rounded-full flex items-center justify-center">
                            <Linkedin size={20} className="text-white" />
                        </Link>
                        <Link href="https://facebook.com" target="_blank" className="bg-[#8791961A] h-10 w-10 rounded-full flex items-center justify-center">
                            <Facebook size={20} className="text-white" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="bg-[#8791961A] h-10 w-10 rounded-full flex items-center justify-center">
                            <Instagram size={20} className="text-white" />
                        </Link>
                        <Link href="https://x.com" target="_blank" className="bg-[#8791961A] h-10 w-10 rounded-full flex items-center justify-center">
                            <Twitter size={20} className="text-white" />
                        </Link>
                    </div>
                </div>
                <div className="text-sm text-white w-full md:w-1/5 text-center md:text-left py-4 md:py-0">
                    <p>
                        {dict.footer.contactText} <Link className="text-secondary" href="mailto:awsugdouala@gmail.com">awsugdouala@gmail.com</Link>
                    </p>
                </div>
            </div>
            <p className="text-white text-sm text-center pb-3">
                © {new Date().getFullYear()} {dict.footer.copyright} <Link className="text-secondary" target="_blank" href="https://traitz.tech">Traitz Tech</Link>
            </p>
        </section>
    </>
);

export default Footer;