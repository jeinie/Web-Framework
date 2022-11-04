/**
 * ch08/ex/proj/ex08-01-4
 * ./src/App.js
 */

import { XHRPromise } from "./components/GetData";

const App = () => (
  <>
    <p>XHRPromise():</p>
    <XHRPromise login='jeinie' />
  </>    
);

export default App;