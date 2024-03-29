import React from "react";
import { FaYoutube } from "react-icons/fa";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex justify-center items-center mb-5 bg-[#0F0F0F] h-[65px] border-b-[0.5px] border-[#303030]">
      <Link to="/">
        <div className="flex items-center text-3xl px-4">
          <FaYoutube className=" text-brand mr-2" />
          <div className="font-bold text-white font-trade">YouTube</div>
        </div>
      </Link>
      <Searchbar />
    </header>
  );
}
