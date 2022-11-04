import React, {useState} from "react";
import GithubUser from "./GithubUser";

function App() {
  const [login] = useState("jeinie")
  return <GithubUser login={login} />
}

export default App;
