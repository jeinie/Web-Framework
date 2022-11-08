var createScream_06 = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!")
    }
}

const scream_06 = createScream_06(message => console.log(message))
scream_06('createScream은 함수를 반환')