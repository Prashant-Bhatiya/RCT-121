import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export const RestaurantDetails = () => {
  const [page, setPage] = useState(1);
  const [dataArr, setDatArr] = useState([]);
  const [sortFunc, setSortFunc] = useState("desc");
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/restaurant",
      params: {
        _page: page,
        _limit: 5,
        _sort: "rating",
        _order: sortFunc,
      },
    })
      .then((res) => {
        setDatArr(res.data);
        // console.log(res.headers);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("second");
    };
  }, [page, sortFunc]);
  return (
    <>
      <Container>
        <div
          style={{
            border: "1px solid transparent",
            width: "30%",
            margin: "auto",
          }}
        >
          <button
            style={{
              fontSize: "15px",
            }}
            disabled={sortFunc === "asc"}
            onClick={() => {
              setSortFunc("asc");
            }}
          >
            Rating Sort by Ascending
          </button>
          <button
            style={{
              fontSize: "15px",
            }}
            disabled={sortFunc === "desc"}
            onClick={() => {
              setSortFunc("desc");
            }}
          >
            Rating Sort by Decending
          </button>
        </div>

        <div
          style={{
            border: "1px solid transparent",
            width: "10%",
            margin: "auto",
          }}
        >
          <button
            style={{
              fontSize: "18px",
              border: "1px solid transparent",
            }}
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </button>
          {/* 
          <PaginationComponents
            currentPage={page}
            lastPage={5}
            onPageChange={setPage}
          /> */}
          <button
            style={{
              fontSize: "18px",
              border: "1px solid transparent",
            }}
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === 5}
          >
            Next
          </button>
        </div>
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

const PaginationComponents = ({ currentPage, lastPage, onPageChange }) => {
  const arr = new Array(lastPage).fill(0);
  console.log(typeof currentPage);
  return (
    <div
      style={{
        marginLeft: "-25px",
        border: "1px solid transparent",
      }}
    >
      {arr.map((item, page) => (
        <button
          style={{
            fontSize: "15px",
            border: "1px solid transparent",
          }}
          key={currentPage}
          disabled={page + 1 === currentPage}
          onClick={() => onPageChange(page + 1)}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};
