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
}

function colorizeName(elem) {
  elem.classList.add("selected");
}

function moveNamesRight(evt) {
  currButton = evt.target;
  const selectedNames = [...document.getElementsByClassName("selected")];
  if (currButton.id === "forward1") {
    const newParent = document.getElementById("second");
    selectedNames.forEach((name) => {
      name.parentNode.removeChild(name);
      newParent.appendChild(name);
    });
  } else if (currButton.id === "forward2") {
    const newParent = document.getElementById("third");
    selectedNames.forEach((name) => {
      name.parentNode.removeChild(name);
      newParent.appendChild(name);
    });
  }
}

function moveNamesLeft(evt) {
  currButton = evt.target;
  const selectedNames = [...document.getElementsByClassName("selected")];
  if (currButton.id === "backward2") {
    const newParent = document.getElementById("first");
    selectedNames.forEach((name) => {
      name.parentNode.removeChild(name);
      newParent.appendChild(name);
    });
  } else if (currButton.id === "backward3") {
    const newParent = document.getElementById("second");
    selectedNames.forEach((name) => {
      name.parentNode.removeChild(name);
      newParent.appendChild(name);
    });
  }
}

const elements = document.getElementById("lists");

elements.addEventListener("click", selectName);

elements.addEventListener("click", moveNamesRight);

elements.addEventListener("click", moveNamesLeft);
