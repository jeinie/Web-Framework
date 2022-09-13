const aFunc1 = (x, y) => {
    return x + y;
}

console.log(`aFunc1(2, 3): ${aFunc1(2, 3)}`);

const aFunc2 = () => {
    const a = 2;
    const b = 3;
    const result = a +b;
    return result;
}

console.log(`aFunc2(): ${aFunc2()}`);

const aFunc3a = x => {
    return x + 200;
}

console.log(`aFunc3a(20): ${aFunc3a(20)}`);

/*const aFunc3b = () => {
    return 
}*/

const aFunc4a = x => x+200;
console.log(`aFunc4a(20): ${aFunc4a(20)}`);

const aFunc4b = x => x+200;
console.log(`aFunc4b(20): ${aFunc4b(20)}`);

// 호이스팅 에러 (한줄로 바꾸었을 때 호이스팅 에러남) 화살표 함수이므로
aFunc5(20);
const aFunc5 = x => x+200;
console.log(`aFunc5(20): ${aFunc5(20)}`);
