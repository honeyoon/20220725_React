// libB.js

const data = {        // export default {}
  name: 'NolBu',
  age: 30,
  changeAge() {
    return `${this.name} - ${this.age}`
  }
}
// 한 파일에서 딱 1개만 지정 가능
export default data;
