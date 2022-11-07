// 구조분해 할당 : 객체 안의 필드, 배열을 구성하는 원소를 변수에 쉽게 대입할 수 있도록 활용
var sandwhich = {
    bread: "더치-크런치",
    meat: "참치",
    cheese: "스위스",
    toppings: ["상추", "토마토", "머스타드"]
}

var {meat_, bread_} = sandwhich
console.log(bread_, meat_)

bread_ = "마늘"
meat_ = "칠면조"
console.log(bread_, meat_)

console.log(sandwhich.bread, sandwhich.meat)

// 화살표 함수는 scope 무시함