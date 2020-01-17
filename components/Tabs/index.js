// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function topicCreator(obj) {
  newTab = document.createElement("div");
  newTab.classList.add("tab");
  newTab.textContent = obj;
  return newTab;
}

const topicsDiv = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // console.log(response);
    response.data.topics.forEach(obj => {
      topicsDiv.append(topicCreator(obj));
    });
  })
  .catch(error => {
    console.log(error);
  });
