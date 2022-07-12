import React from "react";

export default function MovieItem({ movieData }) {
  const { name, poster } = movieData;

  return (
    <section className="w-11/12 bg-slate-600 flex mx-auto mb-5 rounded text-end">
      <img src={poster} alt={name} className="w-40"/>
      <h1 >{name}</h1>
    </section>
  );
}
