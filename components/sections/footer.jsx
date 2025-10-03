import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Timer from "@/components/sections/timer";
import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = ({ dict, contactData }) => {
    const contact = contactData?.contact || {};

    // Social media links with fallbacks
    const socialLinks = [
        {
            platform: 'linkedin',
            url: contact?.linkedinLink || "https://linkedin.com",
            icon: Linkedin,
            label: "LinkedIn"
        },
        {
            platform: 'facebook',
            url: contact?.facebookLink || "https://facebook.com",
            icon: Facebook,
            label: "Facebook"
        },
        {
            platform: 'instagram',
            url: contact?.instagramLink || "https://instagram.com",
            icon: Instagram,
            label: "Instagram"
        },
        {
            platform: 'twitter',
            url: contact?.twitterLink || "https://x.com",
            icon: Twitter,
            label: "Twitter"
        }
    ].filter(link => link.url); // Only show links that have URLs

    return (
        <>
            <section className="bg-primary">
                <Timer dict={dict} data-aos="fade-up" classsName="md:p-12 p-6 py-16" highlightColor="secondary" targetDate="2025-11-08T00:00:00" />

                <div className="border-2 md:pt-0 pt-8 mb-4 border-gray-700 flex flex-col md:flex-row md:px-12 items-center gap-6 md:gap-12 justify-center">
                    {/* Logo */}
                    <Link href="/" className="border-b-2 self-stretch md:border-b-0 md:border-r-2 border-gray-700 w-full md:w-auto flex justify-center">
                        <Image
                            src="/banner.svg"
                            alt="AWS Community Day Cameroon 2025 Logo"
                            width={280}
                            height={280}
                            className="p-4 py-8"
                        />
                    </Link>

                    {/* Social Media Links */}
                    <div className="border-b-2 md:border-b-0 md:border-r-2 flex self-stretch pr-0 md:pr-6 py-8 flex-col border-gray-700 w-full md:w-auto items-center md:items-start">
                        <h4 className="text-white text-sm text-center md:text-left">
                            {dict.footer.followUs}
                        </h4>
                        <div className="flex gap-3 mt-2 items-center justify-center md:justify-start">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <Link
                                        key={social.platform}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#8791961A] h-10 w-10 rounded-full flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300 group"
                                        aria-label={`Follow us on ${social.label}`}
                                    >
                                        <IconComponent size={20} className="text-white group-hover:text-primary" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-sm text-white w-full md:w-1/5 text-center md:text-left py-4 md:py-0 space-y-3">
                        {/* Email */}
                        {contact?.email && (
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                                <Link
                                    href={`mailto:${contact.email}`}
                                    className="text-secondary hover:text-orange-400 transition-colors"
                                >
                                    {contact.email}
                                </Link>
                            </div>
                        )}

                        {/* Phone */}
                        {contact?.phone && (
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                                <Link
                                    href={`tel:${contact.phone}`}
                                    className="text-white hover:text-secondary transition-colors"
                                >
                                    {contact.phone}
                                </Link>
                            </div>
                        )}

                        {/* Address */}
                        {contact?.address && (
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                                <span className="text-white">
                                    {contact.address}
                                </span>
                            </div>
                        )}

                        {/* Fallback contact text */}
                        {!contact?.email && (
                            <p>
                                {dict.footer.contactText} <Link className="text-secondary hover:text-orange-400" href="mailto:awsugdouala@gmail.com">awsugdouala@gmail.com</Link>
                            </p>
                        )}
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-white text-sm text-center pb-3">
                    © {new Date().getFullYear()} {dict.footer.copyright} <Link className="text-secondary hover:text-orange-400" target="_blank" rel="noopener noreferrer" href="https://traitz.tech">Traitz Tech</Link>
                </p>
            </section>
        </>
    );
};

export default Footer;