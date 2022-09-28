//  when there async you need to wait

console.log("person1: shows ticket");
console.log("person2: shows ticket");
/*
const promiseWifeBringingTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});

// promiseWifeBringingTicks.then((t) => {
//   console.log(`person3: shows ${t}`);
// });

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log(`wife: i have tickets`);
  console.log(`husband: we should go in`);
  console.log(`wife: no i am hungry`);
  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log(`husband: i got some popcorn`);
  console.log(`husband: we should go in`);
  console.log(`wife: no i need butter on my popcorn`);

  return new Promise((resolve, reject) => resolve(`${t} butter`));
});

getButter.then((t) => console.log(t));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
*/

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

  const getCandy = new Promise((resolve, reject) => resolve(`Candy`));

  const getCoke = new Promise((resolve, reject) => resolve(`Coke`));

  let ticket = await promiseWifeBringingTicks;
  //   console.log("tick =", ticket);  //--> ticket contain resolved val

  let [popcorn, candy, coke] = await Promise.all([
    getPopcorn,
    getCandy,
    getCoke,
  ]);
  console.log(`${popcorn} ${candy} ${coke}`);

  return ticket;
};

// console.log(preMovie());

// async function always return promise
preMovie().then((msg) => console.log(`Person3: shows ${msg}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
