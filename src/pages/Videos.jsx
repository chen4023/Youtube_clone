import { useQuery } from "@tanstack/react-query";
import React from "react";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function Videos() {
  const { keyword } = useParams();
  console.log(keyword);
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      console.log("fetching.....");
      return fetch(`/videos/${keyword ? "search" : "popular"}.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });
  console.log(videos);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <NotFound />;
  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video, index) => (
        <Card key={index} video={video} />
      ))}
    </div>
  );
}
