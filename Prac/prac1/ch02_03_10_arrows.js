console.log(this)

const gangwon = {
    resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
    print: (delay=1000) => {
        console.log(this)
        setTimeout(() => {
            console.log(this) // undefined (화살표 함수이므로 scope 무시)
            console.log(this.resorts.join(","))
        }, delay)
    }
}

gangwon.print()