import React from 'react';
import Navbar from './Navbar';

interface Children {
    children: React.ReactNode;
}

export default function MainComponent ({ children }: Children) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}