import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

function RegisterPageOne({ users }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verfiy, setVerify] = useState(false);

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
          setVerify(true);
          console.log("True as Fuck");
        }
      });
    }
  };
  VerifyUsers()
  return (
    <div>
      <input name="Name" placeholder="Enter Name" onChange={handleChange} />
      <input name="Email" placeholder="Enter Email" onChange={handleChange} />
      {verfiy
        ? () => {
            return <button>Next</button>;
          }
        : null}
    </div>
  );
}

export default RegisterPageOne;
