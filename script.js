const container = document.querySelector(".container");
const btnGo = document.querySelector(".btnGo");
const input = document.getElementById("input");
const reset = document.querySelector(".reset")


btnGo.addEventListener("click", () => {
    const sketchBoardSize = input.value;

    // code that draws the sketchboard

    if (sketchBoardSize <= 100 && sketchBoardSize > 0) {
        for (let i = 0; i < sketchBoardSize; i++) {
            const row = document.createElement("div");
            row.className = "row";

            for (let i = 0; i < sketchBoardSize; i++) {
                const square = document.createElement("div");
                square.className = "square";

                square.addEventListener("mouseover", () => {
                    square.classList.add("blackBackground");
                });
    
                row.appendChild(square);
            }

            container.appendChild(row);            
        }

        btnGo.disabled = true;
    } else if (sketchBoardSize >100) {
        alert("Please enter a number that is smaller than 100!")
    } else {
        alert("Please enter a number!");
        btnGo.disabled = false;
    };     



    // reset button 

    reset.addEventListener("click", ()=> {
        container.innerHTML = " ";
        btnGo.disabled = false;
        input.value = "Enter a new number!"
    });

});
