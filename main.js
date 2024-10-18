console.log("hello world");

const DOMSelectors = {
  header: document.querySelector("h1"),
  //button: document.querySelector(".btn"),
  cardContainer: document.querySelector(".card-container"),
  allBars: document.querySelector("#search"),
  allInput: document.querySelectorAll(".description-input"),
  nameInput: document.querySelector("#inputName"),
  colorInput: document.querySelector("#inputColor"),
  picInput: document.querySelector("#inputPic"),
  submit: document.querySelector("#submit"),
  remove: document.querySelector("#remove"),
};

DOMSelectors.submit.addEventListener("submit", function (event) {
  event.preventDefault();

  const cardText = DOMSelectors.nameInput.value;
  const cardColor = DOMSelectors.colorInput.value;
  const cardPic = DOMSelectors.picInput.value;

  const card = document.createElement("div");
  card.className = "card";
  card.textContent = cardText;

  if (cardColor) {
    card.style.backgroundColor = cardColor;
  }

  if (cardPic) {
    const img = document.createElement("img");
    img.src = cardPic;
    img.alt = cardText;
    card.appendChild(img);
  }

  const totalCards = document.querySelectorAll(".card-container .card").length;

  if (totalCards < 4) {
    document.getElementById("cardContainer1").appendChild(card);
  } else if (totalCards < 8) {
    document.getElementById("cardContainer2").appendChild(card);
  } else if (totalCards < 12) {
    document.getElementById("cardContainer3").appendChild(card);
  } else if (totalCards < 16) {
    document.getElementById("cardContainer4").appendChild(card);
  }

  // Example usage
  console.log("Number of cards:", totalCards + 1);

  // Clear the input fields
  DOMSelectors.nameInput.value = "";
  DOMSelectors.colorInput.value = "";
  DOMSelectors.picInput.value = "";
});

DOMSelectors.remove.addEventListener("click", function (event) {
  event.preventDefault();

  const cards = document.querySelectorAll(".card-container .card");
  if (cards.length > 0) {
    const lastCard = cards[cards.length - 1];
    lastCard.remove();
  }
});
