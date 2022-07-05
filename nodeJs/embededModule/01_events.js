// console.log(require("events")); // class 혹은 생성자함수
const EventEmitter = require("events");

// node 특징 중 이벤트 기반
console.time('run')
    // 👉 노드에서 사용되는 객체들은 EventEmitter라는 것을 상속(혹은 Prototype) 설계된 것과 연관이 있다
const emitter = new EventEmitter();

emitter.on('e', () => {
    console.log('event 발생❗')
});
emitter.emit('e');

/* 
    같은 이벤트로 여러개 등록해도 된다는 성질이 있음
    Dom 제어에 사용했던 addListner랑 동일
    addListner도 있음. on이랑 같이 작동함

    on  말고 once는
*/

emitter.once('close', (a) => {
    console.log('close event occur!', a);
});

emitter.emit('close', Date.now());
emitter.emit('close', Date.now());

console.log(process instanceof EventEmitter);   // true

process.on('exit', () => {
    console.timeEnd('run');
})