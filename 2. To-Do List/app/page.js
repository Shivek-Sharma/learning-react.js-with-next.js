"use client"

import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, desc }]);
    // console.log(tasks)
    setTitle("");
    setDesc("");
  }

  const deleteHandler = (i) => {
    const copyTask = [...tasks];
    copyTask.splice(i, 1);
    setTasks(copyTask);
  }

  let renderTask = <li className="text-xl font-semibold  py-3 px-5 w-2/4 mx-auto bg-slate-300 ring-2 rounded">No task available</li>

  if (tasks.length > 0) {
    renderTask = tasks.map((task, i) => {
      return (
        <li key={i} className="flex py-3 px-5 w-2/3 mx-auto items-center justify-between bg-slate-300 ring-2 rounded">
          <h2 className="text-2xl font-semibold">{task.title}</h2>
          <h2 className="text-xl font-semibold">{task.desc}</h2>

          <button className="bg-red-600 p-2 border-transparent rounded text-white font-semibold" onClick={() => deleteHandler(i)}>Delete</button>
        </li>
      )
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-5xl p-5 text-center font-semibold">To-Do List</h1>

      <form onSubmit={submitHandler} className="flex justify-center">
        <input type="text" className="border-gray-200 px-5 py-3 m-5 border-2" placeholder="Enter title here..." value={title} onChange={(e) => setTitle(e.target.value)} />

        <input type="text" className="border-gray-200 px-5 py-3 m-5 border-2" placeholder="Enter description here..." value={desc} onChange={(e) => setDesc(e.target.value)} />

        <button type="submit" className="bg-blue-700 p-3 m-5 border-transparent rounded text-white font-semibold">Add Task</button>
      </form>

      <hr />

      <div className="mt-5">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page