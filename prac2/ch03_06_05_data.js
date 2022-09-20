const schools = ["Yorktown", "Washington & Lee", "Wakefield"]
console.log(schools)

// 배열의 모든 원소에 대해
// 키가 name이고 값이 배열의 요소인 객체를 각각 생성하여
// 배열 highSchools의 요소로 할당
const highSchools = schools.map(sch => ({ name: sch }))
console.log(highSchools)

console.log(schools)