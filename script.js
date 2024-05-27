const container = document.querySelector(".container");
const btnGo = document.querySelector(".btnGo");

const input = document.getElementById("input")


btnGo.addEventListener("click", () => {
    const sketchBoardSize = input.value;


    if (sketchBoardSize <= 100 && sketchBoardSize > 0) {
        for (let i = 0; i < sketchBoardSize; i++) {
            const row = document.createElement("div");
            row.className = "row";

            for (let i = 0; i < sketchBoardSize; i++) {
                const square = document.createElement("div");
                square.className = "square";
    
                row.appendChild(square);
            }

            container.appendChild(row);            
        }
    } else {
        alert("error");
    }     
});

const squareHover = document.getElementsByClassName("square")

squareHover.setAttribute("style", "background: black;");

