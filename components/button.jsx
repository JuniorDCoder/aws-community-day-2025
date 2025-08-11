import React from 'react';
import Link from "next/link";

function Button(props) {
    return (
        <Link href="/" className={`bg-secondary rounded-md py-3 px-4 text-white cursor-pointer ${props.className}`}>
            {props.text}
        </Link>
    );
}

export default Button;