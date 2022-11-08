let list = [
    { title: "과격한 빨강" },
    { title: "잔디" },
    { title: "파티 핑크" }
]

var addColor = function(title, colors) {
    colors.push({title: title})
    return colors
}
console.log(list.length)

console.log(addColor("매력적인 초록", list).length)
console.log(list.length) // 원본 변경