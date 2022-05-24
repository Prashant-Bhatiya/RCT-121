import { Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import styles from "./Two.module.css"

function Two() {
  return (
    <Center>
      <Grid
        h="400px"
        templateRows="repeat(2, 200px)"
        templateColumns="repeat(2, 350px)"
        gap={5}
      >
        <GridItem id={styles.purple} rowSpan={1} bg={"purple"}></GridItem>
        <GridItem id={styles.tomato} rowSpan={2} bg={"tomato"}></GridItem>
        <GridItem id={styles.skyblue} rowSpan={1} colSpan={1} bg='skyblue' />
      </Grid>
    </Center>
  );

  
}

export default Two;
