/**
 * ch07/ex/proj/ex07-01-2
 * ./src/components/Favorite.js
 */
// import reference libraries and modules
import React, { useState } from "react";

const Favorite = () => {
  // useState(): 
  // declare 2 state variables and each state update function: typed, phrase
  // with initial value from props
  const [typed, setTyped] = useState("")
  const [phrase, setPhrase] = useState("initial phrase")

  const createPhrase = () => {
    setPhrase(typed);
    setTyped("");
  }

  return (
    <div>
      <label>Favorite phrase: </label>
      <input
        value={typed}
        placeholder={phrase}
        onChange={e=> setTyped(e.target.value)}        
      />
      <button onClick={createPhrase}>Save</button>
      <h2>Typed: {typed}</h2>
      <h2>Phrase: {phrase}</h2>
    </div>
  )
};

// export this component
export default Favorite;