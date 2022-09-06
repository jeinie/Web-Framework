const obj = {
    obj_attr: 'obj_attr',

    func: function() {
        console.log('obj.func(): ');
        console.log(this);

        const funcFunc1 = function() {
            console.log('obj.func(funcFunc1()): w/o binding');
            console.log(this); // undefined
        };
        funcFunc1();

        const funcFunc2 = () => {
            console.log('obj.func(funcFunc2()): arrow funcFunc2()');
            console.log(this);
        };
        funcFunc2();

        const funcFunc3 = function() {
            console.log('obj.func(funcFunc3().bind(this));');
            console.log(this);
        }.bind(this);
        funcFunc3();
    },

    arrow: () => {
        console.log('obj.arrow(): ');
        console.log(this);

        const arrowFunc1 = function() {
            console.log('obj.arrow(arrowFunc1()): ');
            console.log(this);
        };
        arrowFunc1();

        const arrowFunc2 = () => {
            console.log('obj.arrow(arrowFunc2()): arrow arrowFunc2()');
            console.log(this);
        };
        arrowFunc2();

        const arrowFunc3 = function() {
            console.log('obj.func(funcFunc3().bind(this));');
            console.log(this);
        }.bind(this);
        arrowFunc3();

        const arrowFunc4 = function() {
            console.log('obj.func(funcFunc4().bind(obj));');
            console.log(this);
        }.bind(obj);
        arrowFunc4();
    },
}

obj.func();
obj.arrow();