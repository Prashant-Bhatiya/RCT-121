import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import RegisterPageOne from "./RegisterPageOne";
import RegisterPageTwo from "./RegisterPageTwo";

function AllRoutes() {

    const [para,setPara] = useState(false);

    // console.log(para)
    // console.log(setPara)
    const HandleHomePagetwo = () => {
        return <Navigate to="/register/two" /> 
    };
    
    {para ? HandleHomePagetwo() : null}

  const HandleHomePage = () => {
      return <Navigate to={"/register/one"} />
  };

  const users = [
    {
      name: "Prashant",
      email: "Prashant@gmail.com",
      address: "Ahmedabad",
      phoneNumber: "9586784989",
    },
  ];

  return (
    <>
      <nav>
        <Link to={"/register/one"}>One</Link>
        {" --> "}
        <Link to={"/register/two"}>Two</Link>
        {" --> "}
      </nav>

      <Routes>
        <Route path="/" element={<HandleHomePage />}></Route>
        <Route path="/register/one" element={<RegisterPageOne users={users} para={para} setPara={setPara}/>}></Route>
        <Route path="/register/two" element={<RegisterPageTwo />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
