class Person {    
    constructor(name, age, add){
        this.name = name;
        this.age = age;
        this.add = add;
    }

    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
    }
    getName() {
        return this.name;
    }
}

class Employee extends Person {
    constructor(name, age, add, job){
        super(name, age, add);          // 부모의 생성자 메서드를 호출하는 명령
        this.job = job;
    }

    toString() {
        console.log(`[Employee] name=${this.name} age=${this.age} add=${this.add}, job=${this.job}`);
    }
}

const hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();

const nolbu = new Employee('Nolbu', 40, 'Seoul', '개발자');
nolbu.toString();

/*
class MyComp extends React.Component {
    getName() {

    }
    render() {

    }
}
*/
