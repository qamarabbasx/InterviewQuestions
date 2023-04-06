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

// Output
// 1
// 2
// Console Inside promise
// Hello im in First TimeOut
// setTimeOut inside Promise

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


// Another Example of using setTimeout with let and var scopes
// When using let it creates lexical scope for each iteration and takes settimeout and actual value of i in eventloop
for (let i = 1; i < 5; i++){
  setTimeout(() => {
    console.log(i);
  }, 1000*i);
}
// output
// 1 after one sec
// 2 after two secs
// 3 after three secs
// 4 after four secs

// When using var loop terminates before one sec and at the timeof console logs value of i becoms 5 so it will print 5 each time
for (let i = 1; i < 5; i++){
  setTimeout(() => {
    console.log(i);
  }, 1000*i);
}
// output
// 5 after one sec
// 5 after two secs
// 5 after three secs
// 5 after four secs

