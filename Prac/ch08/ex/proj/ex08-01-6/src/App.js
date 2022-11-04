/**
 * ch08/ex/proj/ex08-01-6
 * ./src/App.js
 */

import { AxiosGetAsync } from "./components/GetData";

const App = () => (
  <>
    <p>AxiosGetAsync():</p>
    <AxiosGetAsync login='sp-hsu' />
  </>    
);

export default App;