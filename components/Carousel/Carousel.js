/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker() {
  const carousel = document.createElement("div"),
    ltBtn = document.createElement("div"),
    img1 = document.createElement("img"),
    img2 = document.createElement("img"),
    img3 = document.createElement("img"),
    img4 = document.createElement("img"),
    rtBtn = document.createElement("img");

  carousel.append(ltBtn);
  carousel.append(img1);
  carousel.append(img2);
  carousel.append(img3);
  carousel.append(img4);
  carousel.append(rtBtn);

  carousel.classList.add("carousel");
  ltBtn.classList.add("left-button");
  rtBtn.classList.add("right-button");

  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  const imgArray = [img1, img2, img3, img4];

  let index = 0;
  imgArray[index].style.display = "block";
  console.log(index);

  ltBtn.addEventListener("click", () => {
    console.log(index);
    if (index > 0) {
      imgArray[index].style.display = "none";
      index--;
      imgArray[index].style.display = "block";
    } else {
      imgArray[index].style.display = "none";
      index = 3;
      imgArray[index].style.display = "block";
    }
  });

  rtBtn.addEventListener("click", () => {
    console.log(index);
    if (index < 3) {
      imgArray[index].style.display = "none";
      index++;
      imgArray[index].style.display = "block";
    } else if ((index = 3)) {
      imgArray[index].style.display = "none";
      index = 0;
      imgArray[index].style.display = "block";
    }
  });

  // SimgArray[index].style.display = "block";

  return carousel;
}

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.append(carouselMaker());

console.log(carouselContainer);
