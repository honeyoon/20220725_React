
console.log([10, 11, 100]);
console.log('NolBu');
console.log('');

console.log(...[10, 11, 100]);
console.log(...'NolBu');
console.log('');

// ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷 
function spreadFun(a, b, c, d, e, ...rest) {
    console.log(`a => ${a}`);
    console.log(`b => ${b}`);
    console.log(`c => ${c}`);
    console.log(`d => ${d}`);
    console.log(`e => ${e}`);
    console.log(`rest => ${rest} / ${rest.length}`);
}

spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
console.log('')


// 배열 합치기.
const aryOne = [10, 20, 30];
const aryTwo = [1, 2, 3, ...aryOne];
console.log(aryTwo);
console.log('');


// Object
const objOne = {
    id: 1,
    name: 'NolBu'
};

const objTwo = {
    id: 2,
    address: 'Seoul',
    ...objOne                   // id의 값은 중복. 나중에 온 값으로 덮어쓴다.
}
console.log(objTwo);

const objThree = {
    ...objOne,
    id: 3,
    address: 'InChen',
}
console.log(objThree);

// 통합하여 새로운 객체 생성
const objFour = {
    id: 1,
    name: 'NolBu'
};
const objFive = {
    id: 2,
    address: 'Seoul',
}
const objSix = {...objFour, ...objFive};
console.log(objSix);

const objSeven = {
    id: 1,
    name: 'NolBu'
};
// objSeven.name = 'ABC';

// 객체의 추가, 변경
const newObj = {...objSeven, name: 'ABC'};
console.log(objSeven)
console.log(newObj);
console.log(objSeven === newObj);

// 삭제
delete newObj.name;
console.log(newObj);

