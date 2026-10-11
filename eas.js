
const container = document.querySelector("#container")

function createDivs(numberOfDivs){
for(let i = 1; i <= numberOfDivs * numberOfDivs; i++ ){ 
    const createDivs = document.createElement("div")
     createDivs.classList.add("box");
    container.appendChild(createDivs)


}
 // i want to create divsVertical, divsHorizontal need
 //  rto be able to choose how many divs on x and how many on y axes

}

createDivs(500)

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.classList.add("active");
  });
});




// const con = document.querySelector("#container")
// const container = document.createElement("p");
// container.textContent = "hey i`m red!" 
// container.style.color = "red";
// con.appendChild(container)
