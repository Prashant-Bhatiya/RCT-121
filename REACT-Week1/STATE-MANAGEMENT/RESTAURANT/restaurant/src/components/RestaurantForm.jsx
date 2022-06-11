import { Box, Button, Container, FormControl, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const RestaurantForm = () => {
  const [form, setForm] = useState({
    name: "",
    cuisine: "",
    cost: "",
    minprice: "",
    paymentmethod: "",
    reviews: "",
    rating: "",
    votes: "",
    url: "",
  });
  const HandleChange = (ele) => {
      console.log(ele.target.__reactProps$t4nqeibflq9);
    // console.log(form);
  };
  return (
    <Container
      //   border={"0.2px solid red"}
      margin="auto"
      width="230px"
      display={"block"}
    >
      Enter Restaurant Details !
      <Box height={"330px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
        <form>
          <Input
            new="name"
            onChange={HandleChange}
            type={"text"}
            placeholder={"Enter Restaurant Name"}
            width="200px"
            marginBottom={"10px"}
            marginTop={"10px"}
          />
          <Input
            onChange={HandleChange}
            type={"text"}
            placeholder={"Enter Restaurant cuisine"}
            width="200px"
            marginBottom={"10px"}
          />
          <Input
            onChange={HandleChange}
            type="number"
            placeholder={"Enter Restaurant Cost"}
            width="200px"
            marginBottom={"10px"}
          />
          <Input
            onChange={HandleChange}
            type="number"
            placeholder={"Enter Restaurant minPrice"}
            width="200px"
            marginBottom={"10px"}
          />
          <Input
            onChange={HandleChange}
            type={"text"}
            placeholder={"Enter Restaurant paymentMethods"}
            width="200px"
            marginBottom={"10px"}
          />
          <Input
            onChange={HandleChange}
            type="number"
            placeholder={"Enter Restaurant Reviews"}
            width="200px"
            marginBottom={"10px"}
          />
          <Input
            onChange={HandleChange}
            type="number"
            placeholder={"Enter Restaurant Rating"}
            width="200px"
            marginBottom={"10px"}
          />
          <Input
            onChange={HandleChange}
            type="number"
            placeholder={"Enter Restaurant Votes"}
            width="200px"
            marginBottom={"10px"}
          />
          <Input
            onChange={HandleChange}
            type={"text"}
            placeholder={"Enter Restaurant Image Url"}
            width="200px"
            marginBottom={"10px"}
          />
          <Input type="submit" marginTop={"10px"} />
        </form>
      </Box>
    </Container>
  );
};

export default RestaurantForm;
