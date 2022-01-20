const user = document.querySelector("#user");
const btn1 = document.querySelector("#btn1");

const loadUser = () => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "user.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let user = JSON.parse(this.responseText);

      let output = "";
      output +=
        "<ul>" +
        "<li>ID: " +
        user.id +
        "</li>" +
        "<li>Name: " +
        user.name +
        "</li>" +
        "<li>Email: " +
        user.email +
        "</li>" +
        "</ul>";

      document.querySelector("#user").innerHTML = output;
      console.log(output);
    }
  };

  xhr.send();
};

btn1.addEventListener("click", loadUser);
