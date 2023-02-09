const container = document.querySelector("#container");

//creates grid with x amount of rows or cols
function makeGrid(rows, cols) {
    if (rows > 100) return;
  
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        // cell.innerText = (i + 1);
        container.appendChild(cell).className = "cell";
    }
}

makeGrid(16, 16);

//Colors cell when moused over
function colorCell() {
    this.style.backgroundColor = "red";
}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("mouseover", colorCell);
})


//TODO: 
//1. Connect input/button to JS
//3. Add eraser on click