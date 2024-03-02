import React from "react";

export default function Card({ video }) {
  return (
    <div className="w-64 p-4 text-white">
      <img
        className="w-full h-[125px] object-cover rounded-md hover:rounded-none mb-2"
        src={video.snippet.thumbnails.default.url}
        alt="videoImg"
      />
      <div className="font-bold text-[14px] ">{video.snippet.title}</div>
      <div className="font-semibold text-[12px] text-[#AAAAAA] ">
        {video.snippet.channelTitle}
      </div>
      <div className="text-[10px] font-semibold text-[#AAAAAA]">
        {video.snippet.publishedAt}
      </div>
    </div>
  );
}
