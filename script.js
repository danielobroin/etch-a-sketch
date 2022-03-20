
let body = document.querySelector("body")
let container = document.querySelector("#container")


let size = 10;
let i = 0;
let k = 0;
for (i = 0; i <=size; i++){
    container.setAttribute('style', `grid-template-columns: repeat(${i+1}, 1fr); grid-template-rows: repeat(${i+1}, 1fr);`);


    for (k = 0; k < size; k++){
        let square = document.createElement("div");
        square.style.border = 'solid';
        square.style.borderColor = 'white';
        square.setAttribute('data-color', `rgb(${i*(255/size)}, ${k*(255/size)}, 255)`);
        container.appendChild(square);
       
        square.addEventListener("mouseover", function() {square.style.backgroundColor = square.getAttribute('data-color')})
    }
}