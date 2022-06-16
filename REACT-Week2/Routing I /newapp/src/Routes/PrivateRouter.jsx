import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PrivateRouter = ({ children }) => {
  const [state] = useContext(AuthContext);
    
  if(state.isAuth){
    return children;
  }

  return <Navigate to={"/login"} />

};

export default PrivateRouter;
