let color_lawn = {
    title: "잔디",
    color: "#00FF00",
    rating: 0
}

function rateColor(obj, rating) {
    return Object.assign({}, obj, {rating:rating})
}

console.log(color_lawn.rating)

// 변경
console.log(rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating)