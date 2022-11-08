/**
 * ch08/ex/proj/ex08-01-3
 * ./src/GetData.js
 * 
 * XMLHttpRequest():
 * https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest
 * https://ko.javascript.info/xmlhttprequest
 */

import { useState, useEffect } from "react";
let count = 0;

/* ch08-01-2.html: XMLHttpRequest() */
export const XHR = ({ login }) => {
  const [data, setData] = useState();
  console.log("XHR(): ", ++count);
  const url = `https://api.github.com/users/${login}`;
  useEffect(() => {
    if (!login) return;

    // create object from XMLHttpRequest()
    // initialize xhr object
    // define readystatechange    
    // send it
    /* code here */
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 201) {
          setData(xhr.response);
        } else console.error(xhr.responseText);
      }
    }
    xhr.open('GET', url);
    xhr.send();
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}