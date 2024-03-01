import React from "react";
import { FaYoutube } from "react-icons/fa";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-[#18181A] h-[60px]">
      <Link to="/videos" className="flex flex-1">
        <div className="flex items-center text-2xl px-3">
          <FaYoutube className=" text-[#ff0000] mr-2" />
          <div className="text-white">Youtube</div>
        </div>
        <Searchbar />
      </Link>
    </header>
  );
}
