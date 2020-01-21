// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(obj) {
  // create elements
  const card = document.createElement("div"),
    cardHeadline = document.createElement("div"),
    author = document.createElement("div"),
    authorImgContainer = document.createElement("div"),
    authorImg = document.createElement("img"),
    name = document.createElement("span");

  // nest elements
  card.append(cardHeadline);
  card.append(author);
  author.append(authorImgContainer);
  author.append(name);
  authorImgContainer.append(authorImg);

  // add classes to elements
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  author.classList.add("author");
  authorImgContainer.classList.add("img-container");

  // add content to elements
  cardHeadline.textContent = obj.headline;
  authorImg.src = obj.authorPhoto;
  name.textContent = `By ${obj.authorName}`;

  // return DOM element
  return card;
}

const cardContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    // const keyArray = Object.keys(response.data.articles);
    // keyArray.forEach(topic => {
    //   response.data.articles.topic.forEach(obj => {
    //     cardContainer.append(cardCreator(obj));
    //   });
    // });
    response.data.articles.javascript.forEach(obj => {
      cardContainer.append(cardCreator(obj));
    });
    response.data.articles.bootstrap.forEach(obj => {
      cardContainer.append(cardCreator(obj));
    });
    response.data.articles.technology.forEach(obj => {
      cardContainer.append(cardCreator(obj));
    });
    response.data.articles.jquery.forEach(obj => {
      cardContainer.append(cardCreator(obj));
    });
    response.data.articles.node.forEach(obj => {
      cardContainer.append(cardCreator(obj));
    });
  })
  .catch(error => {
    console.log(error);
  });
