let list = [
    { title: "과격한 빨강" },
    { title: "잔디" },
    { title: "파티 핑크" }
]

const addColor = (title, list) => [...list, {title}]
console.log(list.length)

// 스프레드 연산자로 배열 복사
console.log(addColor("매력적인 초록", list).length)
console.log(list.length)