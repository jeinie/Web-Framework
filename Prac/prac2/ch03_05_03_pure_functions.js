var frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
}

const selfEducate = person => // 새로운 객체 생성
    ({
        ...person, // 매개변수로 전달받은 객체의 모든 요소 나열
        canRead: true,
        canWrite: true
    })

console.log( selfEducate(frederick) )
console.log( frederick )

// 순수함수
// 1) 매개변수 전달
// 2) 결과 값 반환
// 3) 함수 밖 객체의 값을 변경하지 않음