const ages = [21,18,42,40,64,63,34]
const maxAge = ages.reduce((max, age, idx) => {
    console.log(`${age} > ${max} = ${age>max}, ${idx}`)
    if (age > max) {
        return age
    } else {
        return max
    }
}, 0) // initValue 지정하지 않은 경우 인덱스는 1부터 시작

console.log('maxAge', maxAge)