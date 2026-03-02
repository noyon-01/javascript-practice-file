// !JavaScript Default Api Calling Starts Here!//
// ?Post Api Calling?//
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
// ?Comments Api Calling?//
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

// !----------------------------------------------!//

// ?User Api Calling?//
// const load_data = () => {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => display_data(data));
// };

// const display_data = (users) => {
//   const user_container = document.getElementById("user_container");
//   user_container.innerHTML = "";

//   users.forEach((user) => {
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <div class="users_section">
//     <h2 style="font-weight: 700;">Name: ${user.name}</h2>
//     <p style="margin-top: 10px; font-weight: 600;">Email: ${user.email}</p>
//     <p style="margin-top: 10px; font-weight: 600;">Street Address: ${user.address.street}</p>
//     <p style="margin-top: 10px; font-weight: 600;">City Address: ${user.address.city}</p>
//     <p style="margin-top: 10px; font-weight: 600;">Zipcode: ${user.address.zipcode}</p>
//     <p style="margin-top: 10px; font-weight: 600;">Phone: ${user.phone}</p>
//     <p style="margin-top: 10px; font-weight: 600;">Website: ${user.website}</p>
//     <p style="margin-top: 10px; font-weight: 600;">Company Name: ${user.company.name}</p>
//     </div>`;

//     user_container.appendChild(div);
//   });
// };

// !JavaScript Async Await Api Calling Starts Here!//
// ?The below code problem is "I am Printing after Loading Todos is Print After Todos"? //
// const load_data = () => {
//   console.log("I am Printing before Loading Todos.");
//   const url = "https://jsonplaceholder.typicode.com/todos";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//   console.log("I am Printing after Loading Todos.");
// };

// ?This Problem Solving Using Async and Await Methods? //
// const load_data = async () => {
//   console.log("I am Printing before Loading Todos.");

//   const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await resp.json();
//   console.log(data);

//   console.log("I am Printing after Loading Todos.");
// };
