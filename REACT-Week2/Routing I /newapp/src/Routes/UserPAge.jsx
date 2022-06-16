import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const UserPAge = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    const { id } = params;
    axios({
      url: `https://reqres.in/api/users/${id}`,
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
  }, [params.id]);

  return (
    <div>
      {loading && <div>...Loading</div>}
      {
        <>
          <img src={data.avatar} width={"100px"} />
          <div>First Name : {data.first_name}</div>
          <div>Last Name : {data.last_name}</div>
          <div>Email : {data.email}</div>
        </>
      }
    </div>
  );
};

export default UserPAge;
