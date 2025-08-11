import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Facebook, Linkedin, Twitter} from "lucide-react";

const OrganizingCommunity = (props) => (
    <>
        <div className="flex p-6 flex-col gap-4 rounded-md shadow-lg border-gray-700 border">
            <Image
                src={props.image}
                alt={props.name}
                width={100}
                height={100}
                className=""
            />
            <h3 className="text-2xl font-bold text-white">{props.name}</h3>
            <div className="flex gap-3 items-center">
                <Link href="https://linkedin.com" target="_blank" className="bg-[#8791961A] h-10 w-10 rounded-full flex items-center justify-center">
                    <Linkedin size={20} className="text-white" />
                </Link>
                <Link href="https://x.com" target="_blank" className="bg-[#8791961A] h-10 w-10 rounded-full flex items-center justify-center">
                    <Twitter size={20} className="text-white" />
                </Link>
                <Link href="https://facebook.com" target="_blank" className="bg-[#8791961A] h-10 w-10 rounded-full flex items-center justify-center">
                    <Facebook size={20} className="text-white" />
                </Link>
            </div>
        </div>
    </>
);

export default OrganizingCommunity;