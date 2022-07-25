// libA.js

// import {z} from './lib/libC';
// import libc from './lib/libC';
import libc, {z} from './lib/libC';

// 이 파일이 사용하는 변수가 아닌 외부 파일에서 import 명령으로 호출해서 사용할 변수
export let name = 'Library A, ' + libc.x;
export const age = z;

export const changeName = () => {
  alert('click Event') 
}

// export {name, age, changeName};
