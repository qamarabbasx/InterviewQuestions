setTimeout(() => {
  console.log('Hello im in console');
}, 0);

const promise = new Promise((resolve, reject) => {
  resolve('Im in promise');
});
promise.then((val) => {
  val;
});
