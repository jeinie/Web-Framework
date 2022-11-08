/**
 * ch08/ex/proj/ex08-01-2
 * ./src/App.js
 */

import { FetchAsync } from "./components/GetData";

const App = () => (
  <>
    <p>FetchAsync():</p>
    <FetchAsync login='jeinie' />
  </>    
);

export default App;