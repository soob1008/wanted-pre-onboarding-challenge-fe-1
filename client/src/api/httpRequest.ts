import axios from "axios";
import { BASE_URL } from "./config";
import { UserTypes } from "../types/user";
import { TodoTypes, NewTodoTypes } from "../types/todo";

export const UserAPI = {
  login: async ({ email, password }: UserTypes) => {
    const { data: response } = await axios.post(`${BASE_URL}/users/login`, {
      email,
      password,
    });
    return response.data;
  },
  signup: async ({ email, password }: UserTypes) => {
    const { data: response } = await axios.post(`${BASE_URL}/users/create`, {
      email,
      password,
    });
    return response.data;
  },
};

export const TodoAPI = {
  get: async () => {
    const { data: response } = await axios.get(`${BASE_URL}/todo`);
    return response.data;
  },
  getById: async (id: string) => {
    const { data: response } = await axios.get(`${BASE_URL}/todo/${id}`);
    return response.data;
  },
  create: async ({ title, content, id }: TodoTypes) => {
    const { data: response } = await axios.post(`${BASE_URL}/todo/login`, {
      title,
      content,
      id,
    });
    return response.data;
  },
  update: async (update: NewTodoTypes, id: string) => {
    const { data: response } = await axios.put(`${BASE_URL}/todo/${id}`, {
      update,
    });
    return response.data;
  },
  delete: async (id: string) => {
    const { data: response } = await axios.delete(`${BASE_URL}/todo/${id}`);
    return response.data;
  },
};
