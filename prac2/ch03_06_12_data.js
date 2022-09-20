const colors = ["red", "red", "green", "blue", "green"]
const distinctColors = colors.reduce(
    (distinct, color) => 
        (distinct.indexOf(color) !== -1) ? distinct : [...distinct, color],
        []
) // 존재하면 유지

// indexOf : 배열 내 지정된 요소를 찾을 수 있는 첫 번째 인덱스 반환
// 없으면 -1 반환
console.log(distinctColors)