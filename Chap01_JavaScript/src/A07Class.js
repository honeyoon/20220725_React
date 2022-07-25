
class User {
  constructor(name, age){      // 생성자 메서드. new에 의해 1번만 실행되는 함수
    this.name = name;         // new로 생성한 객체의 내부 객체값을 정의된다.
    this.age = age;
  }

  diplay() {
    console.log(`${this.name}님은 ${this.age}세 입니다`);
  }
}

const nolbu = new User('NolBu', 30);
const hungbu = new User('HungBu', 20);

console.log(nolbu)
console.log(hungbu);
