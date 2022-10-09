/**
 * Event loop sequence
 * executes normal functions line by line
 * add asynchronous code to event loop que
 * Inside event loop there are two ques
 * MicroTask Que => All promise calls, async functions, process.nextTick() functions placed in this queue
 * MacroTask Que => setTimeout, setInterval, setImmediate are placed in this queue
 * Microtasks are executed first when program which called them finished,
 * Macrotasks are executed when MicrotaskQue is finished
 * setTimeout inside promise => promise will execute first => setTimeout will then placed in MacroTask que next to the last macroTask at the end
 */

console.log('1');
setTimeout(() => {
  console.log('Hello im in First TimeOut');
}, 0);

Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log('setTimeOut inside Promise');
    }, 0);
  })
  .then(() => console.log('Console Inside promise'));
console.log('2');

// second way to use promise

console.log('1');
setTimeout(() => {
  console.log('Hello im in First TimeOut');
}, 0);

const promise = new Promise((resolve, reject) => {
  resolve();
});
promise
  .then(() => console.log('Promise console'))
  .then(() => {
    setTimeout(() => {
      console.log('setTimeOut inside promise');
    }, 0);
  });
console.log('2');
