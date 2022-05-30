import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";

function RegisterPageOne({ users , para , setPara}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "Name") {
      setName(e.target.value);
    }
    if (e.target.name === "Email") {
      setEmail(e.target.value);
    }
  };

  const VerifyUsers = () => {
    if (email !== "" && name !== "") {
      users.map((ele) => {
        if (name === ele.name && email === ele.email) {
          setPara(true)
        }
      });
    }
  };
  return (
    <div>
      <input name="Name" placeholder="Enter Name" onChange={handleChange} />
      <input name="Email" placeholder="Enter Email" onChange={handleChange} />
      <button onClick={VerifyUsers}>Next</button>
    </div>
  );
}

export default RegisterPageOne;
