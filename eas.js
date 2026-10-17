const container = document.querySelector("#container");

const inputNumber = document.querySelector("#input");

const resizeBtn = document.querySelector("#resize-btn");

const restartbutton = document.querySelector("#restart");

const colorBtn = document.querySelector("#color-btn")

let numberOfDivs = 48;

function createDivs(numberOfDivs) {
  for (let j = 1; j <= numberOfDivs; j++) {
    const containerForDivsSmallBox = document.createElement("div");
    containerForDivsSmallBox.classList.add("divs-small-box");
    container.appendChild(containerForDivsSmallBox);

    for (let i = 1; i <= numberOfDivs; i++) {
      const createDivs = document.createElement("div");
      createDivs.classList.add("box");
      containerForDivsSmallBox.appendChild(createDivs);
    }
  }
}

createDivs(numberOfDivs);


const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.classList.add("active");
  });
});



resizeBtn.addEventListener("click", () => {

  container.innerHTML = " "
  numberOfDivs = Number(inputNumber.value);
    createDivs(numberOfDivs);
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.classList.add("active");
    });
  });
});

restartbutton.addEventListener("click", () => {
  location.reload();
});

const color = document.querySelector(".box")
const activeColor = document.querySelector(".box.active")

colorBtn.addEventListener("click", () => {
activeColor.setAttribute("style", "background: red;");
  color.setAttribute("style", "background: red;");
})