/**1) Watch uptill first 15:30 ,  create a promise as per the youtuber does

2)Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setimeout). Everytime you call it, it should delete the last element of the array

3)Continue deleting the elements up till all the elements are deleted from the array. Now when you delete again an error would be thrown , catch the error and console log in the browser-> Array is empty now. You dont have to use for loop as there are only 3 posts . Just call delete post 3 times. (Demo Link).

(If stuck for very long check hint 1. But trust me this is super easy)

4)Try creating a post (post four) and once the post is created, call delete post after 1 second and delete post 4 .how would you do it. Write the code. */
const posts = [
  {
    title: "Post One",
    body: "this is post one",
    createdAt: new Date().getTime(),
  },
  {
    title: "Post two",
    body: "this is post two",
    createdAt: new Date().getTime(),
  },
];

let intervalId = 0;
function getPost() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    let output = "";
    // console.log(intervalId);
    posts.forEach((post, index) => {
      // console.log(new Date().getTime() - post.createdAt )
      output += `<li id="${post.title + post.createdAt}">${
        post.title
      }  - Created ${Math.floor(
        (new Date().getTime() - post.createdAt) / 1000
      )} sec before  </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
// getPost()

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error) {
        let added = posts.push({ ...post, createdAt: new Date().getTime() });
        // console.log("post is added") // this code is already executed just that we dont know its status
        resolve(added);
      } else {
        reject("SOMETHING WENT WRONG !!!");
      }
    }, 2000);
  });
}

// createPost({
//   title: "Post three",
//   body: "this is post three",
// })
//   .then(() => getPost())
//   .catch((error) => console.log(error));

/**
 * )Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setimeout). Everytime you call it, it should delete the last element of the array
 *
 */
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length) {
        resolve(posts.pop());
        // lastEditedInSecondsAgo()
      } else {
        reject("NO POSTS : Array is empty now");
      }
    }, 1000);
  });
}

/*
 * 3)Continue deleting the elements up till all the elements are deleted from the array. Now when you delete again an error would be thrown , catch the error and console log in the browser-> Array is empty now. You dont have to use for loop as there are only 3 posts . Just call delete post 3 times.  */

createPost({
  title: "Post three",
  body: "this is post three",
})
  .then(() => {
    getPost();
    // del 1
    deletePost().then(() => {
      getPost();
      //del 2
      deletePost().then(() => {
        getPost();
        //del 3;
        deletePost().then(() => {
          getPost();
          // del 4 ; if arry empty throw err
          deletePost()
            .then(getPost)
            .catch((error) => console.log(error));

          //Try creating a post (post four) and once the post is created, call delete post after 1 second and delete post 4 .how would you do it. Write the code.
          createPost({
            title: "Post Four",
            body: "this is post Four",
          }).then(() => {
            getPost();
            //del 4
            deletePost()
              .then(() => {
                getPost();
                // del empty arr
                deletePost()
                  .then(getPost)
                  .catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
          });
        });
      });
    });
  })
  .catch((error) => console.log(error));

// promise.all --> AsyncJs\promisesAll.js

/**
  I want you to create one more promise called updateLastUserActivityTime. Every time the user creates a post, this promise should be parallely called (should execute in 1 second) .When both the promises (createPost and updateLastUserActivityTime resolve), I want you to console log all the posts created and lastActivityTime of the user. Demo Link [If stuck for long watch the hint 2]
 
Once both the above promises are resolved , I want you to delete the last post by calling the deletion promise. Once successfully deleted, I want you to log the new set of Posts of the user.

Why on Earth do we need promise.all ? Watch this video and answer this question in your own words.
 */

// const updateLastUserActivityTime = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Last Activity  ${new Date().toLocaleString()}`);
//   }, 1000);
// });

// function updatedActivity(){
//     Promise.all([createPost, updateLastUserActivityTime])
//   .then((value) => {
//     getPost();
//     console.log(value[1]);
//   })
//   .catch((error) => console.log(error));
// }

// updatedActivity()



// createPost({
//   title: "Post 5",
//   body: "this is post 5",
// });
// createPost({
//   title: "Post 58",
//   body: "this is post 5",
// });
// createPost({
//   title: "Post 59",
//   body: "this is post 5",
// });
// createPost({
//   title: "Post 599",
//   body: "this is post 5",
// });










let user = {
  userName: "yatharth",
  lastActivityTime: new Date().getTime(),
};

updateLastUserActivityTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    user.lastActivityTime = new Date().getTime();
    resolve(user.lastActivityTime);
  }, 1000);
});

// function userUpdatesPost() {
  Promise.all([createPost, updateLastUserActivityTime])
    .then(([createPostResolves, updateLastUserActivityTimeResolves]) => {
      console.log(updateLastUserActivityTimeResolves);
    })
    .catch((error) => console.log(error));
// }
// userUpdatesPost()