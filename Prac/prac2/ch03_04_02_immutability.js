let color_lawn = {
    title: "잔디",
    color: "#00FF00",
    rating: 0
}

var rateColor = function(obj, rating) {
    // 원본 유지, 복사본 수정
    return Object.assign({}, obj, {rating:rating})
}

console.log(color_lawn.rating)

console.log(rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating) // 원본 유지

