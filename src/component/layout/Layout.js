import React from "react";
import Header from "./header/Header";
import Home from "./home/Home";

const Layout = () => {
  return (
    <div style={{ background: "#ddd" }}>
      <Header />
      <Home />
    </div>
  );
};

export default Layout;
