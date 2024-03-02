import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
    setKeyword("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-auto justify-center items-center md:px-0 "
    >
      <input
        className="h-9 min-w-[700px] px-4 text-white bg-black focus:outline-none rounded-bl-3xl rounded-tl-3xl"
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search..."
      />
      <BsSearch
        onClick={handleSubmit}
        className=" bg-[#535259] text-3xl h-9 w-10 text-white p-2 rounded-br-3xl rounded-tr-3xl "
      />
    </form>
  );
}
