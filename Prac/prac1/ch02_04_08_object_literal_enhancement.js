const name = "Julia Mancuso"
const sound = "go-fast"

var skier = {
    name: name,
    sound: sound,
    powderYell: function() {
        var yell = this.sound.toUpperCase()
        console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed: function(mph) {
        this.speed = mph
        console.log('속력(mph): ', mph)
    }
}

skier.powderYell()
skier.speed(350)
console.log(JSON.stringify(skier))