/**
 * ch08/ex/proj/ex08-01-1
 * ./src/GetData.js
 * 
 * fetch(): 
 * https://developer.mozilla.org/ko/docs/Web/API/Fetch_API
 * https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
 */

import { useState, useEffect } from "react";
let count = 0;

/* ch08-01-1.html: fetch() */
export const Fetch = ({ login }) => {
  const [data, setData] = useState();
  console.log("Fetch(): ", ++count);

  useEffect(() => {
    if (!login) return;

    // fetch(url)
    // .then()
    // .catch()
    /* code here */
    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(fetched => JSON.stringify(fetched, null, 2))
    .then(setData)
    .catch(console.error)

  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}
