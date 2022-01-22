const btn1 = document.querySelector("#btn1");
const output1 = document.querySelector("#output1");

const getText = () => {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      output1.innerText = data;
    })
    .catch((err) => console.log(err));
};

btn1.addEventListener("click", getText);
