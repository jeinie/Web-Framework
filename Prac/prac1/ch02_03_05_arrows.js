var lordify = (firstName, land) => {
    if (!firstName) {
        throw new Error('lordify에 이름을 넘겨야 합니다.')
    }
    if (!land) {
        throw new Error('영주에게는 여지가 있어야 합니다.')
    }
    return `${land}의 ${firstName}`
}

console.log( lordify("이계영", "멜버른") )
//console.log( lordify("오현석") )