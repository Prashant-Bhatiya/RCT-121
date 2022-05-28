import React, { useState } from "react";

import { Input, Button } from "@chakra-ui/react";

function Search({ handleClick }) {
  const [text, setText] = useState("");
  return (
    <div style={{ margin: "auto", width: "336px" }}>
      <Input
        type={"text"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Repositories"
        size="md"
        width={"250px"}
        justifyContent={"center"}
      />
      <Button colorScheme="blue" onClick={()=>handleClick(text)}>
        Search
      </Button>
    </div>
  );
}

export default Search;
