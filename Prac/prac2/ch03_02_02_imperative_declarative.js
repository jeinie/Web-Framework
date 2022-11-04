const string = "This is the mid day show with Chery1 Waters"
const urlFriendly = string.replace(/ /g, "-").toLowerCase() // 정규표현식으로 공백 찾기

console.log(urlFriendly)