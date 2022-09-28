//  when there async you need to wait
//write down the code as per the youtuber does both the pronises and asyn await
console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

  const addButter = new Promise((resolve, reject) => resolve(`butter`));

  //Now create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code

  const getColdDrinks = new Promise((resolve, reject) => resolve("coldrink"));

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
  console.log(`wife: i am thrusty get me something to drink `);

  let coldDrink = await getColdDrinks;
  console.log(`husband: here's  ${coldDrink}`);
  console.log(`wife: lets go we are getting late`);
  console.log(`husband: Thanks for remainder **grins**`);

  return ticket;
};

// console.log(preMovie());

// async function always return promise
preMovie().then((msg) => console.log(`Person3: shows ${msg}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
