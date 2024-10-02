console.log("hello world");
const header = document.querySelector("h1");
const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"),
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};
const student = {
  name: "Mark",
  age: 16,
};
console.log(DOMSelectors.header);
function backgroundAndText(back, text) {
  back.style.backgroundColor = "brown"; // element.style is used to make adjustments to the style of an element in js
  text.innerHTML = "this is a big red box, now go look at console"; // .innerHTMl lets you edit an element, defined before the '.'. in this case it was "#text" being edited, defined by text.innerHTML. The desired element is selected through its assigned DOMSelector object.
}
/*DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});*/
function changeColor() {
  //find element with querySeelector
  let button = document.querySelector(".submit");
  //listen for a click event
  console.log(button);
  DOMSelectors.button.addEventListener("click", function (event) {
    backgroundAndText(DOMSelectors.box, DOMSelectors.text);
    //prevent default  behavior
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
