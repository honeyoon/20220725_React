
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while(Date.now() < wakeUp) {}
};

function normalFunc() {
    console.log('start');

    sleep(1000);

    console.log('end');
}
// normalFunc();
// console.log('');

function one() {
    console.log('1. start');

    let result = 0;
    setTimeout(() => {
        console.log('2. 작업완료');
        result = 100;
    }, 2000);

    console.log(result)
    console.log('3. end');
}
// one();


function two() {
    console.log('1. start');

    setTimeout(() => {
        console.log('2. 작업완료');
        let result = 100;

        setTimeout(() => {
            console.log('2-1 작업완료')
            console.log(result + 200);
            result = result + 200;
        }, 1000);
    }, 2000);

    console.log('3. end');
}
// two();

function three(ms) {
    console.log('1. start')
    const promise = new Promise((resolve, reject) => {
        // resolve => data => console.log(data)
        // reject => err => console.error(err)
        setTimeout(() => {
            if(ms > 1000) resolve({message: '성공입니다', result: 100});
            else reject('시간이 짧습니다')
        }, ms);
    });

    console.log('2 end')
    return promise;
}

three(2000)
    .then( data => {            // resolve 함수에 전달 할 함수 정의
        console.log(data);
        return three(1000)      // 이 결과는 다음 then이 받아 처리한다.
    })
    .then(data => {
        console.log(data)
    })  
    .catch( err => console.error(err) );    // reject에 전달할 함수

