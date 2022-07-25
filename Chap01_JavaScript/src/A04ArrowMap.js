// 일반 함수. Arrow 함수로 변경 할 수 없음
function fn(){
    console.log('funcion');
}
fn();

const arr = [10, 11, 100, 101, 1000];

// 익명함수(이름이 없는 함수)
// 순환함수
let total = 0;
arr.forEach(item => total += item);
console.log(total);

// map**


