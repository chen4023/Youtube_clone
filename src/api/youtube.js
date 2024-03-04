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

  async channelImgURL(id) {
    return this.httpClient
      .get("channels", { params: { part: "snippet", id: id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet,contentDetails,statistics",
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
          part: "snippet,contentDetails,statistics",
          maxResults: 25,
          regionCode: "KR",
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
