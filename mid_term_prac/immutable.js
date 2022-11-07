// 함수형 프로그래밍 특징
// 1. 불변성 (원본 대신 복사본을 만들어서 수정 및 활용)

let color_lawn = {
    title: '잔디',
    color: '#00FF00',
    rating: 0
}

/*function rateColor(obj, rating) {
    return Object.assign({}, obj, {rating:rating}) // 원본 유지, 복사본 수정
}*/

console.log({...color_lawn})

const rateColor = (obj, rating) => ({
    ...obj, // 새로운 객체 생성 (복사)
    rating
})

console.log(color_lawn.rating)
console.log(rateColor(color_lawn, 5).rating) // 객체의 복사본에서 수정
console.log(color_lawn.rating) // 객체 원본 유지


let list = [
    {title:'과격한 빨강'},
    {title:'잔디'},
    {title:'파티 핑크'}
]

const addColor = (title, list) => [...list, {title}]
console.log(list.length) // 3

// 색을 추가하면.. 원래의 배열이 변경
console.log(addColor('매력적인 초록', list).length) // 4
console.log(list.length) // 3 (원본 그대로)
