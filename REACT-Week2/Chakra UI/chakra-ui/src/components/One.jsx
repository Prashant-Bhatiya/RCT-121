import { Box, Center, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Outlet, Link } from "react-router-dom";
function One() {
  return (
    <>
      <Box>
        <Link to="/">Back To Home</Link>
      </Box>
      <Center>
        <Heading>Desktop Layout</Heading>
      </Center>
      <Stack
        direction={(["column", null], ["column", "row"])}
        spacing="0"
        marginLeft={["75px", "0"]}
      >
        <Box w="200px" h={["200px", "500px"]} bg="blue">
          <Center marginTop={["90px", "240px"]} color="white" fontSize={"2xl"}>
            NAV
          </Center>
        </Box>
        <Box
          w={["200px", "400px"]}
          h={["200px", "500px"]}
          bg="orange"
          fontSize={"2xl"}
        >
          <Center marginTop={["90px", "240px"]} color="white">
            CONTENT
          </Center>
        </Box>
        <Box w="200px" h={["200px", "500px"]} bg="red">
          <Center marginTop={["90px", "240px"]} color="white" fontSize={"2xl"}>
            WIDGET
          </Center>
        </Box>
      </Stack>
    </>
  );
}

export default One;
