// 이전 방식으로 생성자를 만들고 프로토타입 설정
function Vacation(destination, length) {
    this.destination = destination
    this.length = length
}

Vacation.prototype.print = function() {
    console.log(`${this.destination}는 ${this.length}일 걸립니다.`)
}

var trip = new Vacation("마우이", 7)
trip.print()

// 클래스 사용해 정의하는 새로운 방식
class Vacation1 {
    constructor(destination, length) { // 프로퍼티 정의
        this.destination = destination
        this.length = length
    }
    print() { // 메서드 정의
        console.log(`${this.destination}는 ${this.length}일 걸립니다.`)
    }
}

const trip1 = new Vacation1("칠레 산티아고", 9) // 인스턴스 생성
trip1.print()