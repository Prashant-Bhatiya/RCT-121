import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export const RestaurantDetails = () => {
  const [dataArr, setDatArr] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/restaurant")
      .then((res) => {
        setDatArr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("second");
    };
  }, []);

  return (
    <>
      <Container>
        {dataArr.map((ch) => {
          return (
            <Box key={ch._id}>
              <RestaurantCard arr={ch} />
            </Box>
          );
        })}
      </Container>
    </>
  );
};
