import React from "react";
import Layout from "./component/layout/Layout";
import Login from "./component/layout/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={"/home"} element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
