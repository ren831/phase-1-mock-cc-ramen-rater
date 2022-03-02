baseURL = "http://localhost:3000/ramens";
ramenMenu = document.querySelector("#ramen-menu");

fetch(baseURL)
  .then((r) => r.json())
  .then((data) => displayRamensArr(data));

const form = document.querySelector("#new-ramen");
document.addEventListener("submit", (e) => {
  e.preventDefault();

  const ramenObj = {};
  ramenObj.name = document.getElementById("new-name").value;
  ramenObj.restaurant = document.getElementById("new-restaurant").value;
  ramenObj.image = document.getElementById("new-image").value;
  ramenObj.rating = document.getElementById("new-rating").value;
  ramenObj.comment = document.getElementById("new-comment").value;

  displayRamen(ramenObj);
});

function displayRamen(ramen) {
  const image = document.createElement("img");
  image.src = ramen.image;

  image.addEventListener("click", () => {
    document.querySelector("#ramen-detail > img").src = ramen.image;
    document.querySelector("#ramen-detail > h2").innerHTML = ramen.name;
    document.querySelector("#ramen-detail > h3").innerHTML = ramen.restaurant;
    document.querySelector("#rating-display").innerHTML = ramen.rating;
    document.querySelector("#comment-display").innerHTML = ramen.comment;
  });

  ramenMenu.append(image);
}

function displayRamensArr(ramens) {
  ramens.forEach((ramen) => {
    displayRamen(ramen);
  });
}
