"use client"

import React, { useState } from "react";
import axios from "axios";

const page = () => {
    const [counter, setCounter] = useState(0);
    const [images, setImages] = useState([]);

    const getImages = async () => {
        try {
            const response = await axios.get("https://picsum.photos/v2/list");
            const data = response.data;
            setImages(data);
        } catch (error) {
            console.error("Error fetching posts, try again!");
        }
    };

    return (
        <>
            <div className="mt-5 px-5">
                <h1 className="text-3xl mb-3">Counter: {counter}</h1>
                <button className="bg-red-500 rounded p-3 text-white font-semibold" onClick={() => {
                    setCounter(counter + 1)
                }}>Increment Counter</button>
            </div>

            <div className="mt-10 px-5">
                <button className="bg-red-500 rounded p-3 text-white font-semibold" onClick={getImages}>Get Images</button>

                <div className="mt-3">
                    {/* It's best practice to use the 'map' method instead of 'forEach' because it returns an array of JSX elements that can be easily rendered. */}
                    {images.map((img, i) => {
                        return (<img key={i} src={img.download_url} width={300} height={300} className="rounded m-10 inline-block" />)
                    })}
                </div>
            </div>
        </>
    )
}

export default page