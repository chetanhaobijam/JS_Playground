// The Hashtag Generator
function generateHashtag(str) {
  let splitStr = str
    .split(/[\s]/g)
    .filter((val) => {
      return /\w/g.test(val) === true;
    })
    .map((val) => {
      return (val = val.charAt(0).toUpperCase() + val.slice(1));
    });
  splitStr.unshift("#");
  splitStr = splitStr.join("");
  if (splitStr.length < 2 || splitStr.length > 140) {
    return false;
  } else {
    return splitStr;
  }
}

console.log(generateHashtag("Do we have A Hashtag"));
console.log(generateHashtag("     "));

// Tests
/* Test.assertEquals(generateHashtag(""), false, "Expected an empty string to return false")
Test.assertEquals(generateHashtag(" ".repeat(200)), false, "Still an empty string")
Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
Test.assertEquals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
Test.assertEquals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
Test.assertEquals(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
Test.assertEquals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
Test.assertEquals(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long") */
