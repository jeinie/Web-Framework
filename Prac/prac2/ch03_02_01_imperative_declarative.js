var string = "This is the mid day show with Chery1 Waters"
var urlFriendly = ""

for (var i=0; i<string.length; i++) {
    if (string[i] === " ") {
        urlFriendly += "-"
    } else {
        urlFriendly += string[i]
    }
}

urlFriendly = urlFriendly.toLowerCase()
console.log(urlFriendly)