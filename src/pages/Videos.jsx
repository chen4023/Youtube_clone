import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

import NotFound from "./NotFound";
import Card from "../components/Card";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  console.log(keyword);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
  });
  console.log(videos);
  if (error) return <NotFound />;
  return (
    <ul className="w-full flex flex-wrap justify-center bg-[#0F0F0F]">
      {isLoading && <div>Loading...</div>}
      {error && <NotFound />}
      {videos &&
        videos.map((video, index) => <Card key={index} video={video} />)}
    </ul>
  );
}
