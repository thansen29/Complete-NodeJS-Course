const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey it worked');
  }, 2500);
});

myPromise
  .then((message) => {
    console.log(message);
  });
