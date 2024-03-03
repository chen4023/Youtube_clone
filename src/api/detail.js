import axios from "axios";

export default class Detail {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async detailvideo(id) {
    return this.#VideoDetailContent(id);
  }

  async #VideoDetailContent(id) {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet,contentDetails,statistics,player",
          id: id,
        },
      })
      .then((res) => res.data.items[0]);
  }
}
