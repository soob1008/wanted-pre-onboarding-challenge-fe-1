import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { UserAPI, TodoAPI } from "./httpRequest";

// react query 적용 파일
export const useAuthLogin = (options: any) => {
  return useMutation(UserAPI.login, options);
};

export const useAuthSignup = (options: any) => {
  return useMutation(UserAPI.signup, options);
};

export const useGetTodo = () => {
  return useQuery(
    ["todos"],
    () => () => TodoAPI.get().then((response) => response.data)
  );
};

export const useGetTodoById = (id: string) => {
  return useQuery(
    ["todos"],
    () => () => TodoAPI.getById(id).then((response) => response.data)
  );
};
