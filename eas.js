const container = document.querySelector("#container");

const inputNumber = document.querySelector("#input");

const resizeBtn = document.querySelector("#resize-btn");

const restartbutton = document.querySelector("#restart");

let numberOfDivs = 16;

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
