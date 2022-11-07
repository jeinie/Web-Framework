// 스프레드 연산자
var peaks = ["대정봉", "중청봉", "소정봉"]
var canyons = ["천불동계곡", "가야동계곡"]
var seoraksan = [...peaks, ...canyons]

console.log(seoraksan.join(', '))

// reverse : 원본 변경, 참조 변환
// [last] >> 배열의 구조분해 할당
var [last] = peaks.reverse() // 뒤집어서 (첫 번째 요소값이 last 변수에 저장)
console.log(last) // 소정봉
console.log(peaks.join(', ')) // 원본 변경됨 (reverse() 했으므로)

var peaks1 = ["대", "중", "소"]
var [last1] = [...peaks1].reverse() // 소 중 대
console.log(last1) // 소
console.log(peaks1.join(', ')) // 원본은 그대로.. peaks1을 복사해서 reverse() 했기 때문에