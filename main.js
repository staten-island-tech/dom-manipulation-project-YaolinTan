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
};

DOMSelectors.submit.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const cardText = DOMSelectors.nameInput.value;
  const cardColor = DOMSelectors.colorInput.value;
  const cardPic = DOMSelectors.picInput.value;

  const card = document.createElement("div");
  card.className = "card";
  card.textContent = cardText; // Set the card text

  // Optionally set the background color
  if (cardColor) {
    card.style.backgroundColor = cardColor;
  }

  // Optionally add an image if provided
  if (cardPic) {
    const img = document.createElement("img");
    img.src = cardPic;
    img.alt = cardText;
    card.appendChild(img);
  }

  // Append the card to the container
  const cards = DOMSelectors.cardContainer.getElementsByClassName("card");
  function countCards() {
    // Get all child elements that have the class "card"
    // Return the number of cards
    return cards.length;
  }

  // Example usage
  const numberOfCards = countCards();
  console.log("Number of cards:", numberOfCards);
  if (cards.length < 4) {
    document.getElementById("cardContainer1").appendChild(card);
  }
  if (4 < cards.length < 8) {
    document.getElementById("cardContainer2").appendChild(card);
  }

  // Clear the input fields
  DOMSelectors.nameInput.value = "";
  DOMSelectors.colorInput.value = "";
  DOMSelectors.picInput.value = "";
});
