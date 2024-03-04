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
    <li className="flex justify-center px-[20px] py-3 w-[355px] h-65 text-white hover:cursor-pointer">
      <Link to={`/videos/watch/${video.id}`}>
        <img
          className="w-full h-[200px] object-cover rounded-lg hover:rounded-none mb-4"
          src={thumbnails.medium.url}
          alt={title}
        />
        <p className="font-bold text-[17px] ">{title}</p>
        <p className="font-semibold text-[16px] text-[#AAAAAA] ">
          {channelTitle}
        </p>
        {video.statistics && (
          <span className="text-[15px] mr-1 font-semibold text-[#AAAAAA]">
            조회수 {showNum(video.statistics.viewCount)}만회
          </span>
        )}
        <span className="text-[15px] font-semibold text-[#AAAAAA]">
          {video.statistics && "•"} {formatAgo(publishedAt, "ko")}{" "}
          {!video.statistics && "업로드"}
        </span>{" "}
      </Link>
    </li>
  );
}
