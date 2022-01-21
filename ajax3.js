const btn = document.querySelector("#btn");
const text = document.querySelector("#text");

const loadGithubUsers = () => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let users = JSON.parse(this.responseText);

      let output = "";

      for (let user of users) {
        output +=
          '<div class="user">' +
          '<img src= "' +
          user.avatar_url +
          '" alt="Avatar URL">' +
          "<ul>" +
          "<li>" +
          user.id +
          "</li>" +
          "<li>" +
          user.login +
          "</li>" +
          "</ul>" +
          "</div>";
      }
      text.innerHTML = output;
      console.log(output);
    }
  };

  xhr.send();
};

btn.addEventListener("click", loadGithubUsers);
