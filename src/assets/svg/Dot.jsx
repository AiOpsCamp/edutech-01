import React from 'react';

const Dot = () => {
    return (
        <svg
            fill="none"
            height="10"
            width="38"
            viewBox="0 0 38 10"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:text-indigo-200 text-indigo-400"
        >
            <path
                className="dark:text-gray-L500 fill-current text-gray-L200"
                d="M9 4h6v2H9zM23 4h6v2h-6z"
            ></path>
            <circle cx="5" cy="5" fill="currentColor" r="4" stroke="currentColor" strokeWidth="2"></circle>
            <circle
                className="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                cx="19"
                cy="5"
                r="4"
                strokeWidth="2"
            ></circle>
            <circle
                className="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                cx="33"
                cy="5"
                r="4"
                strokeWidth="2"
            ></circle>
        </svg>
    );
};

export default Dot;