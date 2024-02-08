import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AxiosGet = () => {
  const [userData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);
  userData.filter((item) => {
    return item < 10;
  });

  return (
    <div>
      <p>
        {/* {userData.map((item) => {
          return (
            <>
              <br>(item = `${item.userId}`)</br>
            </>
          );
        })} */}
        {userData.map((item) => (
          <React.Fragment key={item.title}>
            <br />
            (item = {item.title})
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default AxiosGet;
