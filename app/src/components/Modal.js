import React from "react";
import ReactDom from "react-dom";
import { FaSkull } from "react-icons/fa";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open, onClose, data }) {
  const {
    name,
    release,
    poster,
    background,
    cast,
    synopsis,
    why_you_should_watch,
    where_to_watch,
    trailer,
  } = data;

  if (!open) return null;
  return ReactDom.createPortal(
    <div className="scroll-auto">
      <div style={OVERLAY_STYLES} />
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "#000",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-14 z-[1000] w-10/12 text-slate-50 grid grid-cols-1 lg:grid-cols-3 h-auto lg:h-4/6"
      >
        <div className="hidden lg:block">
          <img src={poster} alt={name} className="w-3/4" />
        </div>
        <div className="bg-gradient-to-t from-transparent to-slate-600 text-center rounded-lg col-span-2">
          <h2 className="text-3xl lg:text-4xl">{name} - {release}</h2>
          <section className="py-2">
            <h3 className="text-xl lg:text-3xl">Cast</h3>
            <p className="text-lg lg:text-xl">
              {cast && cast.map((member) => `${member.name} - `)}
            </p>
          </section>
          <section className="py-1 lg:py-2">
            <h3 className="text-2xl">Synopsis</h3>
            <p className="lg:text-lg">{synopsis}</p>
          </section>
          <section className="py-2">
            <h3 className="text-2xl">Why you should check it out:</h3>
            <p className="text-lg">{why_you_should_watch}</p>
          </section>
          <section className="py-2 flex justify-evenly">
            <h3 className="text-xl lg:text-3xl">Can You Stream It?</h3>
            {where_to_watch.can_stream ? (
              <h3 className="text-xl lg:text-3xl">
                Yes! Check it out on{" "}
                <a
                  className="text-red-600 bg-black rounded-lg"
                  href={where_to_watch.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {where_to_watch.where}
                </a>
              </h3>
            ) : (
              <h3 className="text-xl lg:text-3xl">No</h3>
            )}
          </section>
          <section className="flex justify-between pt-10 lg:px-10">
            <a className="text-lg lg:text-3xl text-red-600 bg-black rounded-lg" href={trailer} target="_blank" rel="noreferrer">
              Check out the Trailer!
            </a>
            <button
              onClick={onClose}
              className="text-3xl flex hover:text-red-600"
            >
              <FaSkull />
              <span className="px-5">EXIT</span>
            </button>
          </section>
        </div>
      </section>
    </div>,
    document.getElementById("portal")
  );
}
