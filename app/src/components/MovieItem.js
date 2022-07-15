import React, { useState } from "react";
import Modal from "./Modal";
import { GiRaiseZombie } from "react-icons/gi";

export default function MovieItem({ movieData }) {
  const { name, poster } = movieData;

  const [open, setOpen] = useState(false);

  return (
    <section className="w-10/12 lg:w-8/12 bg-gradient-to-r from-slate-900 to-slate-600 flex mx-auto mb-5 rounded-3xl h-56 items-center text-center justify-between px-5 border-4 border-red-900">
      <img src={poster} alt={name} className="rounded-lg h-5/6" />
      <h2 className="text-2xl pl-5 lg:text-5xl font-bold">{name}</h2>
      <button
        onClick={() => setOpen(!open)}
        className="text-lg lg:text-2xl rounded-lg text-red-600 bg-black p-2 lg:p-4 flex"
      >
        <GiRaiseZombie />
        INFO
      </button>
      <Modal open={open} onClose={() => setOpen(!open)} data={movieData} />
    </section>
  );
}
