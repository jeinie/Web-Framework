// 고차함수 (함수를 매개변수로 받거나 함수를 결과로 반환하는 함수)
const invokeIf = (condition, fnTrue, fnFalse) => (condition) ? fnTrue() : fnFalse()
const showWelcome = () => console.log("Welcome!!!")
const showUnauthorized = () => console.log("Unauthorized!!!")

invokeIf(true, showWelcome, showUnauthorized)