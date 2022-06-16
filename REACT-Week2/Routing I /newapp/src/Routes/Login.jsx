import axios from "axios";
import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [state, dispatch] = useContext(AuthContext);

  const Loginuser = async () => {
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    })
      .then((res) => {
        // console.log(res.data);
        alert("Success");
        dispatch({
          type: "LOGIN_SUCCES",
          payload: res.data.token,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Failure");
      });
  };
  if (state.isAuth) {
    return <Navigate to={"/users"} />;
  }

  return (
    <div>
      <h3>Click the Button to Login</h3>
      <button onClick={Loginuser}>Login</button>
    </div>
  );
};

export default Login;
