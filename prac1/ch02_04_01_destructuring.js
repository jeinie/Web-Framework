var sandwich = {
    bread: "더치-크런치",
    meat: "참치",
    cheese: "스위스",
    toppings: ["상추", "토마토", "머스타드"]
}

var {bread, meat} = sandwich
console.log(bread, meat)

bread = "마늘"
meat = "칠면조"
console.log(bread, meat)

console.log(sandwich.bread, sandwich.meat)