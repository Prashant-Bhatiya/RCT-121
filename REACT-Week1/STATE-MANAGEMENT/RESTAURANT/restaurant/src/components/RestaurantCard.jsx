import { border, Box } from "@chakra-ui/react";
import React from "react";

const RestaurantCard = (Arr) => {
  // console.log(Arr.arr.name);
  return (
    <>
      <Box
        boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
        p="6"
        rounded="md"
        bg="white"
        width={"33%"}
        margin={"auto"}
        marginBottom={"20px"}
        display="flex"
        justifyContent={"space-between"}
        border={"0.2px solid transparent"}
        padding="1%"
      >
        <div
          style={{
            border: "1px solid transparent",
            padding: "-1%",
          }}
        >
          <img
            src={Arr.arr.image}
            alt="Prashant"
            height={"100px"}
            width={"100px"}
          />
        </div>
        <div
          style={{
            width: "250px",
            border: "1px solid transparent",
            padding: "0%",
            marginLeft: "10px",
          }}
        >
          {" "}
          <span
            style={{
              color: "red",
              fontSize: "25px",
            }}
          >
            {Arr.arr.name}
          </span>
          <br />
          <span
            style={{
              color: "grey",
              fontSize: "15px",
            }}
          >
            {Arr.arr.cuisine}
            <br />
            Cost ₹ {Arr.arr.cost} for one
          </span>
          <br />
          <span
            style={{
              fontSize: "15px",
            }}
          >
            Min ₹ {Arr.arr.minPrice}
            <br />
            {Arr.arr.paymentMethods}
          </span>
        </div>
        <div
          style={{
            border: "1px solid transparent",
            textAlign: "end",
            width: "70px",
            height: "75px",
            padding: "1.5%",
          }}
        >
          <span
            style={{
              color: "white",
              marginTop: "5px",
              background: "green",
              padding: "5%",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            {Arr.arr.rating}
          </span>
          <br />
          <span
            style={{
              color: "grey",
              fontSize: "12px",
            }}
          >
            {Arr.arr.votes} Votes
            <br />
            {Arr.arr.reviews} Reviews
          </span>
        </div>
      </Box>
    </>
  );
};

export default RestaurantCard;
