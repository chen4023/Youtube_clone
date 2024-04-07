import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import NotFound from "../pages/NotFound";
import Card from "./Card";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: related,
  } = useQuery({
    queryKey: ["related", id],
    queryFn: () => youtube.relatedVideos(id),
  });
  return (
    <div className="flex flex-col items-center">
      {isLoading && <div>Loading...</div>}
      {error && <NotFound />}
      {related &&
        related.map((video, index) => (
          <Card key={index} video={video} type="list" />
        ))}
    </div>
  );
}
