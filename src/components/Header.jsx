import React from "react";
import { FaYoutube } from "react-icons/fa";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center bg-[#18181A] h-[60px] border-b-[0.5px] border-[#828282]">
      <Link to="/">
        <div className="flex items-center text-2xl px-4">
          <FaYoutube className=" text-brand mr-2" />
          <div className="font-bold text-white">Youtube</div>
        </div>
      </Link>
      <Searchbar />
    </header>
  );
}
