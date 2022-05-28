import React, { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import { Box, Button, Heading } from "@chakra-ui/react";
// https://api.github.com/search/repositories
const GetGithubRepos = (q, page) => {
  return axios("https://api.github.com/search/repositories", {
    method: "GET",
    params: {
      q: q,
      per_page: 5,
      page: page,
    },
  });
};

function Github() {
  const [userdata, setUserdata] = useState([]);
  const [value, setValue] = useState("react");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [erro, setError] = useState(false);
  const [query, setQuery] = useState("masai");

  useEffect(() => {
    GetGithubRepos(query, page)
      .then((res) => {
        setUserdata(res.data.items);
        setLoading(false);
        setError(false);
        // console.log(res.data.items);
      })
      .catch((err) => {
        setError(true);
      });
  }, [query, page]);

  const handleClick = (query) => {
    setQuery(query);
  };

  return (
    <>
      <Heading width={"350px"} margin={"auto"}>
        Github Repositories
      </Heading>
      <br />
      <Search handleClick={handleClick} />
      <br />
      <div style={{ width: "100px", margin: "auto" }}>
        {loading ? <h4>...Loading</h4> : null}
      </div>
      <br />
      {userdata.map((e) => {
        return (
          <div key={e.id}>
            <Box
              margin={"auto"}
              marginBottom={"10px"}
              w="40%"
              p={2}
              color="black"
            >
              <div>
                <h1>Repo Name :{e.full_name}</h1>
              </div>
            </Box>
          </div>
        );
      })}
      <div
        style={{
          border: "1px solid transparent",
          width: "180px",
          margin: "auto",
        }}
      >
        <Button
          marginRight={"30px"}
          colorScheme="blue"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          PREV
        </Button>
        <Button colorScheme="blue" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </>
  );
}

export default Github;
