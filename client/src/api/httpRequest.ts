import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const postLogin = () =>
  axios.post(`${BASE_URL}/users`).then((response) => response.data);
