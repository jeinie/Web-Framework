var frederick = {
    name: "Frederik Douglass",
    canRead: false,
    canWrite: false
}

// 매개변수에 의해서만 반환 값이 결정되는 함수 (데이터 원본은 수정되지 않음)
const selfEducate = person => {
    person.canRead = true
    person.canWrite = true
    return person
}

console.log( selfEducate(frederick) )
console.log( frederick )