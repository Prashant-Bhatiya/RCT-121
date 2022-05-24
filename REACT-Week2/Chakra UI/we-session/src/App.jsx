import { ChakraProvider, Box, Center } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [bro, setBro] = useState("Hello Brother !");
  const handlebro = () => {
    {
      bro === "Hello Brother !" ? setBro("Shut Up Bro !") : null;
    }
    {
      bro === "Shut Up Bro !" ? setBro("No Way Bro !") : null;
    }
    {
      bro === "No Way Bro !" ? setBro("Hello Brother !") : null;
    }
  };
  return (
    <ChakraProvider>
      <div className="App">
        <Box>
          <Center>
            {bro}
            <Box
              as="button"
              borderRadius="md"
              bg="tomato"
              color="white"
              px={4}
              h={8}
              onClick={handlebro}
            >
              Button
            </Box>
          </Center>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
