// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  let newArr = [];
  list.forEach((listItem) => {
    let charTotal = listItem.firstName.split("").reduce((acc, item) => {
      return acc + item.charCodeAt(0);
    }, 0);
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
