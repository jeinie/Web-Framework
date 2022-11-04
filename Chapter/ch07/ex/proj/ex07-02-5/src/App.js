/**
 * ch07/ex/proj/ex07-02-5
 * ./src/App.js
 */
import React, { useState } from 'react';
import StarRating from "./components/StarRating";

const App = () => {
  const [counter, setCounter] = useState(5);

  // 버튼 클릭에 대한 이벤트 처리
  // removeStar(): 상태변수 counter 1 감소
  // addStar(): 상태변수 counter 1 증가
  const removeStar = () => setCounter(counter-1);
  const addStar = () => setCounter(counter+1);

  return (
    <>
      <div>
        <button onClick={removeStar}>-1</button>
        <button onClick={addStar}>+1</button>
      </div>
      <StarRating totalStars={counter} />
    </>    
  );
}

export default App;