/**
 * Deliverable (Watch uptill 11th min from starting)

Implement the code as per the youtuber
Make a new function call create4thPost for adding one more new post "Post Four". create4thPost should take createPost as a callback function. Once the post is created all the 4 posts should be displayed too.
Lets also record when the post was created. So now onwards whenever. a new post is created  add a new key called createdAt in each post. CreatedAt should have the timestamp of  when the post was created. So now your post  object would look like { title, body, createdAt}
 On the screen show the user how long back each of the post was edited in seconds ago. Just add "{ current timestamp  - postcreated At timestamp }" on each of the post. It should look like the following
Post 1  created 8 seconds ago
Post 2 created 7 seconds ago
Post 3 crated  2 seconds
. (The value should keep updating every second )

[Check Hints if you are stuck for very long but try by yourself first]


 */

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
      }  - Created at  ${Math.floor(
        (new Date().getTime() - post.createdAt) / 1000
      )}sec before  </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback, callback2) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
    callback2();
  }, 2000);
}
//Make a new function call create4thPost for adding one more new post "Post Four". create4thPost should take createPost as a callback function. Once the post is created all the 4 posts should be displayed too

function create4thPost(post, callback, callback2) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback(
      {
        title: "Post Four",
        body: "this is post Four",
      },
      getPost,
      //   lastEditedInSecondsAgo
      callback2
    );

    // console.log(posts);
  }, 2000);
}

create4thPost(
  {
    title: "Post Three",
    body: "this is post three",
  },
  createPost,
  lastEditedInSecondsAgo
);

/*Bonus Task (Medium Level) -

Can you add a timer which states last edited in seconds ago and it keeps changing every second. Ex- "Last Edited 2 seconds ago". Create a function called lastEditedInSecondsAgo  which uses setTimeInterval to calculate when last modification happened in seconds ago. */

function lastEditedInSecondsAgo() {
  setInterval(() => {
    // let arr = Array.from(document.getElementsByTagName("li"));
    // console.log(arr)
    posts.map((post) => {
      let updated = Math.floor((new Date().getTime() - post.createdAt) / 1000);
      // console.log(`${post.title} updated ${updated}`);
      let li = document.getElementById(`${post.title + post.createdAt}`);
      li.appendChild(document.createTextNode(`  Last edited ${updated}`));
    });
  }, 1000);
}
