const container = document.querySelector("#container");

function makeGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        // cell.innerText = (i + 1);
        container.appendChild(cell).className = "cell";
    }
}

makeGrid(16, 16);


function colorCell() {
    this.style.backgroundColor = "red";
}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("mouseover", colorCell);
})