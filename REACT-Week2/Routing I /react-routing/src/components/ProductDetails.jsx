import React from "react";

function ProductDetails({ name, price, id }) {
  return (
    <>
      <div
        key={id}
        style={{
          boxShadow: "1px 2px 9px #F4AAB9",
          margin: "auto",
          padding: "0.8em",
          width: "500px",
          marginBottom: "20px",
        }}
      >
        <p>Product Name : {name}</p>
        {"  "}
        <p>Product price : {price}</p>
      </div>
    </>
  );
}

export default ProductDetails;
