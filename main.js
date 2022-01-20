const btn = document.querySelector("#btn");
const text = document.querySelector(".text");

const loadText = () => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "sample2.txt", true);

  xhr.onload = function () {
    console.log(`Readystate: ${this.readyState}`);

    if (this.status === 200) {
      text.innerText = this.responseText;
    } else if (this.status === 404) {
      text.innerText = "File Not Found";
    }
  };

  xhr.send();
};

btn.addEventListener("click", loadText);
