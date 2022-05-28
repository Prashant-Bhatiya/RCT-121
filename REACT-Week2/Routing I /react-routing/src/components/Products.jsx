import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

function Products() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        setArray(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("Really New Project Started Prashant !");
  }, []);

  return (
    <div>
      <h1>Welcome to Products</h1>
      {array.map((e) => {
        return (
          <div key={e.id}>
            <ProductDetails name={e.name} price={e.price} id={e.id} />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
