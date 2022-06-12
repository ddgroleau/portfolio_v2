/* eslint-disable max-len */
import Link from 'next/link';
import React from 'react';

const EmailIcon = () => {
    return (
        <Link href="mailto:ddgroleau@gmail.com" passHref>
            <svg width="64" height="42" viewBox="0 0 64 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.069 34.9511C30.069 25.999 39.459 18.7586 51.069 18.7586C54.309 18.7586 57.339 19.3369 60.069 20.3316V4.87931C60.069 2.33477 57.369 0.252869 54.069 0.252869H6.06897C2.76897 0.252869 0.0689697 2.33477 0.0689697 4.87931V32.6379C0.0689697 35.1825 2.76897 37.2644 6.06897 37.2644H30.309C30.159 36.501 30.069 35.7376 30.069 34.9511ZM6.06897 4.87931L30.069 16.4454L54.069 4.87931V9.50574L30.069 21.0718L6.06897 9.50574V4.87931ZM46.089 41.8908L35.469 33.702L39.699 30.4404L46.059 35.3444L58.779 25.5363L63.069 28.798L46.089 41.8908Z" fill="#45B69C"/>
            </svg>
        </Link>
    );
};

export default EmailIcon;