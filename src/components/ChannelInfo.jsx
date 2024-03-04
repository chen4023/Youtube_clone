import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => youtube.channelImgURL(id),
  });
  console.log(url);
  return (
    <div className="text-white mb-3 flex items-center">
      {url && (
        <img className=" rounded-full w-[45px] mr-4" src={url} alt={title} />
      )}
      <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-[#AAAAAA] text-base">구독자 47.3만명</p>
      </div>
      <button
        onClick={() => alert("구독 완료 ✅")}
        className="ml-8 bg-[#F1F1F1] font-medium text-[#0F0F0F] w-[60px] h-[40px] rounded-3xl "
      >
        구독
      </button>
    </div>
  );
}
