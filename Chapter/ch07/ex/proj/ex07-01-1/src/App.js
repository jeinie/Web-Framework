/**
 * ch07/ex/proj/ex07-01-1
 * ./src/App.js
 */
// import main component Counter
import React from 'react';
import Counter from './components/Counter'

function App() {
  return (
    // returns main component Counter with property value 0
    <Counter value={0}/>
  );
}

// export this component
export default App;