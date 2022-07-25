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

// concat => 추가
// map** => 수정
const mapArr = arr.map((item, index) => index == 2 ? 200 : item);
console.log(arr);
console.log(mapArr);

// filter ** => 삭제
// 조건이 true인 요소값이 반환되어 새로운 배열을 생성한다.
const filterArr = arr.filter((item, index) =>  index !== 2);
console.log(arr);
console.log(filterArr)
