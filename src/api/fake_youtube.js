import axios from "axios";
// Mock 데이터 통신
export default class FakeYoutube {
  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId }))); // id 형태를 동일하게 만들어주기 위해 매핑
  }

  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }

  async channels() {
    return axios
      .get(`/videos/channel.json`)
      .then((res) => res.data.items[0].snippet.default.url);
  }
}
