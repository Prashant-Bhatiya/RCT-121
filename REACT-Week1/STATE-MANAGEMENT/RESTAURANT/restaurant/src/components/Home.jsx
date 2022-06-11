import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { RestaurantDetails } from "./RestaurantDetails";
import RestaurantForm from "./RestaurantForm";

const Home = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<RestaurantForm />} />
          <Route path="/list" element={<RestaurantDetails />} />
        </Routes>
      </div>
      <div>
        <Link to="/">Home</Link> <Link to="/form">Add Restaurant</Link>{" "}
        <Link to="/form">Show Restaurant Details</Link>
      </div>
    </>
  );
};

export default Home;
