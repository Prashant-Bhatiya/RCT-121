import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  if(isAuth){
      return children;
  }
  return <Navigate to = "/login" />
}

export default PrivateRoute;
