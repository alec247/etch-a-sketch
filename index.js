const container = document.querySelector("#container");

//creates grid with x amount of rows or cols

function makeGrid(size) {
    if (((size > 100) || (size <= 1))) return;

    let newCellArray = [];

    // maybe store size in variable and loop through container children X times to removeChildren 1 by 1?    

    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);

    for (let i = 0; i < (size ** 2); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        cell.className = "cell";
        newCellArray.push(cell);
    }

    container.replaceChildren(...newCellArray);

    addCellFunctionality();
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

function addCellFunctionality() {
    let cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("mouseover", colorCell);
        cell.addEventListener("click", resetCell);
    })
}



//TODO: 
//2. Make squares responsive to fill up space instead of having gap (lower prio)