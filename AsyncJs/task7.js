//  when there async you need to wait
//write down the code as per the youtuber does both the pronises and asyn await
/*
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
*/

//Continue watching from the 18th min to 23rd min and understand how to handle Promise.all with async await
// Please view AsyncJs\AsyncAwait.js

//Convert the createPost , deletePost you wrote previously into async await completely. If stuck for long watch hint 1.

let posts = [
  {
    title: "Post 1",
    createdAt: new Date().getTime(),
  },
  {
    title: "Post 2",
    createdAt: new Date().getTime(),
  },
];

function getPost() {
  setInterval(() => {
    let output = "";

    posts.forEach((post, index) => {
      output += `<li>${post.title} created ${Math.floor(
        (new Date().getTime() - post.createdAt) / 1000
      )} sec beforee</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = false;
      if (!err) {
        posts.push({ ...post, createdAt: new Date().getTime() });
        resolve();
      } else {
        reject("Error : Something went wrong ");
      }
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length) {
        resolve(posts.pop());
      } else {
        reject("Error : NO POSTS");
      }
    }, 1000);
  });
}

const createAndDelete = async () => {
  try {
    getPost();

    const post3 = await createPost({ title: "Post 3" });
    getPost();
    const del3 = await deletePost();
    getPost();
    const del2 = await deletePost();
    getPost();
    const del1 = await deletePost();
    getPost();

    const post4 = await createPost({ title: "Post 4" });
    getPost();
    const del4 = await deletePost();
    getPost();

    const del5 = await deletePost();
  } catch (error) {
    console.log(error);
  }
};

createAndDelete();

//Why were promises discovered?
/**
 * because it solves problem of call back hell as give us ability to execute async code in sync format without much modifation in components of code
 */

// const gotoMarket = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('reached market')
//   },1000)
// })

// const buySomething = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('brought something ')
//   },2000)
// })

// const makePayment =new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('payment done')
//   },20)
// })

// const returnHome = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Returned home')
//   },1000)
// })

//in above example if your mom send you market to buy something , it is possible that you can return home without bying anything but you cant buy a thing without payment , that defines dependent and indepndent task , its very difficult to write it in form of .than .catch and code is messy
// lets write it in form of async await
const TomGoesToBuy = async () => {
  const gotoMarket = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("reached market");
    }, 1000);
  });
  console.log(gotoMarket);
  const buySomething = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("brought something ");
    }, 2000);
  });
  console.log(buySomething);
  const makePayment = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("payment done");
    }, 20);
  });
  console.log(makePayment);
  const returnHome = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Returned home");
    }, 1000);
  });

  console.log(returnHome);
};
TomGoesToBuy();
