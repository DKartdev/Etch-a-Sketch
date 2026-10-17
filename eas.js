
const container = document.querySelector("#container")

let numberOfDivs = prompt("please enter a number ")




function createDivs(numberOfDivs){
    for(let j = 1; j <= numberOfDivs; j++ ){
    const containerForDivsSmallBox = document.createElement("div")
containerForDivsSmallBox.classList.add("divs-small-box")
container.appendChild(containerForDivsSmallBox)

for(let i = 1; i <= numberOfDivs; i++ ){ 
    
    const createDivs = document.createElement("div")
     createDivs.classList.add("box");
    containerForDivsSmallBox.appendChild(createDivs)
   
}
}





// squares in one line and then for each line i need to make 64 line vertical?
//i nee 55 colums of 55 elements 
//i need a div with number of divs and make it flex 
//then i need that to be copied and repeated also numberofdivs times





// so each time i need to create a column of numberof divs and do number of div times
// function createDivs(numberOfDivs){
// for(let i = 1; i <= numberOfDivs * numberOfDivs; i++ ){ 
//     const createDivs = document.createElement("div")
//      createDivs.classList.add("box");
//     container.appendChild(createDivs)


// 

//insert another for loop 
// to make boxes vertical and horizontal
 // i want to create divsVertical, divsHorizontal need
 //  rto be able to choose how many divs on x and how many on y axes

}

createDivs(numberOfDivs)
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.classList.add("active");
  });
});



const restartbutton = document.querySelector("restart")

restartbutton.addEventListener("click", () => {

  location.reload()
} )
// const con = document.querySelector("#container")
// const container = document.createElement("p");
// container.textContent = "hey i`m red!" 
// container.style.color = "red";
// con.appendChild(container)
