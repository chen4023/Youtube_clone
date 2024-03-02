import React from "react";

export default function Card({ video }) {
  return (
    <div className="w-64 p-4 text-white">
      <img
        className="w-full h-[125px] object-cover"
        src={video.snippet.thumbnails.default.url}
        alt="videoImg"
      />
      <div className="font-semibold text-[14px] ">{video.snippet.title}</div>
      <div className="text-[10px] text-white">{video.snippet.publishedAt}</div>
    </div>
  );
}
