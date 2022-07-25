const obj = {
    name: 'NolBu',
    age: 30
}

// 펼쳐서 조합 => 스프레드 연산자
// 개별 값을 꺼내서 각각의 변수에 대입 => 디 스트럭처링

// let name = obj.name;
// let age = obj.age;

// 변수명은 객체의 key와 동일한 이름으로 선언해야 한다.
const {name, age} = obj;
console.log(name, age);

// 이미 선언된 변수가 있으면 별칭 사용
const {name: nick, age: num} = obj;
console.log(nick, num);

console.log(obj.address);       // undefined. 에러가 아니다

// 기본값을 설정할 수 있다
const {name: x, age: y, address='Seoul'} = obj;
console.log(x, y, address);

// 일부의 값 추출
const {name: x1} = obj;
console.log(x1);

console.log('');

// 배열
// 별칭 사용은 안된다
// 객체 => {}
// 배열 => []
const ary = ['A', 'B', 'C'];

const [a, b, c] = ary;
console.log(a, b, c);

// 기본값 설저은 가능
const [a1, b1, c1, d1 = 0] = ary;
console.log(a1, b1, c1, d1);

// 원하는 값만 추출
const [, , c2] = ary;
console.log(c2);
console.log('');

console.log(obj, ary);

const user = {
    nickname: 'NolBu',
    old: 20,
    info: {
        add: 'Seoul',
        tel: '010-7894-5612'
    }
};

const {nickname, old, info} = user;
console.log(nickname, old, info);
const {add, tel} = info;
console.log(add, tel);
