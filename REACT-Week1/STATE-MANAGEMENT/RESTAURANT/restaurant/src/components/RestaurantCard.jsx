import { Box } from "@chakra-ui/react";
import React from "react";

const RestaurantCard = (Arr) => {
    // console.log(Arr.arr.name);
    return (
    <>
      <Box
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="white"
        height={"50px"}
        width={"40%"}
        margin={"auto"}
        marginBottom={"10px"}
        border={"0.2px solid black"}
      >
        {Arr.arr.name} {Arr.arr.rating}
      </Box>
    </>
  );
};

export default RestaurantCard;
