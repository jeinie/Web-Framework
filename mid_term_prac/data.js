// 3. 데이터 변환 (원본 수정하지 않고)

const schools = [ "Yorktown", "Washington & Lee", "Wakefield"]

// 1) filter
console.log(schools)

const wSchools = schools.filter(sch => sch[0] === 'W') // W 로 시작하는 요소만 골라서 저장
const cutSchool = (cut, list) => list.filter(sch => sch !== cut) // cut과 다른 것만 골라서 저장
console.log(wSchools)
console.log(cutSchool("Washington & Lee", schools).join(', '))
console.log(schools) // 원본 수정 X

// 2) map
const highSchools = schools.map(sch => `${sch} High School`) // 각 요소에 High School 문자열 추가
console.log(highSchools.join('\n'))
console.log(schools) // 원본 그대로

const schools1 = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
}

console.log(schools1)

const schoolArray = Object.keys(schools1).map(key => ({
    name: key,
    wins: schools1[key]
}))
console.log(Object.keys(schools1))
console.log(schoolArray)

