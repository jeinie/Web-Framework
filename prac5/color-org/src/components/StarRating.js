import React, {useState} from "react";
import Star from "./Star";

const createArray = length => [...Array(length)];

// 별의 수를 전달받고, 그 수만큼 객체 생성
const StarRating = function({totalStars = 5}) {
    //        현재 상태,     상태를 변경하는 함수       초기값
    const [selectedStars, setSelectedStars] = useState(3); // useState: 컴포넌트 상태와 상태변경
    return (
        <>
            {createArray(totalStars).map((n, i) => ( // 5개만큼 <Star/> 반화
                <Star 
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i+1)} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    )
}

export default StarRating;