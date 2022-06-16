import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import PrivateRouter from "./PrivateRouter";
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
        <Route
          path="users"
          element={
            <PrivateRouter>
              <Users />
            </PrivateRouter>
          }
        />
        <Route path="/users/:id" element={<UserPAge />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Allroutes;
