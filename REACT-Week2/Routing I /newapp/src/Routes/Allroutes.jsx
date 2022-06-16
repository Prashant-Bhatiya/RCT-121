import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import UserPAge from "./UserPAge";
import Users from "./Users";

const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="users" element={<Users />} />
        <Route path="/users/:id" element={<UserPAge />} />
      </Routes>
    </>
  );
};

export default Allroutes;
