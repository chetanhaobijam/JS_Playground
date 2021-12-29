const button = document.querySelector("#button");

const loadText = () => {
  // Create XHR Object
  let xhr = new XMLHttpRequest();
  // OPEN - type, url/file, async
  xhr.open("GET", "sample.txt", true);

  //Get Response from File
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  // Sends Request
  xhr.send();
};

button.addEventListener("click", loadText);
