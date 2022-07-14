import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#modal");

export default function MovieItem({ movieData }) {
  const {
    _id,
    name,
    release,
    cast,
    director,
    synopsis,
    why_you_should_watch,
    where_to_watch,
    trailer,
    poster,
    background,
  } = movieData;
  const { modalIsOpen, setIsOpen } = useState(false);

  const openModal = () => {
    this.setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (    
      <section className="w-10/12 lg:w-8/12 bg-gradient-to-r from-slate-900 to-slate-600 flex mx-auto mb-5 rounded-3xl h-56 items-center text-center justify-between px-5 border-4 border-red-900">
        <img src={poster} alt={name} className="rounded-lg h-5/6" />
        <h2 className="text-2xl pl-5 lg:text-5xl font-bold">{name}</h2>
        <button></button>
        {/* <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={name}
        >
          <img src={background} alt={`${name} background`} />
        </Modal> */}
      </section>
  );
}
