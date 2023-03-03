import React from "react";
import { useNavigate } from "react-router-dom";

export default function Kategori({ text }) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <button
        onClick={() => navigate({ pathname: "/kategori", search: `?kategori=${text}` })}
        className="text-sm bg-gradient-to-r from-[#23232E] to-[#17171E] px-5 py-1 rounded-2xl transition ease-in-out hover:scale-110"
      >
        {text}
      </button>
    </React.Fragment>
  );
}
