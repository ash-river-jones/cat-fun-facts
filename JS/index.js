console.log("Checking out under the hood?");
console.log("Hiring? Get in touch with me!")
console.log("www.linkedin.com/in/ash-river-jones/")

//Get data

const getPhotoData = function () {
  axios
    .get("https://aws.random.cat/meow")
    .then((response) => {
      let photo = response.data.file;
      photoDisplay(photo);
    })
    .catch((error) => {
      console.log(error);
    });
};
getPhotoData();

const getFactData = function () {
  axios
    .get("https://catfact.ninja/fact")
    .then((response) => {
      let fact = response.data.fact;
      factDisplay(fact);
    })
    .catch((error) => {
      console.log(error);
    });
};
getFactData();

const div = document.querySelector(".card");

function photoDisplay(photo) {
  const catImage = document.createElement("img");
  catImage.setAttribute("src", photo);
  catImage.classList.add("card__img");

  //AppendChild
  div.appendChild(catImage);
  // }
}

function factDisplay(fact) {
  //Create text
  const catFact = document.createElement("p");
  catFact.innerText = fact;
  catFact.classList.add("card__fact");

  //AppendChild
  div.appendChild(catFact);
  // }
}

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");

  searchButton.addEventListener("click", function() {
    const searchTerm = searchInput.value;
    window.open(`https://www.google.com/search?q=${searchTerm}`);
  });