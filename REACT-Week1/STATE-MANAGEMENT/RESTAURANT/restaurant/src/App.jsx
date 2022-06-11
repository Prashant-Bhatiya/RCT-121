import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { RestaurantDetails } from "./components/RestaurantDetails";
import RestaurantForm from "./components/RestaurantForm";

function App() {
  return (
    <div>
      <h1
        style={{
          border: "1px solid transparent",
          width: "25%",
          margin: "auto",
        }}
      >
        Restaurant Details !
      </h1>
      <Home />
      {/* <RestaurantDetails /> */}
    </div>
  );
}

export default App;
