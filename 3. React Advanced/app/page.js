"use client"

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { MyContext } from "@/Helper/Context";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const [data, setData] = useState([]);

  const topic = useContext(MyContext);

  const notify = () => toast("Wow so easy !");

  const fetchData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(response.data)
    // console.log(data)
  };

  // Automatically calls a function
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <h1 className="text-5xl font-bold bg-sky-600 text-white text-center py-5">{topic}</h1>

      <h1 className="text-4xl m-10 font-bold">This is Home Page</h1>
      {/* App Routing using Next JS */}
      <Link href="/Contact" className="text-xl m-10 bg-blue-600 rounded p-3 text-white font-semibold">Go to Contact Page</Link>

      {/* https://fkhadra.github.io/react-toastify/installation */}
      <button onClick={notify} className="text-xl bg-blue-600 rounded p-3 text-white font-semibold">Click Me</button>
      <ToastContainer />

      <h1 className="text-2xl font-semibold m-10 border-t-2 pt-5">User Data</h1>
      <div className="m-10 bg-slate-300 p-5">
        <ul>
          {data.map((user, i) => {
            return (
              // Dynamic App Routing using Next JS
              <li key={i}>{user.username} --- <Link href={`/${user.id}`}>Visit Profile</Link></li>
            )
          })}
        </ul>
      </div>
    </>
  )
};

export default page