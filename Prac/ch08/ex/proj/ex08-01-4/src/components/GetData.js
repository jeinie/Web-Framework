/**
 * ch08/ex/proj/ex08-01-4
 * ./src/GetData.js
 */

import { useState, useEffect } from "react";
let count = 0;

/* ch08-01-3.html: XMLHttpRequest() with promise */

// define function: getDataFromUrl(method, url) returns promise
// create, initialize and send object from XMLHttpRequest 
// handle readystatechange event: resolve() or reject()
/* code here */
const getDataFromUrl = (method, urls) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === xhr.DONE) {
      if (xhr.status === 200 || xhr.status === 201) {
        resolve(xhr.response);
      } else reject(xhr.response);
    }
  };
  xhr.open(method, urls);
  xhr.send();
})

export const XHRPromise = ({ login }) => {
  const [data, setData] = useState();
  console.log("XHRPromise(): ", ++count);
  
  useEffect(() => {
    if (!login) return;

    getDataFromUrl('GET', `https://api.github.com/users/${login}`)
    .then(setData)
    .catch(console.error);
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}