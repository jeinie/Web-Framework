const obj = {
    message: "함수를 객체에 추가",
    log(message) {
        console.log(message)
    }
}

obj.log(obj.message)