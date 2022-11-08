const schools = ["Yorktown", "Washington & Lee", "Wakefield"]
console.log(schools)

// schools 배열의 원소 중 첫 글자가 W인 원소만 필터링하여 wSchool에 할당
// 원본 수정 X
// sch === schools
const wSchools = schools.filter(sch => sch[0] === "W")
console.log(wSchools)

console.log(schools)