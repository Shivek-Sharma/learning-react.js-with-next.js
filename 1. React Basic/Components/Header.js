import React from "react";
import Link from "next/link";

// Name of components must be in Capital
const Header = () => {
    return (
        <div className="bg-green-500 h-16 flex items-center justify-between px-5">
            <h2>Logo</h2>
            <div className="flex gap-8">
                {/* App Routing using Next JS */}

                {/* <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a> */}

                {/* To avoid reloading of the page */}
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/Contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header