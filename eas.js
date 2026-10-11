
const container = document.querySelector("#container")

function createDivs(numberOfDivs){
for(let i = 1; i <= numberOfDivs * numberOfDivs; i++ ){ 
    const createDivs = document.createElement("div")
     createDivs.classList.add("box");
    container.appendChild(createDivs)


}


}
createDivs(64)

// const con = document.querySelector("#container")
// const container = document.createElement("p");
// container.textContent = "hey i`m red!" 
// container.style.color = "red";
// con.appendChild(container)
