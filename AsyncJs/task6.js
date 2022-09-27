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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });

      const error = false;
      if (!error) {
        resolve();
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
