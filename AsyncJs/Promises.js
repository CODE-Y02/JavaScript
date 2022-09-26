const posts = [
  {
    title: "Post One",
    body: "this is post one",
  },
  {
    title: "Post two",
    body: "this is post two",
  },
];

function getPost() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

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

createPost({ title: "Post three", body: "this is post three" }).then(getPost).catch(err => console.log(err))


//Promise.all

  
