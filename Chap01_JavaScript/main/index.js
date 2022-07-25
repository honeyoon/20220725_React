import {name, age, changeName} from './libA';
// import $ from 'jquery';

// default로 export 된 항목은 불러오는 곳에서 임의의 이름으로 할당해서 사용 가능
import lib from './libB.js'

console.log('index.js');

const app = document.getElementById('app');

const h3 = document.createElement('h3');
const str = `Name: ${name}, Age: ${age} / ${lib.name} - ${lib.age} / ${lib.changeAge()}`;

const text = document.createTextNode(str);
h3.appendChild(text);

// button
document.getElementById('btn').addEventListener('click', function(evt){
  changeName();
})

app.appendChild(h3);
