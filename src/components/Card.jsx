import React from "react";
import { Link } from "react-router-dom";
import { formatAgo } from "../util/data";

export default function Card({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li className="flex flex-col justify-center mx-[20px] my-[40px] w-[355px] h-65 text-white hover:cursor-pointer">
      <Link to={`videos/watch/${video.id}`} state={{ video }}>
        <img
          className="w-full h-[200px] object-cover rounded-lg hover:rounded-none mb-2"
          src={thumbnails.medium.url}
          alt={title}
        />
        <p className="font-bold text-[17px] ">{title}</p>
        <p className="font-semibold text-[16px] text-[#AAAAAA] ">
          {channelTitle}
        </p>
        <p className="text-[15px] font-semibold text-[#AAAAAA]">
          {formatAgo(publishedAt, "ko")} 업로드
        </p>
      </Link>
    </li>
  );
}
