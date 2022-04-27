import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api/games?key=72729c47cadd44bba200586eea7c9c27&",
});

export default api;