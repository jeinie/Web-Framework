const insideFn = logger => logger("함수를 다른 함수에 매개변수로 전달")
insideFn(msg => console.log(msg))