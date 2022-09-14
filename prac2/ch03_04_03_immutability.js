let color_lawn = {
    title: "잔디",
    color: "#00FF00",
    rating: 0
}

const rateColor = (obj, rating) => 
    ({
        ...obj,
        rating
    })

console.log(color_lawn.rating)

console.log(rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating)