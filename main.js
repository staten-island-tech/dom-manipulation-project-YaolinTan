const DOMSelectors = {
  nameInput: document.querySelector("#inputName"),
  colorInput: document.querySelector("#inputColor"),
  picInput: document.querySelector("#inputPic"),
  submit: document.querySelector("#submit"),
  remove: document.querySelector("#remove"),
};

function createCardObject() {
  return {
    text: DOMSelectors.nameInput.value,
    color: DOMSelectors.colorInput.value,
    pic: DOMSelectors.picInput.value,
  };
}

function injectCard(cardObject) {
  const card = document.createElement("div");
  card.className = "card";

  card.textContent = cardObject.text;
  if (cardObject.color) {
    card.style.backgroundColor = cardObject.color;
  }

  if (cardObject.pic) {
    const img = document.createElement("img");
    img.src = cardObject.pic;
    card.appendChild(img);
  }

  const allCards = document.querySelectorAll(".card-container .card");
  const totalCards = allCards.length;
  if (totalCards < 4) {
    document.getElementById("cardContainer1").appendChild(card);
  } else if (totalCards < 8) {
    document.getElementById("cardContainer2").appendChild(card);
  } else if (totalCards < 12) {
    document.getElementById("cardContainer3").appendChild(card);
  } else if (totalCards < 16) {
    document.getElementById("cardContainer4").appendChild(card);
  }

  console.log("Number of cards:", totalCards + 1);
}

function clearInputFields() {
  DOMSelectors.nameInput.value = "";
  DOMSelectors.colorInput.value = "";
  DOMSelectors.picInput.value = "";
}

DOMSelectors.submit.addEventListener("submit", function (event) {
  event.preventDefault();
  const cardObject = createCardObject();
  injectCard(cardObject);
  clearInputFields();
});

function removeLastCard() {
  const allCards = document.querySelectorAll(".card-container .card");
  const totalCards = allCards.length;
  if (allCards.length > 0) {
    const lastCard = allCards[allCards.length - 1];
    lastCard.remove();
    console.log("Number of cards:", totalCards - 1);
  }
}

DOMSelectors.remove.addEventListener("click", function (event) {
  event.preventDefault();
  removeLastCard();
});
