import React from "react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { useDetailVideo } from "../context/DetailVideoContext";
import NotFound from "./NotFound";
import ReactPlayer from "react-player";

export default function VideoDetail() {
  const { videoId } = useParams();
  const { detail } = useDetailVideo();
  const addComma = (view) => {
    let returnString = view?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };
  const {
    isLoading,
    error,
    data: details,
  } = useQuery({
    queryKey: ["details"],
    queryFn: () => detail.detailvideo(videoId),
  });
  console.log(videoId);
  console.log(details);
  // const { title, description } = details.snippet.localized;
  return (
    <>
      {isLoading && <div className="text-2xl text-white">Loading...</div>}
      {error && <NotFound />}
      {details && (
        <div className="w-8/12 h-[100vh] m-8 bg-[#0F0F0F]">
          <ReactPlayer
            className="player"
            url={`https://www.youtube.com/embed/${videoId}`}
            width="100%"
            height="40%"
            style={{ objectFit: "cover" }}
            controls={true}
          />
          <div className="text-white text-2xl font-bold pt-5 pb-2">
            {details.snippet.localized.title}
          </div>
          <div className="text-white font-semibold bg-[#272727] p-4 rounded-2xl">
            <div className="pb-3 text-[16px]">
              <span className="mr-2">
                조회수 {addComma(details.statistics.viewCount)}회
              </span>
              <span>
                | 최초공개 {""}
                {format(details.snippet.publishedAt, "yyyy.MM.dd")}
              </span>
              <p className="text-[#3EA6FF] ">
                {details.snippet.tags.map((tag) => (
                  <span>#{tag}</span>
                ))}
              </p>
            </div>
            <p>{details.snippet.localized.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
