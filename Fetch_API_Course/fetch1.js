const textBtn = document.querySelector("#get-text");
const usersBtn = document.querySelector("#get-users");
const postsBtn = document.querySelector("#get-posts");
const outputArea = document.querySelector("#output");

// Get Text File
const getText = () => {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      outputArea.innerText = data;
    })
    .catch((err) => console.log(err));
};

textBtn.addEventListener("click", getText);

// Get JSON Users Data
const getUsers = () => {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2 class='mb-3'>Users List</h2>";

      data.forEach((user) => {
        output += `
        <ul class="list-group mb-3">
          <li class="list-group-item">ID: ${user.id}</li>
          <li class="list-group-item">Name: ${user.name}</li>
          <li class="list-group-item">Email: ${user.email}</li>
        </ul>
        `;
      });

      outputArea.innerHTML = output;
    })
    .catch((err) => console.log(err));
};

usersBtn.addEventListener("click", getUsers);

// Get Posts Data From External API
const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2 class='mb-3'>Posts</h2>";
      data.forEach((post) => {
        output += `
        <div class="card card-body mb-3">
          <h3>${post.title}</h3>
          <p class="lead">${post.body}</p>
        </div>
        `;
      });
      outputArea.innerHTML = output;
    })
    .catch((err) => console.log(err));
};

postsBtn.addEventListener("click", getPosts);

// Add New Posts
const addPostForm = document.querySelector("#add-post");

const addPost = (e) => {
  e.preventDefault();

  let title = document.querySelector("#title").value;
  let body = document.querySelector("#body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: 'application/json, text/plain, "/"',
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

addPostForm.addEventListener("submit", addPost);
