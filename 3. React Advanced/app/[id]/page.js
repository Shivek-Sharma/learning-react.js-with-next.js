"use client"

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { MyContext } from "@/Helper/Context";

const profile = ({ params }) => {
    const [user, setUser] = useState({});

    const topic = useContext(MyContext);

    const fetchUserData = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        setUser(response.data)
        // console.log(user)
    };

    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <>
            <h1 className="text-5xl font-bold bg-sky-600 text-white text-center py-5">{topic}</h1>
            <h1 className="text-4xl m-10 font-bold">Hello, {user.name} aka {user.username}</h1>
            <Link href="/" className="text-xl m-10 bg-blue-600 rounded p-3 text-white font-semibold">Go to Home Page</Link>
        </>
    )
};

export default profile