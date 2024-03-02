import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

export default function Searchbar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { keyword } = useParams();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText("");
  };

  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-auto justify-center items-center md:px-0 "
    >
      <input
        className="h-9 min-w-[700px] px-4 text-white bg-black focus:outline-none rounded-bl-3xl rounded-tl-3xl"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Search..."
      />
      <BsSearch
        onClick={handleSubmit}
        className=" bg-[#535259]  hover:cursor-pointer ext-3xl h-9 w-10 text-white p-2 rounded-br-3xl rounded-tr-3xl "
      />
    </form>
  );
}
