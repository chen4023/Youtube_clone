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
        className="h-10 w-5/12 px-4 border-[1px] border-r-0 border-[#303030] text-white bg-[#121212] focus:outline-none rounded-bl-3xl rounded-tl-3xl"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="검색"
      />
      <BsSearch
        onClick={handleSubmit}
        className=" bg-[#222222] hover:cursor-pointer h-10 w-12 text-white p-[9px] rounded-br-3xl rounded-tr-3xl "
      />
    </form>
  );
}
