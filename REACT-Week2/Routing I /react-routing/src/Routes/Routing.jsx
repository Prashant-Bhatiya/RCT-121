import React from "react";
import { Routes, Route } from "react-router";
import Home from "../components/Home";
import Products from "../components/Products";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default Routing;
