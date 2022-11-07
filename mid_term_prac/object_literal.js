// 객체 리터럴 (예전방식)
const sound = "go-fast"

var skier = {
    sound: sound,
    powderYell: function() {
        console.log(this) // this -> skier 객체
        var yell = this.sound.toUpperCase()
        console.log(`${yell} ${yell} ${yell}`)
    },
    speed: function(mph) {
        console.log(this) // this -> skier 객체
        console.log(`속력(mph):`, mph)
        this.speed = mph
        console.log(this.speed) // 350(number type)
        console.log(typeof(this.speed))
    }
}

skier.powderYell()
skier.speed(350)
console.log(JSON.stringify(skier))

// 객체 리터럴 개선 (속성, 이름 같으면 속성만 명시 / function 키워드 생략)
const sound1 = "go-fast"
const skier1 = {
    sound1, // 속성과 할당할 이름이 같으면 속성만 명시 가능
    powderYell() { // function 키워드 생략 가능
        const yell = this.sound1.toUpperCase()
        console.log(`${yell} ${yell} ${yell}`)
    },
    speed(mph) {
        this.sound1 = mph
        console.log(`속력1(mph):${mph}`)
    }
}

skier1.powderYell()
skier1.speed(400)
console.log(JSON.stringify(skier1))