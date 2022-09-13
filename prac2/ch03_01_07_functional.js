var createScream_07 = logger => message => logger(message.toUpperCase() + "!!!")

const scream_07 = createScream_07(message => console.log(message))
scream_07('ES6에서는 더 간편하게 createScream을 만들 수 있음')