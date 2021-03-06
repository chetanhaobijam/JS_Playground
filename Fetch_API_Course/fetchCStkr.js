const postSection = document.querySelector("#posts");
const postTemplate = document.querySelector("#post-template");

getData()
  .catch(err => console.error(err));

// throw "Fetching Data error";
async function getData() {
  const postStream = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postStream.json();
  let i = 0;

  posts.forEach((post) => {
    i++;
    if (i < 10) {
      const title = post.title;
      const body = post.body;

      fetch("https://unsplash.it/700/600")
        .then((res) => res.blob())
        .then((blob) => {
          const newPost = document.importNode(postTemplate.content, true);
          const postImg = newPost.querySelector(".post-img");
          const postTitle = newPost.querySelector(".post-title");
          const postBody = newPost.querySelector(".post-body");

          // throw "Image Fetching Error";

          postImg.src = URL.createObjectURL(blob);
          postTitle.innerText = title;
          postBody.innerText = body;
          postSection.appendChild(newPost);
        })
        .catch(err => console.error(err));
    }
  });
}

const postNueva = {
  title : "New Post Title",
  body: "Paragraphe poste muy grande",
  userId: 1
}

const createNewPost = post => {
  const options = {
    method : 'POST',
    body : JSON.stringify(post),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then(res => res.json())
    .then(posts => console.log(posts))
    .catch(err => console.error(err));
}

createNewPost(postNueva);