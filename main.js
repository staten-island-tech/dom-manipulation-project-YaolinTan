console.log("hello world");
const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
  allBars: document.querySelector(".search"),
  cardName: document.querySelector("#card-name"),
  cardColor: document.querySelector("#card-color"),
  cardPic: document.querySelector("#card-pic"),
  allInput: document.querySelector(".description-input"),
  nameInput: document.querySelector("#inputName"),
  colorInput: document.querySelector("#inputColor"),
  picInput: document.querySelector("#inputPic"),
};

document
  .getElementById("cardForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input text
    const inputText = document.getElementById("inputText").value;

    // Create a new card element
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = inputText;

    // Append the card to the card container
    document.getElementById("cardContainer").appendChild(card);

    // Clear the input field
    document.getElementById("inputText").value = "";
  });

DOMSelectors.cardName.addEventListener("submit", function (event) {
    event.preventDefault();
    const cardText = document.
    
  });
