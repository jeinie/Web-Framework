const messages = [
    "함수를 배열에 추가",
    msg => console.log(msg),
    "변수와 동일하게 취급",
    msg => console.log(msg)
]

messages[1](messages[0])
messages[3](messages[2])