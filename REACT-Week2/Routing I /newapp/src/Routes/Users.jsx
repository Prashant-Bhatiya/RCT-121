import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [state] = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://reqres.in/api/users",
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data.data)
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
    {state.token && <h4>Token : {state.token}</h4>}
      {loading && <div>...Loading</div>}
      {data?.map((item) => (
        <div style={{ marginTop: "1rem" }} key={item.id}>
          <div> Name : {item.first_name}</div>
          <div> Email : {item.email}</div>
          <Link to={`/users/${item.id}`}>See more</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
