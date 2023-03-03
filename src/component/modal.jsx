import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";

export default function Modal({ error, setShow }) {
  return (
    <React.Fragment>
      <div className="bg-black bg-opacity-50 absolute text-white inset-0 flex justify-center items-center z-10 ">
        <div className="text-center px-40 py-10 rounded-md">
          <ExclamationIcon
            className="h-28 w-28 text-red-600"
            aria-hidden="true"
          />
          <h1 className="text-2xl mb-2 font-semibold">Gagal</h1>
          <p>{error}</p>

          <div className="flex justify-center relative top-5 ">
            <div className="bg-blue-theme w-2/5 h-8 absolute rounded-md blur opacity-25"></div>
            <button
              onClick={() => setShow(false)}
              className="bg-blue-theme px-5 py-1 rounded-sm relative transition hover:scale-110"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
