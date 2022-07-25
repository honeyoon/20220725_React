class Jumsu {
    #address        // ES2021
    constructor(name, kor, eng, address) {
        this._name = name;
        this._kor = kor;
        this._eng = eng;
        this.#address = address;
    }

    // 일반 메서드
    onTotal() {
        return this._kor + this._eng;
    }
    display() {
        console.log(`${this._name}의 총점은 ${this.onTotal()}이고 평균은 ${this.onTotal() / 2}입니다`);
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }

    // Getter, Setter
    // 함수 형태로 정의하고 프로퍼티 형태로 사용한다
    get kor() {
        return this._kor;
    }
    set kor(kor) {
        // 함수 형태라면 사용자가 입력한 값을 검증하는 로직이 가능하다.
        let value = Number(kor);
        if (isNaN(value)) value = 0;
        this._kor = value;
    }

    get address() {
        return this.#address;
    }
};

const nolbu = new Jumsu('Nolbu', 100, 90, 'Seoul');
console.log(nolbu._name);                       // Nolbu
console.log(nolbu.getName());
console.log(nolbu.onTotal());
nolbu.display();

nolbu.setName('놀부');
nolbu.display();

// 메서드지만 사용은 변수처럼 사용한다
nolbu.kor = 50;
console.log(nolbu.kor);
nolbu.display();

console.log(nolbu.address);