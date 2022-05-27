import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contcat";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Users from "./Users";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {"    "}
      <Link to="/about">About</Link>
      {"    "}
      <Link to="/contact">Contact</Link>
      {"    "}
      <Link to="/users">Users</Link>
      {"    "}
    </nav>
  );
};

function Allroute() {

    
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Allroute;
