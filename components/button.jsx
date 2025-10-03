import React from 'react';
import Link from "next/link";

function Button(props) {
    // If no URL is provided, render a regular div or button instead of Link
    if (!props.url) {
        return (
            <div className={`bg-secondary rounded-md py-3 px-4 text-white cursor-pointer ${props.className}`}>
                {props.text}
            </div>
        );
    }

    return (
        <Link target="_blank" href={props.url} className={`bg-secondary rounded-md py-3 px-4 text-white cursor-pointer ${props.className}`}>
            {props.text}
        </Link>
    );
}

export default Button;