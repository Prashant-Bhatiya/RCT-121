import { Container, Link } from "@chakra-ui/react";
import One from "./components/One";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Two from "./components/Two";
import Three from "./components/Three";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="One" element={<One />}></Route>
          <Route path="Two" element={<Two />}></Route>
          <Route path="Three" element={<Three />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
