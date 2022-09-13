// func1 함수 선언문 => 호이스팅 가능
func1("hello1");

function func1(str) {
    console.log(str);
}

// func2 함수 표현식 => 호이스팅하면 에러남
func2("hello2")

const func2 = function(str) {
    console.log(str);
}


// func3 화살표 함수 => 호이스팅 하면 에러남
func3("hello3")

const func3 = str => {
    console.log(str);
}

