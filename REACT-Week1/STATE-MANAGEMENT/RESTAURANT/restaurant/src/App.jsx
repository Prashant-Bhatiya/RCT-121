import { Navigate, Route, Routes, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import { RestaurantDetails } from "./components/RestaurantDetails";
import RestaurantForm from "./components/RestaurantForm";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          border: "1px solid transparent",
          width: "25%",
          margin: "auto",
        }}
      >
        Restaurant Details !
      </h1>
      <div>
        <Routes>
          <Route path="/form" element={<RestaurantForm />} />
          <Route path="/list" element={<RestaurantDetails />} />
        </Routes>
      </div>
      <div className="App">
        <Link to="/form">Add Restaurant</Link>{" "}
        <Link to="/list">Show Restaurant Details</Link>
      </div>
    </div>
  );
}

export default App;
