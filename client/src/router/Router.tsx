import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home";
import Login from "../pages/Login";
import TodoList from "../pages/TodoList";
import TodoDetail from "../pages/TodoDetail";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {["/", "/home", "*"].map((path) => {
            return <Route path={path} element={<Login />} key={path} />;
          })}
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
