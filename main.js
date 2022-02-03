// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  let newArr = [];
  list.forEach((listItem) => {
    let firstName = listItem.firstName;
    let charTotal = 0;
    for (let i = 0; i < firstName.length; i++) {
      let charCode = firstName.charCodeAt(i);
      charTotal += charCode;
    }
    if (charTotal % 2 !== 0) {
      newArr.push(listItem);
    }
  });
  return newArr;
}

console.log(
  findOddNames([
    {
      firstName: "Aba",
      lastName: "N.",
      country: "Ghana",
      continent: "Africa",
      age: 21,
      language: "Python",
    },
    {
      firstName: "Abb",
      lastName: "O.",
      country: "Israel",
      continent: "Asia",
      age: 39,
      language: "Java",
    },
  ])
);
