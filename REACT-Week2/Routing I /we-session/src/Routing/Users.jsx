import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [loading, setLoading] = useState(true);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({ url: "https:/reqres.in/api/users", method: "GET" })
      .then((res) => {
        setLoading(false);
        setMyData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, []);
  return (
    
    <div>
      {loading && <div>loading</div>}
      {/* {myData.data.map((items)=>{})} */}
    </div>
  );
}

export default Users;
