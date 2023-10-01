"use client"

import React, { useContext } from "react";
import Link from "next/link";
import { MyContext } from "@/Helper/Context";

const contact = () => {
    const topic = useContext(MyContext);

    return (
        <>
            <h1 className="text-5xl font-bold bg-sky-600 text-white text-center py-5">{topic}</h1>
            <h1 className="text-4xl m-10 font-bold">This is Contact Page</h1>
            <Link href="/" className="text-xl m-10 bg-blue-600 rounded p-3 text-white font-semibold">Go to Home Page</Link>
        </>
    )
};

export default contact