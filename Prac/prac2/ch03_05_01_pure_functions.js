var frederick = {
    name: "Frederik Douglass",
    canRead: false,
    canWrite: false
}

function selfEducate() {
    frederick.canRead = true
    frederick.canWrite = true
}

// 순수 함수 X, side effect 발생
selfEducate()

console.log(frederick)