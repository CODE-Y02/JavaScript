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
        // console.log(new Date().getTime() - post.createdAt )
      output += `<li>${post.title}  - last updated ${(new Date().getTime()- post.createdAt)/1000}sec before </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push({...post,createdAt: new Date().getTime(),});
    callback();
  }, 2000);
}
//Make a new function call create4thPost for adding one more new post "Post Four". create4thPost should take createPost as a callback function. Once the post is created all the 4 posts should be displayed too

function create4thPost(post, callback) {
  setTimeout(() => {
    posts.push({...post,createdAt: new Date().getTime(),});
    callback(
      {
        title: "Post Four",
        body: "this is post Four",
      },
      getPost
    );

    console.log(posts)
  }, 2000);
}

create4thPost({
    title: "Post Three",
    body: "this is post three",
  },createPost)
