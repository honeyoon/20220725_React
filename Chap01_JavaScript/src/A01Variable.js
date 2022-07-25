// 변수.

var nickname = 'NolBu';
console.log('nickname: ', nickname);
console.log('nickname: ' + nickname);
console.log('nickname: ', nickname, 'typeof 변수명: ', typeof nickname);

nickname = 20;
console.log('nickname: ', nickname, 'typeof 변수명: ', typeof nickname);

nickname = true;
console.log('nickname: ', nickname, 'typeof 변수명: ', typeof nickname);

// 참조형은 타입이 모두 object로 표시된다
nickname = [10, 20];
console.log('nickname: ', nickname, 'typeof 변수명: ', typeof nickname);

// 기본형
// string, number, boolean, undefined, null, symbol

// 선언한 변수를 재 선언해도 에러가 아님.
var nickname = 10;

// var 변수는 함수 이외의 { } 에서 변수의 영역(scope)를 갖지 않는다
// if, for, while, switch.. 모두 동일
var age = 10;
if (age > 0) {
  var age = 'HungBu';
  console.log('IF {} 내부의 age => ', age);
}

console.log('IF {} 외부의 age => ', age + 10);
console.log('');    // 한줄 개행

function onOne() {
  var z = 10;       // 지역변수
  console.log('onOne=> ', z);
}
onOne();
// console.log('z => ', z);


// ES6
let address = 'Seoul';
console.log('Address: ', address, 'typeof: ', typeof address);

address = 10;
console.log('Address: ', address, 'typeof: ', typeof address);

// 선언한 변수는 var, let, const 모두 재 선언 불가
// let address = 'ABC';
// var address = 'ABC';

// 모든 { } 블럭에서 변수 범위를 갖는다
let x = 10;
if (x > 0) {
  let x = 1000;         // {} 내부에 선언된 변수를 지역변수라 한다.
  console.log('IF { } x => ', x);
}
console.log('x => ', x);

// const
const MY_PI = 3.1415;
console.log('MY_PI=> ', MY_PI, typeof MY_PI);

// 한번 값을 입력하면 값 변경이 안된다
// MY_PI = 123;     // Error

// 선언과 함께 초기화가 이루어지지 않으면 에러
// const MY_NAME;

const arr = [10, 20];
let result = arr.push(30);    // 추가후 배열의 개수가 리턴
console.log(arr, result);



