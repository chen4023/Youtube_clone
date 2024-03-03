import React from "react";

export default function Card({ video }) {
  return (
    <div className="flex flex-col justify-center mx-[20px] my-[40px] w-[355px] h-65 text-white hover:cursor-pointer">
      <img
        className="w-[355px] h-[200px] object-cover rounded-lg hover:rounded-none mb-2"
        src={video.snippet.thumbnails.default.url}
        alt="videoImg"
      />
      <h1 className="font-bold text-[14px] ">{video.snippet.title}</h1>
      <h3 className="font-semibold text-[12px] text-[#AAAAAA] ">
        {video.snippet.channelTitle}
      </h3>
      <h3 className="text-[10px] font-semibold text-[#AAAAAA]">
        {video.snippet.publishedAt}
      </h3>
    </div>
  );
}
