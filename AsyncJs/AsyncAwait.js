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

  const addButter = new Promise((resolve, reject) => resolve(`butter`));

  let ticket = await promiseWifeBringingTicks;
  //   console.log("tick =", ticket);  //--> ticket contain resolved val

  console.log(`wife: i have ${ticket}`);
  console.log(`husband: we should go in`);
  console.log(`wife: no i am hungry`);

  let popcorn = await getPopcorn;
  console.log(`husband: i got some ${popcorn}`);
  console.log(`husband: we should go in`);
  console.log(`wife: no i need butter on my popcorn`);

  let butter = await addButter;
  console.log(`husband: i got some ${butter}`);
  console.log(`husband: anything else ?`);
  console.log(`wife: lets go we are getting late`);
  console.log(`husband: Thanks for remainder **grins**`);

  return ticket;
};

// console.log(preMovie());

// async function always return promise
preMovie().then((msg) => console.log(`Person3: shows ${msg}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
