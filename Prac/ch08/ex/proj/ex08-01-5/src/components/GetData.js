/**
 * ch08/ex/proj/ex08-01-5
 * ./src/GetData.js
 * 
 * axios.get():
 * https://axios-http.com/kr/docs/example
 * 
 * > npm install axios
 */

import { useState, useEffect } from "react";
// install and import axios package from "axios"
/* code here */

let count = 0;

/* ch08-01-4.html: axios.get() */
export const AxiosGet = ({ login }) => {
  const [data, setData] = useState();
  console.log("AxiosGet(): ", ++count);

  useEffect(() => {
    if (!login) return;

    // axios.get(url)
    // .then()
    // .catch()
    /* code here */

  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}