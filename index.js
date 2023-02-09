const container = document.querySelector("#container");

//creates grid with x amount of rows or cols
function makeGrid(size) {
    if (((size > 100) || (size <= 1))) return;
  
    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);

    // for (let i = 0; i < (size ** 2); i++) {
    //     let cell = document.createElement("div");
    //     cell.innerText = (i + 1);
    //     container.appendChild(cell).className = "cell";
    // }

    for (let i = 0; i < (size); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "cell";
    }
}

if (document.querySelector("#sizeInput").value === "") {
    makeGrid(16);
}


//Colors cell when moused over
function colorCell() {
    this.classList.add("colored");
}

function resetCell() {
    this.classList.toggle("colored");
}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("mouseover", colorCell);
    cell.addEventListener("click", resetCell);
})


//TODO: 
//1. Connect input/button to JS