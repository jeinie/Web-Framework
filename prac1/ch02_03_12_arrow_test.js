const obj = {
    obj_attr: 'obj_attr',
    obj_this: this,

    func: function() {
        console.log('obj.func(): ');
        console.log(this); // obj

        // 함수 표현식(funcFunc1)과 화살표 함수(funcFunc2)는 각 this 가 참조하는 것이 달라짐
        // 왜 달라짐?
        // 화살표 함수는 scope 무시하므로
        const funcFunc1 = function() {
            console.log('obj.func(funcFunc1()): w/o binding');
            console.log(this); // undefined
        };
        funcFunc1();

        const funcFunc2 = () => {
            console.log('obj.func(funcFunc2()): arrow funcFunc2()');
            console.log(this); // obj
        };
        funcFunc2();

        // bind() 함수 이용해서 강제로 객체를 바인딩
        const funcFunc3 = function() {
            console.log('obj.func(funcFunc3().bind(this));');
            console.log(this); // obj
        }.bind(this); // funcFunc3() 바깥에 있으므로 여기서의 this는 obj임 (obj 넣어도 똑같음)
        funcFunc3();
    },

    arrow: () => {
        console.log('obj.arrow(): ');
        console.log(this); // undefined

        const arrowFunc1 = function() {
            console.log('obj.arrow(arrowFunc1()): ');
            console.log(this);
        };
        arrowFunc1();

        const arrowFunc2 = () => {
            console.log('obj.arrow(arrowFunc2()): arrow arrowFunc2()');
            console.log(this); // undefined
        };
        arrowFunc2();

        const arrowFunc3 = function() {
            console.log('obj.func(funcFunc3().bind(this));');
            console.log(this); // undefined
        }.bind(this); // undefined
        arrowFunc3();

        const arrowFunc4 = function() {
            console.log('obj.func(funcFunc4().bind(obj));');
            console.log(this); // obj
        }.bind(obj); // obj
        arrowFunc4();
    },
}

obj.func();
obj.arrow();