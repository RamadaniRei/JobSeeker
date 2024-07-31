import React from "react";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../../src/index.css";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
