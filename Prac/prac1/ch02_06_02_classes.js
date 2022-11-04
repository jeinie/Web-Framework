class Vacation {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }
    print() {
        console.log(`${this.destination}는 ${this.length}일 걸립니다.`);
    }
}

var trip = new Vacation("칠레 산티아고", 9)
trip.print()