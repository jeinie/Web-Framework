// 객체 구조분해 할당
const loardify = ({firstname}) => console.log(`캔터베리의 ${firstname}`)

const regularPerson = {
    firstname: "현석",
    lastname: '오'
}

loardify(regularPerson)

// 배열의 구조분해 할당
const [FirstResort] = ["용평", "평창", "강촌"]
console.log(FirstResort) // 용평

const array = ["용평", "평창", "강촌"]
const [,,thirdResort] = array
console.log(thirdResort) // 강촌

const [,,third] = ["용평", "평창", "강촌"]
console.log(third)