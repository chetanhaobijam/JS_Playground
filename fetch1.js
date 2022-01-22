const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const output1 = document.querySelector("#output1");
const usersOutput = document.querySelector("#users-output");

const getText = () => {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      output1.innerText = data;
    })
    .catch((err) => console.log(err));
};

btn1.addEventListener("click", getText);

const getUsers = () => {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Users List</h2>";

      data.forEach((user) => {
        output += `
        <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Email: ${user.email}</li>
        </ul>
        `;
      });

      usersOutput.innerHTML = output;
    })
    .catch((err) => console.log(err));
};

btn2.addEventListener("click", getUsers);
