/**
 * proj_path: ch05/ex/proj/famous-location-02
 * ./src/App.js
 */

import data from "./data/famous-location.json";
import Famous from "./components/Famous";

function App() {
  return (
    <Famous famous={data} title="Famous places" />
  );
}

export default App;
