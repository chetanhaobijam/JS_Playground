const btn = document.querySelector("#btn");
const text = document.querySelector(".text");

const loadText = () => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "sample.txt", true);

  console.log(`Readystate: ${this.readyState}`);

  xhr.onprogress = function () {
    console.log(`Readystate: ${this.readyState}`);
  };

  xhr.onload = function () {
    console.log(`Readystate: ${this.readyState}`);

    if (this.status === 200) {
      text.innerText = this.responseText;
    } else if (this.status === 404) {
      text.innerText = "File Not Found";
    }
  };

  xhr.onerror = function () {
    console.log(`Request Error....`);
  };

  // Using onreadystatechange method to make AJAX Call
  // xhr.onreadystatechange = function() {
  //   console.log(`Readystate: ${this.readyState}`);

  //   if(this.readyState === 4 && this.status === 200) {
  //     text.innerText = this.responseText;
  //   }
  // }

  xhr.send();
};

btn.addEventListener("click", loadText);
