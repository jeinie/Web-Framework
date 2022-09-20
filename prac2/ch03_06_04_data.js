const schools = ["Yorktown", "Washington & Lee", "Wakefield"]
console.log(schools)

// 배열의 모든 요소에 지정된 문자열 추가
// 연산된 결과를 highSchools로 반환
const highSchool = schools.map(sch => `${sch} High School`)
console.log(highSchool.join("\n"))
console.log(schools)