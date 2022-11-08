console.log(this)

const gangwon = {
    resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
    print: function(delay=1000) {
        console.log(this)
        setTimeout(function() {
            console.log(this)
            console.log(this.resorts.join(","))
        }.bind(this), delay)
    }
}

gangwon.print()