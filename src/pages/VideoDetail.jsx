import React, { useEffect } from "react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { useDetailVideo } from "../context/DetailVideoContext";
import NotFound from "./NotFound";
import VideoDescription from "../util/data";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const { publishedAt, title, categoryId, tags, description, channelTitle } =
  //   details.snippet;
  return (
    <div className="">
      {isLoading && <div className="text-2xl text-white">Loading...</div>}
      {error && <NotFound />}
      {details && (
        <section className="flex flex-col justify-center xl:flex-row bg-[#0F0F0F] m-9">
          <article className="basis-6/8">
            <iframe
              title="player"
              type="text/html"
              src={`http://www.youtube.com/embed/${videoId}`}
              width="100%"
              height="640px"
              style={{
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <h2 className="text-white text-[22px] font-bold pt-5 pb-2">
              {details.snippet.title}
            </h2>
            <ChannelInfo
              id={details.snippet.channelId}
              title={details.snippet.channelTitle}
            />
            <div className="text-white font-semibold bg-[#272727] p-4 rounded-2xl">
              <div className="pb-3 text-[16px]">
                <span className="mr-2">
                  조회수 {addComma(details.statistics.viewCount)}회
                </span>
                <span>
                  | 최초공개 {""}
                  {format(details.snippet.publishedAt, "yyyy.MM.dd")}
                </span>
                <p className="text-[#3EA6FF] pt-2">
                  {details &&
                    details.snippet &&
                    details.snippet.tags &&
                    details.snippet.tags.map((tag, index) => (
                      <span key={index}>#{tag}</span>
                    ))}
                </p>
              </div>
              <p>
                <VideoDescription description={details.snippet.description} />
              </p>
            </div>
          </article>
          <section className="basis-2/8 pl-4">
            <RelatedVideos id={details.snippet.channelId} />
          </section>
        </section>
      )}
    </div>
  );
}
