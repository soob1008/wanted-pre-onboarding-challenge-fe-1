import axios from "axios";
import { BASE_URL } from "./config";
import { UserTypes } from "../types/user";

export const authLogin = async (data: UserTypes) => {
  const { data: response } = await axios.post(`${BASE_URL}/users/login`, data);
  return response.data;
};

export const createLogin = async (data: UserTypes) => {
  const { data: response } = await axios.post(`${BASE_URL}/users/create`, data);
  return response.data;
};
