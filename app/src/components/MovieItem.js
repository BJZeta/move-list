import React from "react";

export default function MovieItem({ movieData }) {
  const { name, poster } = movieData;

  return (
    <section className="w-10/12 lg:w-8/12 bg-slate-600 flex mx-auto mb-5 rounded-3xl h-56 items-center text-center justify-between px-5">
      <img src={poster} alt={name} className="rounded-lg h-5/6"/>
      <h2 className="text-2xl pl-5 lg:text-5xl font-bold">{name}</h2>
    </section>
  );
}
