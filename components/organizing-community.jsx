import React from 'react';
import Image from "next/image";
import Link from "next/link";

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
                <Link href="/"
                className="bg-[#8791961A] h-12 w-12 rounded-full"
                />
                <Link href="/"
                      className="bg-[#8791961A] h-12 w-12 rounded-full"
                />
                <Link href="/"
                      className="bg-[#8791961A] h-12 w-12 rounded-full"
                />
            </div>
        </div>
    </>
);

export default OrganizingCommunity;