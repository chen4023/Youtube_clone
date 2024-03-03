import axios from "axios";
// Mock 데이터 통신
export default class FakeDetail {
  async detailvideo(id) {
    return this.#VideoDetailContent(id);
  }

  async #VideoDetailContent(id) {
    return axios.get(`/videos/detail.json`).then((res) => res.data.items[0]);
  }
}
