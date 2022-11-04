/**
 * ch08/ex/proj/ex08-01-2
 * ./src/GetData.js
 * 
 * async function:
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
 * https://ko.javascript.info/async-await
 */

import { useState, useEffect } from "react";
let count = 0;

/* ch08-01-6.html: fetch() with async/await */
export const FetchAsync = ({ login }) => {
  const [data, setData] = useState();
  console.log("FetchAsync(): ", ++count);

  // define async function: fetchData(...) 
  // await fetch(url)
  // await data
  // setData()
  /* code here */
  const fetchData = async id => {
    const url = `https://api.github.com/users/${login}`
    if (!id) return;
    try {
      const response = await fetch(url);
      let fetched = await response.json();
      //console.log(`response : ${response}`); // Object
      fetched = JSON.stringify(fetched, null, 2);
      //console.log(`fetched : ${fetched}`);
      setData(fetched);
    } catch(err) {
      console.error(err);
    }
  }
  
  useEffect(() => {
    fetchData(login);
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}