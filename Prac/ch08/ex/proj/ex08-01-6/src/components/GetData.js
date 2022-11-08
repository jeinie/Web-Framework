/**
 * ch08/ex/proj/ex08-01-6
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

/* ch08-01-5.html: axios.get() with async/await */
export const AxiosGetAsync = ({ login }) => {
  const [data, setData] = useState();
  console.log("AxiosGetAsync(): ", ++count);

  // define async function: fetchData(...)
  // await axios.get(url)
  // await data
  // setData()
  /* code here */

  useEffect(() => {
    if (!login) return;

    fetchData(login);
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}