// 1급 객체 활용 6가지

// 1. 함수를 변수에 할당
var log = function(msg) {
    console.log(msg)
}
log('함수를 변수에 할당')

// 2. 함수를 객체에 포함
const obj = {
    message: '함수를 객체에 추가',
    log(msg) {
        console.log(msg)
    }
}
obj.log(obj.message)

// 3. 화살표 함수를 상수에 할당
const log1 = msg => console.log(msg)
log1('화살표 함수를 상수에 할당')

// 4. 함수를 배열의 원소로 할당
const messages = [ // 배열의 원소 총 4개
    '함수를 배열에 추가',
    msg => console.log(msg),
    '변수와 동일하게 취급',
    msg => console.log(msg)
]
messages[1](messages[0]) // 함수를 배열에 추가
messages[3](messages[2]) // 변수와 동일하게 취급

// 5. 함수를 매개변수로 활용
const insideFn = logger => logger('함수를 다른 함수에 매개변수로 전달') // insideFn(logger)의 결과는 logger('함수를...') 호출
insideFn(msg => console.log(msg))

const temp = msg => {
    console.log(msg)
}
insideFn(temp)

// 6. 함수의 결과를 함수로 반환
var createScream = logger => {
    return msg => logger(msg.toUpperCase() + '!!!')
}

const scream = createScream(msg => console.log(msg))
scream('createScream은 함수를 반환')