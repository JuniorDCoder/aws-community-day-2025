import React from 'react';

function Button(props) {
    return (
        <button className="bg-secondary rounded-md py-3 px-4 text-white cursor-pointer">
            {props.text}
        </button>
    );
}

export default Button;