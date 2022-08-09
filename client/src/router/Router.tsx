import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home";
import Login from "../pages/Login";
import Todo from "../pages/Todo";
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
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
