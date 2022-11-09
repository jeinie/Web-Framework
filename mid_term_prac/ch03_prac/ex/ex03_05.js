let color_lawn = {
    title: "잔디",
    color: "#00FF00",
    rating: 0
}
  
const rateColor = (obj, rating) => ({
    ...obj,
    rating // 같은 이름의 element 값 수정
})

console.log(color_lawn.rating) // 0
console.log(rateColor(color_lawn, 5).rating) // 5
console.log(color_lawn.rating) // 0
