const schools = ["Yorktown", "Washington & Lee", "Wakefield"]
console.log(schools)

// 배개변수로 전달된 요소를 배열에서 제외하도록 필터링
// 원본 수정 X
const cutSchool = (cut, list) => list.filter(sch => sch !== cut)

console.log(cutSchool("Washington & Lee", schools).join(", "))
console.log(schools)