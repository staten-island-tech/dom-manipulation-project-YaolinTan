console.log("Hello World");

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
  let cardContainer;
  const allCards = document.querySelectorAll(".card-container .card");
  const totalCards = allCards.length;
  if (totalCards < 4) {
    cardContainer = document.getElementById("cardContainer1");
  } else if (totalCards < 8) {
    cardContainer = document.getElementById("cardContainer2");
  } else if (totalCards < 12) {
    cardContainer = document.getElementById("cardContainer3");
  } else if (totalCards < 16) {
    cardContainer = document.getElementById("cardContainer4");
  }

  if (cardContainer) {
    cardContainer.insertAdjacentHTML(
      "afterbegin",
      `<div class="card" style="background-color:${cardObject.color};">
        ${cardObject.text}
        ${
          cardObject.pic
            ? `<img src="${cardObject.pic}" alt="${cardObject.text}"/>`
            : ""
        }
      </div>`
    );
  }

  console.log("Number of cards:", totalCards + 1);
}

function clearInputFields() {
  DOMSelectors.nameInput.value = "";
  DOMSelectors.colorInput.value = "";
  DOMSelectors.picInput.value = "";
}

DOMSelectors.submit.addEventListener("click", function (event) {
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
