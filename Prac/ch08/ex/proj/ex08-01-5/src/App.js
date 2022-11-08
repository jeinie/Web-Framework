/**
 * ch08/ex/proj/ex08-01-5
 * ./src/App.js
 */

import { AxiosGet } from "./components/GetData";

const App = () => (
  <>
    <p>AxiosGet():</p>
    <AxiosGet login='sp-hsu' />
  </>    
);

export default App;