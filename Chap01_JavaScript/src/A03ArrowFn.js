// 함수 리터럴. 함수 표현식
const onAdd = function(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
}

const onMin = function(x, y) {
    return `${x} - ${y} = ${x - y}`;
}

onAdd(10, 20);
console.log( onMin(10, 20) );
console.log('')


// ES6. 
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const onMulti = (x, y) => {
    const result = x * y;
    return `${x} + ${y} = ${result}`;
}
console.log(onMulti(10, 20));

// Arrow 함수 내부에 리턴 구문 딱 1줄만 있는 경우 return을 반드시 생략
const onDiv = (x, y) => `${x} / ${y} = ${x / y}`;
console.log(onDiv(10, 20));

// 한줄일때 값이 아닌 실행 구문의 경우는 리턴이 아닌 실행
const onOne = (x, y) => console.log(`${x} / ${y} = ${x / y}`);
onOne(10, 20);

// 매개변수가 1개인 경우는 ()를 생략할 수 있다.
// 매개변수가 1개 이상인 경우는 반드시 ()로 묶어야 한다.
const onTwo = x => 10 ** x;         // ES6 추가된 연산자. 10 * 10 * 10
console.log(onTwo(3));

// 함수의 매개변수에 초기 값을 할당할 수 있다.
function onThree(x = 0, y = 0) {
    return `${x} + ${y} = ${x + y}`;
}
console.log(onThree());
console.log(onThree(10, 20));

const onFour = (x=0, y=0) => `${x} + ${y} = ${x + y}`;
console.log(onFour());
console.log(onFour(10, 20));
console.log(onFour(undefined, 30))

// Arrow 함수는 this가 없다
function onFive() {
    console.log(this);
}
onFive();

// 매개변수가 없는 경우 ()을 생략할 수 없음
const onSix = () => console.log(this);
onSix();            // window
console.log('');

const obj = {
    age: 10,
    getAge: function() {
        console.log(this);
        console.log(this.age);
    },
    // 자신의 this는 없음. 항상 자신이 속한 객체(부모)가 참조하는 this를 자신의 this로 참조한다
    getArrow: () => {
        console.log(this);          // window
        console.log(this.age);      // undefined
    }
}

obj.getAge();
obj.getArrow();

console.dir(obj.getAge)
console.dir(obj.getArrow)