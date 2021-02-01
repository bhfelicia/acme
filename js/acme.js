//dom manipulation doc
let currName;
let currButton;

function selectName(evt) {
  currName = evt.target;
  if (
    currName.className === "name" &&
    ![...currName.classList].includes("selected")
  ) {
    colorizeName(currName);
  } else {
    currName.classList.remove("selected");
  }
  console.log(currName.className);
}

function colorizeName(elem) {
  elem.classList.add("selected");
}

function moveNamesLeft(evt) {}

function moveNamesRight() {}

const buttons = document.getElementById("lists");

buttons.addEventListener("click", selectName);
