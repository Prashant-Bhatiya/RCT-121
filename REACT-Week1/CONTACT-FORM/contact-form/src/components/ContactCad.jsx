import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function ContactCad({ name, email, number }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <Box
        style={{ boxShadow: "1px 2px 9px #F4AAB9" }}
        width={"500px"}
        margin="auto"
      >
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          Name : {name}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          Email : {email}
        </Box>
        {/* <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
        </Box> */}
        <Text
          fontSize="20px"
          color="blue"
          textDecoration={"underline"}
          cursor="pointer"
          marginTop={"0px"}
          onClick={handleClick}
        >
          Contact Number
          {show && <span> :- {number}</span>}
        </Text>
      </Box>
    </div>
  );
}

export default ContactCad;
