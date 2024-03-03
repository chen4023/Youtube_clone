import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          regionCode: "KR",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId }))); // id 형태를 동일하게 만들어주기 위해 매핑
  }

  async #mostPopular() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          regionCode: "KR",
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}