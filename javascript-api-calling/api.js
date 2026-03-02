// !JavaScript Default Api Calling Starts Here!//
// const load_data = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => display_data(data));
// };

// const display_data = (posts) => {
//   for (let i = 0; i < posts.length; i++) {
//     console.log(posts[i]);
//   }

//   for(const post of posts) {
//     console.log(post)
//   }

//   posts.forEach((post) => {
//     console.log(post);
//   });
// };

//!-----------------------------------------------!//
// const load_data = () => {
//   const url = "https://jsonplaceholder.typicode.com/comments";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => display_data(data));
// };

// const display_data = (comments) => {
//   const comment_container = document.getElementById("comment_container");
//   comment_container.innerHTML = "";

//   comments.forEach((comment) => {
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <div class="comment">
//     <h2>${comment.id}</h2>
//     <h2>${comment.name}</h2>
//     <h4 style="margin: 10px 0;">${comment.email}</h4>
//     <p>${comment.body}</p>
//     </div>
//     `;
//     comment_container.appendChild(div);
//   });
// };
// !JavaScript Async Await Api Calling Starts Here!//
