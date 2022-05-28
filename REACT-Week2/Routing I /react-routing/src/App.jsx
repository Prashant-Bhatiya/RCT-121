import { Link } from "react-router-dom";
import "./App.css";
import Routing from "./Routes/Routing";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home</Link> <Link to={"/products"}>Products</Link>{" "}
      </nav>
      <Routing />
    </div>
  );
}

export default App;
