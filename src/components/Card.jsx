import React from "react";
import { Link } from "react-router-dom";
import { formatAgo } from "../util/data";

export default function Card({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const showNum = (num) => {
    let returnNum = toString(num);
    if (returnNum.length > 5) {
      return num[0];
    } else {
      return num;
    }
  };

  return (
    <li className="flex flex-col justify-center mx-[20px] my-[40px] w-[355px] h-65 text-white hover:cursor-pointer">
      <Link to={`videos/watch/${video.id}`}>
        <img
          className="w-full h-[200px] object-cover rounded-lg hover:rounded-none mb-2"
          src={thumbnails.medium.url}
          alt={title}
        />
        <p className="font-bold text-[17px] ">{title}</p>
        <p className="font-semibold text-[16px] text-[#AAAAAA] ">
          {channelTitle}
        </p>
        <span className="text-[15px] font-semibold text-[#AAAAAA]">
          조회수 {showNum(video.statistics.viewCount)}만회
        </span>
        <span className=" pl-1 text-[15px] font-semibold text-[#AAAAAA]">
          • {formatAgo(publishedAt, "ko")}
        </span>{" "}
      </Link>
    </li>
  );
}
