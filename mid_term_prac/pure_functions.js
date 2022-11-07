// 2. 순수 함수
// 1) 매개 변수 전달
// 2) 결과 값 반환
// 3) 함수 밖 객체의 값을 변경하지 X -> side effect 발생 X

var frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
}

const selfEducate = person => ({
    ...person,
    canRead: true,
    canWrite: true
})

console.log(selfEducate(frederick))
console.log(frederick) // 원본 그대로 -> side effect 발생 X