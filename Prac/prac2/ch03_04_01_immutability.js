let color_lawn = {
    title: "잔디",
    color: "#00FF00",
    rating: 0
}

function rateColor(obj, rating) {
    obj.rating = rating
    return obj
}

console.log(color_lawn.rating)

// 원본 수정
console.log(rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating)