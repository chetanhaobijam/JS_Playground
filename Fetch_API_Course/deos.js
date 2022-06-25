const btn = document.querySelector("#btn");
const kishan = document.querySelector("#kishan");
const chetan = document.querySelector("#chetan");
const poukin = document.querySelector("#poukin");
const rohel = document.querySelector("#rohel");

async function loadOutput () {
  try {
    const dataStream = await fetch("staffs.json");
    const data = await dataStream.json();
    kishan.innerHTML = `<tr>
      <td>Kishan</td>
      <td>${data.kishan.scan}</td>
      <td>${data.kishan.entry}</td>
    </tr>`;
    chetan.innerHTML = `<tr>
      <td>Chetan</td>
      <td>${data.chetan.scan}</td>
      <td>${data.chetan.entry}</td>
    </tr>`;
    poukin.innerHTML = `<tr>
      <td>Poukin</td>
      <td>${data.poukin.scan}</td>
      <td>${data.poukin.entry}</td>
    </tr>`;
    rohel.innerHTML = `<tr>
      <td>Rohel</td>
      <td>${data.rohel.scan}</td>
      <td>${data.rohel.entry}</td>
    </tr>`;
  }
  catch {err => console.error(err)}
}

btn.addEventListener("click", () => {
  loadOutput();
});