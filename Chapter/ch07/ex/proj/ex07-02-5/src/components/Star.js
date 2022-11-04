/**
 * ch07/ex/proj/ex07-02-5
 * ./src/components/Star.js
 */

import { useEffect, useReducer } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => {
  
  // useEffect() 훅으로
  // Star가 렌더링 될 때 수행할 동작과
  // Star가 소멸될 때 수행할 동작 (clean-up 함수)을 구현
  useEffect(() => {
    console.log(`mount: ${selected}`)
    return () => {
      console.log(`unmount: ${selected}`)
    }
  },[])


  return (
    <FaStar
      color={selected ? "red" : "grey"}
      onClick={onSelect}
    />
  );

}
  
export default Star;