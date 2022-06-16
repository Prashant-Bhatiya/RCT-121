import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [isAuth, setAuth] = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to={"/users"} />;
  }

  return (
    <div>
      <h3>Click the Button to Login</h3>
      <button onClick={() => setAuth(true)}>Login</button>
    </div>
  );
};

export default Login;
