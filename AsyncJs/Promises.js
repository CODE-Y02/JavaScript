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
function getPost() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post, index) => {
      output += `<li>${post.title} Last update ${Math.floor(
        (new Date().getTime() - post.createdAt) / 1000
      )} sec before</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });

      const error = false;
      // const error = true;
      if (!error) {
        resolve();
      } else {
        reject("ERROR : Something is wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post three", body: "this is post three" })
//   .then(getPost)
//   .catch((err) => console.log(err));

// 2)Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setimeout).

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length) {
        resolve(posts.pop());
      } else {
        reject("NO POSTS : Array is empty now");
      }
    }, 1000);
  });
}

createPost({ title: "Post three", body: "this is post three" })
  .then(() => {
    getPost();
    deletePost().then(() => {
      //delete 1
      getPost();
      deletePost().then(() => {
        //delete 2
        getPost();
        deletePost().then(() => {
          //delete 3
          getPost();
          deletePost()
            .then(() => {
              //gives error
              getPost();
            })
            .catch((err) => console.log(err));
        });
      });
    });
  })
  .catch((err) => console.log(err));



createPost({ title: "Post FOUR", body: "this is post FOUR" }).then(()=>{
  getPost();
  console.log("post 4 created")
  deletePost().then(()=>{
    getPost();
    console.log('post 4 del')
  }).catch(err=>console.log(err))
}).catch(err=>console.log(err))
