console.log("hello world");
const header = document.querySelector("h1");
const DOMSelectors = {
  header: document.querySelector("h1"),
  discription: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"),
};
student = {
  name: "Mark",
  age: 16,
};
console.log(DOMSelectors.discription);

function changeColor() {
  //find element with querySeelector
  let button = document.querySelector(".enter");
  //listen for a click event
  console.log(button);
  button.addEventListener("Submit", function (event) {
    //prevetn default  behavior
    event.preventDefault();
    //logging the click event
    console.log(event.target);
    //
    //button.style.backgroundColor = "red";
    //get informaton from teh form

    //
  });
}
//call function
changeColor();
