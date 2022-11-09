// 함수 선언문으로 함수 정의, 함수 호출
function fun1(str) {
    console.log(str);
}
fun1("Hello, func1");

// 함수 표현식으로 함수 정의, 함수 호출
const fun2 = function(str) {
    console.log(str);
}
fun2("Hello, func2");

// 화살표 함수로 함수 정의, 함수 호출
const func3 = str => console.log(str);
func3("Hello, func3");

// 매개변수를 2개 전달 받아서, 이 값을 더한 값을 반환하는 화살표 함수 구현
const aFunc1 = (a, b) => a + b;
console.log(aFunc1(2, 3))

// 매개변수 없이 함수 내부에서 선언한 상수 2개의 값을 더한 값을 반환하는 화살표 함수 구현
const aFunc2 = () => {
    const a = 2
    const b = 3
    return a+b
}
console.log(aFunc2())

// 매개변수를 1개 전달 받아서, 이 값에 200을 더한 값을 반환하는 화살표 함수 구현
const aFunc3a = value => value + 200
console.log(aFunc3a(20))