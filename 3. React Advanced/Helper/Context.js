"use client"

import React, { createContext } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
    const topic = "React Advanced";

    return (
        <MyContext.Provider value={topic}>
            {children}
        </MyContext.Provider>
    )
}

export default Context